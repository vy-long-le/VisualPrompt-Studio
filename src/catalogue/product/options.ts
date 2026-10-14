import type { ProductFieldId } from "../ids";
import type { ProductFieldOptionDefinition } from "../types";

export const PRODUCT_FIELD_OPTION_DICTIONARY = {
  "product-description": [],
  "reference-mode": [
    {
      id: "reference-mode-v01",
      storedValue: "Description only",
      label: "Description only",
    },
    {
      id: "reference-mode-v02",
      storedValue: "External product reference",
      label: "External product reference",
    },
  ],
  "reference-notes": [],
  "preserve-details": [],
  "use-case": [
    {
      id: "use-case-v01",
      storedValue: "Google Merchant Center primary listing",
      label: "Google Merchant Center primary listing",
    },
    {
      id: "use-case-v02",
      storedValue: "Product gallery image",
      label: "Product gallery image",
    },
    {
      id: "use-case-v03",
      storedValue: "Campaign advertisement",
      label: "Campaign advertisement",
    },
    {
      id: "use-case-v04",
      storedValue: "Editorial product concept",
      label: "Editorial product concept",
    },
  ],
  "creative-objective": [
    {
      id: "creative-objective-v01",
      storedValue: "Show the product silhouette clearly",
      label: "Show the product silhouette clearly",
    },
    {
      id: "creative-objective-v02",
      storedValue: "Introduce a product launch",
      label: "Introduce a product launch",
    },
    {
      id: "creative-objective-v03",
      storedValue: "Show everyday product context",
      label: "Show everyday product context",
    },
    {
      id: "creative-objective-v04",
      storedValue: "Reveal a specific construction detail",
      label: "Reveal a specific construction detail",
    },
    {
      id: "creative-objective-v05",
      storedValue: "Show relative size",
      label: "Show relative size",
    },
    {
      id: "creative-objective-v06",
      storedValue: "Explain the included collection",
      label: "Explain the included collection",
    },
    {
      id: "creative-objective-v07",
      storedValue: "Create a campaign focal point",
      label: "Create a campaign focal point",
    },
  ],
  audience: [],
  "placement-surface": [
    {
      id: "placement-surface-v01",
      storedValue: "White seamless sweep",
      label: "White seamless sweep",
    },
    {
      id: "placement-surface-v02",
      storedValue: "Matte stone plinth",
      label: "Matte stone plinth",
    },
    {
      id: "placement-surface-v03",
      storedValue: "Brushed concrete slab",
      label: "Brushed concrete slab",
    },
    {
      id: "placement-surface-v04",
      storedValue: "Warm wood tabletop",
      label: "Warm wood tabletop",
    },
    {
      id: "placement-surface-v05",
      storedValue: "Raw linen surface",
      label: "Raw linen surface",
    },
    {
      id: "placement-surface-v06",
      storedValue: "Smoked glass platform",
      label: "Smoked glass platform",
    },
    {
      id: "placement-surface-v07",
      storedValue: "Held in a hand",
      label: "Held in a hand",
    },
  ],
  environment: [
    {
      id: "environment-v01",
      storedValue: "Plain white studio",
      label: "Plain white studio",
    },
    {
      id: "environment-v02",
      storedValue: "Controlled tonal studio",
      label: "Controlled tonal studio",
    },
    {
      id: "environment-v03",
      storedValue: "Home workspace by a window",
      label: "Home workspace by a window",
    },
    {
      id: "environment-v04",
      storedValue: "Bathroom counter with daylight",
      label: "Bathroom counter with daylight",
    },
    {
      id: "environment-v05",
      storedValue: "Outdoor running track",
      label: "Outdoor running track",
    },
    {
      id: "environment-v06",
      storedValue: "Urban street at dusk",
      label: "Urban street at dusk",
    },
    {
      id: "environment-v07",
      storedValue: "Minimal architectural set",
      label: "Minimal architectural set",
    },
  ],
  props: [],
  "product-arrangement": [
    {
      id: "product-arrangement-v01",
      storedValue: "Single upright product",
      label: "Single upright product",
    },
    {
      id: "product-arrangement-v02",
      storedValue: "Single product resting at an angle",
      label: "Single product resting at an angle",
    },
    {
      id: "product-arrangement-v03",
      storedValue: "Overhead flat lay arrangement",
      label: "Overhead flat lay arrangement",
    },
    {
      id: "product-arrangement-v04",
      storedValue: "Spaced group of included items",
      label: "Spaced group of included items",
    },
    {
      id: "product-arrangement-v05",
      storedValue: "Product beside its supplied packaging",
      label: "Product beside its supplied packaging",
    },
    {
      id: "product-arrangement-v06",
      storedValue: "Product held for size context",
      label: "Product held for size context",
    },
  ],
  "shot-size": [
    {
      id: "shot-size-v01",
      storedValue: "Wide contextual shot",
      label: "Wide contextual shot",
    },
    {
      id: "shot-size-v02",
      storedValue: "Medium product shot",
      label: "Medium product shot",
    },
    {
      id: "shot-size-v03",
      storedValue: "Close-up with the whole product visible",
      label: "Close-up with the whole product visible",
    },
    {
      id: "shot-size-v04",
      storedValue: "Tight detail crop",
      label: "Tight detail crop",
    },
    {
      id: "shot-size-v05",
      storedValue: "Macro detail view",
      label: "Macro detail view",
    },
  ],
  "camera-angle": [
    {
      id: "camera-angle-v01",
      storedValue: "Straight-on at product level",
      label: "Straight-on at product level",
    },
    {
      id: "camera-angle-v02",
      storedValue: "Three-quarter view at product level",
      label: "Three-quarter view at product level",
    },
    {
      id: "camera-angle-v03",
      storedValue: "Overhead top-down",
      label: "Overhead top-down",
    },
    {
      id: "camera-angle-v04",
      storedValue: "Low angle",
      label: "Low angle",
    },
    {
      id: "camera-angle-v05",
      storedValue: "High angle looking down",
      label: "High angle looking down",
    },
    {
      id: "camera-angle-v06",
      storedValue: "Side profile",
      label: "Side profile",
    },
  ],
  composition: [
    {
      id: "composition-v01",
      storedValue: "Centered with balanced margins",
      label: "Centered with balanced margins",
    },
    {
      id: "composition-v02",
      storedValue: "Product on the left third",
      label: "Product on the left third",
    },
    {
      id: "composition-v03",
      storedValue: "Product on the right third",
      label: "Product on the right third",
    },
    {
      id: "composition-v04",
      storedValue: "Dynamic diagonal",
      label: "Dynamic diagonal",
    },
    {
      id: "composition-v05",
      storedValue: "C-shaped supporting layout",
      label: "C-shaped supporting layout",
    },
    {
      id: "composition-v06",
      storedValue: "Ordered grid of included items",
      label: "Ordered grid of included items",
    },
    {
      id: "composition-v07",
      storedValue: "Asymmetric hero composition",
      label: "Asymmetric hero composition",
    },
  ],
  "focus-treatment": [
    {
      id: "focus-treatment-v01",
      storedValue: "Whole product sharp",
      label: "Whole product sharp",
    },
    {
      id: "focus-treatment-v02",
      storedValue: "Whole product sharp with a softly separated background",
      label: "Whole product sharp with a softly separated background",
    },
    {
      id: "focus-treatment-v03",
      storedValue: "Selected detail sharp with gentle falloff",
      label: "Selected detail sharp with gentle falloff",
    },
    {
      id: "focus-treatment-v04",
      storedValue: "All included products readable",
      label: "All included products readable",
    },
    {
      id: "focus-treatment-v05",
      storedValue: "Deep scene focus",
      label: "Deep scene focus",
    },
  ],
  "lighting-style": [
    {
      id: "lighting-style-v01",
      storedValue: "Soft diffused studio key with gentle fill",
      label: "Soft diffused studio key with gentle fill",
    },
    {
      id: "lighting-style-v02",
      storedValue: "Broad high-key illumination",
      label: "Broad high-key illumination",
    },
    {
      id: "lighting-style-v03",
      storedValue: "Window daylight with gentle fill",
      label: "Window daylight with gentle fill",
    },
    {
      id: "lighting-style-v04",
      storedValue: "Directional key with controlled fill",
      label: "Directional key with controlled fill",
    },
    {
      id: "lighting-style-v05",
      storedValue: "Rim-accent lighting with a readable front",
      label: "Rim-accent lighting with a readable front",
    },
    {
      id: "lighting-style-v06",
      storedValue: "Hard directional light",
      label: "Hard directional light",
    },
  ],
  "light-direction": [
    {
      id: "light-direction-v01",
      storedValue: "Camera-left side light",
      label: "Camera-left side light",
    },
    {
      id: "light-direction-v02",
      storedValue: "Camera-right side light",
      label: "Camera-right side light",
    },
    {
      id: "light-direction-v03",
      storedValue: "Front and slightly above",
      label: "Front and slightly above",
    },
    {
      id: "light-direction-v04",
      storedValue: "Back edge with frontal fill",
      label: "Back edge with frontal fill",
    },
    {
      id: "light-direction-v05",
      storedValue: "Top light with side fill",
      label: "Top light with side fill",
    },
  ],
  "shadow-treatment": [
    {
      id: "shadow-treatment-v01",
      storedValue: "Soft contact shadow",
      label: "Soft contact shadow",
    },
    {
      id: "shadow-treatment-v02",
      storedValue: "Subtle directional shadow",
      label: "Subtle directional shadow",
    },
    {
      id: "shadow-treatment-v03",
      storedValue: "Crisp graphic shadow",
      label: "Crisp graphic shadow",
    },
    {
      id: "shadow-treatment-v04",
      storedValue: "Deep controlled shadows",
      label: "Deep controlled shadows",
    },
    {
      id: "shadow-treatment-v05",
      storedValue: "Minimal visible shadow",
      label: "Minimal visible shadow",
    },
  ],
  "material-emphasis": [
    {
      id: "material-emphasis-v01",
      storedValue: "Natural matte texture",
      label: "Natural matte texture",
    },
    {
      id: "material-emphasis-v02",
      storedValue: "Controlled reflective highlights",
      label: "Controlled reflective highlights",
    },
    {
      id: "material-emphasis-v03",
      storedValue: "Readable glass edges and label",
      label: "Readable glass edges and label",
    },
    {
      id: "material-emphasis-v04",
      storedValue: "Fine stitching or construction texture",
      label: "Fine stitching or construction texture",
    },
    {
      id: "material-emphasis-v05",
      storedValue: "Consistent fabric weave",
      label: "Consistent fabric weave",
    },
    {
      id: "material-emphasis-v06",
      storedValue: "Authentic surface without added gloss",
      label: "Authentic surface without added gloss",
    },
  ],
  palette: [
    {
      id: "palette-v01",
      storedValue: "Neutral white and gray scene",
      label: "Neutral white and gray scene",
    },
    {
      id: "palette-v02",
      storedValue: "Warm ivory and charcoal scene",
      label: "Warm ivory and charcoal scene",
    },
    {
      id: "palette-v03",
      storedValue: "Tonal stone and beige scene",
      label: "Tonal stone and beige scene",
    },
    {
      id: "palette-v04",
      storedValue: "Deep navy and restrained silver scene",
      label: "Deep navy and restrained silver scene",
    },
    {
      id: "palette-v05",
      storedValue: "Muted natural greens and browns",
      label: "Muted natural greens and browns",
    },
    {
      id: "palette-v06",
      storedValue: "Bold complementary scene accents",
      label: "Bold complementary scene accents",
    },
  ],
  mood: [
    {
      id: "mood-v01",
      storedValue: "Clear and informative",
      label: "Clear and informative",
    },
    {
      id: "mood-v02",
      storedValue: "Calm and approachable",
      label: "Calm and approachable",
    },
    {
      id: "mood-v03",
      storedValue: "Refined and restrained",
      label: "Refined and restrained",
    },
    {
      id: "mood-v04",
      storedValue: "Energetic and purposeful",
      label: "Energetic and purposeful",
    },
    {
      id: "mood-v05",
      storedValue: "Playful and bright",
      label: "Playful and bright",
    },
    {
      id: "mood-v06",
      storedValue: "Precise and tactile",
      label: "Precise and tactile",
    },
  ],
  "visual-treatment": [
    {
      id: "visual-treatment-v01",
      storedValue: "Photorealistic commercial product photography",
      label: "Photorealistic commercial product photography",
    },
    {
      id: "visual-treatment-v02",
      storedValue: "Natural lifestyle photography",
      label: "Natural lifestyle photography",
    },
    {
      id: "visual-treatment-v03",
      storedValue: "Editorial still-life photography",
      label: "Editorial still-life photography",
    },
    {
      id: "visual-treatment-v04",
      storedValue: "Graphic commercial photography",
      label: "Graphic commercial photography",
    },
    {
      id: "visual-treatment-v05",
      storedValue: "Stylized photographic campaign composite",
      label: "Stylized photographic campaign composite",
    },
  ],
  "interaction-action": [],
  "detail-target": [],
  "scale-cue": [],
  "copy-treatment": [
    {
      id: "copy-treatment-v01",
      storedValue: "No added copy",
      label: "No added copy",
    },
    {
      id: "copy-treatment-v02",
      storedValue: "Reserve space for later copy",
      label: "Reserve space for later copy",
    },
    {
      id: "copy-treatment-v03",
      storedValue: "Render supplied copy",
      label: "Render supplied copy",
    },
  ],
  "copy-space": [
    {
      id: "copy-space-v01",
      storedValue: "Uncluttered right third",
      label: "Uncluttered right third",
    },
    {
      id: "copy-space-v02",
      storedValue: "Uncluttered left third",
      label: "Uncluttered left third",
    },
    {
      id: "copy-space-v03",
      storedValue: "Open upper area",
      label: "Open upper area",
    },
    {
      id: "copy-space-v04",
      storedValue: "Open lower area",
      label: "Open lower area",
    },
    {
      id: "copy-space-v05",
      storedValue: "Generous balanced breathing room",
      label: "Generous balanced breathing room",
    },
  ],
  "exact-copy": [],
  "aspect-ratio": [
    {
      id: "aspect-ratio-v01",
      storedValue: "1:1",
      label: "1:1",
    },
    {
      id: "aspect-ratio-v02",
      storedValue: "4:5",
      label: "4:5",
    },
    {
      id: "aspect-ratio-v03",
      storedValue: "9:16",
      label: "9:16",
    },
    {
      id: "aspect-ratio-v04",
      storedValue: "16:9",
      label: "16:9",
    },
    {
      id: "aspect-ratio-v05",
      storedValue: "3:2",
      label: "3:2",
    },
  ],
  exclusions: [],
} as const satisfies Readonly<
  Record<ProductFieldId, readonly ProductFieldOptionDefinition[]>
>;
