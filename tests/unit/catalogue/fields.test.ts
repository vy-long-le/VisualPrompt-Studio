import { describe, expect, it } from "vitest";
import {
  PRODUCT_FIELD_IDS,
  PRODUCT_FIELD_OPTION_DICTIONARY,
  PRODUCT_FIELDS,
  PRODUCT_VALIDATION_RULE_IDS,
  PRODUCT_WORKFLOW_ID,
} from "../../../src/catalogue";
import type { ProductFieldOptionDefinition } from "../../../src/catalogue";

const EXPECTED_OPTION_COUNTS = {
  "product-description": 0,
  "reference-mode": 2,
  "reference-notes": 0,
  "preserve-details": 0,
  "use-case": 4,
  "creative-objective": 7,
  audience: 0,
  "placement-surface": 7,
  environment: 7,
  props: 0,
  "product-arrangement": 6,
  "shot-size": 5,
  "camera-angle": 6,
  composition: 7,
  "focus-treatment": 5,
  "lighting-style": 6,
  "light-direction": 5,
  "shadow-treatment": 5,
  "material-emphasis": 6,
  palette: 6,
  mood: 6,
  "visual-treatment": 5,
  "interaction-action": 0,
  "detail-target": 0,
  "scale-cue": 0,
  "copy-treatment": 3,
  "copy-space": 5,
  "exact-copy": 0,
  "aspect-ratio": 5,
  exclusions: 0,
} as const;

describe("CAT-03 Product field definitions", () => {
  it("publishes every canonical Product field once and in canonical order", () => {
    const fieldIds = PRODUCT_FIELDS.map((field) => field.id);

    expect(fieldIds).toEqual(PRODUCT_FIELD_IDS);
    expect(new Set(fieldIds).size).toBe(PRODUCT_FIELD_IDS.length);
  });

  it("keeps field metadata linked to approved runtime contracts", () => {
    const validationRuleIds = new Set(PRODUCT_VALIDATION_RULE_IDS);

    for (const field of PRODUCT_FIELDS) {
      expect(field.workflowId).toBe(PRODUCT_WORKFLOW_ID);
      expect(field.label.trim()).not.toBe("");
      expect(field.helpText.trim()).not.toBe("");
      expect(field.valueType).toBe("string");
      expect(field.constraints.maxLength).toBeGreaterThan(0);
      expect(field.knowledgeEntryId).toBe(`product-knowledge:${field.id}`);
      expect(
        field.validationRuleIds.every((ruleId) =>
          validationRuleIds.has(ruleId),
        ),
      ).toBe(true);

      if (field.inputKind === "free-text") {
        expect(field.controlKind).toBe("textarea");
        expect(field.options).toHaveLength(0);
      } else if (field.inputKind === "fixed-choice") {
        expect(field.controlKind).toBe("select");
        expect(field.options.length).toBeGreaterThan(0);
      } else {
        expect(field.controlKind).toBe("select-with-custom");
        expect(field.options.length).toBeGreaterThan(0);
      }
    }
  });

  it("preserves exact-copy normalization only for Exact copy", () => {
    const exactCopy = PRODUCT_FIELDS.find((field) => field.id === "exact-copy");
    const ordinaryFields = PRODUCT_FIELDS.filter(
      (field) => field.id !== "exact-copy",
    );

    expect(exactCopy?.constraints.normalization).toBe("exact-copy");
    expect(
      ordinaryFields.every(
        (field) => field.constraints.normalization === "ordinary",
      ),
    ).toBe(true);
  });
});

describe("CAT-03 Product option dictionary", () => {
  it("has one dictionary entry per canonical Product field", () => {
    expect(Object.keys(PRODUCT_FIELD_OPTION_DICTIONARY)).toEqual(
      PRODUCT_FIELD_IDS,
    );

    for (const fieldId of PRODUCT_FIELD_IDS) {
      expect(PRODUCT_FIELD_OPTION_DICTIONARY[fieldId]).toHaveLength(
        EXPECTED_OPTION_COUNTS[fieldId],
      );
    }
  });

  it("publishes 108 unique, field-scoped canonical option IDs", () => {
    const options: readonly ProductFieldOptionDefinition[] =
      PRODUCT_FIELD_IDS.flatMap((fieldId) => [
        ...PRODUCT_FIELD_OPTION_DICTIONARY[fieldId],
      ]);
    const optionIds = options.map((option) => option.id);

    expect(options).toHaveLength(108);
    expect(new Set(optionIds).size).toBe(options.length);

    for (const fieldId of PRODUCT_FIELD_IDS) {
      for (const option of PRODUCT_FIELD_OPTION_DICTIONARY[fieldId]) {
        expect(option.id.startsWith(`${fieldId}-v`)).toBe(true);
        expect(option.storedValue.trim()).not.toBe("");
        expect(option.label.trim()).not.toBe("");
      }
    }
  });

  it("keeps field definitions on the canonical dictionary arrays", () => {
    for (const field of PRODUCT_FIELDS) {
      expect(field.options).toBe(PRODUCT_FIELD_OPTION_DICTIONARY[field.id]);
    }
  });
});
