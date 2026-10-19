import type { ProductCatalogueIssue } from "../catalogue";

export function getCatalogueCheckExitCode(
  issues: readonly ProductCatalogueIssue[],
): 0 | 1 {
  const haveErrorIssue: boolean = issues.some(
    (issue) => issue.severity === "error",
  );

  if (haveErrorIssue) {
    return 1;
  } else {
    return 0;
  }
}
