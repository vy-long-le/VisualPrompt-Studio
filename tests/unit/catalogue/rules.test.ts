import { describe, expect, it } from "vitest";
import * as catalogue from "../../../src/catalogue";
import {
  PRODUCT_FIELDS,
  PRODUCT_TEMPLATE_PROFILE_IDS,
  PRODUCT_VALIDATION_RULE_IDS,
  PRODUCT_WORKFLOW_ID,
} from "../../../src/catalogue";
import type {
  ProductFieldId,
  ProductTemplateProfileId,
  ProductValidationPredicate,
  ProductValidationRuleDefinition,
} from "../../../src/catalogue";

const SUGGESTED_RESOLUTION =
  "Edit the named fields to express one coherent intent, or clear an optional field. Warnings can be retained deliberately; errors require a corrected contract.";

const EXPECTED_VALIDATION_RULES = [
  {
    id: "V01",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["product-description", "use-case"],
    trigger: {
      op: "requiredNonBlank",
    },
    message: "Supply product identity and a use case.",
    explanation: "Supply product identity and a use case.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V02",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: [
      "product-description",
      "reference-mode",
      "reference-notes",
      "preserve-details",
      "use-case",
      "creative-objective",
      "audience",
      "placement-surface",
      "environment",
      "props",
      "product-arrangement",
      "shot-size",
      "camera-angle",
      "composition",
      "focus-treatment",
      "lighting-style",
      "light-direction",
      "shadow-treatment",
      "material-emphasis",
      "palette",
      "mood",
      "visual-treatment",
      "interaction-action",
      "detail-target",
      "scale-cue",
      "copy-treatment",
      "copy-space",
      "exact-copy",
      "aspect-ratio",
      "exclusions",
    ],
    trigger: {
      op: "contractShape",
    },
    message:
      "Reject unknown fields, non-string values, invalid fixed-choice values, control characters and over-limit input.",
    explanation:
      "Reject unknown fields, non-string values, invalid fixed-choice values, control characters and over-limit input.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V03",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["reference-mode", "reference-notes"],
    trigger: {
      all: [
        {
          equals: ["reference-mode", "External product reference"],
        },
        {
          blank: "reference-notes",
        },
      ],
    },
    message: "Explain the externally attached reference role.",
    explanation: "Explain the externally attached reference role.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V04",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["copy-treatment", "exact-copy"],
    trigger: {
      all: [
        {
          equals: ["copy-treatment", "Render supplied copy"],
        },
        {
          blank: "exact-copy",
        },
      ],
    },
    message: "Supply approved exact copy before requesting rendered text.",
    explanation: "Supply approved exact copy before requesting rendered text.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V05",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["copy-treatment", "exact-copy"],
    trigger: {
      all: [
        {
          equals: ["copy-treatment", "No added copy"],
        },
        {
          nonBlank: "exact-copy",
        },
      ],
    },
    message:
      "Exact copy conflicts with No added copy. Change policy or clear this field; physical label text belongs in Preserve details.",
    explanation:
      "Exact copy conflicts with No added copy. Change policy or clear this field; physical label text belongs in Preserve details.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V06",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["use-case", "copy-treatment"],
    trigger: {
      all: [
        {
          equals: ["use-case", "Google Merchant Center primary listing"],
        },
        {
          equals: ["copy-treatment", "Render supplied copy"],
        },
      ],
    },
    message:
      "Added promotional copy conflicts with primary-image policy. Physical product labels are distinct.",
    explanation:
      "Added promotional copy conflicts with primary-image policy. Physical product labels are distinct.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V07",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["shot-size", "detail-target"],
    trigger: {
      all: [
        {
          oneOf: ["shot-size", ["Tight detail crop", "Macro detail view"]],
        },
        {
          blank: "detail-target",
        },
      ],
    },
    message:
      "Select the supplied feature to inspect; otherwise the model chooses the detail.",
    explanation:
      "Select the supplied feature to inspect; otherwise the model chooses the detail.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V08",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["product-arrangement", "camera-angle"],
    trigger: {
      all: [
        {
          equals: ["product-arrangement", "Overhead flat lay arrangement"],
        },
        {
          oneOf: [
            "camera-angle",
            [
              "Straight-on at product level",
              "Three-quarter view at product level",
              "Low angle",
              "High angle looking down",
              "Side profile",
            ],
          ],
        },
      ],
    },
    message:
      "Overhead flat-lay arrangement and the selected oblique viewpoint may conflict. Custom viewpoints require human review.",
    explanation:
      "Overhead flat-lay arrangement and the selected oblique viewpoint may conflict. Custom viewpoints require human review.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V09",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["lighting-style", "shadow-treatment"],
    trigger: {
      all: [
        {
          oneOf: [
            "lighting-style",
            [
              "Soft diffused studio key with gentle fill",
              "Broad high-key illumination",
            ],
          ],
        },
        {
          equals: ["shadow-treatment", "Crisp graphic shadow"],
        },
      ],
    },
    message:
      "A crisp shadow with broad soft illumination needs a deliberate additional light or a revised intent.",
    explanation:
      "A crisp shadow with broad soft illumination needs a deliberate additional light or a revised intent.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V10",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["composition", "copy-space"],
    trigger: {
      any: [
        {
          all: [
            {
              equals: ["composition", "Product on the left third"],
            },
            {
              equals: ["copy-space", "Uncluttered left third"],
            },
          ],
        },
        {
          all: [
            {
              equals: ["composition", "Product on the right third"],
            },
            {
              equals: ["copy-space", "Uncluttered right third"],
            },
          ],
        },
      ],
    },
    message: "The chosen copy region overlaps the product region.",
    explanation: "The chosen copy region overlaps the product region.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V11",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["use-case", "props"],
    trigger: {
      all: [
        {
          equals: ["use-case", "Google Merchant Center primary listing"],
        },
        {
          nonBlank: "props",
        },
      ],
    },
    message:
      "Styling props may imply items not sold. Put included bundle items in Product description and check current channel policy.",
    explanation:
      "Styling props may imply items not sold. Put included bundle items in Product description and check current channel policy.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V12",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["reference-mode", "preserve-details"],
    trigger: {
      all: [
        {
          equals: ["reference-mode", "External product reference"],
        },
        {
          blank: "preserve-details",
        },
      ],
    },
    message:
      "State which visible product attributes must survive scene changes.",
    explanation:
      "State which visible product attributes must survive scene changes.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V13",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["use-case", "copy-treatment"],
    trigger: {
      all: [
        {
          equals: ["use-case", "Google Merchant Center primary listing"],
        },
        {
          equals: ["copy-treatment", "Reserve space for later copy"],
        },
      ],
    },
    message:
      "A later promotional overlay would need a separate advertising asset, not the primary listing image.",
    explanation:
      "A later promotional overlay would need a separate advertising asset, not the primary listing image.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V14",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["scale-cue"],
    trigger: {
      all: [
        {
          profileEquals: "product-p06-mold",
        },
        {
          blank: "scale-cue",
        },
      ],
    },
    message:
      "Add the relative-size reference or accept that this image will not demonstrate scale reliably.",
    explanation:
      "Add the relative-size reference or accept that this image will not demonstrate scale reliably.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
] as const satisfies readonly ProductValidationRuleDefinition[];

interface ChoiceReference {
  readonly fieldId: ProductFieldId;
  readonly storedValue: readonly string[];
}

function collectPredicateFieldIds(
  predicate: ProductValidationPredicate,
): readonly ProductFieldId[] {
  if ("all" in predicate) {
    return predicate.all.flatMap(collectPredicateFieldIds);
  }

  if ("any" in predicate) {
    return predicate.any.flatMap(collectPredicateFieldIds);
  }

  if ("equals" in predicate) {
    return [predicate.equals[0]];
  }

  if ("oneOf" in predicate) {
    return [predicate.oneOf[0]];
  }

  if ("blank" in predicate) {
    return [predicate.blank];
  }

  if ("nonBlank" in predicate) {
    return [predicate.nonBlank];
  }

  return [];
}

function collectChoiceReferences(
  predicate: ProductValidationPredicate,
): readonly ChoiceReference[] {
  if ("all" in predicate) {
    return predicate.all.flatMap(collectChoiceReferences);
  }

  if ("any" in predicate) {
    return predicate.any.flatMap(collectChoiceReferences);
  }

  if ("equals" in predicate) {
    return [
      {
        fieldId: predicate.equals[0],
        storedValue: [predicate.equals[1]],
      },
    ];
  }

  if ("oneOf" in predicate) {
    return [
      {
        fieldId: predicate.oneOf[0],
        storedValue: predicate.oneOf[1],
      },
    ];
  }

  return [];
}

function collectProfileReferences(
  predicate: ProductValidationPredicate,
): readonly ProductTemplateProfileId[] {
  if ("all" in predicate) {
    return predicate.all.flatMap(collectProfileReferences);
  }

  if ("any" in predicate) {
    return predicate.any.flatMap(collectProfileReferences);
  }

  if ("profileEquals" in predicate) {
    return [predicate.profileEquals];
  }

  return [];
}

function readCatalogueExport<T>(name: string): T | undefined {
  return Reflect.get(catalogue, name) as T | undefined;
}

describe("CAT-04 Product validation-rule catalogue", () => {
  it("publishes fourteen canonical rules with six errors and eight warnings", () => {
    const rules = readCatalogueExport<
      readonly ProductValidationRuleDefinition[]
    >("PRODUCT_VALIDATION_RULES");

    expect(
      rules,
      "PRODUCT_VALIDATION_RULES must be exported through src/catalogue",
    ).toBeDefined();

    if (!rules) {
      return;
    }

    expect(rules).toHaveLength(PRODUCT_VALIDATION_RULE_IDS.length);

    expect(rules.map((rule) => rule.id)).toEqual(PRODUCT_VALIDATION_RULE_IDS);

    expect(new Set(rules.map((rule) => rule.id)).size).toBe(
      PRODUCT_VALIDATION_RULE_IDS.length,
    );

    expect(rules.filter((rule) => rule.severity === "error")).toHaveLength(6);

    expect(rules.filter((rule) => rule.severity === "warning")).toHaveLength(8);

    expect(rules.every((rule) => rule.workflowId === PRODUCT_WORKFLOW_ID)).toBe(
      true,
    );
  });

  it("preserves every approved field list, trigger, message, explanation, and resolution", () => {
    const rules = readCatalogueExport<
      readonly ProductValidationRuleDefinition[]
    >("PRODUCT_VALIDATION_RULES");

    expect(
      rules,
      "PRODUCT_VALIDATION_RULES must be exported through src/catalogue",
    ).toBeDefined();

    if (!rules) {
      return;
    }

    expect(rules).toEqual(EXPECTED_VALIDATION_RULES);
  });

  it("resolves every field, option value, and profile referenced by a rule", () => {
    const rules = readCatalogueExport<
      readonly ProductValidationRuleDefinition[]
    >("PRODUCT_VALIDATION_RULES");

    expect(
      rules,
      "PRODUCT_VALIDATION_RULES must be exported through src/catalogue",
    ).toBeDefined();

    if (!rules) {
      return;
    }

    const fieldById = new Map(
      PRODUCT_FIELDS.map((field) => [field.id, field] as const),
    );

    const profileIds = new Set<ProductTemplateProfileId>(
      PRODUCT_TEMPLATE_PROFILE_IDS,
    );

    for (const rule of rules) {
      expect(rule.fieldIds.length).toBeGreaterThan(0);

      const declaredFieldIds = new Set(rule.fieldIds);

      for (const fieldId of rule.fieldIds) {
        expect(
          fieldById.has(fieldId),
          `${rule.id} declares missing field ${fieldId}`,
        ).toBe(true);
      }

      for (const fieldId of collectPredicateFieldIds(rule.trigger)) {
        expect(
          fieldById.has(fieldId),
          `${rule.id} trigger references missing field ${fieldId}`,
        ).toBe(true);

        expect(
          declaredFieldIds.has(fieldId),
          `${rule.id} trigger field ${fieldId} is absent from fieldIds`,
        ).toBe(true);
      }

      for (const reference of collectChoiceReferences(rule.trigger)) {
        const field = fieldById.get(reference.fieldId);

        expect(
          field,
          `${rule.id} choice reference uses missing field ${reference.fieldId}`,
        ).toBeDefined();

        if (!field) {
          return;
        }

        expect(
          "options" in field,
          `${rule.id} compares values for non-choice field ${reference.fieldId}`,
        ).toBe(true);

        if (!("options" in field)) {
          continue;
        }

        const allowedValues = new Set<string>(
          field.options.map((option) => option.storedValue),
        );

        for (const storedValue of reference.storedValue) {
          expect(
            allowedValues.has(storedValue),
            `${rule.id} uses invalid value "${storedValue}" for ${reference.fieldId}`,
          ).toBe(true);
        }
      }

      for (const profileId of collectProfileReferences(rule.trigger)) {
        expect(
          profileIds.has(profileId),
          `${rule.id} references missing profile ${profileId}`,
        ).toBe(true);
      }
    }
  });
});
