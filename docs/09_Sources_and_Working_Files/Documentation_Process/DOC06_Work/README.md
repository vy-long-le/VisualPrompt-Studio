# DOC-06 working source and document QA

Primary deliverable: `06_Testing/Test_Plans/VisualPrompt_Studio_DOC-06_Test_Release_and_Maintenance_Plan_v1.0.docx` relative to the project root.

- `build_doc06.py` contains the Vietnamese document content and applies the shared formatting normalizer after generating its native Word structure.
- `doc06_plan_audit.json` contains planned case definitions, FR/NFR mapping and baseline source hashes. All 83 application cases remain Not Run.
- `render_doc06.py` invokes the current canonical documents renderer with the explicitly user-authorized installed LibreOffice exception. Python and Poppler use the selected Codex runtime. This permission applies to DOC-06 verification, not unrelated documents.
- `render_complete/` contains the initial authoring task's 26-page internal PDF/PNG render. It is historical evidence superseded by the subsequent formatting correction; earlier render folders are working QA iterations.
- `a11y_report.json` is the initial authoring task's structural accessibility report; it does not establish full accessibility conformance.
- `verify_doc06.py` and `doc06_qa_receipt.json` record the initial authoring task's document integrity, links, coverage references, source preservation and page inspection. The verifier now reads that exact historical original, rather than the corrected current file.

The current Word file has the measured DOC-01–05 format and renders to 28 pages. Current evidence is in `../Formatting_Audit_Work/formatting_qa_receipt.json`, with final page images under `../Formatting_Audit_Work/verified_doc06/` and the current accessibility report at `../Formatting_Audit_Work/doc06_a11y.json`. Follow `../VisualPrompt_Studio_Document_Formatting_Rules_v1.0.md` for future revisions. Re-render and inspect every page after regenerating or substantively editing the document; the existing receipts certify only their recorded hashes.

These files are authoring/verification evidence, not additional stakeholder deliverables or application test results. Research fixture Pass values were not copied into the application result log. No production application, catalogue archival file or DOC-01–05 baseline was changed by this authoring task.
