export const PRODUCT_WORKFLOW_ID = "product" as const;

export type ProductWorkflowId = typeof PRODUCT_WORKFLOW_ID;

export const PRODUCT_FIELD_GROUP_IDS = [
  "product-identity",
  "lighting-composition",
  "camera-optics",
  "materials-styling",
  "output-guardrails",
] as const;

export type ProductFieldGroupId = (typeof PRODUCT_FIELD_GROUP_IDS)[number];

export const PRODUCT_FIELD_IDS = [
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
] as const;

export type ProductFieldId = (typeof PRODUCT_FIELD_IDS)[number];

export type ProductKnowledgeEntryId = `product-knowledge:${ProductFieldId}`;

export type ProductFieldValueId = `${ProductFieldId}-v${string}`;

export const PRODUCT_PRESET_IDS = [
  "product-p01",
  "product-p02",
  "product-p03",
  "product-p04",
  "product-p05",
  "product-p06",
  "product-p07",
  "product-p08",
  "product-p09",
  "product-p10",
] as const;

export type ProductPresetId = (typeof PRODUCT_PRESET_IDS)[number];

export const PRODUCT_PRESET_FAMILIES = [
  "action",
  "campaign",
  "catalog",
  "collection",
  "context",
  "detail",
  "layout",
  "material",
  "scale",
  "studio",
] as const;

export type ProductPresetFamily = (typeof PRODUCT_PRESET_FAMILIES)[number];

export const PRODUCT_RESEARCHED_PROFILE_IDS = [
  "product-p01-mold",
  "product-p02-mold",
  "product-p03-mold",
  "product-p04-mold",
  "product-p05-mold",
  "product-p06-mold",
  "product-p07-mold",
  "product-p08-mold",
  "product-p09-mold",
  "product-p10-mold",
] as const;

export type ProductResearchedProfileId =
  (typeof PRODUCT_RESEARCHED_PROFILE_IDS)[number];

export const PRODUCT_NEUTRAL_PROFILE_ID = "product-neutral-mold" as const;

export type ProductNeutralProfileId = typeof PRODUCT_NEUTRAL_PROFILE_ID;

export const PRODUCT_TEMPLATE_PROFILE_IDS = [
  ...PRODUCT_RESEARCHED_PROFILE_IDS,
  PRODUCT_NEUTRAL_PROFILE_ID,
] as const;

export type ProductTemplateProfileId =
  (typeof PRODUCT_TEMPLATE_PROFILE_IDS)[number];

export const PRODUCT_VALIDATION_RULE_IDS = [
  "V01",
  "V02",
  "V03",
  "V04",
  "V05",
  "V06",
  "V07",
  "V08",
  "V09",
  "V10",
  "V11",
  "V12",
  "V13",
  "V14",
] as const;

export type ProductValidationRuleId =
  (typeof PRODUCT_VALIDATION_RULE_IDS)[number];

export const PRODUCT_PREVIEW_ASSET_IDS = [
  "preset-color-block",
  "preset-hard-light-still-life",
  "preset-neon-reflection",
  "preset-refracted-glass",
  "preset-shadow-luxury",
  "preset-soft-catalog",
] as const;

export type ProductPreviewAssetId = (typeof PRODUCT_PREVIEW_ASSET_IDS)[number];

export type ProductCatalogueEntityId =
  | ProductWorkflowId
  | ProductFieldGroupId
  | ProductFieldId
  | ProductKnowledgeEntryId
  | ProductFieldValueId
  | ProductPresetId
  | ProductTemplateProfileId
  | ProductValidationRuleId
  | ProductPreviewAssetId;
