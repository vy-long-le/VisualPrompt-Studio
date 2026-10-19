import { describe, expect, it } from "vitest";
import { getCatalogueCheckExitCode } from "../../../src/scripts/catalogue-check-policy";
import type { ProductCatalogueIssue } from "../../../src/catalogue";

function createIssue(
  severity: ProductCatalogueIssue["severity"],
): ProductCatalogueIssue {
  return {
    code: "TEST_ISSUE",
    severity,
    entityId: "test-entity",
    path: "test.path",
    message: "Test catalogue issue",
  };
}

describe("check catalogue policy input", () => {
  it("check empty issue", () => {
    expect(getCatalogueCheckExitCode([])).toBe(0);
  });

  it("check warning issue", () => {
    expect(getCatalogueCheckExitCode([createIssue("warning")])).toBe(0);
  });

  it("check error issue", () => {
    expect(getCatalogueCheckExitCode([createIssue("error")])).toBe(1);
  });

  it("check mixed issues", () => {
    expect(
      getCatalogueCheckExitCode([createIssue("error"), createIssue("warning")]),
    ).toBe(1);
  });
});
