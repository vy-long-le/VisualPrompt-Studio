# Formatting correction evidence

This folder records the 11 October 2026 formatting correction to DOC-06 and the two research dossiers. The stakeholder-facing formatting guide is `../VisualPrompt_Studio_Document_Formatting_Rules_v1.0.md`.

`originals/` retains exact pre-correction Word files. `formatted/` holds the verified corrected copies before installation at their existing project locations. Page images and PDFs are internal layout evidence. Earlier rendering folders are superseded iterations; the final QA receipt identifies the authoritative render folder for each document.

`normalize_formatting.py` applies the measured DOC-01–05 style system. Its batch entry point is specific to this correction and intentionally reads `originals/`. Do not rerun that entry point after substantive document revisions: it would restore this correction's original content. Future authors should follow the Markdown guide and use fresh backups for each revision.

The installed LibreOffice exception was explicitly approved by the user for DOC-06 and separately for both dossiers. The renderer uses the bundled Python and Poppler and an isolated headless LibreOffice profile. No desktop window is opened.

Content-preservation checks compare nonempty body paragraph text, all table cells, links/bookmarks, field instructions, numbering and embedded media. Empty layout-only break paragraphs may be removed and cover paragraphs may be reordered to correct their visual roles. Final QA also checks existing relationship targets, unchanged DOC-01–05 hashes, native page fields and DOC-06 case references.

The final receipt is `formatting_qa_receipt.json`. Its authoritative renders are `verified_doc06/` (28 pages), `verified_research_v3/` (97 pages) and `verified_discovery_v2/` (14 pages). Every final page was inspected at native 1020 × 1320 size; research pages 1–13 were also proven pixel-identical to the previously inspected iteration. Earlier folders are superseded.

All three corrected files are installed at the original project locations and match the receipt's final hashes. `verify_formatting.py` verifies this correction without modifying documents; its explicit `--install` option copies the already reviewed staging files. It is specific to this recorded correction and must not be used to overwrite later substantive revisions.

The DOC-06 builder now calls the normalizer on its freshly generated document. It does not invoke the batch entry point or restore the historical backups. The legacy `DOC06_Work/verify_doc06.py` checks the historical 26-page original; future revisions require fresh render and inspection evidence.
