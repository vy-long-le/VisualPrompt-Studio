"""Canonical renderer with a user-authorized Windows LibreOffice exception.

Authorization: user approved installed LibreOffice for DOC-06 verification on
2026-10-11 after bundled executable discovery failed. No desktop UI is opened.
Python, renderer and Poppler remain from the selected Codex dependency bundle.
"""
import importlib.util
from pathlib import Path
from functools import partial

RENDERER=Path(r'C:\Users\LeVy\.codex\plugins\cache\openai-primary-runtime\documents\26.1007.11041\skills\documents\render_docx.py')
SOFFICE=Path(r'C:\Program Files\LibreOffice\program\soffice.exe')
POPPLER=Path(r'C:\Users\LeVy\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\poppler\Library\bin')
assert RENDERER.is_file() and SOFFICE.is_file() and (POPPLER/'pdftoppm.exe').is_file()
spec=importlib.util.spec_from_file_location('doc06_canonical_renderer',RENDERER)
module=importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
module._resolve_soffice=lambda:str(SOFFICE)
module.pdfinfo_from_path=partial(module.pdfinfo_from_path,poppler_path=str(POPPLER))
module.convert_from_path=partial(module.convert_from_path,poppler_path=str(POPPLER))
module.main()
