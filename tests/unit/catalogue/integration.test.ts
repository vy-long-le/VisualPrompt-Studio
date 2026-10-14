import { describe, expect, it } from "vitest";
import {
  PRODUCT_FIELD_GROUP_IDS,
  PRODUCT_FIELD_GROUPS,
  PRODUCT_FIELD_IDS,
  PRODUCT_FIELD_KNOWLEDGE_ENTRIES,
  PRODUCT_FIELD_OPTION_DICTIONARY,
  PRODUCT_FIELDS,
  PRODUCT_WORKFLOW,
  PRODUCT_WORKFLOW_ID,
} from "../../../src/catalogue";
import type {
  ProductFieldDefinition,
  ProductFieldId,
  ProductFieldKnowledgeEntry,
  ProductKnowledgeEntryId,
} from "../../../src/catalogue";

const fieldByIds = new Map<ProductFieldId, ProductFieldDefinition>(
  PRODUCT_FIELDS.map((field) => [field.id, field] as const),
);

const knowledgeById = new Map<
  ProductKnowledgeEntryId,
  ProductFieldKnowledgeEntry
>(PRODUCT_FIELD_KNOWLEDGE_ENTRIES.map((entry) => [entry.id, entry] as const));

const allOptions = PRODUCT_FIELD_IDS.flatMap((fieldId) => [
  ...PRODUCT_FIELD_OPTION_DICTIONARY[fieldId],
]);

describe("M2.3d Product catalogue integration", () => {
  it("publishes the complete Product catalogue graph through the public boundary", () => {
    expect(PRODUCT_WORKFLOW).toMatchObject({
      id: PRODUCT_WORKFLOW_ID,
      name: "Product Advertising and Photography",
      status: "available",
    });

    expect(PRODUCT_WORKFLOW.fieldGroups).toBe(PRODUCT_FIELD_GROUPS);

    expect(PRODUCT_FIELD_GROUPS.map((group) => group.id)).toEqual(
      PRODUCT_FIELD_GROUP_IDS,
    );

    expect(PRODUCT_FIELD_GROUPS).toHaveLength(5);
    expect(PRODUCT_FIELDS).toHaveLength(30);
    expect(Object.keys(PRODUCT_FIELD_OPTION_DICTIONARY)).toHaveLength(30);
    expect(allOptions).toHaveLength(108);
    expect(PRODUCT_FIELD_KNOWLEDGE_ENTRIES).toHaveLength(30);
  });

  it("resolves every group, field, option, and knowledge reference without orphans", () => {
    const fieldReferenceCounts = new Map<ProductFieldId, number>(
      PRODUCT_FIELD_IDS.map((fieldId) => [fieldId, 0] as const),
    );

    const referencedKnowledgeIds = new Set<ProductKnowledgeEntryId>();

    for (const group of PRODUCT_FIELD_GROUPS) {
      expect(group.workflowId).toBe(PRODUCT_WORKFLOW_ID);

      for (const fieldId of group.fieldIds) {
        const field = fieldByIds.get(fieldId);

        if (!field) {
          throw new Error(
            `Field group ${group.id} references missing field ${fieldId}.`,
          );
        }

        expect(field.workflowId).toBe(PRODUCT_WORKFLOW_ID);
        expect(field.options).toBe(PRODUCT_FIELD_OPTION_DICTIONARY[field.id]);

        const knowledgeEntry = knowledgeById.get(field.knowledgeEntryId);

        if (!knowledgeEntry) {
          throw new Error(
            `Field ${field.id} references missing knowledge entry ${field.knowledgeEntryId}.`,
          );
        }

        expect(knowledgeEntry.fieldId).toBe(field.id);
        expect(knowledgeEntry.title).toBe(field.label);

        const currentReferenceCount = fieldReferenceCounts.get(fieldId);

        if (currentReferenceCount === undefined) {
          throw new Error(
            `Field group ${group.id} references non-canonical field ${fieldId}.`,
          );
        }

        fieldReferenceCounts.set(fieldId, currentReferenceCount + 1);

        referencedKnowledgeIds.add(knowledgeEntry.id);
      }
    }

    expect([...fieldReferenceCounts.keys()]).toEqual(PRODUCT_FIELD_IDS);

    expect([...fieldReferenceCounts.values()]).toEqual(
      PRODUCT_FIELD_IDS.map(() => 1),
    );

    expect(Object.keys(PRODUCT_FIELD_OPTION_DICTIONARY)).toEqual(
      PRODUCT_FIELD_IDS,
    );

    expect(
      PRODUCT_FIELD_KNOWLEDGE_ENTRIES.map((entry) => entry.fieldId),
    ).toEqual(PRODUCT_FIELD_IDS);

    expect(referencedKnowledgeIds.size).toBe(
      PRODUCT_FIELD_KNOWLEDGE_ENTRIES.length,
    );

    const optionIds = allOptions.map((option) => option.id);

    expect(new Set(optionIds).size).toBe(optionIds.length);
  });
});
