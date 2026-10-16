import { describe, expect, it } from "vitest";
import * as catalogue from "../../../src/catalogue";
import {
  CATALOGUE_SCHEMA_VERSION,
  PRODUCT_CATALOGUE_VERSION,
  PRODUCT_COMPILER_VERSION,
  PRODUCT_FIELD_IDS,
  PRODUCT_FIELD_KNOWLEDGE_ENTRIES,
  PRODUCT_FIELDS,
  PRODUCT_NEUTRAL_TEMPLATE_PROFILE,
  PRODUCT_PRESET_IDS,
  PRODUCT_PRESETS,
  PRODUCT_PREVIEW_ASSET_IDS,
  PRODUCT_PREVIEW_ASSETS,
  PRODUCT_PREVIEW_FALLBACK,
  PRODUCT_PROFILE_VERSION,
  PRODUCT_RESEARCHED_TEMPLATE_PROFILES,
  PRODUCT_START_BLANK,
  PRODUCT_TEMPLATE_PROFILE_IDS,
  PRODUCT_UI_LOCALE,
  PRODUCT_VALIDATION_RULE_IDS,
  PRODUCT_VALIDATION_RULES,
  PRODUCT_WORKFLOW,
  PRODUCT_WORKFLOW_ID,
} from "../../../src/catalogue";
import type { ProductCatalogueEnvelope } from "../../../src/catalogue";

const EXPECTED_ENVELOPE_KEYS = [
  "schemaVersion",
  "catalogueVersion",
  "compilerVersion",
  "profileVersion",
  "uiLocale",
  "workflows",
  "fields",
  "knowledgeEntries",
  "presets",
  "startBlank",
  "templateProfiles",
  "validationRules",
  "previewAssets",
  "previewFallback",
] as const;

const EXPECTED_TEMPLATE_PROFILES = [
  ...PRODUCT_RESEARCHED_TEMPLATE_PROFILES,
  PRODUCT_NEUTRAL_TEMPLATE_PROFILE,
] as const;

function readCatalogueExport<T>(name: string): T | undefined {
  return Reflect.get(catalogue, name) as T | undefined;
}

describe("CAT-07 Product runtime catalogue envelope", () => {
  it("publishes the approved runtime metadata and exact envelope shape", () => {
    const envelope =
      readCatalogueExport<ProductCatalogueEnvelope>("PRODUCT_CATALOGUE");

    expect(
      envelope,
      "PRODUCT_CATALOGUE must be exported through src/catalogue",
    ).toBeDefined();

    if (!envelope) {
      return;
    }

    expect(envelope).toMatchObject({
      schemaVersion: CATALOGUE_SCHEMA_VERSION,
      catalogueVersion: PRODUCT_CATALOGUE_VERSION,
      compilerVersion: PRODUCT_COMPILER_VERSION,
      profileVersion: PRODUCT_PROFILE_VERSION,
      uiLocale: PRODUCT_UI_LOCALE,
    });

    expect(Object.keys(envelope).sort()).toEqual(
      [...EXPECTED_ENVELOPE_KEYS].sort(),
    );

    expect("runtimeReady" in envelope).toBe(false);
    expect("researchVersion" in envelope).toBe(false);
    expect("baselineModified" in envelope).toBe(false);
  });

  it("reuses every canonical catalogue collection and entity", () => {
    const envelope =
      readCatalogueExport<ProductCatalogueEnvelope>("PRODUCT_CATALOGUE");

    expect(
      envelope,
      "PRODUCT_CATALOGUE must be exported through src/catalogue",
    ).toBeDefined();

    if (!envelope) {
      return;
    }

    expect(envelope.workflows).toHaveLength(1);
    expect(envelope.workflows[0]).toBe(PRODUCT_WORKFLOW);

    expect(envelope.fields).toBe(PRODUCT_FIELDS);
    expect(envelope.knowledgeEntries).toBe(PRODUCT_FIELD_KNOWLEDGE_ENTRIES);
    expect(envelope.presets).toBe(PRODUCT_PRESETS);
    expect(envelope.startBlank).toBe(PRODUCT_START_BLANK);
    expect(envelope.validationRules).toBe(PRODUCT_VALIDATION_RULES);
    expect(envelope.previewAssets).toBe(PRODUCT_PREVIEW_ASSETS);
    expect(envelope.previewFallback).toBe(PRODUCT_PREVIEW_FALLBACK);

    expect(envelope.templateProfiles).toHaveLength(
      EXPECTED_TEMPLATE_PROFILES.length,
    );

    for (const [
      index,
      expectedProfile,
    ] of EXPECTED_TEMPLATE_PROFILES.entries()) {
      expect(envelope.templateProfiles[index]).toBe(expectedProfile);
    }
  });

  it("preserves every canonical ID and catalogue order after assembly", () => {
    const envelope =
      readCatalogueExport<ProductCatalogueEnvelope>("PRODUCT_CATALOGUE");

    expect(
      envelope,
      "PRODUCT_CATALOGUE must be exported through src/catalogue",
    ).toBeDefined();

    if (!envelope) {
      return;
    }

    expect(envelope.workflows.map((workflow) => workflow.id)).toEqual([
      PRODUCT_WORKFLOW_ID,
    ]);

    expect(envelope.fields.map((field) => field.id)).toEqual(PRODUCT_FIELD_IDS);

    expect(envelope.knowledgeEntries.map((entry) => entry.fieldId)).toEqual(
      PRODUCT_FIELD_IDS,
    );

    expect(envelope.presets.map((preset) => preset.id)).toEqual(
      PRODUCT_PRESET_IDS,
    );

    expect(envelope.templateProfiles.map((profile) => profile.id)).toEqual(
      PRODUCT_TEMPLATE_PROFILE_IDS,
    );

    expect(envelope.validationRules.map((rule) => rule.id)).toEqual(
      PRODUCT_VALIDATION_RULE_IDS,
    );

    expect(envelope.previewAssets.map((asset) => asset.id)).toEqual(
      PRODUCT_PREVIEW_ASSET_IDS,
    );
  });
});
