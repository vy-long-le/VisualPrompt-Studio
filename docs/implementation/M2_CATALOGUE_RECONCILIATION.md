# M2 Catalogue Reconciliation Register

**Status:** Active · **Register version:** 1.3 · **Date:** 15 October 2026
**Milestone:** M2 — Runtime catalogue and executable-test inputs  
**Current result:** M2.1 through M2.4a complete; M2.4b researched template profiles next

## 1. Purpose and authority

[Certain] This register prevents archival DISC-01 research metadata from being mistaken for the approved Product MVP runtime baseline. The research package remains unchanged and continues to provide evidence, canonical identifiers, dictionaries, profile clauses, rules, and fixture provenance.

[Certain] Runtime decisions follow this authority order:

1. Current DOC-01 through DOC-06 baselines and approved ADR amendments.
2. Accepted decisions recorded in `IMPLEMENTATION_PLAN.md`.
3. UI generation rules v1.2 and Stage 6 v1.4 for presentation and interaction.
4. Accepted DISC-01 v1.0 for research-derived field, value, Preset, profile, rule, and fixture content.
5. Older research metadata only as historical evidence.

## 2. Verified archival inventory

| Source area | Verified count or value | Runtime treatment |
|---|---:|---|
| Research version | `1.0` | Preserve as research provenance; do not use as the runtime catalogue version. |
| `runtimeReady` | `false` | Preserve in the archival JSON. Build a separate validated runtime catalogue. |
| `baselineModified` | `false` | Preserve as evidence that the research package did not silently revise product documents. |
| Product field definitions | 30 | Include all 30 stable field IDs exactly once. |
| Value dictionaries | 30 field-keyed entries | Preserve canonical stored values and value IDs. Translate explanatory runtime copy without changing stored values. |
| Selected Presets | 10 | Release all ten canonical Product Presets. Start Blank remains separate. |
| Preset field mappings | 10 | Validate every field/default reference against the runtime dictionaries. |
| Researched template profiles | 10 | Preserve profile IDs and immutable `1.0.0` definitions. |
| Neutral profiles in research list | 0 | Add the separately approved `product-neutral-mold` runtime profile. Do not count it as a Preset. |
| Conflict rules | 14 | Preserve V01–V14 IDs, field references, severity, and semantics. |
| Research fixtures | 372 | Map every fixture ID to a concrete production input, independent oracle, owner case, and execution disposition. |
| Field Encyclopedia entries | 30 | Publish English runtime knowledge for every stable field ID. Preserve the Vietnamese research source. |
| Preset mold documents | 10 | Preserve the researched clause order and profile identity. |

## 3. Reconciliation decisions

| ID | Archival source state | Approved runtime state | Required implementation action | Governing coverage |
|---|---|---|---|---|
| REC-01 | `runtimeReady: false` | Runtime catalogue is versioned separately as `product-runtime-1.0.0`. | Keep DISC-01 immutable. Create a typed runtime catalogue and validate it before use. | `CAT-07` |
| REC-02 | Release inclusion is pending in each selected Preset. | All ten canonical Product Presets are included in the Product MVP. | Preserve IDs, names, intents, mappings, and explicit profile IDs; replace pending release metadata only in runtime. | `CAT-02`, `CAT-07` |
| REC-03 | Start Blank is described but is not a researched Preset/profile entry. | Start Blank uses a separate `product-neutral-mold` profile and is not Preset 11. | Add an immutable neutral profile with version `1.0.0`, generic field clauses, copy-policy variants, optional omission, and the supplied-fact safeguard. | `CAT-02`, `CMP-09` |
| REC-04 | Profile persistence is marked recommended and `approved: false`. | Explicit `templateProfileId` is required runtime metadata; `sourcePresetId` remains provenance. | Require explicit profile identity. Never infer it from fields or Preset provenance. | `CAT-02`, `CAT-07` |
| REC-05 | Helper knowledge is Vietnamese while stored values and prompts are English. | Product MVP interface and runtime knowledge are English. | Translate all 30 knowledge entries without adding claims or changing validation semantics. Preserve exact user copy and canonical stored values unchanged. | `CAT-05`, `CAT-07` |
| REC-06 | Research fields carry nine research-oriented group labels. | Build displays five approved categories. | Map every field exactly once using the fixed category map in section 4. Keep research groups only as evidence metadata. | `CAT-03`, `CAT-07` |
| REC-07 | Ten Presets have six research preview assets whose filenames do not form a complete canonical mapping. | Three approved Preset-to-preview mappings are explicit; seven Presets use a labelled fallback. | Map by stable Preset ID. Do not infer mappings from filenames. Keep all six assets and provenance records. | `CAT-06` |
| REC-08 | Research fixtures contain `actual` and `result: Pass` from an internal research verifier. | Application evidence begins unexecuted. | Never import research `actual` or `result` as a production result. Author concrete inputs and independent expected outcomes first. | `CAT-08` |
| REC-09 | Research compiler identity is `product-molds-1.0.0`; ten profiles use version `1.0.0`. | Compiler contract remains `product-molds-1.0.0`; published profiles are immutable. | Reject unknown compiler/profile versions. Field edits do not change profile identity. | `CAT-02`, `CMP-09` |
| REC-10 | Research migration text discusses existing records without profile identity. | Initial release supports schema version 1 only and has no legacy import. | Preserve and reject unsupported data. Do not claim or implement legacy migration in the Product MVP. | `CAT-07`; `STO-04` remains Not Run with the documented initial-release disposition. |
| REC-11 | Mockups and older examples contain illustrative controls and a separate Save action. | Runtime uses canonical fields and values; Generate/Remix autosave and loaded records use Update. | Do not import illustrative mockup data into the catalogue. | `CAT-03`, later `APP` coverage |
| REC-12 | Other Workflows remain unresearched. | Only Product can enter Build in this release. | Represent deferred Workflows honestly without runtime forms, invented fields, or fake catalogue entries. | `CAT-01` |

## 4. Fixed five-category UI mapping

| Visible category | Canonical field IDs | Count | Initially open |
|---|---|---:|---:|
| Product identity | `product-description`, `reference-mode`, `reference-notes`, `preserve-details`, `use-case`, `creative-objective`, `audience` | 7 | Yes |
| Lighting and composition | `lighting-style`, `light-direction`, `shadow-treatment`, `composition` | 4 | Yes |
| Camera and optics | `shot-size`, `camera-angle`, `focus-treatment`, `detail-target`, `scale-cue` | 5 | No |
| Materials and styling | `placement-surface`, `environment`, `props`, `product-arrangement`, `material-emphasis`, `palette`, `mood`, `visual-treatment`, `interaction-action` | 9 | No |
| Output and guardrails | `copy-treatment`, `copy-space`, `exact-copy`, `aspect-ratio`, `exclusions` | 5 | No |
| **Total** | Every canonical Product field exactly once | **30** | — |

## 5. Fixed Preset and profile inventory

| Preset ID | Runtime name | Profile ID | Profile version | Release state |
|---|---|---|---|---|
| `product-p01` | Clean Catalog Packshot | `product-p01-mold` | `1.0.0` | Included |
| `product-p02` | Sculptural Studio Hero | `product-p02-mold` | `1.0.0` | Included |
| `product-p03` | Contextual Lifestyle | `product-p03-mold` | `1.0.0` | Included |
| `product-p04` | Craft and Material Detail | `product-p04-mold` | `1.0.0` | Included |
| `product-p05` | Editorial Flat Lay | `product-p05-mold` | `1.0.0` | Included |
| `product-p06` | Relative Scale Demonstration | `product-p06-mold` | `1.0.0` | Included |
| `product-p07` | Bundle and Packaging Overview | `product-p07-mold` | `1.0.0` | Included |
| `product-p08` | Reflective Luxury Still Life | `product-p08-mold` | `1.0.0` | Included |
| `product-p09` | Dynamic Performance Concept | `product-p09-mold` | `1.0.0` | Included |
| `product-p10` | Copy Ready Campaign Layout | `product-p10-mold` | `1.0.0` | Included |
| — | Start Blank | `product-neutral-mold` | `1.0.0` | Separate neutral entry; not a Preset |

## 6. Fixed preview mapping

| Preset ID | Preview treatment |
|---|---|
| `product-p01` | Map to the Soft Catalog preview asset. |
| `product-p02` | Map to the Hard Light Still Life preview asset. |
| `product-p08` | Map to the Shadow Luxury preview asset. |
| `product-p03`, `product-p04`, `product-p05`, `product-p06`, `product-p07`, `product-p09`, `product-p10` | Use the consistently sized, labelled `Preview reference unavailable` state. Preserve name, intent, details, and action. |

[Certain] The other three research preview assets remain stored with provenance but do not become additional Presets or inferred mappings. Every displayed preview retains non-guarantee wording.

## 7. Runtime extraction boundary

| DISC-01 source | Runtime destination | Copy policy |
|---|---|---|
| `workflowDefinition` | Product Workflow definition | Copy stable Product identity and scope; replace obsolete language metadata with the approved English runtime state. |
| `fieldDefinitions` | Field definitions | Preserve stable IDs, labels, control/data kinds, required flags, normalization, limits, dependencies, and rule references. Replace research group labels with the section 4 mapping. |
| `valueDictionary` | Field option dictionaries | Preserve value IDs and stored values exactly. Translate explanatory display/help text separately. |
| `selectedPresets` | Preset catalogue | Preserve canonical IDs, names, intents, field defaults, and profile IDs. Runtime release state is Included. |
| `presetFieldMappings` | Preset default maps | Preserve only after every field/value/profile reference passes catalogue validation. |
| `templateProfiles` | Versioned profile registry | Preserve ten immutable researched profiles and add the separately specified neutral profile. |
| `conflictRules` | Validation rule catalogue | Preserve V01–V14 semantics and references; validate six errors and eight warnings. |
| `knowledgeBase` within fields and Field Encyclopedia Markdown | English knowledge catalogue | Translate meaning faithfully; keep field IDs and stored-value semantics stable. |
| `promptEvaluationFixtures` | Test fixture register | Preserve fixture IDs and research provenance. Replace research outcome fields with explicit production input, oracle, owner case, and Not Run/Blocked state. |
| Research approval, council, benchmark, and source metadata | Reconciliation/evidence records only | Do not ship as mutable application catalogue data. |

## 8. M2 substeps and status

| Substep | Deliverable | Status | Completion condition |
|---|---|---|---|
| M2.1 | Source inventory and reconciliation register | **Complete** | Counts verified; obsolete metadata mapped to current decisions; archival sources unchanged. |
| M2.2 | Typed runtime catalogue boundary and immutable version constants | **Complete** | Commit `843602f` is pushed; complete contracts compile; the combined unit-test, TypeScript, and production-build check passed; no runtime data or validation was faked. |
| M2.3a | Product Workflow and five-category field mapping | **Complete** | Commit `1abdad3` is pushed; all 30 canonical field IDs occur exactly once across five ordered groups, and Product is the only available Workflow. |
| M2.3b | Thirty field definitions and canonical option dictionaries | **Complete** | Commit `2b18c04` is pushed; every field occurs once, and all 30 field-keyed dictionary entries and 108 canonical options preserve their source IDs, stored values, and labels. |
| M2.3c | Thirty reviewed English knowledge entries | **Complete** | Every field has one faithful English knowledge entry; all accepted source literals remain exact; the combined check and independent 30-entry source audit pass. |
| M2.3d | M2.3 integration and coverage verification | **Complete** | Public-boundary graph checks prove all group, field, option, and knowledge references resolve; the focused integration test and combined 5-file/16-test check pass with TypeScript and a production build, providing CAT-01, CAT-03, and catalogue-level CAT-05 evidence. |
| M2.4a | Ten Product Presets and separate Start Blank definition | **Complete** | All ten Presets preserve the accepted DISC-01 metadata and complete defaults, expose explicit profile and preview identities, and keep Start Blank separate with 30 empty fields and `product-neutral-mold`; the combined 6-file/19-test check, TypeScript check, production build, and independent source audit pass. |
| M2.4 | Ten Presets, ten researched profiles, neutral profile, and preview map | **In Progress** | Preset/profile/default/preview relationships are explicit and valid. |
| M2.5 | Catalogue guards and `check:catalogue` command | Not Started | Valid catalogue exits zero; required deliberately broken fixtures exit nonzero. |
| M2.6 | Register all 372 fixtures plus golden and invalid datasets | Not Started | Every fixture has concrete input, independent oracle, owning case, and execution disposition. |
| M2.7 | M2 acceptance and evidence update | Not Started | `CAT-01–08` obligations have implementation evidence; `CMP-09` inputs are prepared without claiming compiler execution. |

## 9. Blocking decisions and deferred work

[Certain] No unresolved Product decision blocks M2. English translation, neutral-profile authoring, guard implementation, and fixture porting are implementation work governed by existing decisions.

[Certain] Database implementation remains deferred behind DR-005. Other Workflow fields and rules remain deferred behind OQ-001 and OQ-003. They must not be introduced into the Product runtime catalogue.

## 10. M2.4 handoff

[Certain] M2.4a publishes the ten approved Presets and separate Start Blank definition through the established public catalogue contracts. The next implementation step is M2.4b: implement the ten immutable researched template profiles, preserving the accepted profile IDs, version `1.0.0`, clause order, conditions, copy policies, and exact literals. The separate neutral profile remains later M2.4 work. Do not introduce validation execution, fixture ports, or a placeholder `check:catalogue` command in M2.4.

