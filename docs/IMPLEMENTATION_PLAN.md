# VisualPrompt Studio Product MVP — Implementation Plan

**Status:** Active · **Plan version:** 1.8 · **Date:** 15 October 2026
**Implementation status:** M1 Complete; M2 In Progress  
**Application test status:** M1 type checking, unit tests, production build, and five Edge browser checks passed; mandatory Chrome evidence remains for M7  
**Canonical document:** `docs/IMPLEMENTATION_PLAN.md`

## 1. Outcome, authority, and reconciled baseline

[Certain] **The remaining risk is mistaking documentation and research results for executable application evidence.** This plan starts with a runnable application, completes one real Product flow, and then expands coverage to the full Product MVP.

[Certain] The implementation baseline is DOC-01 v2.3, DOC-02 v2.2, DOC-03 v2.1, DOC-04 v1.9, DOC-05 v1.5, DOC-06 v1.0, accepted DISC-01 research v1.0, UI generation rules v1.2, and Stage 6 v1.4. Their locations and authority are recorded in [PROJECT_ARTIFACTS.md](PROJECT_ARTIFACTS.md).

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

[Certain] No unresolved Product decision blocks M2. Catalogue preparation, fixture porting, and later application code are implementation tasks. Chrome availability blocks completing mandatory M7 browser verification, not continuing implementation.

## 2. Implementation contracts and defaults

The following implementation contracts govern the active plan.

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

## 3. Execution order and current status

[Certain] Work through the milestones in this order. Finish the acceptance checks for the active milestone before treating its dependent milestone as started.

**M1 Run the app → M2 Prepare the catalogue → M3 Build validation and compilation → M4 Finish one real Product flow → M5 Complete the Product interface → M6 Complete library operations → M7 Verify the MVP**

| Milestone | Status | Result or next gate |
|---|---|---|
| M1 — Runnable application scaffold | **Complete** | Runnable Home and Build shell; automated M1 checks pass. |
| M2 — Runtime catalogue and executable-test inputs | **In Progress** | Reconcile DISC-01 into the versioned runtime catalogue and executable fixture register. |
| M3 — Pure validator and compiler | **Not Started** | Requires the accepted M2 catalogue and oracles. |
| M4 — First complete Product flow | **Not Started** | First useful demonstration: Generate/autosave, edit/Copy, reload/load, and Update. |
| M5 — Complete Product UI and all ten Presets | **Not Started** | Requires the working M4 Product flow. |
| M6 — Complete persistence, Projects, and library operations | **Not Started** | Requires M4 behavior; uses final M5 surfaces. |
| M7 — DOC-06 candidate verification and handoff | **Not Started** | Requires M1–M6 and stable Chrome plus Edge. |

## 4. Ordered milestone details

Every milestone starts from the accepted result of its dependencies. Case IDs below identify coverage obligations; partial instances do not make an entire DOC-06 case Pass.

### M1 — Runnable application scaffold

**Status:** Complete — 12 October 2026  
**Dependency:** Plan review — fulfilled.

**Deliverables**

- Working application entry point, strict TypeScript configuration, build scripts, test harnesses, and lockfile.
- Home as the initial view, semantic navigation, accepted typography/color/radius tokens, and local labelled icons.
- Working Home-to-Build navigation; honest work-in-progress states for unfinished surfaces.
- Commands for development, type checking, unit tests, browser tests, production build, production preview, and the combined M1 check. The catalogue-specific check is an M2 deliverable because M1 contains no runtime catalogue to validate.

**Acceptance checks**

- Development and production-preview builds run without console errors.
- Keyboard navigation reaches Build; shared visual tokens match v1.4.
- Existing documentation and research files remain intact; production output contains application assets only.
- Confirm browser prerequisites. Edge is present; Chrome was not found in the inspected standard locations. Arrange an authorized stable Chrome environment before mandatory dual-browser execution.

**DOC-06:** `CAT-01`, `UX-01`, `UX-04`, `UX-11`, `REL-01` — scaffold instances only.

**Completion evidence**

- `npm run typecheck` passed under TypeScript `6.0.3`.
- `npm run test` passed the M1 unit suite under Vitest `5.0.3`.
- `npm run check` passed the unit suite, type check, and Vite `8.3.4` production build.
- `npm run test:browser -- --project=edge` rebuilt the production artifact and passed all five M1 browser checks in stable Microsoft Edge.
- The 320 px reflow check passed after the application header was corrected; no horizontal document overflow remained.
- The dependency lockfile is present. The pinned toolchain is Node `24.21.0`, npm `11.19.0`, Playwright `1.64.0`, TypeScript `6.0.3`, Vite `8.3.4`, Vitest `5.0.3`, and Lucide `1.55.0`.
- Stable Chrome was unavailable in the inspected environment. This is a recorded M7 prerequisite and does not reopen M1.
- Git baseline commit `468e7fe` (`Initial VisualPrompt Studio scaffold and documentation`) is pushed to and tracked by `origin/main`; local and remote divergence was `0 0` at the 13 October 2026 audit.
- A fresh isolated verification of commit `468e7fe` on 13 October 2026 passed TypeScript checking, one Vitest unit test, the Vite production build, and all five Edge Playwright checks. The source checkout remained unchanged during verification.

### M2 — Runtime catalogue and executable-test inputs

**Status:** In Progress — 15 October 2026
**Dependency:** M1.

**Current substep:** M2.1 through M2.4 are complete, including Presets, researched and neutral profiles, and the runtime preview catalogue. M2.5 catalogue guards and the real `check:catalogue` command are next.

**M2.2 completion evidence:** Commit `843602f` (`Define M2 runtime catalogue contracts`) is pushed to `origin/main` with local/remote divergence `0 0`. The public boundary defines schema, catalogue, compiler, profile, locale, Workflow, field-group, field, Preset, profile, validation-rule, preview-asset, knowledge-entry, envelope, issue, and repository contracts. The combined unit-test, TypeScript, and production-build check passed before push.

**M2.3a completion evidence:** Commit `1abdad3` (`Add Product workflow field groups`) is pushed to `origin/main` with local/remote divergence `0 0`. The Product Workflow and five approved groups map all 30 canonical field IDs exactly once, preserve the approved group order and initial disclosure state, and keep deferred Workflows out of the runtime catalogue. A fresh post-push `npm run check` passed two test files and four tests, TypeScript checking, and the production build. All five browser cases passed in Edge; the configured stable-Chrome lane was unavailable because Chrome is not installed in the inspected environment.

**M2.3b completion evidence:** Commit `2b18c04` (`Add Product field catalogue and options`) is pushed to `origin/main` with local/remote divergence `0 0`. The runtime catalogue contains all 30 canonical field definitions and 30 field-keyed option dictionaries with all 108 unique option IDs, stored values, labels, field constraints, normalization modes, knowledge references, and validation-rule references reconciled against DISC-01. The combined unit-test, TypeScript, and production-build check passed three test files and ten tests; the independent exact-source audit and all five Edge browser cases passed.

**M2.3c completion evidence:** The runtime catalogue publishes one complete English knowledge entry for each of the 30 canonical Product fields. All field-to-entry IDs resolve; accepted DISC-01 examples, related terms, wording patterns, validation boundaries, and starter suggestions remain exact; and editorial review found no added generation guarantee or changed validation behavior. A fresh `npm run check` passed four test files and fourteen tests, TypeScript checking, and the production build. An independent exact-source audit passed all 30 entries.

**M2.3d completion evidence:** The public catalogue boundary now has an integration test that traverses the Product Workflow, five groups, 30 fields, 30 option-dictionary keys, 108 unique options, and 30 English knowledge entries as one reference graph. Every group and field belongs to the Product Workflow; every canonical field occurs in exactly one group; every field reuses its canonical option array; every field-to-knowledge link resolves and points back to the matching field; no knowledge entry is orphaned; and option IDs remain globally unique. The focused integration run passed one test file and two tests. A fresh `npm run check` then passed five test files and sixteen tests, strict TypeScript checking, and a production build, providing the planned CAT-01, CAT-03, and catalogue-level CAT-05 evidence.

**M2.4a completion evidence:** The public catalogue boundary publishes all ten canonical Product Presets and keeps Start Blank as a separate neutral entry. Every Preset preserves its accepted DISC-01 identity, family, purpose, creative direction, use cases, default visual characteristics, distinctive instructions, exclusions, rule references, complete 30-field default map, and explicit template-profile identity. The reconciled preview mapping is explicit for all ten Presets: three approved asset IDs and seven labelled-fallback `null` mappings. Start Blank has all 30 canonical fields set to empty strings and uses `product-neutral-mold` without becoming an eleventh Preset. A fresh `npm run check` passed six test files and nineteen tests, strict TypeScript checking, and a production build. An independent source-fidelity audit passed all ten Presets, all ten profile links, all ten preview mappings, and the complete Start Blank map.

**M2.4b completion evidence:** The public catalogue boundary publishes ten researched Product template profiles and no neutral profile in the researched-profile collection. Every profile preserves its explicit profile and source-Preset identity, workflow and profile versions, creative metadata, ordered sections, ordered clauses, nonblank conditions, exact-copy variants, supplied-fact safeguard, omission behavior, override rule, and negative-instruction strategy. The focused profile test passed one file and four tests. A fresh `npm run check` passed seven test files and twenty-three tests, strict TypeScript checking, and a production build. An independent runtime comparison against the accepted DISC-01 JSON matched all ten profiles, fifty sections, three hundred clauses, and twenty copy-policy variants exactly.

**M2.4c completion evidence:** The public catalogue boundary publishes one separate `product-neutral-mold` profile linked to Start Blank, with `sourcePresetId: null`, no Preset defaults, and no membership in the researched-profile collection. The profile preserves the five canonical Product sections, all thirty fields in canonical order, generic nonblank clauses, optional omission behavior, the approved supplied-fact safeguard and policies, and two approved copy variants. The focused neutral-profile test passed one file and four tests. A fresh `npm run check` passed eight test files and twenty-seven tests, strict TypeScript checking, and a production build. An independent runtime audit confirmed five sections, thirty clauses, thirty unique fields, two copy variants, the Start Blank link, and null Preset provenance.

**M2.4d and M2.4 completion evidence:** The public catalogue boundary publishes all six accepted preview assets with canonical IDs, stable application paths, accessible descriptions, exact creative intents, non-guarantee wording, and explicit direct-generation provenance with no compiler trace. Three approved Presets resolve to their explicit preview assets; the other seven use the labelled fallback; and the three remaining research assets stay preserved without invented Preset mappings. All six public PNG files match their accepted documentation sources byte for byte and are copied unchanged into the fresh production build. The focused preview suite passed one file and four tests. A fresh `npm run check` passed nine test files and thirty-one tests, strict TypeScript checking, and a production build. Existing profile and neutral-profile reference checks plus the preview reference checks close the complete M2.4 Preset/profile/default/preview graph, so no separate M2.4 integration substep is required.

**Deliverables**

- Validated Product runtime catalogue, English knowledge entries, five-category mapping, explicit preview map, and neutral-profile specification.
- Reconciliation register covering obsolete count/approval/language/scope metadata and illustrative mockup content.
- Mapping of all 372 research fixture IDs to production test instances, including concrete input, independent expected result, and owning DOC-06 case.
- Initial golden examples and invalid-input datasets authored from the approved contracts.
- A real `check:catalogue` command that validates the implemented runtime catalogue. Do not add a placeholder command before the catalogue exists.

**Acceptance checks**

- Exactly 30 fields, ten Presets, ten researched profiles, one separate neutral profile, and fourteen rules.
- Every field appears once in the UI mapping and has an English knowledge entry.
- Missing/broken previews fall back without losing actions or context.
- Source research outcomes are not imported as production actual results.
- Any fixture lacking a defensible input/oracle is explicitly Blocked until its contract-based instance is completed.
- `npm run check:catalogue` exits successfully for the accepted catalogue and fails for deliberately broken duplicate-ID, missing-reference, invalid-default, broken-clause, and incomplete-coverage fixtures.

**DOC-06:** `CAT-01–08`; specification preparation for `CMP-09`.

### M3 — Pure validator and compiler

**Status:** Not Started  
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

**Status:** Not Started  
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

**Status:** Not Started  
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

**Status:** Not Started  
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

**Status:** Not Started  
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

## 5. Verification and release rules

[Certain] [DOC-06 v1.0](06_Testing/Test_Plans/VisualPrompt_Studio_DOC-06_Test_Release_and_Maintenance_Plan_v1.0.docx) contains 83 planned case IDs, not 83 completed tests. Browser and parameter expansion produce additional instances.

- Keep stable case IDs and link instances to exact FR/AC references, qualified invariants, and research fixture IDs. Qualify the two historical `INV-017` meanings rather than silently renumbering source documents.
- Record build ID, dependency lock, catalogue/compiler/schema versions, browser/version, origin, dataset, viewport/zoom, expected/actual, result, and evidence.
- Keep research results, mockup verification, document QA, and application execution evidence separate.
- Use Vitest assertions for pure behavior and storage contracts; Playwright for real DOM/action flows; manual inspection for visual hierarchy, keyboard behavior, and measured contrast.
- Mandatory browser evidence must use Chrome and Edge. A Chromium-only run does not satisfy `UX-10`.
- Run viewport samples at 320, 375, 767, 768, 1179, 1180, 1280, and 1600 px, plus 200% zoom. Measure the documented contrast targets; make no broader conformance claim.
- Proposed release policy: unresolved Critical/High defects block release. Failed mandatory behavior must be fixed or have an explicit owner-reviewed disposition; waivers never convert Fail to Pass.
- Review the completed candidate before any publication. Optional hosting and deployment authorization remain separate from implementation approval.

## 6. Plan maintenance and deferred scope

- Track M1–M7 with **Not Started / In Progress / Blocked / Ready for Review / Complete**, evidence links, build IDs, blockers, and the next concrete action.
- Update the plan after each accepted milestone. Record changed decisions and their impact before implementing deviations.
- Update DOC-01–06 only where substantive contracts change—especially the date query semantics, explicit Reset field policy, initial-schema applicability, and finalized runtime mappings. Apply existing documentation versioning and verification rules; do not rewrite archival research.
- Preserve OQ-001/OQ-003 for unresearched Workflow fields/rules. They do not block Product.
- Preserve DR-005 for database vendor, access, ownership, and migration before DatabaseStore/final submission. Keep the store interfaces and logical projection ready for that phase.
- Defer other Workflows, localization, Admin/catalogue CRUD, generic form building, external AI APIs, image upload/generation, cloud synchronization, accounts, and empirical image-effectiveness studies.
- Treat files under `docs/assets/` as historical snapshots, not active implementation plans. The sole active plan is `docs/IMPLEMENTATION_PLAN.md`.

[Certain] M1 is complete on its scaffold scope; this does not mark the full Product MVP or any complete DOC-06 case family as Pass. [Certain] M2 is the next milestone. [Certain] The remaining final-verification prerequisite is a stable Chrome environment; research results and mockup checks cannot substitute for production execution.
