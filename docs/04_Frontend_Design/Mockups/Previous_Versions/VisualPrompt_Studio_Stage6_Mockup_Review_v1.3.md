# VisualPrompt Studio — Stage 6 Mockup Review v1.3

**Review status:** Pass with deferred administration scope  
**Rules baseline:** `../Style_Decisions/Minimalist/VisualPrompt_Studio_UI_Generation_Rules_v1.1.md`  
**Supersedes:** Stage 6 Mockup Review v1.2

## Outcome

The v1.3 set preserves the grouped Build interaction, restores the earlier mockups' softer corner treatment, adopts a reproducible Lucide outline icon system and adds the selected Preset sample directly beside the Build form. Home, Built-in, Field Encyclopedia and Workspace semantics remain unchanged.

## Screen review

| ID | File | Change | Result |
|---|---|---|---|
| M00 | `Pages/VisualPrompt_Studio_M00_Home_Desktop_v1.3.png` | Applies Lucide icons and the accepted soft radius while preserving image-led discovery. | Pass |
| M01 | `Pages/VisualPrompt_Studio_M01_Build_Desktop_v1.3.png` | Adds the active Preset image and intent beside the form; preserves grouped disclosure and prompt preview. | Pass |
| M02 | `Pages/VisualPrompt_Studio_M02_My_Prompts_Desktop_v1.3.png` | Applies the radius system to Project cards, filters and the Saved Prompt table. | Pass |
| M07 | `Pages/VisualPrompt_Studio_M07_Built-in_Desktop_v1.3.png` | Preserves six image-led Preset cards with the same Lucide navigation and radius system. | Pass |
| M08 | `Pages/VisualPrompt_Studio_M08_Field_Encyclopedia_Desktop_v1.3.png` | Preserves the reading-oriented information architecture with the shared visual system. | Pass |

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

The exact library used in the raster-only early mockups cannot be established from pixels alone. Their thin, rounded outline style is closest to Lucide or Feather. The v1.3 source therefore makes the decision explicit: Lucide outline icons, nominal 18 px size, 2 px stroke, round caps and visible text labels. The mockup loads a local Lucide bundle and has no network dependency. Production should tree-shake the used icons or bundle only the required SVG subset.

## Preset context and radius assessment

Selecting a Preset now displays its sample image, name, short creative intent, details link and non-guarantee wording immediately below the selector. This keeps the sample adjacent to the form while avoiding a third persistent column that would compress the configuration fields. The active image is derived from `activePresetId`; it is not duplicated inside a saved Prompt record.

The accepted radius system is 7 px for controls and small actions and 10 px for cards, panels, tables and media containers. Pills and circles remain limited to statuses, avatars and step numbers. This recovers the approachable utility feel of the earlier version without turning the interface into a collection of oversized rounded cards.

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

Do not add full Workflow CRUD to the MVP for demonstration. Projects and Saved Prompts already provide authentic create, read, update and delete behavior. A half-connected Workflow editor would either be fake CRUD that does not affect Build or would force the MVP to solve field definitions, Preset ownership, validation rules, templates, knowledge entries, migrations and destructive-change handling.

Use three stages:

1. **MVP:** static validated catalogue and current user product.
2. **Post-MVP only if editing frequency justifies it:** separate protected Admin for Workflow and Preset CRUD, with ordered groups and schema-driven field definitions.
3. **Later only if multiple Workflows prove repeated structure:** narrow field-definition editor; do not default to a generic form builder.

If a portfolio demonstration is still wanted after the user MVP is complete, call it **Workflow Registry Demo** and constrain it to cloning a validated Workflow, editing metadata, changing display order, archiving or unarchiving, and deleting an unreferenced draft. It must remain separate from the MVP claim, and it must not expose a disabled or under-developed Preset CRUD screen.

Admin must be outside ordinary Workspace navigation. Workspace is where users create, organize and reuse Prompts; Admin is where trusted maintainers change the product's catalogue.

## Verification evidence

| Check | Result |
|---|---|
| Five v1.3 screens rendered at 1600 px | Pass |
| Missing images | 0 |
| Horizontal overflow | 0 |
| Vietnamese UI signals | 0 |
| Labelled icons in global and Workspace navigation | Pass |
| Build category disclosure visible | Pass |
| Selected Preset image and intent visible in Build | Pass |
| Local Lucide icons rendered | Pass |
| 7 px control and 10 px panel radius tokens applied | Pass |
| Existing structural-error and warning semantics preserved | Pass by specification; interactive test remains for DOC-06 |

## Decision additions

| ID | Decision | Status |
|---|---|---|
| DR-014 | Use validation-aware collapsible categories on Build. | Accepted |
| DR-015 | Use one labelled icon family for navigation and high-value actions. | Accepted |
| DR-016 | Defer Admin and form builder; keep a schema-validated source catalogue in MVP. | Accepted |
| DR-017 | Show the selected Preset image and intent beside Build configuration. | Accepted |
| DR-018 | Adopt Lucide outline icons and the 7 px / 10 px radius system. | Accepted |

## Open questions

No owner decision is required to proceed to DOC-06. Whether Admin becomes necessary is a post-MVP evidence question based on edit frequency, number of maintainers and catalogue-change risk.

