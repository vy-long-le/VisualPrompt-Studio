import type {
  ProductCatalogueEnvelope,
  ProductValidationPredicate,
} from "../../src/catalogue";

export function withDuplicatePreset(
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

export function withoutReferencedPreviewAsset(
  envelope: ProductCatalogueEnvelope,
): ProductCatalogueEnvelope {
  return {
    ...envelope,
    previewAssets: envelope.previewAssets.filter(
      (asset) => asset.id !== "preset-soft-catalog",
    ),
  };
}

export function withInvalidPresetDefault(
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

export function withBrokenProfileClause(
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

export function withIncompleteWorkflowCoverage(
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

export function withMissingBlankPredicateField(
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
