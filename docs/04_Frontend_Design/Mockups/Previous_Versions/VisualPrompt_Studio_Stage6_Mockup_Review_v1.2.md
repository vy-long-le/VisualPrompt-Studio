# VisualPrompt Studio — Stage 6 Mockup Review v1.2

**Review status:** Pass with deferred administration scope  
**Rules baseline:** `../Style_Decisions/Minimalist/VisualPrompt_Studio_UI_Generation_Rules_v1.0.md`  
**Supersedes:** Stage 6 Mockup Review v1.1

## Outcome

The v1.2 set restores the strongest interaction pattern from the earlier Vietnamese Build: configurable options are divided into collapsible category groups. It also adds labelled icons to the global and workspace navigation without changing the accepted Home, Built-in, Field Encyclopedia or Workspace model.

## Screen review

| ID | File | Change | Result |
|---|---|---|---|
| M00 | `Pages/VisualPrompt_Studio_M00_Home_Desktop_v1.2.png` | Adds labelled navigation icons while preserving the image-led discovery narrative. | Pass |
| M01 | `Pages/VisualPrompt_Studio_M01_Build_Desktop_v1.2.png` | Restores grouped disclosure sections, compact group status and labelled action icons. | Pass |
| M02 | `Pages/VisualPrompt_Studio_M02_My_Prompts_Desktop_v1.2.png` | Adds labelled navigation and Project icons without changing Workspace semantics. | Pass |
| M07 | `Pages/VisualPrompt_Studio_M07_Built-in_Desktop_v1.2.png` | Adds labelled navigation icons while retaining six image-led Preset cards. | Pass |
| M08 | `Pages/VisualPrompt_Studio_M08_Field_Encyclopedia_Desktop_v1.2.png` | Adds labelled navigation icons while retaining the reading-oriented information architecture. | Pass |

## Build disclosure assessment

The dropdown request is interpreted as a disclosure or accordion pattern, not a replacement of field-level select controls. This distinction matters: the category control manages visibility, while each field control manages configuration value.

- Product identity and Lighting and composition open by default.
- Camera and optics, Materials and styling, and Output and guardrails are collapsed.
- Each collapsed summary communicates field count and whether values still come from the Preset or have been customized.
- Multiple groups may remain open.
- Structural validation must open and identify the affected group and field.
- Art-direction warnings use the same location mapping but require confirmation rather than reclassification as errors.
- Open state persists for the active draft session.

## Icon assessment

Icons improve recognition only when they remain consistent and labelled. The mockups therefore add icons to primary navigation and high-value Save and Generate actions, while leaving ordinary field labels text-first. Future implementation should bundle a small local subset from one established icon family; the mockup's Windows system glyphs are visual placeholders, not a web-runtime dependency decision.

## Workflow CRUD, Preset CRUD and form-builder assessment

### Complexity challenged

Building Workflow CRUD, Preset CRUD, an Admin page and a generic form builder together would create a second product before the first user loop is proven. It introduces authentication, authorization, draft and publishing state, catalogue migrations, referential integrity, preview assets, conditional fields and destructive-change safeguards.

### Simpler alternative

Keep the MVP catalogue as versioned TypeScript or JSON source with stable IDs, explicit schema versions, build-time validation and fixtures. Runtime views consume that catalogue through one small repository boundary. This preserves a later Admin migration path without shipping administration now.

### Requirements preserved

- Users still discover Workflows and Presets.
- Build still renders fields from Workflow definitions rather than hard-coded page markup.
- Presets still reference fields by stable ID.
- Validation can reject broken catalogue references before release.
- A later Admin tool can write the same canonical structure.

### Trade-offs

- Adding or editing catalogue content still requires a source change and release.
- Non-developers cannot manage Workflows in the first MVP.
- Catalogue preview remains a developer or tester workflow.

These trade-offs are acceptable for a course-project MVP with one researched Workflow and no established content-operations team.

### Deferred complexity

- Protected Admin authentication and authorization.
- Workflow and Preset draft, review and publish states.
- Asset upload, crop management and storage.
- Database or CMS persistence.
- Generic drag-and-drop form building.
- Arbitrary conditional-logic authoring and migrations.

### Recommendation

Use three stages:

1. **MVP:** static validated catalogue and current user product.
2. **Post-MVP only if editing frequency justifies it:** separate protected Admin for Workflow and Preset CRUD, with ordered groups and schema-driven field definitions.
3. **Later only if multiple Workflows prove repeated structure:** narrow field-definition editor; do not default to a generic form builder.

Admin must be outside ordinary Workspace navigation. Workspace is where users create, organize and reuse Prompts; Admin is where trusted maintainers change the product's catalogue.

## Verification evidence

| Check | Result |
|---|---|
| Five v1.2 screens rendered at 1600 px | Pass |
| Missing images | 0 |
| Horizontal overflow | 0 |
| Vietnamese UI signals | 0 |
| Labelled icons in global and Workspace navigation | Pass |
| Build category disclosure visible | Pass |
| Existing structural-error and warning semantics preserved | Pass by specification; interactive test remains for DOC-06 |

## Decision additions

| ID | Decision | Status |
|---|---|---|
| DR-014 | Use validation-aware collapsible categories on Build. | Accepted |
| DR-015 | Use one labelled icon family for navigation and high-value actions. | Accepted |
| DR-016 | Defer Admin and form builder; keep a schema-validated source catalogue in MVP. | Accepted |

## Open questions

No owner decision is required to proceed to DOC-06. Whether Admin becomes necessary is a post-MVP evidence question based on edit frequency, number of maintainers and catalogue-change risk.

