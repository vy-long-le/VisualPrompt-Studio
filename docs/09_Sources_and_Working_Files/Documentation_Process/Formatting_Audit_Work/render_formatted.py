"""Canonical renderer with the user's 2026-10-11 exception for all three targets.
Bundled LibreOffice is unavailable. User authorized installed LibreOffice for
DOC-06 and separately for both dossiers. Uses isolated headless profiles.
"""
import importlib.util
from pathlib import Path
from functools import partial
renderer=Path(r'C:/Users/LeVy/.codex/plugins/cache/openai-primary-runtime/documents/26.1007.11041/skills/documents/render_docx.py')
poppler=Path(r'C:/Users/LeVy/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/Library/bin')
spec=importlib.util.spec_from_file_location('formatting_canonical_renderer',renderer)
module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
module._resolve_soffice=lambda:r'C:/Program Files/LibreOffice/program/soffice.exe'
module.pdfinfo_from_path=partial(module.pdfinfo_from_path,poppler_path=str(poppler))
module.convert_from_path=partial(module.convert_from_path,poppler_path=str(poppler))
module.main()
