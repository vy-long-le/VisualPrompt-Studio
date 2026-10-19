import { describe, expect, it } from "vitest";
import { PRODUCT_CATALOGUE } from "../../../src/catalogue";
import { runCatalogueCheck } from "../../../src/scripts/catalogue-check-runner";
import {
  withBrokenProfileClause,
  withDuplicatePreset,
  withIncompleteWorkflowCoverage,
  withInvalidPresetDefault,
  withMissingBlankPredicateField,
  withoutReferencedPreviewAsset,
} from "../../fixtures/product-catalogue-fixtures";

const brokenCatalogueCases = [
  ["duplicate ID", withDuplicatePreset],
  ["missing preview reference", withoutReferencedPreviewAsset],
  ["missing predicate field", withMissingBlankPredicateField],
  ["invalid default", withInvalidPresetDefault],
  ["broken profile clause", withBrokenProfileClause],
  ["incomplete workflow coverage", withIncompleteWorkflowCoverage],
] as const;

describe("catalogue check runner", () => {
  it("return exit code 0 for accepted catalogue", () => {
    const canonicalBefore = structuredClone(PRODUCT_CATALOGUE);

    const status = runCatalogueCheck(PRODUCT_CATALOGUE);

    expect(status).toBe(0);
    expect(PRODUCT_CATALOGUE).toEqual(canonicalBefore);
  });

  it.each(brokenCatalogueCases)(
    "returns exit code 1 for %s",
    (_caseName, createBrokenCatalogue) => {
      const canonicalBefore = structuredClone(PRODUCT_CATALOGUE);
      const brokenCatalogue = createBrokenCatalogue(PRODUCT_CATALOGUE);

      const status = runCatalogueCheck(brokenCatalogue);

      expect(status).toBe(1);
      expect(PRODUCT_CATALOGUE).toEqual(canonicalBefore);
    },
  );
});
