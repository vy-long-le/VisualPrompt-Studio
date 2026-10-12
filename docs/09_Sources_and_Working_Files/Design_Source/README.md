# VisualPrompt Studio — Design Source Index

This folder contains editable sources and generation briefs. It is intentionally separate from stakeholder-facing screenshots.

## Current

| Source | Status | Produces or governs |
|---|---|---|
| `VisualPrompt_Studio_Stage6_Mockup_Brief_v1.4.md` | Current generation brief | Scope and acceptance checks for Stage 6 v1.4 |
| `Stage6_v1.4/visualprompt-mockups.html` | Current editable HTML source | M00, M01, M02, M07, M08, M09 and M10 v1.4 PNGs plus interaction behavior |
| `Stage6_v1.4/lucide.min.js` | Local rendering dependency | Reproducible Lucide outline icons in the HTML mockup |
| `Stage6_v1.4/capture-mockups.mjs` | Current capture script | Re-renders all v1.4 page and state screenshots |
| `Stage6_v1.4/verify-interactions.mjs` | Current interaction check | Verifies Learn deep-link/focus behavior, reset scope and selected Project icon state |

## Historical

Earlier briefs and HTML source folders live in `Previous_Versions/`. They are preserved for traceability but are not implementation inputs.

The authoritative UI rules are outside this working-source folder at:

`../../04_Frontend_Design/Style_Decisions/Minimalist/VisualPrompt_Studio_UI_Generation_Rules_v1.2.md`

