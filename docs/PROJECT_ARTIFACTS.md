# VisualPrompt Studio — Project Artifact Index

**Organization date:** 2026-10-11  
**Organization standard:** `docs-writer` v3 with Ponytail simplicity review  
**Package status:** Active DOC-01–05 baseline and accepted Stage 6 v1.4 references; DOC-06 v1.0 is the test authority; pushed M1 baseline `468e7fe` is verified and M2 catalogue reconciliation is in progress; all eight current Word files share the documented formatting baseline

## 1. Structure used

This package uses a reduced form of the `docs-writer` v3 hierarchy. Only categories that currently contain real artifacts have been created.

```text
VisualPrompt_Studio/
├── 00_Project_Management/
│   └── Project_Overview/
├── 01_Requirements/
│   └── Product_Requirements/
├── 02_Architecture/
│   ├── Data_Architecture/
│   └── Frontend_Architecture/
├── 04_Frontend_Design/
│   ├── UX_and_Interaction/
│   ├── Style_Decisions/
│   │   └── Minimalist/
│   └── Mockups/
│       ├── Assets/
│       │   └── Preset_Previews/
│       ├── Pages/
│       │   ├── References/
│       │   └── Previous_Versions/
│       ├── States/
│       ├── Previous_Versions/
│       └── README.md
├── 05_Diagrams/
│   ├── Data_Flows/
│   ├── Frontend/
│   └── State_Diagrams/
├── 06_Testing/
│   └── Test_Plans/
└── 09_Sources_and_Working_Files/
    ├── Archify_HTML/
    ├── Design_Source/
    │   ├── Stage6_v1.4/
    │   │   ├── visualprompt-mockups.html
    │   │   └── lucide.min.js
    │   ├── Previous_Versions/
    │   ├── VisualPrompt_Studio_Stage6_Mockup_Brief_v1.4.md
    │   └── README.md
    ├── Documentation_Process/
    │   ├── DOC06_Work/
    │   ├── Formatting_Audit_Work/
    │   └── VisualPrompt_Studio_Document_Formatting_Rules_v1.0.md
    └── Intermediate_Exports/
        └── Archify_Receipts/
```

Each document category keeps its current baseline in the category folder and older revisions in `Previous_Versions/`. Static diagram exports are separated from their interactive Archify HTML sources.

## 2. Current documentation baseline

| Artifact | Type | Version | Status | Location | Purpose |
|---|---|---:|---|---|---|
| Product and Project Brief | DOCX | v2.3 | Current baseline | `00_Project_Management/Project_Overview/VisualPrompt_Studio_DOC-01_Product_and_Project_Brief_v2.3.docx` | Records DR-019 contextual learning, DR-020 safe Preset recovery, DR-021 selected-icon state and the sample-image evidence boundary. |
| Product and Functional Requirements Specification | DOCX | v2.2 | Current baseline | `01_Requirements/Product_Requirements/VisualPrompt_Studio_DOC-02_Product_and_Functional_Requirements_Specification_v2.2.docx` | Makes exact-field Learn, safe Reset to Preset, persistent selected state and asset provenance testable. |
| Domain State and Data Design | DOCX | v2.1 | Current baseline | `02_Architecture/Data_Architecture/VisualPrompt_Studio_DOC-03_Domain_State_and_Data_Design_v2.1.docx` | Defines exact-field route state and a derived, version-aware Preset reset baseline without new persistence. |
| Frontend Architecture and Architectural Decision Records | DOCX | v1.9 | Current baseline | `02_Architecture/Frontend_Architecture/VisualPrompt_Studio_DOC-04_Frontend_Architecture_and_ADRs_v1.9.docx` | Adds contextual-help routing, pure reset-diff seams and selected-state tokens without a new runtime dependency. |
| UX and Interaction Specification | DOCX | v1.5 | Current baseline | `04_Frontend_Design/UX_and_Interaction/VisualPrompt_Studio_DOC-05_UX_and_Interaction_Specification_v1.5.docx` | Specifies compact Learn, exact-field full articles, Reset to Preset confirmation and selected icon behavior. |
| Test, Release and Maintenance Plan | DOCX | v1.0 | Current test authority; M1 scaffold instances passed, remaining cases Not Run | `06_Testing/Test_Plans/VisualPrompt_Studio_DOC-06_Test_Release_and_Maintenance_Plan_v1.0.docx` | Defines 83 planned cases across eight groups, maps all 111 FR and 12 NFR IDs, and specifies release gates, rollback, maintenance and the deferred Database phase. |
| Product MVP Implementation Plan | Markdown | v1.2 | Active; M1 Complete, M2 In Progress | `IMPLEMENTATION_PLAN.md` | Defines the reconciled implementation contracts, seven ordered milestones, acceptance checks, DOC-06 mappings, current evidence, and deferred scope. |
| M2 Catalogue Reconciliation Register | Markdown | v1.0 | Active; M2.1 Complete | `implementation/M2_CATALOGUE_RECONCILIATION.md` | Separates archival DISC-01 metadata from the approved runtime baseline and records the fixed field, Preset, profile, preview, fixture, and deferred-scope decisions for M2. |

## 2.1 DISC-01 research package

| Artifact | Type | Status | Purpose |
|---|---|---|---|
| VisualPrompt Studio Discovery Dossier | DOCX | Discovery baseline | Classifies eight candidate Workflow families and selects Product Advertising and Photography for focused research. |
| DISC-01 Research Dossier | DOCX | Accepted for Product implementation planning | Records evidence, field catalogue, Preset taxonomy, compiler contract, validation rules, fixtures and owner decision gates. |
| DISC-01 Configuration Catalogue | JSON | Structurally validated; runtimeReady remains false | Machine-readable source for 30 Product fields, ten Presets, ten template profiles, fourteen conflict rules and 372 deterministic fixtures. |
| DISC-01 Field Encyclopedia | Markdown | Accepted with minor editorial warning | Vietnamese field guidance and English stored values for all 30 Product fields. |
| DISC-01 Preset Molds | Markdown | Accepted | Ten variable-based Prompt molds and complete default mappings. |

## 3. Current diagrams

| Artifact | Type | Status | Location | Related document |
|---|---|---|---|---|
| Product State Lifecycle | PNG | Current static export | `05_Diagrams/State_Diagrams/VisualPrompt_Studio_Product_State_Lifecycle_archify.png` | DOC 02 |
| Product State Lifecycle | Interactive HTML | Editable companion source | `09_Sources_and_Working_Files/Archify_HTML/VisualPrompt_Studio_Product_State_Lifecycle_archify.html` | DOC 02 |
| Domain Data Flow | PNG | Current static export | `05_Diagrams/Data_Flows/VisualPrompt_Studio_Domain_Data_Flow.png` | DOC 03 |
| Domain Data Flow | Interactive HTML | Editable companion source | `09_Sources_and_Working_Files/Archify_HTML/VisualPrompt_Studio_Domain_Data_Flow_archify.html` | DOC 03 |
| Frontend Module and State Flow | PNG | Current static export | `05_Diagrams/Frontend/VisualPrompt_Studio_Frontend_Module_and_State_Flow.png` | DOC 04 |
| Frontend Module and State Flow | Interactive HTML | Editable companion source | `09_Sources_and_Working_Files/Archify_HTML/VisualPrompt_Studio_Frontend_Module_and_State_Flow_archify.html` | DOC 04 |

Archify delivery receipts are retained under `09_Sources_and_Working_Files/Intermediate_Exports/Archify_Receipts/` as generation evidence, not as stakeholder-facing diagrams.

## 4. Stage 6 visual mockups and authority

Read `04_Frontend_Design/Mockups/README.md` first. It defines the authority order: UI rules and DOC-05 govern behavior, v1.4 PNGs are the current visual baseline, HTML is the editable source, and M04–M06 v1.0 screens are retained interaction references only.

| Artifact | Type | Status | Location | Primary purpose |
|---|---|---|---|---|
| Home desktop | PNG | Current visual baseline | `04_Frontend_Design/Mockups/Pages/VisualPrompt_Studio_M00_Home_Desktop_v1.4.png` | Default discovery entry with Lucide navigation, honest Workflow status and image-led Presets. |
| Build desktop | PNG | Current visual baseline | `04_Frontend_Design/Mockups/Pages/VisualPrompt_Studio_M01_Build_Desktop_v1.4.png` | Adds Reset to Preset and selected-icon behavior to the grouped form and selected-Preset context. |
| My Prompts desktop | PNG | Current visual baseline | `04_Frontend_Design/Mockups/Pages/VisualPrompt_Studio_M02_My_Prompts_Desktop_v1.4.png` | Preserves Workspace search, Project cards and the Saved Prompt table. |
| Built-in desktop | PNG | Current visual baseline | `04_Frontend_Design/Mockups/Pages/VisualPrompt_Studio_M07_Built-in_Desktop_v1.4.png` | Six sample-image Preset cards with filters, visible Apply actions and shared visual tokens. |
| Field Encyclopedia desktop | PNG | Current visual baseline | `04_Frontend_Design/Mockups/Pages/VisualPrompt_Studio_M08_Field_Encyclopedia_Desktop_v1.4.png` | Full read-only knowledge structure and exact-field article target. |
| Field Learn popover | PNG | Current state baseline | `04_Frontend_Design/Mockups/States/VisualPrompt_Studio_M09_Field_Learn_Popover_v1.4.png` | Compact exact-field definition and effect plus full-article action. |
| Reset to Preset confirmation | PNG | Current state baseline | `04_Frontend_Design/Mockups/States/VisualPrompt_Studio_M10_Reset_to_Preset_Confirmation_v1.4.png` | Confirms narrow reset scope and preserved values before mutation. |
| Build narrow | PNG | Retained interaction reference | `04_Frontend_Design/Mockups/Pages/References/VisualPrompt_Studio_M03_Build_Narrow_v1.0.png` | One-column task order only; its old shell and visual style are superseded. |
| Blocking errors | PNG | Retained interaction reference | `04_Frontend_Design/Mockups/States/VisualPrompt_Studio_M04_Blocking_Errors_v1.0.png` | V01-V06 blocking summary, inline error and focus treatment; old shell is superseded. |
| Art-direction warnings | PNG | Retained interaction reference | `04_Frontend_Design/Mockups/States/VisualPrompt_Studio_M05_Art_Direction_Warnings_v1.0.png` | V07-V14 warning confirmation separated from error semantics; old shell is superseded. |
| Delete Project | PNG | Retained interaction reference | `04_Frontend_Design/Mockups/States/VisualPrompt_Studio_M06_Delete_Project_v1.0.png` | Three child-Prompt outcomes with safe default and explicit destructive option; old shell is superseded. |
| Preset preview assets | PNG set | Current catalogue reference | `04_Frontend_Design/Mockups/Assets/Preset_Previews/` | Six local AI-created art-direction references used by Home, Built-in and Build. |
| Preset preview provenance | Markdown | Current evidence record | `04_Frontend_Design/Mockups/Assets/Preset_Previews/ASSET_PROVENANCE.md` | Records AI origin, exact direct prompts and the fact that the complete DISC-01 compiler was not used. |
| Mockup authority map | Markdown | Start here | `04_Frontend_Design/Mockups/README.md` | Distinguishes binding rules, current visual baseline, working sources, interaction references and archived history. |
| UI generation rules | Markdown | Current authoritative rules | `04_Frontend_Design/Style_Decisions/Minimalist/VisualPrompt_Studio_UI_Generation_Rules_v1.2.md` | Adds contextual Learn, safe Reset to Preset and persistent selected-icon rules to the established visual constraints. |
| Stage 6 mockup brief | Markdown | Current generation source | `09_Sources_and_Working_Files/Design_Source/VisualPrompt_Studio_Stage6_Mockup_Brief_v1.4.md` | Records the v1.4 screen set, behavior states and acceptance checks. |
| Stage 6 mockup review | Markdown | Accepted review evidence | `04_Frontend_Design/Mockups/VisualPrompt_Studio_Stage6_Mockup_Review_v1.4.md` | Traces seven v1.4 references, image provenance and interaction verification evidence. |
| Design source index | Markdown | Working-source index | `09_Sources_and_Working_Files/Design_Source/README.md` | Makes the current HTML and its local dependency visible from the project structure. |
| Stage 6 editable HTML | HTML | Current working source | `09_Sources_and_Working_Files/Design_Source/Stage6_v1.4/visualprompt-mockups.html` | Provides deterministic, implementation-readable source and working Learn/reset behavior for seven v1.4 references. |
| Lucide local bundle | JavaScript | Mockup rendering dependency | `09_Sources_and_Working_Files/Design_Source/Stage6_v1.4/lucide.min.js` | Renders the accepted local Lucide outline icon family without a network dependency. |
| Mockup capture script | JavaScript | Current QA utility | `09_Sources_and_Working_Files/Design_Source/Stage6_v1.4/capture-mockups.mjs` | Re-renders all seven v1.4 screenshots and reports image/language/overflow state. |
| Interaction verification script | JavaScript | Current QA utility | `09_Sources_and_Working_Files/Design_Source/Stage6_v1.4/verify-interactions.mjs` | Tests exact-field Learn, Escape focus return, reset scope, generated-text preservation and selected Project icon state. |
| docs-writer v3 | Markdown | Current process authority snapshot | `09_Sources_and_Working_Files/Documentation_Process/docs-writer-v3.md` | Makes the documentation and frontend workflow auditable inside the project. |
| Document formatting rules | Markdown | Current presentation baseline v1.0 | `09_Sources_and_Working_Files/Documentation_Process/VisualPrompt_Studio_Document_Formatting_Rules_v1.0.md` | Records the measured DOC-01–05 page setup, typography, covers, table treatments, navigation, headers, footers and full-page QA requirements. Supplements docs-writer v3 without changing product decisions. |

The six Preset preview assets were generated as standalone AI raster images from direct art-direction prompts. They were not downloaded and were not produced through the full DISC-01 compiler; see the provenance record. The v1.4 interface screens were rendered deterministically from the editable HTML source, and the Learn/reset/selection interactions were verified in headless Edge. DOC-05 remains the behavioral authority.

## 5. Previous versions

| Document family | Archived versions | Location |
|---|---|---|
| DOC 01 — Product and Project Brief | v1.0 through v2.2 | `00_Project_Management/Project_Overview/Previous_Versions/` |
| DOC 02 — Product and Functional Requirements Specification | v1.0 through v2.1 | `01_Requirements/Product_Requirements/Previous_Versions/` |
| DOC 03 — Domain State and Data Design | v1.0 through v2.0 | `02_Architecture/Data_Architecture/Previous_Versions/` |
| DOC 04 — Frontend Architecture and ADRs | v1.0 through v1.8 | `02_Architecture/Frontend_Architecture/Previous_Versions/` |
| DOC 05 — UX and Interaction Specification | v1.0 through v1.4 | `04_Frontend_Design/UX_and_Interaction/Previous_Versions/` |
| Stage 6 mockup brief and review | v1.0 through v1.3 | `09_Sources_and_Working_Files/Design_Source/Previous_Versions/` and `04_Frontend_Design/Mockups/Previous_Versions/` |
| Stage 6 core screens and HTML | v1.0 through v1.3 | `04_Frontend_Design/Mockups/Pages/Previous_Versions/` and `09_Sources_and_Working_Files/Design_Source/Previous_Versions/` |
| Product State Lifecycle | Earlier non-Archify static export | `05_Diagrams/State_Diagrams/Previous_Versions/` |
| Domain Data Flow | Pre-Ponytail and pre-Workspace-rename static and interactive exports | `05_Diagrams/Data_Flows/Previous_Versions/` and `09_Sources_and_Working_Files/Archify_HTML/Previous_Versions/` |
| Frontend Module and State Flow | Pre-Ponytail and pre-Workspace-rename static and interactive exports | `05_Diagrams/Frontend/Previous_Versions/` and `09_Sources_and_Working_Files/Archify_HTML/Previous_Versions/` |

## 6. Open decisions carried by the baseline

| ID | Priority | Current gate |
|---|---|---|
| OQ-001 | Medium; partially resolved | Product is frozen at 30 fields by DISC-01. Research remaining Workflow fields before implementing their forms. |
| OQ-003 | Medium; partially resolved | Product is frozen at 14 conflict rules with 372 deterministic fixtures. Research remaining Workflow rules later and derive Product tests in DOC 06. |
| DR-005 | Deferred for MVP; High before final store | Keep the logical record plus `ProjectStore` and `SavedConfigurationStore` contracts now; select database vendor, access approach, ownership and migration before implementing `DatabaseStore`. |

## 7. DOC-06 placement and next work

DOC-06 v1.0 is now under `06_Testing/Test_Plans/`. Its source builder, machine-readable planned-case/coverage audit, accessibility report and internal layout-verification files are kept under `09_Sources_and_Working_Files/Documentation_Process/DOC06_Work/`. The Word document is the primary deliverable; render PDFs and page images are QA intermediates.

The plan covers PromptValidator V01–V14, PromptCompiler normalization and escaping, immutable profile identity, Generate/Remix/Update branches, LocalStorageStore guards and rejected writes, all Project deletion strategies, combined library filters, disclosure/focus behavior, exact-field Learn, safe Reset to Preset, preview provenance/fallback, selected icons, keyboard, Chrome/Edge and responsive checks. Each of its 83 case IDs starts as **Not Run**. The 372 DISC-01 research fixtures remain research evidence until concrete inputs/oracles are ported and run against the actual implementation.

Release gates, defect policy and specific tooling are proposed for review. Creating DOC-06 does not approve deployment or establish MVP readiness. The next implementation work is a production Vite/vanilla TypeScript scaffold, catalogue reconciliation/runtime adapter, executable fixture ports and test execution evidence. DOC-06 records the duplicate INV-017 meanings with unambiguous FR/AC references and uses five current Build categories rather than the superseded nine-group wording.

OQ-001 and OQ-003 remain partially resolved for remaining Workflow research; DR-005 remains deferred for MVP and High before final DatabaseStore work. No new product open items were added. Admin CRUD, generic form building, external APIs and unresearched Workflows stay outside the Product MVP plan. DOC-06 adds no diagram because the current lifecycle and architecture diagrams already cover the state/module relationships used by these tests.

## 8. Organization verification

After the formatting correction, DOC-06 v1.0 renders to 28 pages using the canonical documents renderer and the user-authorized installed LibreOffice exception required by the missing bundled executable. Every final page was visually inspected. Its current structural accessibility report has zero high, medium or low findings; all ten internal navigation links and fifteen repeated table headers were verified. Document QA maps all 111 functional and 12 non-functional requirement IDs and validates 83 unique planned case IDs. These are document checks: all application cases remain **Not Run**, and no release approval is inferred. DOC-01–05 source hashes remain unchanged. Initial 26-page authoring evidence remains under `DOC06_Work/`; the current formatting QA receipt is under `09_Sources_and_Working_Files/Documentation_Process/Formatting_Audit_Work/`.

Cross-document consistency, LibreOffice rendering and accessibility checks are complete for DOC 01 v2.3, DOC 02 v2.2, DOC 03 v2.1, DOC 04 v1.9 and DOC 05 v1.5. All 147 rendered pages were visually inspected, and all five accessibility reports contain zero high, medium or low findings. The DISC-01 JSON remains unchanged and previously passed an independent structural check across field IDs, value dictionaries, Preset mappings, template placeholders, conflict-rule references and 372 fixtures.

Five Stage 6 v1.4 pages and two v1.4 states were rendered in headless Edge at 1600 px with zero missing images, Vietnamese UI signals or horizontal overflow. Visual inspection passed for all seven references. Interaction verification passed for Learn opening, exact-field deep link, Escape focus return, Reset to Preset, generated Prompt preservation and selected Project icon color/fill. Archify candidate validation and strict sidecar checks previously could not complete because the Windows sandbox returned `EPERM` while resolving the output namespace; this environmental failure also reproduced against prior validated candidates and is unrelated to these revisions.

## 9. Shared document formatting baseline

The 11 October 2026 audit inspected all eight current Word files. DOC-01–05 provided the shared design. DOC-06, `DISC01_Research_Dossier_v1.0.docx` and `VisualPrompt_Studio_Discovery_Dossier_v1.0.docx` were corrected at their existing locations, retaining their v1.0 content versions. The guide in Documentation_Process records exact settings and intentional local exceptions.

The final corrected documents render to 28, 97 and 14 pages respectively. All 139 pages passed native-size visual inspection. Checks preserved substantive body text, table cells, identifiers, hyperlinks, bookmarks, fields, numbering, embedded media and original relationship targets. Exact pre-correction copies and a receipt identifying final hashes and render folders are retained in `Formatting_Audit_Work/`. All five reference-document hashes remain unchanged.

DOC-06 and the discovery dossier have zero structural accessibility findings. The research dossier has zero high or medium findings and 18 low findings for preserved raw-URL link labels; these advisories do not indicate a page-layout defect. Research conclusions, source claims, approval status and application results were not revised by this formatting pass.
