import type { ProductFieldNormalization } from "../../catalogue";

export function normalizeProductFieldValue(
  value: string,
  mode: ProductFieldNormalization,
): string {
  if (mode === "ordinary") {
    return value.normalize("NFC").replace(/\s+/gu, " ").trim();
  } else {
    return value.replace(/\r\n?/g, "\n");
  }
}

export function countUnicodeScalars(value: string): number {
  return [...value].length;
}
