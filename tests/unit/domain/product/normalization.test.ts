import { describe, expect, it } from "vitest";
import {
  normalizeProductFieldValue,
  countUnicodeScalars,
} from "../../../../src/domain/product/normalization";

const lineEndingFormCases = ["a\rb", "a\nb"] as const;

describe("test normalization mode", () => {
  it("Ordinary canonicalization", () => {
    expect(
      normalizeProductFieldValue(
        "  Cafe\u0301 \t IVORY\r\nbottle  ",
        "ordinary",
      ),
    ).toBe("Café IVORY bottle");
  });

  it("Exact-copy preservation", () => {
    expect(
      normalizeProductFieldValue("  Cafe\u0301  \r\n$1\\path  ", "exact-copy"),
    ).toBe("  Cafe\u0301  \n$1\\path  ");
  });

  it.each(lineEndingFormCases)(
    "verify every accepted line-ending form",
    (_caseName) => {
      expect(normalizeProductFieldValue(_caseName, "exact-copy")).toBe("a\nb");
    },
  );

  it("Exact-copy whitespace", () => {
    expect(normalizeProductFieldValue(" \t\r\n ", "exact-copy")).toBe(" \t\n ");
  });

  it("Emoji scalar count", () => {
    expect(countUnicodeScalars("😀")).toBe(1);
  });

  it("Normalization affects count", () => {
    const value: string = "Cafe\u0301";
    const rawLength = countUnicodeScalars(value);
    const normalizedLength = countUnicodeScalars(
      normalizeProductFieldValue(value, "ordinary"),
    );

    expect(rawLength).toBe(5);
    expect(normalizedLength).toBe(4);
  });
});
