import { describe, expect, it } from "vitest";
import * as catalogue from "../../../src/catalogue";
import {
  PRODUCT_PRESETS,
  PRODUCT_PREVIEW_ASSET_IDS,
} from "../../../src/catalogue";
import type {
  ProductPreviewAssetDefinition,
  ProductPreviewAssetId,
  ProductPreviewFallbackDefinition,
} from "../../../src/catalogue";

const PREVIEW_ASSET_DISCLAIMER =
  "Creative-direction reference only; it does not guarantee generated output.";

const EXPECTED_PROVENANCE = {
  generationMethod: "Built-in AI raster image generation",
  sourceRecord:
    "docs/04_Frontend_Design/Mockups/Assets/Preset_Previews/ASSET_PROVENANCE.md",
  compilerTraceAvailable: false,
} as const;

const EXPECTED_PREVIEW_ASSETS = [
  {
    id: "preset-color-block",
    src: "/assets/preset-previews/preset-color-block.png",
    creativeIntent:
      "Vivid red sculptural desk lamp on a cobalt block against warm cream, hard flash, crisp graphic shadow and disciplined color geometry.",
  },
  {
    id: "preset-hard-light-still-life",
    src: "/assets/preset-previews/preset-hard-light-still-life.png",
    creativeIntent:
      "Matte bone-white ceramic skincare bottle on warm off-white stone, hard late-afternoon side light, architectural shadows, quiet editorial luxury, chalk and sand palette with one muted cobalt accent.",
  },
  {
    id: "preset-neon-reflection",
    src: "/assets/preset-previews/preset-neon-reflection.png",
    creativeIntent:
      "Translucent amber fragrance bottle above polished black acrylic and concentric water ripples, cool graphite studio, narrow electric-blue rim light and silver fill.",
  },
  {
    id: "preset-refracted-glass",
    src: "/assets/preset-previews/preset-refracted-glass.png",
    creativeIntent:
      "Emerald glass bottle viewed through curved textured glass, controlled optical distortion, dark forest background and concentrated lime backlight.",
  },
  {
    id: "preset-shadow-luxury",
    src: "/assets/preset-previews/preset-shadow-luxury.png",
    creativeIntent:
      "Minimal black wristwatch on charcoal fabric and basalt stone, low-key top light, black-on-black texture study and controlled specular edges.",
  },
  {
    id: "preset-soft-catalog",
    src: "/assets/preset-previews/preset-soft-catalog.png",
    creativeIntent:
      "Brushed stainless-steel earbuds and case on pale grey paper, exact geometric spacing, flat soft daylight, high-key editorial catalogue clarity and one tiny vermilion prop.",
  },
] as const satisfies readonly Pick<
  ProductPreviewAssetDefinition,
  "id" | "src" | "creativeIntent"
>[];

const EXPECTED_MAPPED_PRESETS = [
  {
    presetId: "product-p01",
    previewAssetId: "preset-soft-catalog",
  },
  {
    presetId: "product-p02",
    previewAssetId: "preset-hard-light-still-life",
  },
  {
    presetId: "product-p08",
    previewAssetId: "preset-shadow-luxury",
  },
] as const;

const EXPECTED_FALLBACK_PRESET_IDS = [
  "product-p03",
  "product-p04",
  "product-p05",
  "product-p06",
  "product-p07",
  "product-p09",
  "product-p10",
] as const;

const EXPECTED_UNMAPPED_ASSET_IDS = [
  "preset-color-block",
  "preset-neon-reflection",
  "preset-refracted-glass",
] as const satisfies readonly ProductPreviewAssetId[];

const EXPECTED_FALLBACK = {
  label: "Preview reference unavailable",
  accessibleDescription:
    "No approved preview reference is available for this Preset. Its name, creative intent, details, and action remain available.",
  disclaimer:
    "Preview availability does not change the Preset definition or guarantee generated output.",
} as const satisfies ProductPreviewFallbackDefinition;

function readCatalogueExport<T>(name: string): T | undefined {
  return Reflect.get(catalogue, name) as T | undefined;
}

describe("CAT-06 Product preview mapping and provenance", () => {
  it("publishes one complete asset definition for each canonical preview ID", () => {
    const previewAssets = readCatalogueExport<
      readonly ProductPreviewAssetDefinition[]
    >("PRODUCT_PREVIEW_ASSETS");

    expect(
      previewAssets,
      "PRODUCT_PREVIEW_ASSETS must be exported through src/catalogue",
    ).toBeDefined();

    if (!previewAssets) {
      return;
    }

    expect(previewAssets).toHaveLength(PRODUCT_PREVIEW_ASSET_IDS.length);

    expect(previewAssets.map((asset) => asset.id)).toEqual(
      PRODUCT_PREVIEW_ASSET_IDS,
    );

    expect(new Set(previewAssets.map((asset) => asset.id)).size).toBe(
      PRODUCT_PREVIEW_ASSET_IDS.length,
    );

    expect(new Set(previewAssets.map((asset) => asset.src)).size).toBe(
      PRODUCT_PREVIEW_ASSET_IDS.length,
    );
  });

  it("preserves the approved paths, creative intent, accessibility text, and provenance", () => {
    const previewAssets = readCatalogueExport<
      readonly ProductPreviewAssetDefinition[]
    >("PRODUCT_PREVIEW_ASSETS");

    expect(
      previewAssets,
      "PRODUCT_PREVIEW_ASSETS must be exported through src/catalogue",
    ).toBeDefined();

    if (!previewAssets) {
      return;
    }

    expect(
      previewAssets.map((asset) => ({
        id: asset.id,
        src: asset.src,
        creativeIntent: asset.creativeIntent,
      })),
    ).toEqual(EXPECTED_PREVIEW_ASSETS);

    for (const asset of previewAssets) {
      expect(asset.src.startsWith("/assets/preset-previews/")).toBe(true);
      expect(asset.src.endsWith(".png")).toBe(true);
      expect(asset.alt.trim()).not.toBe("");
      expect(asset.creativeIntent.trim()).not.toBe("");
      expect(asset.disclaimer).toBe(PREVIEW_ASSET_DISCLAIMER);
      expect(asset.provenance).toEqual(EXPECTED_PROVENANCE);
    }
  });

  it("keeps three approved mappings explicit and preserves three assets without inventing mappings", () => {
    const previewAssets = readCatalogueExport<
      readonly ProductPreviewAssetDefinition[]
    >("PRODUCT_PREVIEW_ASSETS");

    expect(
      previewAssets,
      "PRODUCT_PREVIEW_ASSETS must be exported through src/catalogue",
    ).toBeDefined();

    if (!previewAssets) {
      return;
    }

    const mappedPresets = PRODUCT_PRESETS.filter(
      (preset) => preset.previewAssetId !== null,
    ).map((preset) => ({
      presetId: preset.id,
      previewAssetId: preset.previewAssetId,
    }));

    expect(mappedPresets).toEqual(EXPECTED_MAPPED_PRESETS);

    const fallbackPresetIds = PRODUCT_PRESETS.filter(
      (preset) => preset.previewAssetId === null,
    ).map((preset) => preset.id);

    expect(fallbackPresetIds).toEqual(EXPECTED_FALLBACK_PRESET_IDS);

    const publishedAssetIds = new Set(previewAssets.map((asset) => asset.id));

    for (const preset of PRODUCT_PRESETS) {
      if (preset.previewAssetId !== null) {
        expect(
          publishedAssetIds.has(preset.previewAssetId),
          `${preset.id} references missing preview asset ${preset.previewAssetId}`,
        ).toBe(true);
      }
    }

    const mappedAssetIds = new Set<ProductPreviewAssetId>(
      PRODUCT_PRESETS.flatMap((preset) =>
        preset.previewAssetId === null ? [] : [preset.previewAssetId],
      ),
    );

    const unmappedAssetIds = PRODUCT_PREVIEW_ASSET_IDS.filter(
      (assetId) => !mappedAssetIds.has(assetId),
    );

    expect(unmappedAssetIds).toEqual(EXPECTED_UNMAPPED_ASSET_IDS);
  });

  it("publishes the approved labelled fallback without removing Preset context", () => {
    const previewFallback =
      readCatalogueExport<ProductPreviewFallbackDefinition>(
        "PRODUCT_PREVIEW_FALLBACK",
      );

    expect(
      previewFallback,
      "PRODUCT_PREVIEW_FALLBACK must be exported through src/catalogue",
    ).toBeDefined();

    if (!previewFallback) {
      return;
    }

    expect(previewFallback).toEqual(EXPECTED_FALLBACK);
  });
});
