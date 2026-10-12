# VisualPrompt Studio — Stage 6 Mockup Brief v1.4

**Status:** Current visual-generation brief  
**Primary rules:** `04_Frontend_Design/Style_Decisions/Minimalist/VisualPrompt_Studio_UI_Generation_Rules_v1.2.md`  
**Replaces:** Stage 6 Mockup Brief v1.3

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
- Lucide outline icons use an 18 px nominal size and 2 px stroke.
- Controls use a 7 px radius; cards, panels, tables and media containers use a 10 px radius.
- Selecting a Preset in Build immediately shows its sample image, name and creative intent beside the form.
- Learn opens compact field help, then offers a same-tab deep link to the exact full Encyclopedia entry while preserving the draft.
- Reset to Preset restores only Preset-controlled values after confirmation and preserves user-owned content and generated Prompt text.
- Persistent selected items change both label and icon color while retaining the active rail, background and weight.
- Workspace remains user-owned. Future Admin tooling is separate and protected.
- Workflow, Preset and field catalogue authoring remains static and schema-validated in MVP.

## Current screen set

### M00 — Home desktop v1.4

- Generic product explanation, not the Build form.
- Available and research-pending Workflow cards.
- Featured Preset cards with sample image, creative intent and Remix.
- Labelled icon navigation.

### M01 — Build desktop v1.4

- Prompt name, destination and Preset remain visible before category groups.
- The selected Preset sample appears immediately below the selector with its name, intent, disclaimer and details link.
- Product identity and Lighting and composition are open by default.
- Camera and optics, Materials and styling, and Output and guardrails are collapsed with field and customization summaries.
- Generated Prompt remains an independently editable text surface.
- Learn controls open compact field guidance; full guidance is deep-linked to the exact Encyclopedia entry.
- Reset to Preset appears with an active customized Preset and confirms its narrow restoration scope.
- The selected Project folder icon changes color and fill together with its label and active container.
- Save and Generate use text plus high-value action icons.

### M02 — My Prompts desktop v1.4

- Workspace, No Project and Project structure.
- Search by prompt name and filter by created date and Project.
- Labelled icon navigation.

### M07 — Built-in desktop v1.4

- Searchable image-led Preset catalogue.
- Sample images are direction references, not output guarantees.
- Labelled icon navigation.

### M08 — Field Encyclopedia desktop v1.4

- Category navigation, search, entry list and article panel.
- Definition, effect, example, caveats and related fields.
- Labelled icon navigation.

### M09 — Field Learn popover v1.4

- Compact definition and effect beside the exact Build field.
- Explicit action to open the full exact Encyclopedia article.
- Escape, outside click and close-control dismissal with focus restoration.

### M10 — Reset to Preset confirmation v1.4

- Confirms the active Preset target and customized-field count.
- States what is restored and what is preserved.
- Does not regenerate or overwrite the generated Prompt.

## Workflow and Preset management boundary

The screen set intentionally contains no Admin page. Projects and Saved Prompts already demonstrate complete user-facing CRUD. Workflow CRUD is not added merely as a demo because a Workflow that cannot safely own fields, Presets, validation rules, templates and knowledge entries is not a usable runtime Workflow. A future protected Admin surface may manage the canonical catalogue after the MVP. It must not appear in normal Workspace navigation. A generic drag-and-drop form builder and an under-developed Preset manager are not part of the MVP.

## Visual acceptance checks

1. No horizontal overflow at 1600 px.
2. No missing Preset imagery.
3. No Vietnamese production UI copy.
4. Every primary navigation item combines icon and label.
5. Build category boundaries, open state and collapsed summaries are visible without scrolling through every field.
6. Generate, Save, Apply and Remix remain visible without hover.
7. Admin concepts do not enter the user Workspace shell.
8. Build shows the selected Preset image and intent before the configuration groups.
9. Lucide icons render locally with no missing symbols.
10. Controls and containers follow the 7 px / 10 px radius tokens.
11. Every Learn control opens compact help for its exact field; the full-article URL carries the field slug and return context.
12. Escape closes Learn help and returns focus to the trigger.
13. Reset to Preset restores customized Preset-controlled values while preserving the generated Prompt.
14. Persistent selected Projects change icon and label color and retain at least one non-color selection cue.

