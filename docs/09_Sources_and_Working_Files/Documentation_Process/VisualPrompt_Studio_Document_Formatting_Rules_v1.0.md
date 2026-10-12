# VisualPrompt Studio document formatting rules

Version 1.0 · 11 October 2026 · Applies to current project Word documents

This guide records the shared design measured in the current DOC-01 v2.3, DOC-02 v2.2, DOC-03 v2.1, DOC-04 v1.9 and DOC-05 v1.5. It supplements `docs-writer-v3.md` with the project's actual formatting values. It governs presentation; requirements, research conclusions, approval gates and application behavior remain governed by their existing sources.

## 1. Scope and authority

- Use the shared DOC-01–05 design for DOC-06 and the two research dossiers, as well as future project documents.
- Preserve substantive text, identifiers, examples, evidence labels, dates, document versions, hyperlinks, bookmarks, numbering and embedded figures during a formatting correction.
- Keep archived `Previous_Versions` documents as historical records. Source JSON, Markdown research content and interface design rules are outside this Word-formatting pass.
- For a formatting-only correction, keep the existing content version and filename, retain an exact original backup and record the correction in the project index and QA receipt. A substantive revision follows the versioning process in `docs-writer-v3.md`.
- User instructions take precedence. Use this guide to resolve routine presentation choices; do not infer approval or new product decisions from it.

## 2. Page setup

| Setting | Project value |
|---|---|
| Paper | Letter, portrait, 8.5 × 11 inches / 21.59 × 27.94 cm |
| Top margin | 0.78 inches / 1.981 cm |
| Bottom margin | 0.70 inches / 1.778 cm |
| Left and right margins | 0.82 inches / 2.083 cm |
| Header and footer distance | 0.30 inches / 0.762 cm |
| Available body width | 6.86 inches / 17.424 cm |
| Standard body-table width | 6.40 inches / 16.256 cm, centered |

Use the same settings in every ordinary section. Introduce an alternative orientation only where the content requires it and document the exception. Do not use different paper sizes merely because a builder has different defaults.

## 3. Native Word typography

Use native Word styles so the outline, navigation and future editing remain reliable. Arial is the project document typeface. Preserve meaningful inline bold and italic emphasis.

| Role / Word style | Font and color | Spacing before / after | Line spacing |
|---|---|---|---|
| Normal / body | Arial 10.5 pt, black `000000` | 0 / 6 pt | About 1.16 |
| Title | Arial 25 pt, bold, black | 0 / 8 pt | Single |
| Subtitle | Arial 13 pt, italic, gray `404040` | 0 / 16 pt | Inherit body |
| Heading 1 | Arial 16 pt, bold, black | 14 / 7 pt | Inherit body |
| Heading 2 | Arial 13 pt, bold, black | 11 / 5 pt | Inherit body |
| Heading 3 | Arial 11 pt, bold, black | 8 / 4 pt | Inherit body |
| List Bullet / List Number | Arial 10.5 pt, black | 0 / 3 pt | About 1.12 |
| Standard table text | Arial 9 pt | 0 / 0 pt within cells | About 1.08 |
| Header | Arial 8 pt, gray `404040` | 0 / 0 pt | Compact |
| Footer title | Arial 8 pt, gray `404040` | 0 / 0 pt | Compact |
| Page label and field | Arial 8.5 pt, gray `404040` | 0 / 0 pt | Compact |

The gray italic subtitle is an intentional, repeated project convention. Titles and section headings remain black. Do not inherit the default Word blue title or add decorative rules, shading or borders to title paragraphs.

Keep headings with the following content and keep their own lines together. Keep a subtitle or field-identity line with the next paragraph or first table row, so the heading block cannot remain alone at the bottom of a page. Enable widow/orphan control for prose. Preserve list numbering definitions and meaningful indentation; do not simulate lists with typed Markdown markers.

Existing compact traceability matrices sometimes use 8–8.5 pt, with isolated 7.5 pt legacy matrices. These are local exceptions, not the general text size. For new or revised tables, first adjust wrapping and column allocation; reduce size only if normal-size reading remains comfortable. Literal compiler templates and generated prompt examples in DISC-01 may retain 9 pt as secondary reference material. Do not apply that size to sustained narrative text.

## 4. Cover and opening material

The document subject is the Title. Project name and document identifier form the subtitle block underneath it. Use existing wording; correcting the visual hierarchy does not authorize rewriting titles or research claims. Separate existing project/identifier lines are acceptable when combining them would alter source text.

Retain the opening purpose, scope, evidence limitations and document-control information in their original logical order. A short bold lead-in is appropriate for conclusions and warnings. Do not replace normal prose with decorative cards or boxes.

## 5. Tables

### Record, comparison and traceability tables

- Use a dark blue `1F4E79` header row with white bold text. Repeat that row when a table continues across pages.
- Alternate body rows between white `FFFFFF` and pale blue-gray `F3F6FA`; body text is black.
- Set all outside and inside borders explicitly to light gray `D9D9D9`, approximately 0.75 pt.
- Use a plain Table Grid base or equivalent explicit formatting. Remove conflicting cell borders and themed conditional table styling; those overrides can defeat the specified borders even when the table-level settings are correct.
- Use fixed table layout and explicit content-sensitive column widths. Keep the table grid and cell widths synchronized. Compact ID/status fields should leave space for descriptive columns.
- Use approximately 5.5 pt vertical and 6 pt horizontal cell padding. Center text vertically. Align narrative text left; use centered alignment for short values where it improves scanning.
- Allow wrapped content to determine row height. Never use a fixed exact height that truncates content. Keep short records together; allow an exceptionally tall row to split if it cannot fit on one page.
- Keep table paragraphs compact, with zero paragraph spacing. Keep surrounding headings and captions paired with their table without forcing an entire long table onto one page.

### Document-control tables

For a key/value metadata table, use pale blue `D9E7F5` key cells with black bold text. Value cells use the normal white/pale row treatment. The DOC-01–05 cover tables have no separate header-label row. If an existing document includes an explicit header-label row, retain its text and give that row the standard dark blue treatment. Metadata cells may use about 6.5 pt vertical padding.

### Header/footer layout exception

The footer uses a borderless two-cell table to align the document title and page number. This is a deliberate layout exception; do not apply body-table borders, shading or repeated-header styling to it.

## 6. Navigation, headers and footers

- Use the native Heading 1–3 hierarchy. Preserve existing internal links and bookmark targets.
- Preserve the existing navigation or table of contents. Do not add a static page-number list that will become incorrect after repagination. If a native TOC is used, refresh its fields after editing.
- Header: right-aligned `VISUALPROMPT STUDIO  |  document identifier  |  version`, using the actual document identity and content version.
- Footer: document subject on the left, `Trang` plus a native Word `PAGE` field on the right. Use the reference's borderless layout and synchronized widths.
- Use natural page flow. Start a major standalone section or appendix on a new page only where useful; do not force every Heading 1 onto a separate page.
- Keep figures within the usable width, preserve aspect ratio and pair them with their existing captions. Do not invent captions or alter diagram content during a style correction.

## 7. Verification before delivery

1. Inventory current Word documents and compare their page settings, style definitions, covers, tables and running text. Exclude historical backups.
2. Keep an exact original before changing an inconsistent file.
3. Compare body paragraphs, table cells, internal links, bookmarks, fields, list numbering and embedded media before and after the correction. Cover paragraph reordering is allowed only to correct the visual hierarchy while preserving wording.
4. Check actual table widths, repeat-header flags, cell padding and expanding row heights.
5. Render each changed document and inspect every final page at native image size for clipping, bad wrapping, missing glyphs, blank pages, misplaced headings, table continuations and header/footer collisions.
6. Repair defects, render again and inspect the resulting pages. Record final page counts and file hashes in the QA receipt.
7. Update the project index. A successful document-formatting check does not establish that the application passed tests or that research conclusions have been empirically verified.

## 8. Audit result for this correction

Eight current Word documents were inspected. DOC-01–05 share the core design above. The three presentation outliers are DOC-06 v1.0, `DISC01_Research_Dossier_v1.0.docx` and `VisualPrompt_Studio_Discovery_Dossier_v1.0.docx`; the correction applies this guide to all three. DOC-01–05 retain their existing files and intentional local matrix layouts.

All three corrected files are installed at their existing locations. Their final renders contain 28, 97 and 14 pages respectively; all 139 pages passed native-size visual inspection. Content-preservation checks and the five unchanged reference-file hashes passed. The DOC-06 builder also applies this baseline when regenerating its document.

Measured style inventory, original copies, content-preservation checks and rendering QA are retained in `Formatting_Audit_Work/` beside this guide. That working evidence is not a stakeholder-facing deliverable.
