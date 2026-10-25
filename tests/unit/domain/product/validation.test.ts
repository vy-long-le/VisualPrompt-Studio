import { describe, expect, it } from "vitest";
import { checkProductConfig } from "../../../../src/domain/product/validation";
import { PRODUCT_START_BLANK } from "../../../../src/catalogue";
import type { ProductPromptConfig } from "../../../../src/domain/product/types";

const validConfig: ProductPromptConfig = {
  workflow: "product",
  templateProfileId: PRODUCT_START_BLANK.templateProfileId,
  values: PRODUCT_START_BLANK.defaultsByFieldId,
};
const brokenCases: { name: string; input: unknown }[] = [
  { name: "null", input: null },
  { name: "undefined", input: undefined },
  { name: "string", input: "abc" },
  { name: "number", input: 500 },
  { name: "boolean", input: true },
  { name: "array", input: ["abc", 500] },
];

describe("check validate containers", () => {
  it.each(brokenCases)("reject $name", ({ input }) => {
    const result = checkProductConfig(input);

    expect(result.ok).toBe(false);

    if (result.ok) {
      throw new Error("Expected invalid container to be rejected");
    }

    expect(result.issues).toHaveLength(1);
    expect(result?.issues[0]).toEqual({
      ruleId: "V02",
      severity: "error",
      message: expect.any(String),
      fieldIds: [],
    });
    expect(result?.issues[0].message.trim().length).toBeGreaterThan(0);
  });
});

const invalidShapeCases: { name: string; input: unknown }[] = [
  {
    name: "an empty object",
    input: {},
  },
  {
    name: "a configuration missing workflow",
    input: {
      templateProfileId: validConfig.templateProfileId,
      values: validConfig.values,
    },
  },
  {
    name: "a configuration missing templateProfileId",
    input: {
      workflow: validConfig.workflow,
      values: validConfig.values,
    },
  },
  {
    name: "a configuration missing values",
    input: {
      workflow: validConfig.workflow,
      templateProfileId: validConfig.templateProfileId,
    },
  },
  {
    name: "a configuration containing an unexpected property",
    input: {
      ...validConfig,
      extra: "Unexpected",
    },
  },
];

describe("checkProductConfig: configuration shape", () => {
  it.each(invalidShapeCases)("reject $name", ({ input }) => {
    const result = checkProductConfig(input);

    expect(result.ok).toBe(false);

    if (result.ok) {
      throw new Error("Expected an invalid configuration shape to be rejected");
    }

    expect(result.issues).toHaveLength(1);
    expect(result?.issues[0]).toEqual({
      ruleId: "V02",
      severity: "error",
      message: expect.any(String),
      fieldIds: [],
    });
    expect(result?.issues[0].message.trim().length).toBeGreaterThan(0);
  });

  it("accepts a valid configuration without changing its values", () => {
    const result = checkProductConfig(validConfig);

    expect(result.ok).toBe(true);

    if (!result.ok) {
      throw new Error("Expected a valid configuration to be accepted");
    }

    expect(result.configuration).toEqual(validConfig);
  });
});

describe("checkProductConfig: workflow", () => {
  it("rejects an unsupported workflow", () => {
    const result = checkProductConfig({
      ...validConfig,
      workflow: "portrait",
    });

    expect(result.ok).toBe(false);

    if (result.ok) {
      throw new Error("Expected an unsupported workflow to be rejected");
    }

    expect(result.issues).toHaveLength(1);
    expect(result?.issues[0]).toEqual({
      ruleId: "V02",
      severity: "error",
      message: expect.any(String),
      fieldIds: [],
    });
    expect(result?.issues[0].message.trim().length).toBeGreaterThan(0);
  });
});

describe("checkProductConfig: template profile", () => {
  it("rejects an unknown template profile ID", () => {
    const result = checkProductConfig({
      ...validConfig,
      templateProfileId: "unknown",
    });

    expect(result.ok).toBe(false);

    if (result.ok) {
      throw new Error(
        "Expect an unknown templateProfileId value to be rejected.",
      );
    }

    expect(result.issues).toHaveLength(1);
    expect(result?.issues[0]).toEqual({
      ruleId: "V02",
      severity: "error",
      message: expect.any(String),
      fieldIds: [],
    });
    expect(result?.issues[0].message.trim().length).toBeGreaterThan(0);
  });
});

describe("checkProductConfig: values container", () => {
  it("rejects null values", () => {
    const result = checkProductConfig({
      ...validConfig,
      values: null,
    });

    expect(result.ok).toBe(false);

    if (result.ok) {
      throw new Error("Expect a null value to be rejected");
    }

    expect(result.issues).toHaveLength(1);
    expect(result?.issues[0]).toEqual({
      ruleId: "V02",
      severity: "error",
      message: expect.any(String),
      fieldIds: [],
    });
    expect(result?.issues[0].message.trim().length).toBeGreaterThan(0);
  });

  it("reject an unknown values", () => {
    const result = checkProductConfig({
      ...validConfig,
      values: "unknown",
    });

    expect(result.ok).toBe(false);

    if (result.ok) {
      throw new Error("Expect an unknown values to be rejected");
    }

    expect(result.issues).toHaveLength(1);
    expect(result?.issues[0]).toEqual({
      ruleId: "V02",
      severity: "error",
      message: expect.any(String),
      fieldIds: [],
    });
    expect(result?.issues[0].message.trim().length).toBeGreaterThan(0);
  });

  it("rejects an empty values object", () => {
    const result = checkProductConfig({
      ...validConfig,
      values: {},
    });

    expect(result.ok).toBe(false);

    if (result.ok) {
      throw new Error("Expect an empty values object to be rejected");
    }

    expect(result.issues).toHaveLength(1);
    expect(result?.issues[0]).toEqual({
      ruleId: "V02",
      severity: "error",
      message: expect.any(String),
      fieldIds: [],
    });
    expect(result?.issues[0].message.trim().length).toBeGreaterThan(0);
  });
});

const brokenValuesStructure: { name: string; input: unknown }[] = [
  {
    name: "a missing field",
    input: {
      ...validConfig,
      values: Object.fromEntries(
        Object.entries(validConfig.values).filter(
          ([fieldId]) => fieldId !== "product-description",
        ),
      ),
    },
  },
  {
    name: "an unexpected field",
    input: {
      ...validConfig,
      values: {
        ...validConfig.values,
        "unexpected-field": "extra",
      },
    },
  },
  {
    name: "a replaced field with the same entry count",
    input: {
      ...validConfig,
      values: {
        ...Object.fromEntries(
          Object.entries(validConfig.values).filter(
            ([fieldId]) => fieldId !== "product-description",
          ),
        ),
        "unexpected-field": "extra",
      },
    },
  },
  {
    name: "a non-string field value",
    input: {
      ...validConfig,
      values: { ...validConfig.values, "product-description": 42 },
    },
  },
];

describe("checkProductConfig: values structure", () => {
  it.each(brokenValuesStructure)("Reject $name", ({ input }) => {
    const result = checkProductConfig(input);

    expect(result.ok).toBe(false);

    if (result.ok) {
      throw new Error(`Expect $name to be rejected`);
    }

    expect(result.issues).toHaveLength(1);
    expect(result?.issues[0]).toEqual({
      ruleId: "V02",
      severity: "error",
      message: expect.any(String),
      fieldIds: [],
    });
    expect(result?.issues[0].message.trim().length).toBeGreaterThan(0);
  });
});
