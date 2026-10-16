import type {
  ProductCatalogueEnvelope,
  ProductCatalogueIssue,
  ProductFieldDefinition,
  ProductValidationPredicate,
} from "./types";

const DISALLOWED_CONTROL_CHARACTERS =
  /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/u;

interface EntityLocation {
  readonly id: string;
  readonly path: string;
}

interface PredicateReferences {
  readonly fieldIds: readonly string[];
  readonly profileIds: readonly string[];
}

function pushIssue(
  issues: ProductCatalogueIssue[],
  issue: ProductCatalogueIssue,
): void {
  issues.push(issue);
}

function collectEntityLocations(
  envelope: ProductCatalogueEnvelope,
): readonly EntityLocation[] {
  const locations: EntityLocation[] = [];

  envelope.workflows.forEach((workflow, workflowIndex) => {
    locations.push({
      id: workflow.id,
      path: `workflows[${workflowIndex}].id`,
    });

    workflow.fieldGroups.forEach((group, groupIndex) => {
      locations.push({
        id: group.id,
        path: `workflows[${workflowIndex}].fieldGroups[${groupIndex}].id`,
      });
    });
  });

  envelope.fields.forEach((field, fieldIndex) => {
    locations.push({
      id: field.id,
      path: `fields[${fieldIndex}].id`,
    });

    field.options.forEach((option, optionIndex) => {
      locations.push({
        id: option.id,
        path: `fields[${fieldIndex}].options[${optionIndex}].id`,
      });
    });
  });

  envelope.knowledgeEntries.forEach((entry, entryIndex) => {
    locations.push({
      id: entry.id,
      path: `knowledgeEntries[${entryIndex}].id`,
    });
  });

  envelope.presets.forEach((preset, presetIndex) => {
    locations.push({
      id: preset.id,
      path: `presets[${presetIndex}].id`,
    });
  });

  envelope.templateProfiles.forEach((profile, profileIndex) => {
    locations.push({
      id: profile.id,
      path: `templateProfiles[${profileIndex}].id`,
    });
  });

  envelope.validationRules.forEach((rule, ruleIndex) => {
    locations.push({
      id: rule.id,
      path: `validationRules[${ruleIndex}].id`,
    });
  });

  envelope.previewAssets.forEach((asset, assetIndex) => {
    locations.push({
      id: asset.id,
      path: `previewAssets[${assetIndex}].id`,
    });
  });

  return locations;
}

function validateDuplicateIds(
  envelope: ProductCatalogueEnvelope,
  issues: ProductCatalogueIssue[],
): void {
  const firstPathById = new Map<string, string>();

  for (const location of collectEntityLocations(envelope)) {
    const firstPath = firstPathById.get(location.id);

    if (firstPath) {
      pushIssue(issues, {
        code: "CAT_DUPLICATE_ID",
        severity: "error",
        entityId: location.id,
        path: location.path,
        message: `Duplicate catalogue entity ID "${location.id}"; first declared at ${firstPath}.`,
      });
      continue;
    }

    firstPathById.set(location.id, location.path);
  }
}

function collectPredicateReferences(
  predicate: ProductValidationPredicate,
): PredicateReferences {
  if ("all" in predicate) {
    return mergePredicateReferences(
      predicate.all.map(collectPredicateReferences),
    );
  }

  if ("any" in predicate) {
    return mergePredicateReferences(
      predicate.any.map(collectPredicateReferences),
    );
  }

  if ("equals" in predicate) {
    return {
      fieldIds: [predicate.equals[0]],
      profileIds: [],
    };
  }

  if ("oneOf" in predicate) {
    return {
      fieldIds: [predicate.oneOf[0]],
      profileIds: [],
    };
  }

  if ("blank" in predicate) {
    return {
      fieldIds: [predicate.blank],
      profileIds: [],
    };
  }

  if ("nonBlank" in predicate) {
    return {
      fieldIds: [predicate.nonBlank],
      profileIds: [],
    };
  }

  if ("profileEquals" in predicate) {
    return {
      fieldIds: [],
      profileIds: [predicate.profileEquals],
    };
  }

  return {
    fieldIds: [],
    profileIds: [],
  };
}

function mergePredicateReferences(
  references: readonly PredicateReferences[],
): PredicateReferences {
  return {
    fieldIds: references.flatMap((reference) => reference.fieldIds),
    profileIds: references.flatMap((reference) => reference.profileIds),
  };
}

function validateMissingReferences(
  envelope: ProductCatalogueEnvelope,
  issues: ProductCatalogueIssue[],
): void {
  const workflowIds = new Set(
    envelope.workflows.map((workflow) => workflow.id),
  );
  const fieldById = new Map<string, ProductFieldDefinition>(
    envelope.fields.map((field) => [field.id, field]),
  );
  const knowledgeIds = new Set(
    envelope.knowledgeEntries.map((entry) => entry.id),
  );
  const presetIds = new Set(envelope.presets.map((preset) => preset.id));
  const profileIds = new Set<string>(
    envelope.templateProfiles.map((profile) => profile.id),
  );
  const ruleIds = new Set(envelope.validationRules.map((rule) => rule.id));
  const previewAssetIds = new Set(
    envelope.previewAssets.map((asset) => asset.id),
  );

  envelope.workflows.forEach((workflow, workflowIndex) => {
    workflow.fieldGroups.forEach((group, groupIndex) => {
      if (!workflowIds.has(group.workflowId)) {
        pushIssue(issues, {
          code: "CAT_MISSING_REFERENCE",
          severity: "error",
          entityId: group.id,
          path: `workflows[${workflowIndex}].fieldGroups[${groupIndex}].workflowId`,
          message: `Field group "${group.id}" references missing Workflow "${group.workflowId}".`,
        });
      }

      group.fieldIds.forEach((fieldId, fieldReferenceIndex) => {
        if (!fieldById.has(fieldId)) {
          pushIssue(issues, {
            code: "CAT_MISSING_REFERENCE",
            severity: "error",
            entityId: group.id,
            path: `workflows[${workflowIndex}].fieldGroups[${groupIndex}].fieldIds[${fieldReferenceIndex}]`,
            message: `Field group "${group.id}" references missing field "${fieldId}".`,
          });
        }
      });
    });

    workflow.presetIds.forEach((presetId, presetReferenceIndex) => {
      if (!presetIds.has(presetId)) {
        pushIssue(issues, {
          code: "CAT_MISSING_REFERENCE",
          severity: "error",
          entityId: workflow.id,
          path: `workflows[${workflowIndex}].presetIds[${presetReferenceIndex}]`,
          message: `Workflow "${workflow.id}" references missing Preset "${presetId}".`,
        });
      }
    });

    workflow.validationRuleIds.forEach((ruleId, ruleReferenceIndex) => {
      if (!ruleIds.has(ruleId)) {
        pushIssue(issues, {
          code: "CAT_MISSING_REFERENCE",
          severity: "error",
          entityId: workflow.id,
          path: `workflows[${workflowIndex}].validationRuleIds[${ruleReferenceIndex}]`,
          message: `Workflow "${workflow.id}" references missing validation rule "${ruleId}".`,
        });
      }
    });
  });

  envelope.fields.forEach((field, fieldIndex) => {
    if (!workflowIds.has(field.workflowId)) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: field.id,
        path: `fields[${fieldIndex}].workflowId`,
        message: `Field "${field.id}" references missing Workflow "${field.workflowId}".`,
      });
    }

    if (!knowledgeIds.has(field.knowledgeEntryId)) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: field.id,
        path: `fields[${fieldIndex}].knowledgeEntryId`,
        message: `Field "${field.id}" references missing knowledge entry "${field.knowledgeEntryId}".`,
      });
    }

    field.validationRuleIds.forEach((ruleId, ruleReferenceIndex) => {
      if (!ruleIds.has(ruleId)) {
        pushIssue(issues, {
          code: "CAT_MISSING_REFERENCE",
          severity: "error",
          entityId: field.id,
          path: `fields[${fieldIndex}].validationRuleIds[${ruleReferenceIndex}]`,
          message: `Field "${field.id}" references missing validation rule "${ruleId}".`,
        });
      }
    });
  });

  envelope.knowledgeEntries.forEach((entry, entryIndex) => {
    if (!fieldById.has(entry.fieldId)) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: entry.id,
        path: `knowledgeEntries[${entryIndex}].fieldId`,
        message: `Knowledge entry "${entry.id}" references missing field "${entry.fieldId}".`,
      });
    }
  });

  envelope.presets.forEach((preset, presetIndex) => {
    if (!workflowIds.has(preset.workflowId)) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: preset.id,
        path: `presets[${presetIndex}].workflowId`,
        message: `Preset "${preset.id}" references missing Workflow "${preset.workflowId}".`,
      });
    }

    preset.applicableRuleIds.forEach((ruleId, ruleReferenceIndex) => {
      if (!ruleIds.has(ruleId)) {
        pushIssue(issues, {
          code: "CAT_MISSING_REFERENCE",
          severity: "error",
          entityId: preset.id,
          path: `presets[${presetIndex}].applicableRuleIds[${ruleReferenceIndex}]`,
          message: `Preset "${preset.id}" references missing validation rule "${ruleId}".`,
        });
      }
    });

    if (!profileIds.has(preset.templateProfileId)) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: preset.id,
        path: `presets[${presetIndex}].templateProfileId`,
        message: `Preset "${preset.id}" references missing template profile "${preset.templateProfileId}".`,
      });
    }

    if (
      preset.previewAssetId !== null &&
      !previewAssetIds.has(preset.previewAssetId)
    ) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: preset.id,
        path: `presets[${presetIndex}].previewAssetId`,
        message: `Preset "${preset.id}" references missing preview asset "${preset.previewAssetId}".`,
      });
    }
  });

  if (!workflowIds.has(envelope.startBlank.workflowId)) {
    pushIssue(issues, {
      code: "CAT_MISSING_REFERENCE",
      severity: "error",
      entityId: envelope.startBlank.name,
      path: "startBlank.workflowId",
      message: `Start Blank references missing Workflow "${envelope.startBlank.workflowId}".`,
    });
  }

  if (!profileIds.has(envelope.startBlank.templateProfileId)) {
    pushIssue(issues, {
      code: "CAT_MISSING_REFERENCE",
      severity: "error",
      entityId: envelope.startBlank.name,
      path: "startBlank.templateProfileId",
      message: `Start Blank references missing template profile "${envelope.startBlank.templateProfileId}".`,
    });
  }

  envelope.templateProfiles.forEach((profile, profileIndex) => {
    if (!workflowIds.has(profile.workflowId)) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: profile.id,
        path: `templateProfiles[${profileIndex}].workflowId`,
        message: `Profile "${profile.id}" references missing Workflow "${profile.workflowId}".`,
      });
    }

    if (
      profile.sourcePresetId !== null &&
      !presetIds.has(profile.sourcePresetId)
    ) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: profile.id,
        path: `templateProfiles[${profileIndex}].sourcePresetId`,
        message: `Profile "${profile.id}" references missing source Preset "${profile.sourcePresetId}".`,
      });
    }

    profile.sections.forEach((section, sectionIndex) => {
      section.clauses.forEach((clause, clauseIndex) => {
        if (!fieldById.has(clause.fieldId)) {
          pushIssue(issues, {
            code: "CAT_MISSING_REFERENCE",
            severity: "error",
            entityId: profile.id,
            path: `templateProfiles[${profileIndex}].sections[${sectionIndex}].clauses[${clauseIndex}].fieldId`,
            message: `Profile "${profile.id}" references missing clause field "${clause.fieldId}".`,
          });
        }

        if (!fieldById.has(clause.condition.fieldId)) {
          pushIssue(issues, {
            code: "CAT_MISSING_REFERENCE",
            severity: "error",
            entityId: profile.id,
            path: `templateProfiles[${profileIndex}].sections[${sectionIndex}].clauses[${clauseIndex}].condition.fieldId`,
            message: `Profile "${profile.id}" references missing condition field "${clause.condition.fieldId}".`,
          });
        }

        clause.variants.forEach((variant, variantIndex) => {
          const variantFieldId = variant.when.equals[0];

          if (!fieldById.has(variantFieldId)) {
            pushIssue(issues, {
              code: "CAT_MISSING_REFERENCE",
              severity: "error",
              entityId: profile.id,
              path: `templateProfiles[${profileIndex}].sections[${sectionIndex}].clauses[${clauseIndex}].variants[${variantIndex}].when.equals[0]`,
              message: `Profile "${profile.id}" references missing variant field "${variantFieldId}".`,
            });
          }
        });
      });
    });
  });

  envelope.validationRules.forEach((rule, ruleIndex) => {
    if (!workflowIds.has(rule.workflowId)) {
      pushIssue(issues, {
        code: "CAT_MISSING_REFERENCE",
        severity: "error",
        entityId: rule.id,
        path: `validationRules[${ruleIndex}].workflowId`,
        message: `Validation rule "${rule.id}" references missing Workflow "${rule.workflowId}".`,
      });
    }

    rule.fieldIds.forEach((fieldId, fieldReferenceIndex) => {
      if (!fieldById.has(fieldId)) {
        pushIssue(issues, {
          code: "CAT_MISSING_REFERENCE",
          severity: "error",
          entityId: rule.id,
          path: `validationRules[${ruleIndex}].fieldIds[${fieldReferenceIndex}]`,
          message: `Validation rule "${rule.id}" references missing field "${fieldId}".`,
        });
      }
    });

    const references = collectPredicateReferences(rule.trigger);

    references.fieldIds.forEach((fieldId) => {
      if (!fieldById.has(fieldId)) {
        pushIssue(issues, {
          code: "CAT_MISSING_REFERENCE",
          severity: "error",
          entityId: rule.id,
          path: `validationRules[${ruleIndex}].trigger`,
          message: `Validation rule "${rule.id}" trigger references missing field "${fieldId}".`,
        });
      }
    });

    references.profileIds.forEach((profileId) => {
      if (!profileIds.has(profileId)) {
        pushIssue(issues, {
          code: "CAT_MISSING_REFERENCE",
          severity: "error",
          entityId: rule.id,
          path: `validationRules[${ruleIndex}].trigger`,
          message: `Validation rule "${rule.id}" trigger references missing profile "${profileId}".`,
        });
      }
    });
  });
}

function validateDefaultCollection(
  ownerKind: "Preset" | "Start Blank",
  ownerId: string,
  ownerPath: string,
  defaultsByFieldId: Readonly<Record<string, unknown>>,
  fields: readonly ProductFieldDefinition[],
  issues: ProductCatalogueIssue[],
): void {
  const fieldById = new Map<string, ProductFieldDefinition>(
    fields.map((field) => [field.id, field]),
  );

  for (const fieldId of Object.keys(defaultsByFieldId)) {
    if (!fieldById.has(fieldId)) {
      pushIssue(issues, {
        code: "CAT_INVALID_DEFAULT",
        severity: "error",
        entityId: ownerId,
        path: `${ownerPath}.${fieldId}`,
        message: `${ownerKind} "${ownerId}" supplies a default for unknown field "${fieldId}".`,
      });
    }
  }

  for (const field of fields) {
    const value = defaultsByFieldId[field.id];
    const path = `${ownerPath}.${field.id}`;

    if (typeof value !== "string") {
      pushIssue(issues, {
        code: "CAT_INVALID_DEFAULT",
        severity: "error",
        entityId: ownerId,
        path,
        message: `${ownerKind} "${ownerId}" must supply a string default for field "${field.id}".`,
      });
      continue;
    }

    if (value.length > field.constraints.maxLength) {
      pushIssue(issues, {
        code: "CAT_INVALID_DEFAULT",
        severity: "error",
        entityId: ownerId,
        path,
        message: `${ownerKind} "${ownerId}" exceeds the ${field.constraints.maxLength}-character limit for field "${field.id}".`,
      });
    }

    if (DISALLOWED_CONTROL_CHARACTERS.test(value)) {
      pushIssue(issues, {
        code: "CAT_INVALID_DEFAULT",
        severity: "error",
        entityId: ownerId,
        path,
        message: `${ownerKind} "${ownerId}" uses a disallowed control character in field "${field.id}".`,
      });
    }

    if (field.inputKind === "fixed-choice" && value !== "") {
      const allowedValues = new Set(
        field.options.map((option) => option.storedValue),
      );

      if (!allowedValues.has(value)) {
        pushIssue(issues, {
          code: "CAT_INVALID_DEFAULT",
          severity: "error",
          entityId: ownerId,
          path,
          message: `${ownerKind} "${ownerId}" uses invalid fixed-choice value "${value}" for field "${field.id}".`,
        });
      }
    }
  }
}

function validateDefaults(
  envelope: ProductCatalogueEnvelope,
  issues: ProductCatalogueIssue[],
): void {
  envelope.presets.forEach((preset, presetIndex) => {
    validateDefaultCollection(
      "Preset",
      preset.id,
      `presets[${presetIndex}].defaultsByFieldId`,
      preset.defaultsByFieldId,
      envelope.fields,
      issues,
    );
  });

  validateDefaultCollection(
    "Start Blank",
    envelope.startBlank.name,
    "startBlank.defaultsByFieldId",
    envelope.startBlank.defaultsByFieldId,
    envelope.fields,
    issues,
  );
}

function validateProfileClauses(
  envelope: ProductCatalogueEnvelope,
  issues: ProductCatalogueIssue[],
): void {
  const fieldById = new Map(envelope.fields.map((field) => [field.id, field]));

  envelope.templateProfiles.forEach((profile, profileIndex) => {
    profile.sections.forEach((section, sectionIndex) => {
      section.clauses.forEach((clause, clauseIndex) => {
        const clausePath = `templateProfiles[${profileIndex}].sections[${sectionIndex}].clauses[${clauseIndex}]`;

        if (clause.condition.fieldId !== clause.fieldId) {
          pushIssue(issues, {
            code: "CAT_BROKEN_CLAUSE",
            severity: "error",
            entityId: profile.id,
            path: `${clausePath}.condition.fieldId`,
            message: `Profile "${profile.id}" clause "${clause.fieldId}" must use a matching nonBlank condition field ID.`,
          });
        }

        const expectedPlaceholder = `{${clause.fieldId}}`;

        if (!clause.template.includes(expectedPlaceholder)) {
          pushIssue(issues, {
            code: "CAT_BROKEN_CLAUSE",
            severity: "error",
            entityId: profile.id,
            path: `${clausePath}.template`,
            message: `Profile "${profile.id}" clause "${clause.fieldId}" must include placeholder "${expectedPlaceholder}".`,
          });
        }

        clause.variants.forEach((variant, variantIndex) => {
          const [variantFieldId, variantValue] = variant.when.equals;
          const variantField = fieldById.get(variantFieldId);

          if (
            variantField?.inputKind === "fixed-choice" &&
            !variantField.options.some(
              (option) => option.storedValue === variantValue,
            )
          ) {
            pushIssue(issues, {
              code: "CAT_BROKEN_CLAUSE",
              severity: "error",
              entityId: profile.id,
              path: `${clausePath}.variants[${variantIndex}].when.equals[1]`,
              message: `Profile "${profile.id}" clause variant uses invalid fixed-choice value "${variantValue}" for field "${variantFieldId}".`,
            });
          }

          if (!variant.template.includes(expectedPlaceholder)) {
            pushIssue(issues, {
              code: "CAT_BROKEN_CLAUSE",
              severity: "error",
              entityId: profile.id,
              path: `${clausePath}.variants[${variantIndex}].template`,
              message: `Profile "${profile.id}" clause variant for "${clause.fieldId}" must include placeholder "${expectedPlaceholder}".`,
            });
          }
        });
      });
    });
  });
}

function validateWorkflowCoverage(
  envelope: ProductCatalogueEnvelope,
  issues: ProductCatalogueIssue[],
): void {
  envelope.workflows.forEach((workflow, workflowIndex) => {
    const counts = new Map<string, number>();

    workflow.fieldGroups.forEach((group) => {
      group.fieldIds.forEach((fieldId) => {
        counts.set(fieldId, (counts.get(fieldId) ?? 0) + 1);
      });
    });

    const coveragePath = `workflows[${workflowIndex}].fieldGroups[0].fieldIds`;

    envelope.fields
      .filter((field) => field.workflowId === workflow.id)
      .forEach((field) => {
        const count = counts.get(field.id) ?? 0;

        if (count !== 1) {
          pushIssue(issues, {
            code: "CAT_INCOMPLETE_COVERAGE",
            severity: "error",
            entityId: field.id,
            path: coveragePath,
            message: `Field "${field.id}" must appear exactly once across Workflow field groups; found ${count}.`,
          });
        }
      });
  });
}

function validateKnowledgeCoverage(
  envelope: ProductCatalogueEnvelope,
  issues: ProductCatalogueIssue[],
): void {
  const counts = new Map<string, number>();

  envelope.knowledgeEntries.forEach((entry) => {
    counts.set(entry.fieldId, (counts.get(entry.fieldId) ?? 0) + 1);
  });

  envelope.fields.forEach((field, fieldIndex) => {
    const count = counts.get(field.id) ?? 0;

    if (count !== 1) {
      pushIssue(issues, {
        code: "CAT_INCOMPLETE_COVERAGE",
        severity: "error",
        entityId: field.id,
        path: `fields[${fieldIndex}].knowledgeEntryId`,
        message: `Field "${field.id}" must have exactly one knowledge entry; found ${count}.`,
      });
    }
  });
}

function validateProfileCoverage(
  envelope: ProductCatalogueEnvelope,
  issues: ProductCatalogueIssue[],
): void {
  envelope.templateProfiles.forEach((profile, profileIndex) => {
    const counts = new Map<string, number>();

    profile.sections.forEach((section) => {
      section.clauses.forEach((clause) => {
        counts.set(clause.fieldId, (counts.get(clause.fieldId) ?? 0) + 1);
      });
    });

    envelope.fields
      .filter((field) => field.workflowId === profile.workflowId)
      .forEach((field) => {
        const count = counts.get(field.id) ?? 0;

        if (count !== 1) {
          pushIssue(issues, {
            code: "CAT_INCOMPLETE_COVERAGE",
            severity: "error",
            entityId: profile.id,
            path: `templateProfiles[${profileIndex}].sections`,
            message: `Profile "${profile.id}" must contain exactly one clause for field "${field.id}"; found ${count}.`,
          });
        }
      });
  });
}

function validateCoverage(
  envelope: ProductCatalogueEnvelope,
  issues: ProductCatalogueIssue[],
): void {
  validateWorkflowCoverage(envelope, issues);
  validateKnowledgeCoverage(envelope, issues);
  validateProfileCoverage(envelope, issues);
}

export function validateProductCatalogue(
  envelope: ProductCatalogueEnvelope,
): readonly ProductCatalogueIssue[] {
  const issues: ProductCatalogueIssue[] = [];

  validateDuplicateIds(envelope, issues);
  validateMissingReferences(envelope, issues);
  validateDefaults(envelope, issues);
  validateProfileClauses(envelope, issues);
  validateCoverage(envelope, issues);

  return issues;
}
