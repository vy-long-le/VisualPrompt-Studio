import { describe, expect, it } from "vitest";
import {
  PRODUCT_FIELD_GROUPS,
  PRODUCT_FIELD_IDS,
  PRODUCT_PRESET_IDS,
  PRODUCT_VALIDATION_RULE_IDS,
  PRODUCT_WORKFLOW,
} from "../../../src/catalogue";

describe("CAT-03 Product field groups", () => {
  it("maps every canonical Product field exactly once", () => {
    const groupedFieldIds = PRODUCT_FIELD_GROUPS.flatMap(
      (group) => group.fieldIds,
    );

    expect(PRODUCT_FIELD_GROUPS).toHaveLength(5);
    expect(groupedFieldIds).toHaveLength(PRODUCT_FIELD_IDS.length);
    expect(new Set(groupedFieldIds).size).toBe(groupedFieldIds.length);
    expect([...groupedFieldIds].sort()).toEqual([...PRODUCT_FIELD_IDS].sort());
  });

  it("preserves the approved order and initial disclosure state", () => {
    expect(PRODUCT_FIELD_GROUPS.map((group) => group.order)).toEqual([
      1, 2, 3, 4, 5,
    ]);
    expect(PRODUCT_FIELD_GROUPS.map((group) => group.defaultOpen)).toEqual([
      true,
      true,
      false,
      false,
      false,
    ]);
  });
});

describe("CAT-01 Product Workflow scope", () => {
  it("publishes only the approved Product Workflow metadata", () => {
    expect(PRODUCT_WORKFLOW).toMatchObject({
      id: "product",
      name: "Product Advertising and Photography",
      status: "available",
    });
    expect(PRODUCT_WORKFLOW.fieldGroups).toBe(PRODUCT_FIELD_GROUPS);
    expect(PRODUCT_WORKFLOW.presetIds).toBe(PRODUCT_PRESET_IDS);
    expect(PRODUCT_WORKFLOW.validationRuleIds).toBe(
      PRODUCT_VALIDATION_RULE_IDS,
    );
  });
});
