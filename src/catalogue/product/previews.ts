import type {
  ProductPreviewAssetDefinition,
  ProductPreviewAssetProvenance,
  ProductPreviewFallbackDefinition,
} from "../types";

const PREVIEW_ASSET_DISCLAIMER =
  "Creative-direction reference only; it does not guarantee generated output.";

const PREVIEW_ASSET_PROVENANCE = {
  generationMethod: "Built-in AI raster image generation",
  sourceRecord:
    "docs/04_Frontend_Design/Mockups/Assets/Preset_Previews/ASSET_PROVENANCE.md",
  compilerTraceAvailable: false,
} as const satisfies ProductPreviewAssetProvenance;

export const PRODUCT_PREVIEW_ASSETS = [
  {
    id: "preset-color-block",
    src: "/assets/preset-previews/preset-color-block.png",
    alt: "A vivid red sculptural desk lamp on a cobalt block against a warm cream background.",
    creativeIntent:
      "Vivid red sculptural desk lamp on a cobalt block against warm cream, hard flash, crisp graphic shadow and disciplined color geometry.",
    disclaimer: PREVIEW_ASSET_DISCLAIMER,
    provenance: PREVIEW_ASSET_PROVENANCE,
  },
  {
    id: "preset-hard-light-still-life",
    src: "/assets/preset-previews/preset-hard-light-still-life.png",
    alt: "A matte bone-white skincare bottle on warm stone with hard side light and architectural shadows.",
    creativeIntent:
      "Matte bone-white ceramic skincare bottle on warm off-white stone, hard late-afternoon side light, architectural shadows, quiet editorial luxury, chalk and sand palette with one muted cobalt accent.",
    disclaimer: PREVIEW_ASSET_DISCLAIMER,
    provenance: PREVIEW_ASSET_PROVENANCE,
  },
  {
    id: "preset-neon-reflection",
    src: "/assets/preset-previews/preset-neon-reflection.png",
    alt: "A translucent amber fragrance bottle above black acrylic and concentric water ripples with electric-blue rim light.",
    creativeIntent:
      "Translucent amber fragrance bottle above polished black acrylic and concentric water ripples, cool graphite studio, narrow electric-blue rim light and silver fill.",
    disclaimer: PREVIEW_ASSET_DISCLAIMER,
    provenance: PREVIEW_ASSET_PROVENANCE,
  },
  {
    id: "preset-refracted-glass",
    src: "/assets/preset-previews/preset-refracted-glass.png",
    alt: "An emerald glass bottle viewed through curved textured glass against a dark forest background.",
    creativeIntent:
      "Emerald glass bottle viewed through curved textured glass, controlled optical distortion, dark forest background and concentrated lime backlight.",
    disclaimer: PREVIEW_ASSET_DISCLAIMER,
    provenance: PREVIEW_ASSET_PROVENANCE,
  },
  {
    id: "preset-shadow-luxury",
    src: "/assets/preset-previews/preset-shadow-luxury.png",
    alt: "A minimal black wristwatch on charcoal fabric and basalt stone under controlled low-key light.",
    creativeIntent:
      "Minimal black wristwatch on charcoal fabric and basalt stone, low-key top light, black-on-black texture study and controlled specular edges.",
    disclaimer: PREVIEW_ASSET_DISCLAIMER,
    provenance: PREVIEW_ASSET_PROVENANCE,
  },
  {
    id: "preset-soft-catalog",
    src: "/assets/preset-previews/preset-soft-catalog.png",
    alt: "Brushed stainless-steel earbuds and their case arranged on pale grey paper with a small vermilion prop.",
    creativeIntent:
      "Brushed stainless-steel earbuds and case on pale grey paper, exact geometric spacing, flat soft daylight, high-key editorial catalogue clarity and one tiny vermilion prop.",
    disclaimer: PREVIEW_ASSET_DISCLAIMER,
    provenance: PREVIEW_ASSET_PROVENANCE,
  },
] as const satisfies readonly ProductPreviewAssetDefinition[];

export const PRODUCT_PREVIEW_FALLBACK = {
  label: "Preview reference unavailable",
  accessibleDescription:
    "No approved preview reference is available for this Preset. Its name, creative intent, details, and action remain available.",
  disclaimer:
    "Preview availability does not change the Preset definition or guarantee generated output.",
} as const satisfies ProductPreviewFallbackDefinition;
