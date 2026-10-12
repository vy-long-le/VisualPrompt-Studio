# VisualPrompt Studio Product MVP — Implementation Plan

**Status:** Proposed for review · **Plan version:** 1.0 · **Date:** 11 October 2026  
**Implementation status:** Not started · **Application test status:** Not Run  
**Intended document:** `IMPLEMENTATION_PLAN.md` in the project root.

## 1. Outcome, authority, and reconciled baseline

[Certain] **The remaining risk is mistaking documentation and research results for executable application evidence.** This plan starts with a runnable application, completes one real Product flow, and then expands coverage to the full Product MVP.

[Certain] The implementation baseline is DOC-01 v2.3, DOC-02 v2.2, DOC-03 v2.1, DOC-04 v1.9, DOC-05 v1.5, DOC-06 v1.0, accepted DISC-01 research v1.0, UI generation rules v1.2, and Stage 6 v1.4. Their locations and authority are recorded in [PROJECT_ARTIFACTS.md](C:/Users/LeVy/Documents/Codex/2026-10-07/let-s-recreate-the-doc-01/outputs/VisualPrompt_Studio/PROJECT_ARTIFACTS.md).

[Certain] The finished MVP must support this journey:

**Home → Product Preset or Start Blank → configure → validate → Generate and autosave → edit/Copy → reload/load → Update or Remix → organize, filter, and delete.**

[Certain] These contradictions are resolved by the current baseline and this chat’s answers:

| Issue | Governing implementation decision |
|---|---|
| Research still mentions four release Presets and pending profile approval | Release all ten canonical Product Presets with explicit, immutable template-profile identity. Preserve archival research metadata. |
| Research contains Vietnamese helper text | Publish English interface copy and English knowledge entries for all 30 fields. Preserve canonical stored values and user-supplied exact copy. |
| Earlier document sections mention nine Build groups | Use the five later approved UI categories. Research grouping remains evidence metadata. |
| Mockups contain illustrative fields, values, and a separate Save button | Render canonical fields and allowed values. Generate/Remix autosave; loaded records use Update. Preserve the accepted visual composition. |
| Earlier ADR wording says no routes; later amendments require exact-field links | Use single-document view state plus native query-string links for Encyclopedia entries. Add no routing library or Project URLs. |
| Illustrative serialization omits newer metadata | Implement the current Workspace model with explicit profile identity, active Preset, and catalogue version. Do not treat the example as a legacy import schema. |
| Date filtering lacks timezone boundaries | **Confirmed in this chat:** browser-local calendar days, inclusive selected dates. |
| Ten Presets have six differently named reference images | **Confirmed in this chat:** use clearly matching assets by stable ID; use labelled fallbacks for the others. |
| Initial schema compatibility is unspecified | **Confirmed in this chat:** schema version 1 only; no legacy import. Preserve and reject unsupported data. |
| “Preset-controlled” reset fields are not enumerated | **Confirmed in this chat:** restore customized nonblank Preset defaults; preserve identity/reference inputs and fields that began blank. |

[Certain] No unresolved Product decision currently blocks starting implementation. Catalogue preparation, fixture porting, and missing application code are implementation tasks. Chrome availability blocks completing mandatory browser verification, not starting the application.

## 2. Implementation contracts and defaults

The following implementation choices are proposed for approval with this plan.

### Application and tooling

- Use Vite, vanilla HTML/CSS, and strict TypeScript at the project root. Add application files without overwriting the documentation package or editable mockups.
- Use the available Node 24/npm 11 toolchain. Resolve compatible stable dependency versions once during M1, record exact versions, and retain the lockfile.
- Use Vitest for pure units and store contracts; use Playwright for browser interactions and production-build smoke tests. Keep both as development dependencies. The tools support this approach through [Vite’s vanilla TypeScript setup](https://vite.dev/guide/), [Vitest’s requirements](https://vitest.dev/guide/), and [Playwright’s Chrome/Edge channels](https://playwright.dev/docs/browsers).
- Preserve named commands and update functions over typed application state, pure domain modules, and region-based DOM rendering. Form edits must preserve focus, selection, and disclosure state.
- Bundle a small local Lucide SVG subset with attribution. Ship only required application assets; exclude documentation, research working files, and QA renders from the production artifact.

### Runtime catalogue

- Maintain a separate versioned runtime catalogue derived from the accepted research. Start with catalogue schema version `1`, catalogue version `product-runtime-1.0.0`, and compiler contract `product-molds-1.0.0`.
- Preserve all 30 field IDs, ten Preset IDs, ten profile IDs and their `1.0.0` definitions, canonical dictionaries, length limits, and V01–V14 semantics.
- Provide one read-only catalogue boundary for Workflow, field, Preset, profile, knowledge, and preview lookup. Build-time guards reject duplicate IDs, missing references, invalid defaults, broken clauses, and incomplete field coverage.
- Translate knowledge and issue explanations into English without adding factual claims or changing validation semantics.
- Add the required `product-neutral-mold` as an explicit neutral profile. It uses only supplied values, the approved generic field clauses and copy-policy variants, optional omission, and the supplied-fact safeguard. Freeze its ordered clauses and independently reviewed expected examples before implementation.
- Record each reconciliation against its governing decision. Keep archival JSON and Markdown unchanged.

**Proposed UI field mapping—30 fields, each mapped exactly once:**

| Visible category | Canonical field IDs | Initially open |
|---|---|---|
| Product identity — 7 | `product-description`, `reference-mode`, `reference-notes`, `preserve-details`, `use-case`, `creative-objective`, `audience` | Yes |
| Lighting and composition — 4 | `lighting-style`, `light-direction`, `shadow-treatment`, `composition` | Yes |
| Camera and optics — 5 | `shot-size`, `camera-angle`, `focus-treatment`, `detail-target`, `scale-cue` | No |
| Materials and styling — 9 | `placement-surface`, `environment`, `props`, `product-arrangement`, `material-emphasis`, `palette`, `mood`, `visual-treatment`, `interaction-action` | No |
| Output and guardrails — 5 | `copy-treatment`, `copy-space`, `exact-copy`, `aspect-ratio`, `exclusions` | No |

- Map `product-p01` to the existing Soft Catalog image, `product-p02` to Hard Light Still Life, and `product-p08` to Shadow Luxury. Use a consistently sized, labelled “Preview reference unavailable” state for the other seven. Preserve their names, intents, and actions.
- Keep all six original assets and provenance records. Unmapped assets do not become additional Presets. Every displayed reference retains non-guarantee wording.

### State, actions, and persistence

- Preserve the DOC-03 `ProductPromptConfig`, validation-result, query, `ProjectStore`, and `SavedConfigurationStore` contracts. Narrow the released runtime to Product; retain deferred Workflow definitions as documentation.
- Persist one envelope under `visualprompt.workspace`: `{ schemaVersion: 1, workspace, projects, items }`. The same LocalStorageStore implements both Promise-based store interfaces.
- Saved records retain configuration/profile identity, generated baseline, optional edited text, provenance, IDs, timestamps, destination, compiler version, **`activePresetId`**, and **`catalogueVersion`**. Resolve profile definitions by compiler version and profile ID.
- Treat Preset provenance, active selection, and compiler identity as distinct. Field edits never select another profile.
- Generate and Remix validate current inputs, obtain required confirmations, compile, validate the complete proposed record/envelope, and autosave. Show Saved only after the write succeeds. Disable duplicate submissions while the operation is pending.
- Regenerate changes the editor baseline after the documented manual-edit confirmation. Persist changes to a loaded record through Update. Update preserves ID/`createdAt`, advances `updatedAt`, and requires a fresh baseline.
- Corrupt or invalid stored envelopes enter a read-only recovery state: preserve original bytes, keep the application shell usable, and block writes that could overwrite them. Unknown versions receive an unsupported-data state. No automatic clearing, coercion, downgrade, or migration.
- If compilation succeeds but storage fails, retain copyable generated text and the draft, report “Generated, not saved,” and offer an explicit retry.
- Use browser-local date components for date inputs. Query ranges use local midnight at the start and local midnight after the final selected date, with an exclusive upper bound. Reject reversed ranges. Display dates in the same calendar context.
- Combine filters with AND; use case-insensitive name substring search and `createdAt` for date filtering. Use `updatedAt` descending as the default list order, with ID as a deterministic tie-breaker.
- Reset eligibility is calculated from the versioned Preset defaults. Exclude `product-description`, `reference-mode`, `reference-notes`, and `preserve-details`; exclude every blank-origin field. Confirm the exact change count, preserve Prompt text, and update freshness without generating or saving.

## 3. Ordered milestones

Every milestone starts from the accepted result of its dependencies. Case IDs below identify coverage obligations; partial instances do not make an entire DOC-06 case Pass.

### M1 — Runnable application scaffold

**Dependency:** Review of this plan.

**Deliverables**

- Working application entry point, strict TypeScript configuration, build scripts, test harnesses, and lockfile.
- Home as the initial view, semantic navigation, accepted typography/color/radius tokens, and local labelled icons.
- Working Home-to-Build navigation; honest work-in-progress states for unfinished surfaces.
- Commands for development, catalogue checking, type checking, unit tests, browser tests, production build, and production preview.

**Acceptance checks**

- Development and production-preview builds run without console errors.
- Keyboard navigation reaches Build; shared visual tokens match v1.4.
- Existing documentation and research files remain intact; production output contains application assets only.
- Confirm browser prerequisites. Edge is present; Chrome was not found in the inspected standard locations. Arrange an authorized stable Chrome environment before mandatory dual-browser execution.

**DOC-06:** `CAT-01`, `UX-01`, `UX-04`, `UX-11`, `REL-01` — scaffold instances only.

### M2 — Runtime catalogue and executable-test inputs

**Dependency:** M1.

**Deliverables**

- Validated Product runtime catalogue, English knowledge entries, five-category mapping, explicit preview map, and neutral-profile specification.
- Reconciliation register covering obsolete count/approval/language/scope metadata and illustrative mockup content.
- Mapping of all 372 research fixture IDs to production test instances, including concrete input, independent expected result, and owning DOC-06 case.
- Initial golden examples and invalid-input datasets authored from the approved contracts.

**Acceptance checks**

- Exactly 30 fields, ten Presets, ten researched profiles, one separate neutral profile, and fourteen rules.
- Every field appears once in the UI mapping and has an English knowledge entry.
- Missing/broken previews fall back without losing actions or context.
- Source research outcomes are not imported as production actual results.
- Any fixture lacking a defensible input/oracle is explicitly Blocked until its contract-based instance is completed.

**DOC-06:** `CAT-01–08`; specification preparation for `CMP-09`.

### M3 — Pure validator and compiler

**Dependency:** M2.

**Deliverables**

- Complete V01–V14 validator and canonical normalization helpers.
- Compiler for all ten immutable profiles and the neutral profile.
- Executable unit ports for the research fixtures belonging to domain behavior; persistence/action fixtures remain assigned to later milestones.

**Acceptance checks**

- Required fields, fixed choices, custom replacements, control-character restrictions, and Unicode scalar limits behave exactly as specified.
- Ordinary normalization, exact-copy preservation, JSON quoting, one-pass substitution, Markdown escaping, optional omission, and field-once behavior pass independent assertions.
- Errors block compilation; warnings identify fields without rewriting inputs.
- Compiler output is deterministic, does not mutate input, and does not access DOM, storage, clock, randomness, or network.
- Unknown profiles/versions fail explicitly; Start Blank introduces no creative defaults.

**DOC-06:** `VAL-01–15`, `CMP-01–10`, relevant `CAT-04` and `CAT-08` instances.

### M4 — First complete Product flow

**Dependencies:** M1–M3.

**Deliverables**

- Working Clean Catalog Packshot and Start Blank paths using canonical controls and the five disclosure groups.
- Prompt name and visible No Project destination.
- Minimal real LocalStorageStore support for Workspace initialization, create, list/load, and Update, with full guards and rejected-write handling.
- Generate/autosave, editable Prompt, Copy, stale state, Regenerate confirmation, and a basic saved-item list.

**Acceptance checks**

- Complete: **Home → p01 → enter product facts → Generate/autosave → edit/Copy → reload → load → Update**.
- Errors reveal/focus fields; warnings require fresh explicit confirmation; cancellation preserves state.
- Manual Prompt edits never change configuration.
- Update preserves identity; failed writes preserve previous bytes and drafts.
- Clipboard failure retains selectable text and reports the actual outcome.
- No separate Save action is required after Generate.

**DOC-06:** first-flow instances of `APP-01–06`, `APP-08–09`, `VAL-15–17`, `STO-01`, `STO-05–07`, `PRJ-01`, `LIB-02`, `UX-05`, `UX-08`, `UX-12`.

**Milestone result:** A runnable, reviewable user flow—not a claimed complete MVP.

### M5 — Complete Product UI and all ten Presets

**Dependency:** M4.

**Deliverables**

- Complete Home, Build, Built-in, and Field Encyclopedia surfaces using the accepted editorial discovery and utility-task distinction.
- All ten Presets enabled; canonical card names/intents, search/filter controls, details, previews, and fallbacks.
- Exact-field Learn popovers and same-tab article links; active draft and disclosure state preserved on return.
- Safe Reset to Preset, customization summaries, selected icon/label states, and responsive layouts.

**Acceptance checks**

- Apply/Remix entry actions open editable drafts; they do not save incomplete product facts. The completed Remix action follows the normal validation/autosave gate.
- Every field’s compact help and full article match its stable ID.
- Escape/outside-click/close return focus correctly; Learn does not trap focus or cover its field.
- Reset changes only the confirmed eligible diff; missing historical catalogues disable Reset with an explanation.
- Match v1.4 composition and tokens while replacing illustrative controls with canonical data.
- Check narrow screens, 200% zoom, long content, keyboard completion, local assets, English copy, and safe text display.

**DOC-06:** `CAT-05–06`, all-Preset `APP-01–02`, `APP-09–14`, `UX-01–09`, `UX-11–12`.

### M6 — Complete persistence, Projects, and library operations

**Dependency:** M4; M5 supplies the final UI surfaces.

**Deliverables**

- Full ProjectStore and SavedConfigurationStore operations.
- Project create/rename/delete; destination selection and new-Project creation without losing the editor draft.
- Saved-Prompt load, Update, Remix, deletion, combined filters, and distinct empty/no-results states.
- All three Project deletion strategies, including stale-target checks and atomic writes.
- Complete store contract tests and remaining action/persistence fixture ports.

**Acceptance checks**

- Remix creates a new identity and timestamps; source bytes remain unchanged.
- Project deletion defaults to moving children to No Project. Destructive deletion names the target and count and requires deliberate confirmation.
- Source Project is excluded from destination options; unavailable/stale targets block the entire operation.
- Each mutation validates the current full envelope immediately before one write; failures and cancellation preserve prior data.
- Date filters pass local-day, inclusive-end, timezone-offset, and daylight-saving boundary instances.
- Same-origin reload retains data; different origins are explained accurately. Core actions work offline after assets have loaded.

**DOC-06:** `APP-05–07`, `VAL-17`, `STO-01–03`, `STO-05–08`, `PRJ-01–06`, `LIB-01–02`, `UX-08`.

**Compatibility disposition:** `STO-04` has no prior supported schema to execute in the first release. Retain the case as **Not Run with “not applicable to initial schema-1 release” scope disposition**; do not claim migration Pass. Migration-specific subinstances receive the same explicit disposition.

### M7 — DOC-06 candidate verification and handoff

**Dependencies:** M1–M6.

**Deliverables**

- Reproducible production candidate and complete execution/disposition register.
- Mandatory stable Chrome and Edge core-flow evidence, responsive/focus/contrast review, and production smoke results.
- Same-schema rollback rehearsal using the earlier known-good M4 build and the candidate on an isolated test origin.
- Release-readiness summary, known-defect register, local run instructions, and maintenance notes.

**Acceptance checks**

- Every mandatory in-scope instance has an actual result on the identified candidate build.
- All 372 research fixtures have a concrete mapping and production execution evidence where applicable; missing mandatory evidence remains Blocked.
- Complete production-build smoke: Generate, edit/Copy, reload, Update, Remix, filter, and delete.
- Preserve stored bytes when testing unsupported versions and rollback; never imply code rollback restores data.
- Review DOC-03’s relational projection for logical record consistency without implementing a database.
- Satisfy the proposed DOC-06 functional, data-safety, and UX exit gates. Keep owner review of defects/waivers as a release prerequisite.

**DOC-06:** final aggregation across all in-scope cases; specifically `UX-10`, `REL-01–03`, `REL-06`. `REL-04–05` remain deferred.

## 4. Verification and release rules

[Certain] [DOC-06 v1.0](C:/Users/LeVy/Documents/Codex/2026-10-07/let-s-recreate-the-doc-01/outputs/VisualPrompt_Studio/06_Testing/Test_Plans/VisualPrompt_Studio_DOC-06_Test_Release_and_Maintenance_Plan_v1.0.docx) contains 83 planned case IDs, not 83 completed tests. Browser and parameter expansion produce additional instances.

- Keep stable case IDs and link instances to exact FR/AC references, qualified invariants, and research fixture IDs. Qualify the two historical `INV-017` meanings rather than silently renumbering source documents.
- Record build ID, dependency lock, catalogue/compiler/schema versions, browser/version, origin, dataset, viewport/zoom, expected/actual, result, and evidence.
- Keep research results, mockup verification, document QA, and application execution evidence separate.
- Use Vitest assertions for pure behavior and storage contracts; Playwright for real DOM/action flows; manual inspection for visual hierarchy, keyboard behavior, and measured contrast.
- Mandatory browser evidence must use Chrome and Edge. A Chromium-only run does not satisfy `UX-10`.
- Run viewport samples at 320, 375, 767, 768, 1179, 1180, 1280, and 1600 px, plus 200% zoom. Measure the documented contrast targets; make no broader conformance claim.
- Proposed release policy: unresolved Critical/High defects block release. Failed mandatory behavior must be fixed or have an explicit owner-reviewed disposition; waivers never convert Fail to Pass.
- Review the completed candidate before any publication. Optional hosting and deployment authorization remain separate from implementation approval.

## 5. Plan maintenance and deferred scope

- On implementation approval, save this plan as `IMPLEMENTATION_PLAN.md` and register it in the project index.
- Track M1–M7 with **Not Started / In Progress / Blocked / Ready for Review / Complete**, evidence links, build IDs, blockers, and the next concrete action.
- Update the plan after each accepted milestone. Record changed decisions and their impact before implementing deviations.
- Update DOC-01–06 only where substantive contracts change—especially the date query semantics, explicit Reset field policy, initial-schema applicability, and finalized runtime mappings. Apply existing documentation versioning and verification rules; do not rewrite archival research.
- Preserve OQ-001/OQ-003 for unresearched Workflow fields/rules. They do not block Product.
- Preserve DR-005 for database vendor, access, ownership, and migration before DatabaseStore/final submission. Keep the store interfaces and logical projection ready for that phase.
- Defer other Workflows, localization, Admin/catalogue CRUD, generic form building, external AI APIs, image upload/generation, cloud synchronization, accounts, and empirical image-effectiveness studies.

[Certain] This planning pass changed no application code, installed no dependencies, and executed no application tests. [Certain] The remaining verification prerequisite is a stable Chrome environment; the research archive’s Pass records cannot substitute for production execution.
