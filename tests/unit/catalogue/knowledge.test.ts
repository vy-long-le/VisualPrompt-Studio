import { describe, expect, it } from "vitest";
import {
  PRODUCT_FIELD_IDS,
  PRODUCT_FIELD_KNOWLEDGE_ENTRIES,
  PRODUCT_FIELDS,
} from "../../../src/catalogue";

const VIETNAMESE_MARKED_CHARACTERS = /[À-ỹĐđ]/u;

describe("CAT-05 Product field knowledge", () => {
  it("publishes one knowledge entry for every canonical field in canonical order", () => {
    const fieldIds = PRODUCT_FIELD_KNOWLEDGE_ENTRIES.map(
      (entry) => entry.fieldId,
    );
    const entryIds = PRODUCT_FIELD_KNOWLEDGE_ENTRIES.map((entry) => entry.id);

    expect(PRODUCT_FIELD_KNOWLEDGE_ENTRIES).toHaveLength(
      PRODUCT_FIELD_IDS.length,
    );
    expect(fieldIds).toEqual(PRODUCT_FIELD_IDS);
    expect(new Set(fieldIds).size).toBe(PRODUCT_FIELD_IDS.length);
    expect(entryIds).toEqual(
      PRODUCT_FIELD_IDS.map((fieldId) => `product-knowledge:${fieldId}`),
    );
    expect(new Set(entryIds).size).toBe(entryIds.length);
  });

  it("resolves every field knowledge reference to the matching field", () => {
    const knowledgeById = new Map(
      PRODUCT_FIELD_KNOWLEDGE_ENTRIES.map((entry) => [entry.id, entry]),
    );

    for (const field of PRODUCT_FIELDS) {
      const entry = knowledgeById.get(field.knowledgeEntryId);

      expect(entry).toBeDefined();
      expect(entry?.fieldId).toBe(field.id);
      expect(entry?.title).toBe(field.label);
    }
  });

  it("publishes complete article and search content for every entry", () => {
    for (const entry of PRODUCT_FIELD_KNOWLEDGE_ENTRIES) {
      const field = PRODUCT_FIELDS.find(
        (candidate) => candidate.id === entry.fieldId,
      );

      expect(field).toBeDefined();
      expect(entry.title.trim()).not.toBe("");
      expect(entry.summary.trim()).not.toBe("");
      expect(entry.effect.trim()).not.toBe("");
      expect(entry.whenToUse.trim()).not.toBe("");
      expect(entry.howToUse.trim()).not.toBe("");
      expect(entry.wordingPattern.trim()).not.toBe("");
      expect(entry.validationBoundaries.trim()).not.toBe("");

      expect(entry.examples.length).toBeGreaterThan(0);
      expect(entry.caveats.length).toBeGreaterThan(0);
      expect(entry.relatedTerms.length).toBeGreaterThan(0);
      expect(entry.starterSuggestions.length).toBeGreaterThan(0);

      expect(entry.examples.every((value) => value.trim().length > 0)).toBe(
        true,
      );
      expect(entry.caveats.every((value) => value.trim().length > 0)).toBe(
        true,
      );
      expect(entry.relatedTerms.every((value) => value.trim().length > 0)).toBe(
        true,
      );
      expect(
        entry.starterSuggestions.every((value) => value.trim().length > 0),
      ).toBe(true);

      expect(entry.wordingPattern).toContain(`{${entry.fieldId}}`);
      expect(entry.validationBoundaries).toContain(
        `up to ${field?.constraints.maxLength} characters`,
      );

      if (field?.required) {
        expect(entry.validationBoundaries).toContain("Required.");
      } else {
        expect(entry.validationBoundaries).toContain(
          "Optional unless a dependency makes it required.",
        );
      }
    }
  });

  it("keeps production knowledge English-only", () => {
    const productionKnowledge = JSON.stringify(PRODUCT_FIELD_KNOWLEDGE_ENTRIES);

    expect(productionKnowledge).not.toMatch(VIETNAMESE_MARKED_CHARACTERS);
  });
});
