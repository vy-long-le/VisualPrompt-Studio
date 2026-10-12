# VisualPrompt Studio — UI Generation Rules v1.0

**Status:** Authoritative Stage 6 generation baseline  
**Applies to:** future mockups, UI specifications, frontend implementation and design reviews  
**Supersedes:** conflicting assumptions in earlier mockups  
**Decision date:** 10 October 2026

## Purpose

This file converts owner feedback into stable generation rules. A future mockup or implementation must treat these rules as constraints, not optional inspiration.

## Product and information architecture

### UI-RULE-001 — Home is the default entry

Home explains VisualPrompt Studio, shows available and research-pending Workflows, and exposes image-led Preset cards. Build is an explicit task surface, not the homepage.

### UI-RULE-002 — Workspace is the user-owned area

Workspace contains generated and remixed Prompts. It has one permanent root, optional Projects and a No Project state. Workspace is not an administration surface and cannot be deleted.

### UI-RULE-003 — Admin is separate from Workspace

Any future Workflow or Preset management UI must be a protected administration surface outside the ordinary user navigation. It must not make Workspace feel like a content-management system.

### UI-RULE-004 — English-first MVP

English is the only MVP interface and knowledge language. Vietnamese is deferred to the polishing phase. Do not display an inactive language selector.

## Discovery and creative direction

### UI-RULE-005 — Presets are image-led cards

Home and Built-in Presets use cards containing a sample image, Preset name, Workflow, concise creative intent and a visible Apply or Remix action. The image communicates direction but never guarantees generated output.

### UI-RULE-006 — Field Encyclopedia is product knowledge

Field Encyclopedia is read-only and searchable. Configuration fields link to the matching knowledge entry. Opening and returning from an entry must preserve the active draft.

### UI-RULE-007 — One design system, two rhythms

Home and Built-in may use editorial scale, strong imagery and expressive composition. Build, My Prompts and Workspace use denser grids, stable control placement and lower visual noise. Shared tokens keep both rhythms recognizably one product.

## Build form

### UI-RULE-008 — Divide configuration by collapsible category

Build groups Workflow fields into labelled disclosure sections rather than rendering one uninterrupted form. Each group header shows its category, order and a compact status such as field count, Preset defaults, customized count, warning or error count.

### UI-RULE-009 — Sensible disclosure defaults

Open the first one or two groups needed to begin; collapse later groups. Preserve each group's open state during the draft session. The user may open multiple groups at once.

### UI-RULE-010 — Validation reveals the correction location

When structural validation fails, automatically open the first affected group, move focus to its summary or first invalid field and expose all affected fields. Art-direction warnings use the same location mapping but do not become structural errors. Never collapse a group while it contains the user's current correction target.

### UI-RULE-011 — Disclosure controls are keyboard controls

Use semantic `details` and `summary` or a WAI-ARIA-equivalent disclosure implementation. Enter and Space toggle a group. Focus order follows the visible form order. Collapsed controls are removed from the tab sequence.

### UI-RULE-012 — Generated Prompt remains independently editable

The generated Prompt can be edited as text. Editing it does not reverse-update configured options. Regenerating an edited Prompt requires confirmation.

## Icons

### UI-RULE-013 — Icons supplement labels

Use one consistent outlined icon family for primary navigation, configuration group summaries and high-value actions. Icons accompany text; they do not replace text labels in MVP navigation or forms.

### UI-RULE-014 — Keep the icon system small

Use only icons with navigation or action value. Do not add an icon to every label or line of copy. Keep a consistent stroke, optical size and alignment. Mark decorative icon instances `aria-hidden="true"`.

### UI-RULE-015 — Avoid a runtime dependency solely for icons

For the TypeScript-first implementation, bundle an audited local SVG subset from one established MIT-licensed icon family, or use an already approved icon dependency. Do not hand-draw unrelated icons and do not add a package solely to decorate a mockup.

## Workflow and Preset catalogue management

### UI-RULE-016 — Static catalogue is the MVP authoring model

Workflow definitions, field groups, field definitions, Presets, validation rules and knowledge entries remain versioned TypeScript or JSON source files validated at build time. Manual source authoring is acceptable for the first MVP.

### UI-RULE-017 — Design the schema for future administration

Every catalogue entity uses a stable identifier and explicit schema version. Runtime UI consumes the canonical catalogue through a small repository or service boundary so a later Admin tool can write the same structure without rewriting Build.

### UI-RULE-018 — Do not build a generic form builder in MVP

A drag-and-drop form builder, arbitrary component palette, conditional-logic designer, permissions system and publishing workflow are outside MVP scope. They are introduced only after catalogue authoring becomes a real operational bottleneck.

### UI-RULE-019 — Use the smallest future Admin progression

1. **MVP:** source-authored catalogue, schema validation and preview fixtures.
2. **Post-MVP if needed:** protected Workflow and Preset CRUD over the canonical schema, including ordered field groups and defaults.
3. **Later only if proven:** narrow field-definition editor, draft/review/publish states, asset upload and database persistence.

### UI-RULE-020 — Preset CRUD is subordinate to Workflow ownership

A Preset belongs to exactly one Workflow, references only fields defined by that Workflow and stores defaults by stable field ID. Deleting or changing a Workflow or field must pass referential validation before publication.

## Review gate

A UI output fails review when it:

- uses Build as the homepage;
- removes sample imagery from Preset discovery;
- renders Build as an uninterrupted field wall;
- hides primary actions behind hover;
- replaces text navigation with unexplained icon-only controls;
- places Admin controls inside the user's Workspace;
- adds a generic form builder or database to the MVP without an approved requirement;
- mixes Vietnamese and English in the MVP interface;
- changes structural-error and art-direction-warning semantics.

## Decision record

| ID | Decision | Status | Consequence |
|---|---|---|---|
| DR-014 | Build uses collapsible configuration categories with validation-aware reveal behavior. | Accepted | Restore category scanning without hiding correction targets. |
| DR-015 | Navigation and high-value actions use one labelled icon system. | Accepted | Faster recognition without icon-only ambiguity or decorative dependency growth. |
| DR-016 | MVP catalogue management remains source-authored; a protected Admin surface and narrow schema editor are deferred. | Accepted | Ship the Workspace + Workflow MVP sooner while preserving a migration path to managed catalogue CRUD. |

