# VisualPrompt Studio — Stage 6 Visual Mockup Brief

Version: 1.0  
Date: 2026-10-10  
Status: Generation baseline

## Purpose

Create a small, implementation-readable mockup set that tests the Product MVP vertical slice defined by DOC-04 and DOC-05 before DOC-06 is written. These are product UI references, not marketing artwork and not final portfolio presentation images.

## Source authority

1. DOC-05 v1.1 controls layout, interaction, copy, state behavior, accessibility, and the Minimalist Product Utility visual system.
2. DOC-04 v1.5 controls frontend boundaries and accepted ADRs.
3. DISC-01 v1.0 controls Product field names, field groups, Presets, and V01–V14 validation meaning.
4. `minimalist-ui` supplies visual discipline only where it does not conflict with DOC-05.
5. `imagegen-frontend-web` supplies the one-horizontal-image-per-screen generation and consistency rules.

## Locked visual direction

- Product utility workspace, not a landing page, analytics dashboard, or visual playground.
- Warm canvas `#F7F6F3`, white surfaces, charcoal text `#20201E`, muted text `#656660`, border `#DADBD6`, restrained blue accent `#315C8A`.
- Semantic backgrounds: error `#FDEBEC`, warning `#FBF3DB`, success `#EDF3EC`.
- System sans-serif UI; system monospace only for generated Markdown.
- One-pixel borders, 6 px controls, 8 px panels and dialogs, no normal-panel shadow.
- No gradients, glassmorphism, decorative hero art, stock photography, fake charts, generic card-grid dashboard, icon-library dependency, or scroll animation.
- Native-looking controls, visible labels, readable helper text, visible focus, and state text in addition to color.

## Shared product shell

- Header: `VisualPrompt Studio`, current record or view title, observable save state.
- Workspace navigation: `Build`, `Built-in`, `My Prompts`, `No Project`, then Projects.
- No `Delete Workspace` action.
- Product terminology is fixed: Workspace, Project, No Project, Workflow, Preset, Configuration, Prompt.

## Mockup set — six independent horizontal images

### M01 — Build desktop / generated and saved

- 1440-style desktop composition with three regions: 248 px navigation, flexible Configuration, 400 px Prompt review.
- Selected Workflow: `Product Advertising and Photography`.
- Selected Preset: `Sculptural Studio Hero`.
- Prompt name: `Ivory Ritual Launch`.
- Destination: `Campaign Launch`; repeat `Save to Campaign Launch` near the primary action.
- Show a believable subset of the nine groups, with `Nhận diện sản phẩm` and `Mục tiêu và kênh` open and later groups represented as flat disclosure rows.
- Generated Markdown remains visible in an editable textarea.
- Actions: `Generate Prompt`, `Copy`, `Regenerate`; status: `Saved to Campaign Launch at 10:42.`

### M02 — My Prompts desktop / results

- Same shell and palette; `My Prompts` selected.
- Toolbar: search by name, created-date filter, Project filter, clear action.
- Results use a readable list or table, not dashboard cards.
- Example records: `Ivory Ritual Launch`, `Clean Catalog Bottle`, `Morning Desk Context`, `Macro Pump Detail`.
- Each row shows Workflow, Project or No Project, created and updated dates, and a compact actions control.
- Include one restrained selected/focus state and an explicit `Build a prompt` action.

### M03 — Build narrow viewport / responsive task order

- One horizontal presentation image containing one centered mobile-width application viewport, not multiple phone mockups.
- Task order: prompt name and destination; Workflow and Preset; Configuration groups; Generate; Prompt review.
- Workspace navigation becomes a labeled native disclosure or select.
- No horizontal page scroll; 16 px gutters; controls at least 40 px high.
- Show enough of the form to communicate vertical stacking and disclosure behavior.

### M04 — Blocking validation errors

- Build desktop with two V01–V06 blocking errors after Generate.
- Error summary reads `Fix 2 errors before generating.` and includes links to affected fields.
- `Nhận diện sản phẩm` opens automatically.
- Inline errors identify `Product description` and `Use case`; values remain visible; the first invalid field has a visible 2 px focus ring.
- Prompt review remains empty and compile/save have not run.
- No `Generate anyway` action.

### M05 — Art-direction warning confirmation

- Build desktop behind a single accessible modal.
- Dialog title: `Review art direction warnings`.
- Explain that generation can continue but listed combinations may weaken the intended result.
- Two warning items identify affected fields and expose `Edit fields` links.
- Actions: `Cancel and review` and `Generate anyway`.
- Warning uses amber semantics; it must not look like an error or policy violation.

### M06 — Delete Project with Prompts

- Same Workspace shell behind a focused decision dialog.
- Title names `Campaign Launch`; body states `12 prompts` are affected.
- Three strategies: `Move to No Project` selected as safe default; `Move to existing Project` with target select; `Delete prompts` separated and destructive, not selected.
- Actions: `Cancel` and `Move prompts and delete Project`.
- Consequences remain visible; no destructive filled-red primary button because the safe strategy is selected.

## Global generation constraints

- Use case: `ui-mockup`.
- One horizontal image per mockup; never combine several screens or states into a collage.
- High-fidelity product UI reference with implementation-readable hierarchy and spacing.
- Same palette, typography, radius, border, and navigation shell across all six images.
- Text should be short, exact where supplied above, and free of invented marketing claims.
- Avoid illegible microcopy, distorted controls, fake browser chrome, macOS traffic-light decoration, watermarks, device hands, and decorative imagery.
- If exact generated text has minor artifacts, judge the image primarily on structure; implementation copy remains governed by DOC-05.

## Review gate before DOC-06

The set passes only if it exposes no contradiction in region layout, responsive order, validation severity, Prompt editing, save destination, Workspace navigation, or destructive Project behavior. Any discovered contradiction is resolved in DOC-04 or DOC-05 before DOC-06 begins.
