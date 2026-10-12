# VisualPrompt Studio - Stage 6 Visual Mockup Brief

Version: 1.1  
Date: 2026-10-10  
Status: Revised discovery and work-surface baseline  
Supersedes: Stage 6 Mockup Brief v1.0

## Purpose

Test the complete MVP information architecture before DOC-06. The visual baseline now covers product discovery, Preset comparison, domain learning, prompt construction and saved-prompt management. It no longer treats Build as the homepage.

## Source authority

1. DOC-05 v1.2 controls information architecture, interaction, copy, state behavior and visual hierarchy.
2. DOC-04 v1.6 controls frontend boundaries and accepted ADRs.
3. DOC-03 v1.8 controls view state and read-only catalogue contracts.
4. DOC-02 v1.9 controls Home, Built-in, Field Encyclopedia and English-first requirements.
5. DISC-01 v1.0 controls researched Product field content, Presets and V01-V14 validation meaning.

## Design Read

VisualPrompt Studio is a creative-direction product with two different jobs:

- Discovery surfaces help users understand a field, compare directions and choose a starting point.
- Work surfaces help users configure, validate, generate, save and retrieve prompts efficiently.

A single level of visual restraint would weaken one of those jobs. The shared identity comes from typography, spacing, border, color and interaction tokens, not identical page density.

## Visual dials

| Surface | Visual variance | Motion | Information density | Governing priority |
|---|---:|---:|---:|---|
| Home and Built-in | 7/10 | 3/10 | 4/10 | Creative discovery with readable, image-led comparison |
| Build and My Prompts | 3/10 | 2/10 | 5/10 | Workflow productivity, validation recovery and keyboard use |
| Field Encyclopedia | 4/10 | 2/10 | 6/10 | Readable domain knowledge with strong navigation context |

## Locked product decisions

- Home is the default entry.
- English is the only MVP interface and knowledge language.
- Vietnamese is deferred to the polishing phase.
- The MVP exposes no inactive language switch and introduces no localization framework.
- Built-in Presets are image-led cards, not text-only controls.
- Preset images illustrate creative direction and never promise a generated result.
- Field Encyclopedia is read-only knowledge linked from Build fields.
- Product Advertising and Photography is the only research-backed Workflow currently available.
- Unresearched Workflows are labelled Research pending or Coming later.

## Shared shell

- Primary navigation: Home, Build, Built-in, My Prompts, Field Encyclopedia.
- Build and My Prompts also expose Workspace structure: No Project and Projects.
- No Delete Workspace action exists.
- Product terminology remains fixed: Workspace, Project, No Project, Workflow, Preset, Configuration and Prompt.

## Current visual set

### M00 - Home desktop v1.1

- Generic product explanation, not the Build form.
- Primary action: Start building.
- Secondary action: Explore built-in Presets.
- Workflow cards expose current availability without implying unresearched coverage.
- Featured Preset cards include sample image, name, Workflow, intent and Remix action.

### M01 - Build desktop v1.1

- English-only field copy.
- Full primary navigation includes Home and Field Encyclopedia.
- Field-level Learn actions connect configuration to knowledge.
- Build remains visually calmer and denser than discovery pages.
- Generated Prompt remains separate and editable after generation.

### M02 - My Prompts desktop v1.1

- Workspace summary includes No Project and Projects.
- Search by prompt name plus created-date and Project filters.
- Readable table instead of dashboard cards.
- Full primary navigation uses the revised information architecture.

### M07 - Built-in desktop v1.1

- Six Preset cards display sample images and short creative intent.
- Search, Workflow filter and visual-style filter precede the grid.
- Apply is a visible action, not a hover-only affordance.
- An explicit disclaimer distinguishes reference imagery from output guarantees.

### M08 - Field Encyclopedia desktop v1.1

- Category navigation, field list and article detail are visible at once on desktop.
- An entry explains definition, effect, example direction, caveats and related fields.
- The surface contains no configuration editing controls.

## Retained state references from v1.0

M03-M06 v1.0 remain useful for narrow stacking, structural-error recovery, art-direction-warning confirmation and Project deletion logic. Their old shell and any Vietnamese illustrative labels are superseded by DOC-05 v1.2 and the v1.1 core screens. They must not be used as the final source for global navigation or language copy.

## Preset-preview asset rules

- Assets are bundled locally and referenced by catalogue identifier.
- Each asset has meaningful alternative text and a deterministic fallback.
- Preset images use consistent crops inside a grid.
- Cards remain understandable and operable if an image fails.
- Images contain no logos, labels or readable third-party text.

## Review gate before DOC-06

The Stage 6 gate passes only if the owner approves:

1. Home as the default entry and the primary discovery narrative.
2. Image-led Preset comparison on Home and Built-in.
3. Field Encyclopedia as a first-class but read-only surface.
4. The two-rhythm visual strategy: expressive discovery and restrained work surfaces.
5. English-only MVP copy and honest Research pending states.

Interaction states that depend on focus management, live regions, persistence failure or browser behavior remain executable requirements for DOC-06.
