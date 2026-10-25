import type {
  ProductFieldValues,
  ProductTemplateProfileId,
  ProductValidationRuleId,
  ProductFieldId,
  ProductValidationSeverity,
} from "../../catalogue";

export interface ProductPromptConfig {
  readonly workflow: "product";
  readonly templateProfileId: ProductTemplateProfileId;
  readonly values: ProductFieldValues;
}

export interface ProductValidationIssue {
  readonly ruleId: ProductValidationRuleId;
  readonly severity: ProductValidationSeverity;
  readonly message: string;
  readonly fieldIds: readonly ProductFieldId[];
}

export type ProductConfigCheckResult =
  | {
      readonly ok: true;
      readonly configuration: ProductPromptConfig;
    }
  | {
      readonly ok: false;
      readonly issues: readonly ProductValidationIssue[];
    };
