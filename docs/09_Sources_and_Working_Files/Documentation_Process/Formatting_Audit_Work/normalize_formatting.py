"""Apply the measured DOC-01–05 design, preserving document content."""
from pathlib import Path
from copy import deepcopy
from collections import Counter
from zipfile import ZipFile
import hashlib, json, shutil, sys
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

ROOT=Path(__file__).resolve().parents[3]
WORK=Path(__file__).resolve().parent
REF=ROOT/'00_Project_Management/Project_Overview/VisualPrompt_Studio_DOC-01_Product_and_Project_Brief_v2.3.docx'
TARGETS=[(ROOT/'06_Testing/Test_Plans/VisualPrompt_Studio_DOC-06_Test_Release_and_Maintenance_Plan_v1.0.docx','DOC 06','Test, Release and Maintenance Plan'),(ROOT/'DISC01_Research_Dossier_v1.0.docx','DISC 01','Research Dossier'),(ROOT/'VisualPrompt_Studio_Discovery_Dossier_v1.0.docx','DISCOVERY','Workflow Discovery and Classification')]
STYLES=['Normal','Title','Subtitle','Heading 1','Heading 2','Heading 3','List Bullet','List Number','Body Text','Header','Footer']

def setval(parent,tag,**attrs):
    node=parent.find(qn('w:'+tag))
    if node is None:node=OxmlElement('w:'+tag);parent.append(node)
    for k,v in attrs.items():node.set(qn('w:'+k),str(v))
    return node

def drop(parent,*tags):
    if parent is None:return
    for tag in tags:
        for node in list(parent.findall(qn('w:'+tag))):parent.remove(node)

def signature(path):
    d=Document(path)
    with ZipFile(path) as z:
        protected={n:hashlib.sha256(z.read(n)).hexdigest() for n in z.namelist() if n.startswith('word/media/') or n in ['word/numbering.xml','word/_rels/document.xml.rels']}
    return {'paragraphs':dict(Counter(p.text for p in d.paragraphs if p.text.strip())), 'tables':[[[c.text for c in row.cells] for row in t.rows] for t in d.tables], 'links':[(n.tag,sorted(n.attrib.items())) for n in d.element.body.iter() if n.tag in [qn('w:hyperlink'),qn('w:bookmarkStart'),qn('w:bookmarkEnd')]], 'fields':[n.text for n in d.element.body.iter(qn('w:instrText'))], 'protected':protected}

def runfont(r,size=None,color='000000',clear_role=False):
    drop(r._r.rPr,'rFonts','color','sz','szCs')
    if clear_role:drop(r._r.rPr,'b','bCs','i','iCs')
    r.font.name='Arial'
    if size is not None:r.font.size=Pt(size)
    r.font.color.rgb=RGBColor.from_string(color)

def normalize(path,docid,footer_title,output=None):
    ref=Document(REF);d=Document(path)
    for name in STYLES:
        source=ref.styles[name]
        if name not in d.styles:continue
        dest=d.styles[name]
        # Preserve style identity and the original numbering relationships.
        oldnum=deepcopy(dest.element.pPr.find(qn('w:numPr'))) if dest.element.pPr is not None and dest.element.pPr.find(qn('w:numPr')) is not None else None
        for tag in ['pPr','rPr']:
            drop(dest.element,tag)
            child=source.element.find(qn('w:'+tag))
            if child is not None:dest.element.append(deepcopy(child))
        if name.startswith('List') and oldnum is not None:
            drop(dest.element.get_or_add_pPr(),'numPr');dest.element.pPr.append(oldnum)
    for s in d.sections:
        rs=ref.sections[0]
        for key in ['page_width','page_height','top_margin','bottom_margin','left_margin','right_margin','header_distance','footer_distance']:setattr(s,key,getattr(rs,key))
        s.different_first_page_header_footer=False
    # Reuse original cover paragraphs, changing roles and order only.
    front=d.paragraphs[:5]
    title=next(p for p in front if p.style.name=='Title')
    if docid=='DOC 06':subject=front[2]
    elif docid=='DISC 01':subject=front[2]
    else:subject=front[1]
    if title is not subject:
        d.element.body.remove(subject._p);d.element.body.insert(0,subject._p)
        subject.style=d.styles['Title'];title.style=d.styles['Subtitle']
    for p in d.paragraphs:
        name=p.style.name
        if name in ['Title','Subtitle','Heading 1','Heading 2','Heading 3']:
            drop(p._p.pPr,'spacing','jc','pBdr','shd','keepNext','keepLines','pageBreakBefore')
            # DOC-06 already has a deliberate cover break; dossier field blocks need chaining.
            if name=='Subtitle' and docid!='DOC 06':p.paragraph_format.keep_with_next=True
            for r in p.runs:runfont(r,clear_role=True,color='404040' if name=='Subtitle' else '000000')
        else:
            drop(p._p.pPr,'spacing')
            # Literal compiler templates and generated example lines retain 9pt.
            for r in p.runs:
                size=r.font.size.pt if r.font.size else None
                runfont(r,9 if size==9 and docid=='DISC 01' else None)
            p.paragraph_format.widow_control=True
    paragraphs=d.paragraphs
    for i,p in enumerate(paragraphs):
        if p.style.name=='Subtitle' and i+1<len(paragraphs) and paragraphs[i+1].style.name=='Subtitle':p.paragraph_format.space_after=Pt(4)
        if docid=='DOC 06' and p.style.name=='Heading 1' and p.text in ['Cách đọc và điều hướng','Phạm vi, trạng thái và nguồn chuẩn']:p.paragraph_format.page_break_before=True
    # A standalone break after a full page can create an entirely blank page.
    for p in list(d.paragraphs):
        breaks=[x for x in p._p.iter(qn('w:br')) if x.get(qn('w:type'))=='page']
        if breaks and not p.text.strip():
            nxt=p._p.getnext()
            if nxt is not None and nxt.tag==qn('w:p'):
                setval(nxt.get_or_add_pPr(),'pageBreakBefore',val=1)
                p._p.getparent().remove(p._p)
    if docid=='DISCOVERY':
        for p in d.paragraphs:
            if p.text!='1. Candidate Workflow Selection Matrix':drop(p._p.pPr,'pageBreakBefore')
    if docid=='DISC 01':
        for p in d.paragraphs:
            standalone=p.text in ['Intake and requirements alignment','Field encyclopedia use and defaults','Source register and evidence locators'] or (p.style.name=='Heading 1' and p.text.startswith('Preset '))
            if not standalone:drop(p._p.pPr,'pageBreakBefore')
    for p in d.paragraphs:
        prev=p._p.getprevious()
        if prev is not None and prev.tag==qn('w:tbl'):p.paragraph_format.space_before=Pt(6)
    for ti,t in enumerate(d.tables):
        # DOC-06's plain default table base has no conditional theme overrides.
        t.style=d.styles['Normal Table' if docid=='DOC 06' else 'Table Grid']
        t.alignment=WD_TABLE_ALIGNMENT.CENTER;t.autofit=False
        pr=t._tbl.tblPr
        setval(pr,'tblW',w=9216,type='dxa');setval(pr,'tblLayout',type='fixed')
        drop(pr,'tblBorders');borders=setval(pr,'tblBorders')
        for edge in ['top','left','bottom','right','insideH','insideV']:setval(borders,edge,val='single',sz=6,color='D9D9D9')
        margins=setval(pr,'tblCellMar')
        for edge,value in [('top',110),('bottom',110),('left',120),('right',120)]:setval(margins,edge,w=value,type='dxa')
        n=len(t.columns)
        first=t.rows[0]
        widths=[c.width.twips if c.width else 1 for c in first.cells]
        if docid=='DISCOVERY' and n==3 and first.cells[1].text.strip()=='Classification':widths=[4032,1584,3600]
        # Most source tables already have deliberate content-sensitive widths.
        if len(widths)==n:
            total=sum(widths);scaled=[round(v/total*9216) for v in widths];scaled[-1]+=9216-sum(scaled)
            for col,width in zip(t.columns,scaled):col.width=Inches(width/1440)
        else:scaled=[round(9216/n)]*n
        for ri,row in enumerate(t.rows):
            rp=row._tr.get_or_add_trPr();drop(rp,'trHeight','cantSplit','tblHeader')
            if ri==0:setval(rp,'tblHeader',val=1)
            # Short comparable records stay together; very tall narrative rows may split.
            if max((len(c.text) for c in row.cells),default=0)<1800:setval(rp,'cantSplit')
            for ci,c in enumerate(row.cells):
                c.vertical_alignment=WD_CELL_VERTICAL_ALIGNMENT.CENTER
                if len(row.cells)==n:c.width=Inches(scaled[ci]/1440)
                cp=c._tc.get_or_add_tcPr();drop(cp,'shd','tcMar','noWrap','tcBorders')
                fill='1F4E79' if ri==0 else ('F3F6FA' if ri%2==0 else 'FFFFFF')
                if ti==0 and ri>0 and ci==0:fill='D9E7F5'
                setval(cp,'shd',val='clear',fill=fill)
                for p in c.paragraphs:
                    p.style=d.styles['Normal'];drop(p._p.pPr,'spacing','keepNext','keepLines')
                    p.paragraph_format.space_before=Pt(0);p.paragraph_format.space_after=Pt(0);p.paragraph_format.line_spacing=1.08
                    for r in p.runs:
                        runfont(r,9,'FFFFFF' if ri==0 else '000000')
                        if ri==0 or (ti==0 and ci==0) or (docid=='DISCOVERY' and ci==0):r.bold=True
    for s in d.sections:
        for kind in ['header','footer']:
            part=getattr(s,kind);part.is_linked_to_previous=False
            for c in list(part._element):part._element.remove(c)
            source=getattr(ref.sections[0],kind)
            for c in source._element:part._element.append(deepcopy(c))
        s.header.paragraphs[0].runs[0].text=f'VISUALPROMPT STUDIO  |  {docid}  |  v1.0'
        ft=s.footer.tables[0]
        ft.cell(0,0).paragraphs[0].runs[0].text=footer_title
        # Synchronize the footer grid with the measured reference cell widths.
        for col,c in zip(ft.columns,ft.rows[0].cells):col.width=c.width
    d.save(output or path)

def main():
    original=WORK/'originals';original.mkdir(exist_ok=True)
    report_path=WORK/'content_preservation_report.json'
    only='DOC 06' if '--doc06-only' in sys.argv else ('DISCOVERY' if '--discovery-only' in sys.argv else ('DISC 01' if '--research-only' in sys.argv else None))
    report=json.loads(report_path.read_text(encoding='utf8')) if only and report_path.exists() else []
    staged=WORK/'formatted';staged.mkdir(exist_ok=True)
    for path,docid,title in TARGETS:
        if only and docid!=only:continue
        backup=original/path.name
        if not backup.exists():shutil.copy2(path,backup)
        before=signature(backup)
        output=staged/path.name
        normalize(backup,docid,title,output)
        after=signature(output)
        # New header/footer parts may add a relationship, so compare existing ones separately.
        b=before['protected'].pop('word/_rels/document.xml.rels',None);a=after['protected'].pop('word/_rels/document.xml.rels',None)
        assert before==after,f'Content/links/fields/media/numbering changed: {path}'
        report=[x for x in report if x['file']!=str(path.relative_to(ROOT))]
        report.append({'file':str(path.relative_to(ROOT)),'original_sha256':hashlib.sha256(backup.read_bytes()).hexdigest(),'formatted_sha256':hashlib.sha256(output.read_bytes()).hexdigest(),'body_content_tables_links_fields_media_numbering_preserved':True,'table_count':len(Document(output).tables)})
    (WORK/'content_preservation_report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf8')
    print(json.dumps(report,ensure_ascii=False,indent=2))

if __name__=='__main__':main()
