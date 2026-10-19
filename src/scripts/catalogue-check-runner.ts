import {
  type ProductCatalogueEnvelope,
  validateProductCatalogue,
} from "../catalogue";
import { getCatalogueCheckExitCode } from "./catalogue-check-policy";

export const runCatalogueCheck = (
  catalogue: ProductCatalogueEnvelope,
): 0 | 1 => {
  const issues = validateProductCatalogue(catalogue);

  if (issues.length === 0) {
    console.log("Catalogue validation passed with no issues.");
  } else {
    for (const issue of issues) {
      if (issue.severity === "warning") {
        console.warn(
          `WARNING ${issue.code} at ${issue.path}: ${issue.message}`,
        );
      } else {
        console.error(`ERROR ${issue.code} at ${issue.path}: ${issue.message}`);
      }
    }
  }

  return getCatalogueCheckExitCode(issues);
};
