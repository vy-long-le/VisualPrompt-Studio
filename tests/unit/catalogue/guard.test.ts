import { describe, expect, it } from "vitest";
import * as catalogue from "../../../src/catalogue";
import { PRODUCT_CATALOGUE } from "../../../src/catalogue";
import type {
  ProductCatalogueEnvelope,
  ProductCatalogueIssue,
  ProductValidationPredicate,
} from "../../../src/catalogue";

type ProductCatalogueGuard = (
  envelope: ProductCatalogueEnvelope,
) => readonly ProductCatalogueIssue[];

function readCatalogueGuard(): ProductCatalogueGuard | undefined {
  return Reflect.get(catalogue, "validateProductCatalogue") as
    | ProductCatalogueGuard
    | undefined;
}

function expectCatalogueGuard(): ProductCatalogueGuard | undefined {
  const guard = readCatalogueGuard();

  expect(
    guard,
    "validateProductCatalogue must be exported through src/catalogue",
  ).toBeTypeOf("function");

  return guard;
}

function validateWithoutMutation(
  guard: ProductCatalogueGuard,
  fixture: ProductCatalogueEnvelope,
): readonly ProductCatalogueIssue[] {
  const canonicalBefore = structuredClone(PRODUCT_CATALOGUE);
  const fixtureBefore = structuredClone(fixture);

  const issues = guard(fixture);

  expect(fixture).toEqual(fixtureBefore);
  expect(PRODUCT_CATALOGUE).toEqual(canonicalBefore);

  return issues;
}

function withDuplicatePreset(
  envelope: ProductCatalogueEnvelope,
): ProductCatalogueEnvelope {
  const duplicatedPreset = envelope.presets[0];

  if (!duplicatedPreset) {
    throw new Error("Duplicate-ID fixture requires product-p01.");
  }

  return {
    ...envelope,
    presets: [...envelope.presets, duplicatedPreset],
  };
}

function withoutReferencedPreviewAsset(
  envelope: ProductCatalogueEnvelope,
): ProductCatalogueEnvelope {
  return {
    ...envelope,
    previewAssets: envelope.previewAssets.filter(
      (asset) => asset.id !== "preset-soft-catalog",
    ),
  };
}

function withInvalidPresetDefault(
  envelope: ProductCatalogueEnvelope,
): ProductCatalogueEnvelope {
  return {
    ...envelope,
    presets: envelope.presets.map((preset) =>
      preset.id === "product-p01"
        ? {
            ...preset,
            defaultsByFieldId: {
              ...preset.defaultsByFieldId,
              "aspect-ratio": "not-a-canonical-value",
            },
          }
        : preset,
    ),
  };
}

function withBrokenProfileClause(
  envelope: ProductCatalogueEnvelope,
): ProductCatalogueEnvelope {
  return {
    ...envelope,
    templateProfiles: envelope.templateProfiles.map((profile) =>
      profile.id === "product-p01-mold"
        ? {
            ...profile,
            sections: profile.sections.map((section) => ({
              ...section,
              clauses: section.clauses.map((clause) =>
                clause.fieldId === "product-description"
                  ? {
                      ...clause,
                      condition: {
                        ...clause.condition,
                        fieldId: "use-case",
                      },
                    }
                  : clause,
              ),
            })),
          }
        : profile,
    ),
  };
}

function withIncompleteWorkflowCoverage(
  envelope: ProductCatalogueEnvelope,
): ProductCatalogueEnvelope {
  return {
    ...envelope,
    workflows: envelope.workflows.map((workflow) => ({
      ...workflow,
      fieldGroups: workflow.fieldGroups.map((group) => ({
        ...group,
        fieldIds: group.fieldIds.filter(
          (fieldId) => fieldId !== "product-description",
        ),
      })),
    })),
  };
}

function withMissingBlankPredicateField(
  envelope: ProductCatalogueEnvelope,
): ProductCatalogueEnvelope {
  return {
    ...envelope,
    validationRules: envelope.validationRules.map((rule) =>
      rule.id === "V03"
        ? {
            ...rule,
            trigger: {
              blank: "missing-field",
            } as unknown as ProductValidationPredicate,
          }
        : rule,
    ),
  };
}

describe("CAT-08 Product catalogue integrity guard", () => {
  it("accepts the canonical catalogue deterministically without mutation", () => {
    const guard = expectCatalogueGuard();

    if (!guard) {
      return;
    }

    const canonicalBefore = structuredClone(PRODUCT_CATALOGUE);

    const firstIssues = guard(PRODUCT_CATALOGUE);
    const secondIssues = guard(PRODUCT_CATALOGUE);

    expect(firstIssues).toEqual([]);
    expect(secondIssues).toEqual(firstIssues);
    expect(PRODUCT_CATALOGUE).toEqual(canonicalBefore);
  });

  it("reports a duplicate catalogue entity ID", () => {
    const guard = expectCatalogueGuard();

    if (!guard) {
      return;
    }

    const fixture = withDuplicatePreset(PRODUCT_CATALOGUE);
    const issues = validateWithoutMutation(guard, fixture);

    expect(issues).toEqual([
      {
        code: "CAT_DUPLICATE_ID",
        severity: "error",
        entityId: "product-p01",
        path: "presets[10].id",
        message: `Duplicate catalogue entity ID "product-p01"; first declared at presets[0].id.`,
      },
    ]);
  });

  it("reports a missing referenced preview asset", () => {
    const guard = expectCatalogueGuard();

    if (!guard) {
      return;
    }

    const fixture = withoutReferencedPreviewAsset(PRODUCT_CATALOGUE);
    const issues = validateWithoutMutation(guard, fixture);

    expect(issues).toEqual([
      {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: "product-p01",
        path: "presets[0].previewAssetId",
        message:
          'Preset "product-p01" references missing preview asset "preset-soft-catalog".',
      },
    ]);
  });

  it("reports a missing field referenced by a blank predicate", () => {
    const guard = expectCatalogueGuard();

    if (!guard) {
      return;
    }

    const fixture = withMissingBlankPredicateField(PRODUCT_CATALOGUE);
    const issues = validateWithoutMutation(guard, fixture);

    expect(issues).toEqual([
      {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: "V03",
        path: "validationRules[2].trigger",
        message:
          'Validation rule "V03" trigger references missing field "missing-field".',
      },
    ]);
  });

  it("reports an invalid fixed-choice Preset default", () => {
    const guard = expectCatalogueGuard();

    if (!guard) {
      return;
    }

    const fixture = withInvalidPresetDefault(PRODUCT_CATALOGUE);
    const issues = validateWithoutMutation(guard, fixture);

    expect(issues).toEqual([
      {
        code: "CAT_INVALID_DEFAULT",
        severity: "error",
        entityId: "product-p01",
        path: "presets[0].defaultsByFieldId.aspect-ratio",
        message:
          'Preset "product-p01" uses invalid fixed-choice value "not-a-canonical-value" for field "aspect-ratio".',
      },
    ]);
  });

  it("reports a clause whose condition points to a different field", () => {
    const guard = expectCatalogueGuard();

    if (!guard) {
      return;
    }

    const fixture = withBrokenProfileClause(PRODUCT_CATALOGUE);
    const issues = validateWithoutMutation(guard, fixture);

    expect(issues).toEqual([
      {
        code: "CAT_BROKEN_CLAUSE",
        severity: "error",
        entityId: "product-p01-mold",
        path: "templateProfiles[0].sections[0].clauses[0].condition.fieldId",
        message:
          'Profile "product-p01-mold" clause "product-description" must use a matching nonBlank condition field ID.',
      },
    ]);
  });

  it("reports incomplete field coverage across Workflow groups", () => {
    const guard = expectCatalogueGuard();

    if (!guard) {
      return;
    }

    const fixture = withIncompleteWorkflowCoverage(PRODUCT_CATALOGUE);
    const issues = validateWithoutMutation(guard, fixture);

    expect(issues).toEqual([
      {
        code: "CAT_INCOMPLETE_COVERAGE",
        severity: "error",
        entityId: "product-description",
        path: "workflows[0].fieldGroups[0].fieldIds",
        message:
          'Field "product-description" must appear exactly once across Workflow field groups; found 0.',
      },
    ]);
  });
});
