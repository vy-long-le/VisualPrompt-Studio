# VisualPrompt Studio — Stage 6 Mockup Brief v1.2

**Status:** Current visual-generation brief  
**Primary rules:** `04_Frontend_Design/Style_Decisions/Minimalist/VisualPrompt_Studio_UI_Generation_Rules_v1.0.md`  
**Replaces:** Stage 6 Mockup Brief v1.1

## Objective

Validate the complete MVP information architecture before DOC-06 while restoring fast scanning in Build. The visual baseline covers product discovery, Preset comparison, domain learning, grouped prompt configuration and saved-prompt management.

## Design read

VisualPrompt Studio is a creative-direction product for individual users. Discovery pages should feel authored and image-led; task pages should feel calm, precise and productive.

| Surface | Visual variance | Motion | Density | Priority |
|---|---:|---:|---:|---|
| Home and Built-in | 7/10 | 3/10 | 4/10 | Communicate creative direction and Preset differences |
| Field Encyclopedia | 5/10 | 2/10 | 5/10 | Reading, lookup and domain learning |
| Build and My Prompts | 4/10 | 2/10 | 6/10 | Fast scanning, validation recovery and keyboard completion |

## Mandatory Stage 6 rules

- Home is the default entry; Build is explicit.
- English is the only MVP UI language.
- Presets are image-led cards on Home and Built-in.
- Field Encyclopedia is read-only and linked from Build fields.
- Build fields are divided into collapsible category groups.
- The first one or two Build groups open by default; later groups show compact status summaries.
- Structural errors open and identify affected groups and fields; warnings identify their location without becoming blocking errors.
- Primary navigation and high-value actions use one icon family with visible text labels.
- Workspace remains user-owned. Future Admin tooling is separate and protected.
- Workflow, Preset and field catalogue authoring remains static and schema-validated in MVP.

## Current screen set

### M00 — Home desktop v1.2

- Generic product explanation, not the Build form.
- Available and research-pending Workflow cards.
- Featured Preset cards with sample image, creative intent and Remix.
- Labelled icon navigation.

### M01 — Build desktop v1.2

- Prompt name, destination and Preset remain visible before category groups.
- Product identity and Lighting and composition are open by default.
- Camera and optics, Materials and styling, and Output and guardrails are collapsed with field and customization summaries.
- Generated Prompt remains an independently editable text surface.
- Save and Generate use text plus high-value action icons.

### M02 — My Prompts desktop v1.2

- Workspace, No Project and Project structure.
- Search by prompt name and filter by created date and Project.
- Labelled icon navigation.

### M07 — Built-in desktop v1.2

- Searchable image-led Preset catalogue.
- Sample images are direction references, not output guarantees.
- Labelled icon navigation.

### M08 — Field Encyclopedia desktop v1.2

- Category navigation, search, entry list and article panel.
- Definition, effect, example, caveats and related fields.
- Labelled icon navigation.

## Workflow and Preset management boundary

The screen set intentionally contains no Admin page. A future protected Admin surface may manage Workflow and Preset catalogue records through the same canonical schema consumed by the product. It must not appear in normal Workspace navigation. A generic drag-and-drop form builder is not part of the MVP.

## Visual acceptance checks

1. No horizontal overflow at 1600 px.
2. No missing Preset imagery.
3. No Vietnamese production UI copy.
4. Every primary navigation item combines icon and label.
5. Build category boundaries, open state and collapsed summaries are visible without scrolling through every field.
6. Generate, Save, Apply and Remix remain visible without hover.
7. Admin concepts do not enter the user Workspace shell.

