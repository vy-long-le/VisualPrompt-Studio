import { describe, expect, it } from "vitest";
import * as catalogue from "../../../src/catalogue";
import {
  PRODUCT_FIELD_IDS,
  PRODUCT_FIELDS,
  PRODUCT_NEUTRAL_PROFILE_ID,
  PRODUCT_PRESET_IDS,
  PRODUCT_VALIDATION_RULE_IDS,
  PRODUCT_WORKFLOW_ID,
} from "../../../src/catalogue";
import type {
  ProductFieldId,
  ProductPresetDefinition,
  ProductStartBlankDefinition,
} from "../../../src/catalogue";

const EXPECTED_PRESET_LINKS = [
  {
    id: "product-p01",
    name: "Clean Catalog Packshot",
    family: "catalog",
    templateProfileId: "product-p01-mold",
    previewAssetId: "preset-soft-catalog",
  },
  {
    id: "product-p02",
    name: "Sculptural Studio Hero",
    family: "studio",
    templateProfileId: "product-p02-mold",
    previewAssetId: "preset-hard-light-still-life",
  },
  {
    id: "product-p03",
    name: "Contextual Lifestyle",
    family: "context",
    templateProfileId: "product-p03-mold",
    previewAssetId: null,
  },
  {
    id: "product-p04",
    name: "Craft and Material Detail",
    family: "detail",
    templateProfileId: "product-p04-mold",
    previewAssetId: null,
  },
  {
    id: "product-p05",
    name: "Editorial Flat Lay",
    family: "layout",
    templateProfileId: "product-p05-mold",
    previewAssetId: null,
  },
  {
    id: "product-p06",
    name: "Relative Scale Demonstration",
    family: "scale",
    templateProfileId: "product-p06-mold",
    previewAssetId: null,
  },
  {
    id: "product-p07",
    name: "Bundle and Packaging Overview",
    family: "collection",
    templateProfileId: "product-p07-mold",
    previewAssetId: null,
  },
  {
    id: "product-p08",
    name: "Reflective Luxury Still Life",
    family: "material",
    templateProfileId: "product-p08-mold",
    previewAssetId: "preset-shadow-luxury",
  },
  {
    id: "product-p09",
    name: "Dynamic Performance Concept",
    family: "action",
    templateProfileId: "product-p09-mold",
    previewAssetId: null,
  },
  {
    id: "product-p10",
    name: "Copy Ready Campaign Layout",
    family: "campaign",
    templateProfileId: "product-p10-mold",
    previewAssetId: null,
  },
] as const;

const USER_SUPPLIED_IDENTITY_FIELD_IDS = [
  "product-description",
  "reference-notes",
  "preserve-details",
  "audience",
  "exact-copy",
] as const satisfies readonly ProductFieldId[];

function readCatalogueExport<T>(name: string): T | undefined {
  return Reflect.get(catalogue, name) as T | undefined;
}

describe("CAT-02 Product Presets and Start Blank", () => {
  it("publishes ten canonical Presets and keeps Start Blank separate", () => {
    const presets =
      readCatalogueExport<readonly ProductPresetDefinition[]>(
        "PRODUCT_PRESETS",
      );

    const startBlank = readCatalogueExport<ProductStartBlankDefinition>(
      "PRODUCT_START_BLANK",
    );

    expect(
      presets,
      "PRODUCT_PRESETS must be exported through src/catalogue",
    ).toBeDefined();

    expect(
      startBlank,
      "PRODUCT_START_BLANK must be exported through src/catalogue",
    ).toBeDefined();

    if (!presets || !startBlank) {
      return;
    }

    expect(presets).toHaveLength(10);
    expect(presets.map((preset) => preset.id)).toEqual(PRODUCT_PRESET_IDS);

    expect(new Set(presets.map((preset) => preset.id)).size).toBe(
      PRODUCT_PRESET_IDS.length,
    );

    expect(startBlank).toMatchObject({
      workflowId: PRODUCT_WORKFLOW_ID,
      name: "Start Blank",
      templateProfileId: PRODUCT_NEUTRAL_PROFILE_ID,
    });

    const publishedPresetIds = new Set<string>(
      presets.map((preset) => preset.id),
    );

    expect(publishedPresetIds.has(PRODUCT_NEUTRAL_PROFILE_ID)).toBe(false);
  });

  it("preserves the approved Preset metadata, profile links, and preview mapping", () => {
    const presets =
      readCatalogueExport<readonly ProductPresetDefinition[]>(
        "PRODUCT_PRESETS",
      );

    expect(
      presets,
      "PRODUCT_PRESETS must be exported through src/catalogue",
    ).toBeDefined();

    if (!presets) {
      return;
    }

    expect(
      presets.map((preset) => ({
        id: preset.id,
        name: preset.name,
        family: preset.family,
        templateProfileId: preset.templateProfileId,
        previewAssetId: preset.previewAssetId,
      })),
    ).toEqual(EXPECTED_PRESET_LINKS);

    const validationRuleIds = new Set(PRODUCT_VALIDATION_RULE_IDS);

    for (const preset of presets) {
      expect(preset.workflowId).toBe(PRODUCT_WORKFLOW_ID);

      expect(preset.purpose.trim()).not.toBe("");
      expect(preset.creativeDirection.trim()).not.toBe("");
      expect(preset.distinctiveInstructions.trim()).not.toBe("");
      expect(preset.exclusions.trim()).not.toBe("");

      expect(preset.useCases.length).toBeGreaterThan(0);
      expect(
        preset.useCases.every((useCase) => useCase.trim().length > 0),
      ).toBe(true);

      expect(preset.defaultVisualCharacteristics.length).toBeGreaterThan(0);

      expect(
        preset.defaultVisualCharacteristics.every(
          (characteristic) => characteristic.trim().length > 0,
        ),
      ).toBe(true);

      expect(
        preset.applicableRuleIds.every((ruleId) =>
          validationRuleIds.has(ruleId),
        ),
      ).toBe(true);
    }
  });

  it("publishes complete canonical defaults without invented user facts", () => {
    const presets =
      readCatalogueExport<readonly ProductPresetDefinition[]>(
        "PRODUCT_PRESETS",
      );

    const startBlank = readCatalogueExport<ProductStartBlankDefinition>(
      "PRODUCT_START_BLANK",
    );

    expect(
      presets,
      "PRODUCT_PRESETS must be exported through src/catalogue",
    ).toBeDefined();

    expect(
      startBlank,
      "PRODUCT_START_BLANK must be exported through src/catalogue",
    ).toBeDefined();

    if (!presets || !startBlank) {
      return;
    }

    const fixedChoiceFields = PRODUCT_FIELDS.filter(
      (field) => field.inputKind === "fixed-choice",
    );

    for (const preset of presets) {
      expect(Object.keys(preset.defaultsByFieldId)).toEqual(PRODUCT_FIELD_IDS);

      expect(
        Object.values(preset.defaultsByFieldId).every(
          (value) => typeof value === "string",
        ),
      ).toBe(true);

      for (const fieldId of USER_SUPPLIED_IDENTITY_FIELD_IDS) {
        expect(
          preset.defaultsByFieldId[fieldId],
          `${preset.id} must leave ${fieldId} user-supplied`,
        ).toBe("");
      }
      expect(preset.defaultsByFieldId["use-case"].trim()).not.toBe("");

      for (const field of fixedChoiceFields) {
        const defaultValue = preset.defaultsByFieldId[field.id];

        expect(
          field.options.some((option) => option.storedValue === defaultValue),
          `${preset.id} has invalid fixed-choice default for ${field.id}: ${defaultValue}`,
        ).toBe(true);
      }
    }

    expect(Object.keys(startBlank.defaultsByFieldId)).toEqual(
      PRODUCT_FIELD_IDS,
    );

    expect(
      Object.values(startBlank.defaultsByFieldId).every(
        (value) => value === "",
      ),
    ).toBe(true);
  });
});
