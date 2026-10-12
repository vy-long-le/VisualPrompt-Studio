"""Exercise DOC-06 regeneration into scratch files without touching current artifacts."""
from pathlib import Path
from zipfile import ZipFile
import json
from normalize_formatting import WORK, ROOT

builder=WORK.parent/'DOC06_Work/build_doc06.py'
scratch=WORK/'builder_verification'
scratch.mkdir(exist_ok=True)
generated=scratch/'VisualPrompt_Studio_DOC-06_Test_Release_and_Maintenance_Plan_v1.0.docx'
source=builder.read_text(encoding='utf8')
source=source.replace("OUT=ROOT/'06_Testing/Test_Plans/VisualPrompt_Studio_DOC-06_Test_Release_and_Maintenance_Plan_v1.0.docx'",'OUT=verification_output')
source=source.replace("(WORK/'doc06_plan_audit.json').write_text", "(verification_scratch/'doc06_plan_audit.json').write_text")
exec(compile(source,str(builder),'exec'),{'__file__':str(builder),'verification_output':generated,'verification_scratch':scratch})
current=ROOT/'06_Testing/Test_Plans'/generated.name
with ZipFile(generated) as regenerated, ZipFile(current) as installed:
    for name in ['word/document.xml','word/styles.xml','word/header1.xml','word/footer1.xml','word/numbering.xml']:
        assert regenerated.read(name)==installed.read(name),f'Regeneration differs: {name}'
(scratch/'builder_check.json').write_text(json.dumps({'regenerated_document_xml_styles_headers_footers_numbering_match_current':True,'current_artifacts_modified':False},indent=2),encoding='utf8')
print('Regenerated DOC-06 content, formatting, header/footer and numbering match the installed, visually verified file.')
