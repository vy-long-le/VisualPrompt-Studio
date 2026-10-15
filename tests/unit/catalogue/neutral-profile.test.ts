import { describe, expect, it } from "vitest";
import * as catalogue from "../../../src/catalogue";
import {
  PRODUCT_FIELD_IDS,
  PRODUCT_NEUTRAL_PROFILE_ID,
  PRODUCT_PROFILE_VERSION,
  PRODUCT_RESEARCHED_TEMPLATE_PROFILES,
  PRODUCT_START_BLANK,
  PRODUCT_WORKFLOW_ID,
} from "../../../src/catalogue";
import type {
  ProductFieldId,
  ProductTemplateClauseVariant,
  ProductTemplateProfileDefinition,
} from "../../../src/catalogue";

interface ExpectedNeutralClause {
  readonly fieldId: ProductFieldId;
  readonly template: string;
}

interface ExpectedNeutralSection {
  readonly heading: string;
  readonly clauses: readonly ExpectedNeutralClause[];
}

const EXPECTED_NEUTRAL_SECTIONS = [
  {
    heading: "Product identity",
    clauses: [
      {
        fieldId: "product-description",
        template: "Depict {product-description}.",
      },
      {
        fieldId: "reference-mode",
        template: "Reference handling: {reference-mode}.",
      },
      {
        fieldId: "reference-notes",
        template: "Reference roles and scope: {reference-notes}.",
      },
      {
        fieldId: "preserve-details",
        template: "Keep these supplied details unchanged: {preserve-details}.",
      },
      {
        fieldId: "use-case",
        template: "Output use: {use-case}.",
      },
      {
        fieldId: "creative-objective",
        template: "Creative objective: {creative-objective}.",
      },
      {
        fieldId: "audience",
        template: "Intended viewer context: {audience}.",
      },
    ],
  },
  {
    heading: "Lighting and composition",
    clauses: [
      {
        fieldId: "lighting-style",
        template: "Light quality and setup: {lighting-style}.",
      },
      {
        fieldId: "light-direction",
        template: "Primary light direction: {light-direction}.",
      },
      {
        fieldId: "shadow-treatment",
        template: "Shadow rendering: {shadow-treatment}.",
      },
      {
        fieldId: "composition",
        template: "Spatial composition: {composition}.",
      },
    ],
  },
  {
    heading: "Camera and optics",
    clauses: [
      {
        fieldId: "shot-size",
        template: "Selected framing: {shot-size}.",
      },
      {
        fieldId: "camera-angle",
        template: "Viewpoint: {camera-angle}.",
      },
      {
        fieldId: "focus-treatment",
        template: "Focus intent: {focus-treatment}.",
      },
      {
        fieldId: "detail-target",
        template:
          "Supplied feature to inspect within the selected framing: {detail-target}.",
      },
      {
        fieldId: "scale-cue",
        template:
          "Relative size context, without adding unverified measurements: {scale-cue}.",
      },
    ],
  },
  {
    heading: "Materials and styling",
    clauses: [
      {
        fieldId: "placement-surface",
        template: "Product placement: {placement-surface}.",
      },
      {
        fieldId: "environment",
        template: "Surrounding scene: {environment}.",
      },
      {
        fieldId: "props",
        template: "Supporting props and their roles: {props}.",
      },
      {
        fieldId: "product-arrangement",
        template: "Product arrangement: {product-arrangement}.",
      },
      {
        fieldId: "material-emphasis",
        template: "Emphasize existing surface features: {material-emphasis}.",
      },
      {
        fieldId: "palette",
        template:
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
      },
      {
        fieldId: "mood",
        template: "Visual mood: {mood}.",
      },
      {
        fieldId: "visual-treatment",
        template: "Image treatment: {visual-treatment}.",
      },
      {
        fieldId: "interaction-action",
        template: "Interaction or frozen action: {interaction-action}.",
      },
    ],
  },
  {
    heading: "Output and guardrails",
    clauses: [
      {
        fieldId: "copy-treatment",
        template: "Added copy policy: {copy-treatment}.",
      },
      {
        fieldId: "copy-space",
        template: "Layout breathing room or copy region: {copy-space}.",
      },
      {
        fieldId: "exact-copy",
        template: "Approved copy: {exact-copy}",
      },
      {
        fieldId: "aspect-ratio",
        template:
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
      },
      {
        fieldId: "exclusions",
        template: "Additional constraints: {exclusions}.",
      },
    ],
  },
] as const satisfies readonly ExpectedNeutralSection[];

const EXPECTED_COPY_VARIANTS = [
  {
    when: {
      equals: ["copy-treatment", "Reserve space for later copy"],
    },
    template:
      "Copy intended for later post-production only; do not render it in the image: {exact-copy}.",
  },
  {
    when: {
      equals: ["copy-treatment", "Render supplied copy"],
    },
    template: "Render exactly this supplied copy: {exact-copy}.",
  },
] as const satisfies readonly ProductTemplateClauseVariant[];

const SUPPLIED_FACT_SAFEGUARD =
  "Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.";

const OMISSION_BEHAVIOR =
  "Blank optional clauses and empty headings omitted. Invalid required values block compilation. No original default restored.";

const USER_OVERRIDE_RULE =
  "Current normalized values replace preset defaults; edit does not infer new values or switch profile. Profile remains stable until user explicitly chooses another.";

const NEGATIVE_INSTRUCTION_STRATEGY =
  "Natural-language exclusions supplied in exclusions; no model-specific negative API or universal forbidden aesthetic.";

function readCatalogueExport<T>(name: string): T | undefined {
  return Reflect.get(catalogue, name) as T | undefined;
}

describe("CAT-02 and CMP-09 Start Blank neutral profile", () => {
  it("publishes one explicit neutral profile linked to Start Blank", () => {
    const profile = readCatalogueExport<ProductTemplateProfileDefinition>(
      "PRODUCT_NEUTRAL_TEMPLATE_PROFILE",
    );

    expect(
      profile,
      "PRODUCT_NEUTRAL_TEMPLATE_PROFILE must be exported through src/catalogue",
    ).toBeDefined();

    if (!profile) {
      return;
    }

    expect(profile).toMatchObject({
      id: PRODUCT_NEUTRAL_PROFILE_ID,
      sourcePresetId: null,
      workflowId: PRODUCT_WORKFLOW_ID,
      profileVersion: PRODUCT_PROFILE_VERSION,
      name: "Start Blank",
      creativeObjective:
        "Compile only the Product direction explicitly supplied by the user.",
      instructionHierarchy:
        "Preserve supplied product facts, then emit nonblank fields in canonical category and field order without adding Preset art direction.",
    });

    expect(PRODUCT_START_BLANK.templateProfileId).toBe(profile.id);

    expect(
      PRODUCT_RESEARCHED_TEMPLATE_PROFILES.some(
        (researchedProfile) => researchedProfile.id === profile.id,
      ),
    ).toBe(false);

    expect(Reflect.has(profile, "defaultsByFieldId")).toBe(false);
  });

  it("freezes five generic sections and all thirty fields in canonical order", () => {
    const profile = readCatalogueExport<ProductTemplateProfileDefinition>(
      "PRODUCT_NEUTRAL_TEMPLATE_PROFILE",
    );

    expect(
      profile,
      "PRODUCT_NEUTRAL_TEMPLATE_PROFILE must be exported through src/catalogue",
    ).toBeDefined();

    if (!profile) {
      return;
    }

    expect(
      profile.sections.map((section) => ({
        heading: section.heading,
        clauses: section.clauses.map((clause) => ({
          fieldId: clause.fieldId,
          template: clause.template,
        })),
      })),
    ).toEqual(EXPECTED_NEUTRAL_SECTIONS);

    const expectedFieldIds = EXPECTED_NEUTRAL_SECTIONS.flatMap((section) =>
      section.clauses.map((clause) => clause.fieldId),
    );

    const actualFieldIds = profile.sections.flatMap((section) =>
      section.clauses.map((clause) => clause.fieldId),
    );

    expect(profile.sections).toHaveLength(5);
    expect(actualFieldIds).toHaveLength(PRODUCT_FIELD_IDS.length);
    expect(actualFieldIds).toEqual(expectedFieldIds);
    expect(new Set(actualFieldIds)).toEqual(new Set(PRODUCT_FIELD_IDS));
  });

  it("uses matching nonblank conditions, optional omission, and only approved copy variants", () => {
    const profile = readCatalogueExport<ProductTemplateProfileDefinition>(
      "PRODUCT_NEUTRAL_TEMPLATE_PROFILE",
    );

    expect(
      profile,
      "PRODUCT_NEUTRAL_TEMPLATE_PROFILE must be exported through src/catalogue",
    ).toBeDefined();

    if (!profile) {
      return;
    }

    for (const section of profile.sections) {
      expect(section.heading.trim()).not.toBe("");
      expect(section.omitWhenNoClauses).toBe(true);
      expect(section.clauses.length).toBeGreaterThan(0);

      for (const clause of section.clauses) {
        expect(clause.condition).toEqual({
          op: "nonBlank",
          fieldId: clause.fieldId,
        });

        expect(
          clause.template,
          `${profile.id}.${clause.fieldId} must use its own field placeholder`,
        ).toContain(`{${clause.fieldId}}`);

        if (clause.fieldId === "exact-copy") {
          expect(clause.variants).toEqual(EXPECTED_COPY_VARIANTS);
        } else {
          expect(
            clause.variants,
            `${profile.id}.${clause.fieldId} must not invent a conditional variant`,
          ).toEqual([]);
        }
      }
    }
  });

  it("preserves neutral omission, override, safeguard, and negative-instruction policies", () => {
    const profile = readCatalogueExport<ProductTemplateProfileDefinition>(
      "PRODUCT_NEUTRAL_TEMPLATE_PROFILE",
    );

    expect(
      profile,
      "PRODUCT_NEUTRAL_TEMPLATE_PROFILE must be exported through src/catalogue",
    ).toBeDefined();

    if (!profile) {
      return;
    }

    expect(profile.suppliedFactSafeguard).toBe(SUPPLIED_FACT_SAFEGUARD);
    expect(profile.omissionBehavior).toBe(OMISSION_BEHAVIOR);
    expect(profile.userOverrideRule).toBe(USER_OVERRIDE_RULE);
    expect(profile.negativeInstructionStrategy).toBe(
      NEGATIVE_INSTRUCTION_STRATEGY,
    );
  });
});
