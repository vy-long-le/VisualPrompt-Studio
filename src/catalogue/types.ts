import type {
  ProductCatalogueEntityId,
  ProductFieldGroupId,
  ProductFieldId,
  ProductFieldValueId,
  ProductKnowledgeEntryId,
  ProductNeutralProfileId,
  ProductPresetFamily,
  ProductPresetId,
  ProductPreviewAssetId,
  ProductResearchedProfileId,
  ProductTemplateProfileId,
  ProductValidationRuleId,
  ProductWorkflowId,
} from "./ids";
import type {
  CatalogueSchemaVersion,
  ProductCatalogueVersion,
  ProductCompilerVersion,
  ProductProfileVersion,
  ProductUiLocale,
} from "./versions";

export type ProductFieldValues = Readonly<Record<ProductFieldId, string>>;

export interface ProductFieldGroupDefinition {
  readonly id: ProductFieldGroupId;
  readonly workflowId: ProductWorkflowId;
  readonly label: string;
  readonly order: number;
  readonly fieldIds: readonly ProductFieldId[];
  readonly defaultOpen: boolean;
}

export interface ProductWorkflowDefinition {
  readonly id: ProductWorkflowId;
  readonly name: string;
  readonly status: "available";
  readonly fieldGroups: readonly ProductFieldGroupDefinition[];
  readonly presetIds: readonly ProductPresetId[];
  readonly validationRuleIds: readonly ProductValidationRuleId[];
}

export interface ProductFieldOptionDefinition {
  readonly id: ProductFieldValueId;
  readonly storedValue: string;
  readonly label: string;
}

export type ProductFieldNormalization = "ordinary" | "exact-copy";

export interface ProductFieldConstraints {
  readonly maxLength: number;
  readonly normalization: ProductFieldNormalization;
}

interface ProductFieldDefinitionBase {
  readonly id: ProductFieldId;
  readonly workflowId: ProductWorkflowId;
  readonly label: string;
  readonly helpText: string;
  readonly valueType: "string";
  readonly required: boolean;
  readonly constraints: ProductFieldConstraints;
  readonly knowledgeEntryId: ProductKnowledgeEntryId;
  readonly validationRuleIds: readonly ProductValidationRuleId[];
}

export interface ProductTextFieldDefinition extends ProductFieldDefinitionBase {
  readonly inputKind: "free-text";
  readonly controlKind: "textarea";
  readonly options: readonly [];
}

export interface ProductFixedChoiceFieldDefinition extends ProductFieldDefinitionBase {
  readonly inputKind: "fixed-choice";
  readonly controlKind: "select";
  readonly options: readonly ProductFieldOptionDefinition[];
}

export interface ProductSuggestedChoiceFieldDefinition extends ProductFieldDefinitionBase {
  readonly inputKind: "suggested-choice";
  readonly controlKind: "select-with-custom";
  readonly options: readonly ProductFieldOptionDefinition[];
}

export type ProductFieldDefinition =
  | ProductTextFieldDefinition
  | ProductFixedChoiceFieldDefinition
  | ProductSuggestedChoiceFieldDefinition;

export interface ProductFieldKnowledgeEntry {
  readonly id: ProductKnowledgeEntryId;
  readonly fieldId: ProductFieldId;
  readonly title: string;
  readonly summary: string;
  readonly effect: string;
  readonly whenToUse: string;
  readonly howToUse: string;
  readonly examples: readonly string[];
  readonly caveats: readonly string[];
  readonly relatedTerms: readonly string[];
  readonly wordingPattern: string;
  readonly validationBoundaries: string;
  readonly starterSuggestions: readonly string[];
}

export interface ProductPresetDefinition {
  readonly id: ProductPresetId;
  readonly workflowId: ProductWorkflowId;
  readonly name: string;
  readonly family: ProductPresetFamily;
  readonly purpose: string;
  readonly creativeDirection: string;
  readonly useCases: readonly string[];
  readonly defaultVisualCharacteristics: readonly string[];
  readonly distinctiveInstructions: string;
  readonly exclusions: string;
  readonly applicableRuleIds: readonly ProductValidationRuleId[];
  readonly defaultsByFieldId: ProductFieldValues;
  readonly templateProfileId: ProductResearchedProfileId;
  readonly previewAssetId: ProductPreviewAssetId | null;
}

export interface ProductStartBlankDefinition {
  readonly workflowId: ProductWorkflowId;
  readonly name: "Start Blank";
  readonly templateProfileId: ProductNeutralProfileId;
  readonly defaultsByFieldId: ProductFieldValues;
}

export interface ProductPreviewAssetProvenance {
  readonly generationMethod: string;
  readonly sourceRecord: string;
  readonly compilerTraceAvailable: false;
}

export interface ProductPreviewAssetDefinition {
  readonly id: ProductPreviewAssetId;
  readonly src: string;
  readonly alt: string;
  readonly creativeIntent: string;
  readonly disclaimer: string;
  readonly provenance: ProductPreviewAssetProvenance;
}

export interface ProductPreviewFallbackDefinition {
  readonly label: "Preview reference unavailable";
  readonly accessibleDescription: string;
  readonly disclaimer: string;
}

export interface ProductTemplateNonBlankCondition {
  readonly op: "nonBlank";
  readonly fieldId: ProductFieldId;
}

export interface ProductTemplateEqualsCondition {
  readonly equals: readonly [ProductFieldId, string];
}

export interface ProductTemplateClauseVariant {
  readonly when: ProductTemplateEqualsCondition;
  readonly template: string;
}

export interface ProductTemplateClause {
  readonly fieldId: ProductFieldId;
  readonly template: string;
  readonly condition: ProductTemplateNonBlankCondition;
  readonly variants: readonly ProductTemplateClauseVariant[];
}

export interface ProductTemplateSection {
  readonly heading: string;
  readonly clauses: readonly ProductTemplateClause[];
  readonly omitWhenNoClauses: boolean;
}

export interface ProductTemplateProfileDefinition {
  readonly id: ProductTemplateProfileId;
  readonly sourcePresetId: ProductPresetId | null;
  readonly workflowId: ProductWorkflowId;
  readonly profileVersion: ProductProfileVersion;
  readonly name: string;
  readonly creativeObjective: string;
  readonly instructionHierarchy: string;
  readonly sections: readonly ProductTemplateSection[];
  readonly suppliedFactSafeguard: string;
  readonly omissionBehavior: string;
  readonly userOverrideRule: string;
  readonly negativeInstructionStrategy: string;
}

export interface ProductRequiredNonBlankPredicate {
  readonly op: "requiredNonBlank";
}

export interface ProductContractShapePredicate {
  readonly op: "contractShape";
}

export interface ProductAllPredicate {
  readonly all: readonly ProductValidationPredicate[];
}

export interface ProductAnyPredicate {
  readonly any: readonly ProductValidationPredicate[];
}

export interface ProductEqualsPredicate {
  readonly equals: readonly [ProductFieldId, string];
}

export interface ProductOneOfPredicate {
  readonly oneOf: readonly [ProductFieldId, readonly string[]];
}

export interface ProductBlankPredicate {
  readonly blank: ProductFieldId;
}

export interface ProductNonBlankPredicate {
  readonly nonBlank: ProductFieldId;
}

export interface ProductProfileEqualsPredicate {
  readonly profileEquals: ProductTemplateProfileId;
}

export type ProductValidationPredicate =
  | ProductRequiredNonBlankPredicate
  | ProductContractShapePredicate
  | ProductAllPredicate
  | ProductAnyPredicate
  | ProductEqualsPredicate
  | ProductOneOfPredicate
  | ProductBlankPredicate
  | ProductNonBlankPredicate
  | ProductProfileEqualsPredicate;

export type ProductValidationSeverity = "error" | "warning";

export interface ProductValidationRuleDefinition {
  readonly id: ProductValidationRuleId;
  readonly workflowId: ProductWorkflowId;
  readonly severity: ProductValidationSeverity;
  readonly fieldIds: readonly ProductFieldId[];
  readonly trigger: ProductValidationPredicate;
  readonly message: string;
  readonly explanation: string;
  readonly suggestedResolution: string;
}

export interface ProductCatalogueEnvelope {
  readonly schemaVersion: CatalogueSchemaVersion;
  readonly catalogueVersion: ProductCatalogueVersion;
  readonly compilerVersion: ProductCompilerVersion;
  readonly profileVersion: ProductProfileVersion;
  readonly uiLocale: ProductUiLocale;
  readonly workflows: readonly ProductWorkflowDefinition[];
  readonly fields: readonly ProductFieldDefinition[];
  readonly knowledgeEntries: readonly ProductFieldKnowledgeEntry[];
  readonly presets: readonly ProductPresetDefinition[];
  readonly startBlank: ProductStartBlankDefinition;
  readonly templateProfiles: readonly ProductTemplateProfileDefinition[];
  readonly validationRules: readonly ProductValidationRuleDefinition[];
  readonly previewAssets: readonly ProductPreviewAssetDefinition[];
  readonly previewFallback: ProductPreviewFallbackDefinition;
}

export type ProductCatalogueIssueSeverity = "error" | "warning";

export interface ProductCatalogueIssue {
  readonly code: string;
  readonly severity: ProductCatalogueIssueSeverity;
  readonly entityId: ProductCatalogueEntityId | string;
  readonly path: string;
  readonly message: string;
}

export interface ProductCatalogueRepository {
  getEnvelope(): ProductCatalogueEnvelope;
  getWorkflow(id: ProductWorkflowId): ProductWorkflowDefinition | undefined;
  listWorkflows(): readonly ProductWorkflowDefinition[];
  getField(id: ProductFieldId): ProductFieldDefinition | undefined;
  listFields(workflowId: ProductWorkflowId): readonly ProductFieldDefinition[];
  getKnowledgeEntry(
    id: ProductKnowledgeEntryId,
  ): ProductFieldKnowledgeEntry | undefined;
  getKnowledgeEntryForField(
    fieldId: ProductFieldId,
  ): ProductFieldKnowledgeEntry | undefined;
  getPreset(id: ProductPresetId): ProductPresetDefinition | undefined;
  listPresets(
    workflowId: ProductWorkflowId,
  ): readonly ProductPresetDefinition[];
  getTemplateProfile(
    id: ProductTemplateProfileId,
  ): ProductTemplateProfileDefinition | undefined;
  getValidationRule(
    id: ProductValidationRuleId,
  ): ProductValidationRuleDefinition | undefined;
  listValidationRules(
    workflowId: ProductWorkflowId,
  ): readonly ProductValidationRuleDefinition[];
  getPreviewAsset(
    id: ProductPreviewAssetId,
  ): ProductPreviewAssetDefinition | undefined;
}
