import type {
  ProductValidationIssue,
  ProductPromptConfig,
} from "../domain/product/types";
import { checkProductConfig } from "../domain/product/validation";
import { compileProductPrompt } from "../domain/product/compiler";

export type ProductGenerationResult =
  | {
      readonly ok: true;
      readonly generatedPrompt: string;
    }
  | {
      readonly ok: false;
      readonly issues: readonly ProductValidationIssue[];
    };

export function generateProductPrompt(
  configuration: ProductPromptConfig,
): ProductGenerationResult {
  // TODO: Implement V01 and V03–V14 before MVP readiness.
  // Preliminary-demo Generate enforces the implemented V02 checks.
  const result = checkProductConfig(configuration);

  if (result.ok === false) {
    return {
      ok: false,
      issues: result.issues,
    };
  }

  const prompt = compileProductPrompt(result.configuration);

  return {
    ok: true,
    generatedPrompt: prompt,
  };
}
