import {
  PRODUCT_PRESET_IDS,
  PRODUCT_VALIDATION_RULE_IDS,
  PRODUCT_WORKFLOW_ID,
} from "../ids";
import type { ProductWorkflowDefinition } from "../types";
import { PRODUCT_FIELD_GROUPS } from "./field-groups";

export const PRODUCT_WORKFLOW = {
  id: PRODUCT_WORKFLOW_ID,
  name: "Product Advertising and Photography",
  status: "available",
  fieldGroups: PRODUCT_FIELD_GROUPS,
  presetIds: PRODUCT_PRESET_IDS,
  validationRuleIds: PRODUCT_VALIDATION_RULE_IDS,
} as const satisfies ProductWorkflowDefinition;
