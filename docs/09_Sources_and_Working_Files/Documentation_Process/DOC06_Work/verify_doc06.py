"""Historical initial authoring QA for the exact 26-page original; not current layout QA."""
from pathlib import Path
import json, hashlib, re
from zipfile import ZipFile
from lxml import etree
from pypdf import PdfReader
from docx import Document

WORK=Path(__file__).resolve().parent
ROOT=WORK.parents[2]
plan=json.loads((WORK/'doc06_plan_audit.json').read_text(encoding='utf8'))
out=WORK.parent/'Formatting_Audit_Work/originals'/Path(plan['document']).name
pdf=next((WORK/'render_complete').glob('*.pdf'))
reader=PdfReader(pdf)
text='\n'.join(p.extract_text() for p in reader.pages)
assert len(reader.pages)==26
assert len(list((WORK/'render_complete').glob('page-*.png')))==26
assert len({c['id'] for c in plan['cases']})==83
assert all(c['status']=='Not Run' for c in plan['cases'])
assert all(c['id'] in text for c in plan['cases'])
assert len(plan['coverage'])==111 and all(plan['coverage'].values())
assert len(plan['nfrCoverage'])==12
assert not plan['unmappedFRs'] and not plan['unknownExplicitFRs']
for s in plan['sources']:
    assert hashlib.sha256((ROOT/s['path']).read_bytes()).hexdigest()==s['sha256']
with ZipFile(out) as z:
    assert z.testzip() is None
    xml=etree.fromstring(z.read('word/document.xml'))
    ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    bookmarks={e.get('{'+ns['w']+'}name') for e in xml.xpath('//w:bookmarkStart',namespaces=ns)}
    anchors=[e.get('{'+ns['w']+'}anchor') for e in xml.xpath('//w:hyperlink[@w:anchor]',namespaces=ns)]
    assert len(anchors)==10 and all(a in bookmarks for a in anchors)
    assert len(xml.xpath('//w:tbl',namespaces=ns))==15
    assert len(xml.xpath('//w:tbl/w:tr[1]/w:trPr/w:tblHeader',namespaces=ns))==15
    assert not xml.xpath('//w:pBdr',namespaces=ns)
    assert not any(token in text for token in ['[[TOC]]','turn1view','TODO','TBD'])
doc=Document(out)
audit=json.loads((WORK/'a11y_report.json').read_text(encoding='utf8'))
receipt={
 'scope':'DOC-06 document quality assurance, not production application validation',
 'document':str(out),'sha256':hashlib.sha256(out.read_bytes()).hexdigest(),
 'renderedPages':26,'visuallyInspectedPages':list(range(1,27)),
 'inspectionMethod':'Full-resolution page inspection; final pages 1–14 pixel-identical to inspected render, final pages 15–26 inspected after changes',
 'renderer':'Canonical documents 26.1007.11041 render_docx.py, bundled Python/Poppler',
 'rendererException':'Installed native LibreOffice authorized by user on 2026-10-11; isolated headless profile',
 'uniquePlannedCases':83,'frIdsMapped':111,'nfrIdsMapped':12,
 'applicationStatuses':{'Not Run':83},'internalLinksVerified':10,'tablesWithRepeatedHeaders':15,
 'sourceDocumentHashesUnchanged':True,
 'a11yAudit':audit,
 'pageImageHashes':{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted((WORK/'render_complete').glob('page-*.png'))}
}
(WORK/'doc06_qa_receipt.json').write_text(json.dumps(receipt,ensure_ascii=False,indent=2),encoding='utf8')
print(json.dumps({k:v for k,v in receipt.items() if k not in ['a11yAudit','pageImageHashes','document']},ensure_ascii=False))
