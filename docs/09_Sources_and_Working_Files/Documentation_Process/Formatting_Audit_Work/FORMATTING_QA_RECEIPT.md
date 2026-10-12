# Document formatting correction QA

11 October 2026. Scope: presentation and document integrity. The machine-readable receipt is `formatting_qa_receipt.json` and records exact file and page-image hashes.

Eight active Word documents were audited. DOC-01–05 provide the shared formatting reference and retain their original hashes. DOC-06 and both dossiers have been corrected and installed at their existing project locations, with their content versions retained at v1.0. Exact originals remain in `originals/`.

| Corrected document | Authoritative render | Pages inspected | Result |
|---|---|---:|---|
| DOC-06 Test Release and Maintenance Plan | `verified_doc06/` | 28 | Pass |
| DISC-01 Research Dossier | `verified_research_v3/` | 97 | Pass |
| VisualPrompt Studio Discovery Dossier | `verified_discovery_v2/` | 14 | Pass |

All 139 final pages were inspected at native 1020 × 1320 size. Research pages 1–13 were also proven pixel-identical to the previously inspected iteration. Checks covered typography, clipping, glyphs, wrapping, covers, repeated table headers, heading placement, pagination and running text. No unresolved layout defects were found. Earlier render folders are superseded iterations.

Before/after integrity checks preserved all nonempty substantive paragraphs, ordered table-cell text, links, bookmarks, field instructions, numbering, embedded media and original relationship targets. Only cover order, visual styles and layout-only break paragraphs changed. All 133 body tables across the three files have repeated header rows and explicit widths and borders. Native page fields remain present.

DOC-06 retains 83 unique planned case IDs, all Not Run, with mappings for 111 FR and 12 NFR IDs and ten valid internal navigation targets. These are document checks, not application test execution or release approval.

The current structural accessibility audits have zero high or medium findings. DOC-06 and discovery also have zero low findings. Research retains 18 low advisories for its raw-URL link labels; source wording and links were preserved.

The renderer used the canonical documents skill with bundled Python/Poppler and the explicitly user-authorized installed LibreOffice exception in isolated headless profiles. No desktop window was opened.

The DOC-06 builder was exercised in `builder_verification/` without changing current artifacts. Its regenerated body XML, styles, header, footer and numbering exactly match the installed visually verified document. Future substantive edits require fresh rendering and inspection; these receipts apply only to their recorded file hashes.
