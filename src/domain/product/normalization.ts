import type {
  ProductFieldNormalization,
  ProductFieldValues,
} from "../../catalogue";
import { PRODUCT_FIELDS } from "../../catalogue";

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

export function normalizeProductFieldValues(
  values: ProductFieldValues,
): ProductFieldValues {
  const normalizedFieldValues = { ...values };
  const valuesArray = Object.entries(normalizedFieldValues);

  for (const [key, value] of valuesArray) {
    const foundField = PRODUCT_FIELDS.find((field) => field.id === key);

    if (!foundField) {
      throw new Error(`Can not find filed ID with key ${key}`);
    }

    normalizedFieldValues[foundField.id] = normalizeProductFieldValue(
      value,
      foundField.constraints.normalization,
    );
  }

  return normalizedFieldValues;
}
