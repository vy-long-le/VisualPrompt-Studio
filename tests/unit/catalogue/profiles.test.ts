import { describe, expect, it } from "vitest";
import * as catalogue from "../../../src/catalogue";
import {
  PRODUCT_FIELD_IDS,
  PRODUCT_NEUTRAL_PROFILE_ID,
  PRODUCT_PRESETS,
  PRODUCT_PROFILE_VERSION,
  PRODUCT_RESEARCHED_PROFILE_IDS,
  PRODUCT_WORKFLOW_ID,
} from "../../../src/catalogue";
import type {
  ProductFieldId,
  ProductPresetId,
  ProductResearchedProfileId,
  ProductTemplateProfileDefinition,
} from "../../../src/catalogue";

interface ExpectedProfileSection {
  readonly heading: string;
  readonly fieldIds: readonly ProductFieldId[];
}

interface ExpectedProfileSummary {
  readonly id: ProductResearchedProfileId;
  readonly sourcePresetId: ProductPresetId;
  readonly name: string;
  readonly creativeObjective: string;
  readonly instructionHierarchy: string;
  readonly sections: readonly ExpectedProfileSection[];
}

const EXPECTED_PROFILE_SUMMARIES = [
  {
    id: "product-p01-mold",
    sourcePresetId: "product-p01",
    name: "Clean Catalog Packshot",
    creativeObjective:
      "Clear product identity and unobstructed silhouette for a primary listing.",
    instructionHierarchy:
      "Prioritize identity and channel restrictions before scene or aesthetics.",
    sections: [
      {
        heading: "Identity and listing intent",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
          "use-case",
          "creative-objective",
          "audience",
        ],
      },
      {
        heading: "Unobstructed depiction",
        fieldIds: [
          "shot-size",
          "camera-angle",
          "composition",
          "focus-treatment",
          "placement-surface",
          "environment",
          "props",
          "product-arrangement",
        ],
      },
      {
        heading: "Readable finish",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
        ],
      },
      {
        heading: "Optional product context",
        fieldIds: ["interaction-action", "detail-target", "scale-cue"],
      },
      {
        heading: "Output and constraints",
        fieldIds: [
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p02-mold",
    sourcePresetId: "product-p02",
    name: "Sculptural Studio Hero",
    creativeObjective:
      "Present one product as the focal object in a deliberately designed set.",
    instructionHierarchy:
      "Establish product priority, then placement and sculptural spatial hierarchy before finishing.",
    sections: [
      {
        heading: "Hero object and objective",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
          "use-case",
          "creative-objective",
          "audience",
        ],
      },
      {
        heading: "Designed spatial hierarchy",
        fieldIds: [
          "placement-surface",
          "environment",
          "props",
          "product-arrangement",
          "shot-size",
          "camera-angle",
          "composition",
          "focus-treatment",
        ],
      },
      {
        heading: "Set and surface finish",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
        ],
      },
      {
        heading: "Optional secondary detail",
        fieldIds: ["interaction-action", "detail-target", "scale-cue"],
      },
      {
        heading: "Campaign delivery",
        fieldIds: [
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p03-mold",
    sourcePresetId: "product-p03",
    name: "Contextual Lifestyle",
    creativeObjective:
      "Show how the product belongs in an everyday environment.",
    instructionHierarchy:
      "Lead with environment and relation to use, then preserve subject and readable framing.",
    sections: [
      {
        heading: "Everyday context and relevance",
        fieldIds: [
          "use-case",
          "creative-objective",
          "audience",
          "environment",
          "interaction-action",
          "scale-cue",
        ],
      },
      {
        heading: "Product identity within the scene",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
        ],
      },
      {
        heading: "Contextual staging and framing",
        fieldIds: [
          "placement-surface",
          "props",
          "product-arrangement",
          "shot-size",
          "camera-angle",
          "composition",
          "focus-treatment",
        ],
      },
      {
        heading: "Natural scene treatment",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
          "detail-target",
        ],
      },
      {
        heading: "Delivery and exclusions",
        fieldIds: [
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p04-mold",
    sourcePresetId: "product-p04",
    name: "Craft and Material Detail",
    creativeObjective:
      "Direct attention to a supplied construction feature or texture.",
    instructionHierarchy:
      "Lead with detail target and focus; describe crop from current values without forcing a macro after override.",
    sections: [
      {
        heading: "Inspection priority",
        fieldIds: [
          "use-case",
          "creative-objective",
          "audience",
          "detail-target",
          "shot-size",
          "focus-treatment",
        ],
      },
      {
        heading: "Supplied identity boundaries",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
        ],
      },
      {
        heading: "Detail viewpoint and staging",
        fieldIds: [
          "camera-angle",
          "composition",
          "placement-surface",
          "environment",
          "props",
          "product-arrangement",
        ],
      },
      {
        heading: "Surface reading",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
        ],
      },
      {
        heading: "Optional context and output",
        fieldIds: [
          "interaction-action",
          "scale-cue",
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p05-mold",
    sourcePresetId: "product-p05",
    name: "Editorial Flat Lay",
    creativeObjective:
      "Arrange the product and supporting props in an overhead visual story.",
    instructionHierarchy:
      "Establish arrangement and view together, then supporting-element hierarchy and texture.",
    sections: [
      {
        heading: "Arrangement narrative",
        fieldIds: [
          "use-case",
          "creative-objective",
          "audience",
          "product-arrangement",
          "camera-angle",
          "composition",
        ],
      },
      {
        heading: "Hero item identity",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
        ],
      },
      {
        heading: "Supporting layout",
        fieldIds: [
          "placement-surface",
          "environment",
          "props",
          "shot-size",
          "focus-treatment",
        ],
      },
      {
        heading: "Texture and illumination",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
        ],
      },
      {
        heading: "Optional detail and delivery",
        fieldIds: [
          "interaction-action",
          "detail-target",
          "scale-cue",
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p06-mold",
    sourcePresetId: "product-p06",
    name: "Relative Scale Demonstration",
    creativeObjective:
      "Help the viewer understand approximate relative size using a supplied context cue.",
    instructionHierarchy:
      "Lead with scale relation and interaction; never convert a contextual cue into an exact measurement.",
    sections: [
      {
        heading: "Relative size relationship",
        fieldIds: [
          "use-case",
          "creative-objective",
          "audience",
          "scale-cue",
          "interaction-action",
        ],
      },
      {
        heading: "Product facts and preservation",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
        ],
      },
      {
        heading: "Readable comparison",
        fieldIds: [
          "product-arrangement",
          "shot-size",
          "camera-angle",
          "composition",
          "focus-treatment",
          "placement-surface",
          "environment",
          "props",
        ],
      },
      {
        heading: "Comparison finish",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
          "detail-target",
        ],
      },
      {
        heading: "Delivery constraints",
        fieldIds: [
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p07-mold",
    sourcePresetId: "product-p07",
    name: "Bundle and Packaging Overview",
    creativeObjective:
      "Show exactly the supplied collection, including packaging when it is part of the brief.",
    instructionHierarchy:
      "Lead with complete inventory and arrangement, then equal readability and containment.",
    sections: [
      {
        heading: "Collection contents and purpose",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
          "use-case",
          "creative-objective",
          "audience",
        ],
      },
      {
        heading: "Inventory layout",
        fieldIds: [
          "product-arrangement",
          "composition",
          "placement-surface",
          "environment",
          "props",
        ],
      },
      {
        heading: "Per item readability",
        fieldIds: [
          "shot-size",
          "camera-angle",
          "focus-treatment",
          "detail-target",
          "scale-cue",
        ],
      },
      {
        heading: "Collection finish",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
          "interaction-action",
        ],
      },
      {
        heading: "Output boundaries",
        fieldIds: [
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p08-mold",
    sourcePresetId: "product-p08",
    name: "Reflective Luxury Still Life",
    creativeObjective:
      "Make supplied reflective surfaces readable through controlled highlights and separation.",
    instructionHierarchy:
      "Lead with material response and light control, then scene restraint; preserve the actual product finish.",
    sections: [
      {
        heading: "Surface response and objective",
        fieldIds: [
          "use-case",
          "creative-objective",
          "audience",
          "material-emphasis",
          "lighting-style",
          "light-direction",
          "shadow-treatment",
        ],
      },
      {
        heading: "Actual product identity",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
        ],
      },
      {
        heading: "Reflection and framing",
        fieldIds: [
          "placement-surface",
          "environment",
          "props",
          "product-arrangement",
          "shot-size",
          "camera-angle",
          "composition",
          "focus-treatment",
        ],
      },
      {
        heading: "Art direction and optional context",
        fieldIds: [
          "palette",
          "mood",
          "visual-treatment",
          "interaction-action",
          "detail-target",
          "scale-cue",
        ],
      },
      {
        heading: "Delivery and exclusions",
        fieldIds: [
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p09-mold",
    sourcePresetId: "product-p09",
    name: "Dynamic Performance Concept",
    creativeObjective:
      "Communicate energy in a single frozen product-centered scene.",
    instructionHierarchy:
      "Lead with action cue and framing; stabilize identity and visibility before atmospheric styling.",
    sections: [
      {
        heading: "Frozen action and communication",
        fieldIds: [
          "use-case",
          "creative-objective",
          "audience",
          "interaction-action",
          "composition",
          "shot-size",
        ],
      },
      {
        heading: "Unchanged product",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
        ],
      },
      {
        heading: "Energy and readability",
        fieldIds: [
          "placement-surface",
          "environment",
          "props",
          "product-arrangement",
          "camera-angle",
          "focus-treatment",
        ],
      },
      {
        heading: "Light and visual treatment",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
        ],
      },
      {
        heading: "Optional inspection and delivery",
        fieldIds: [
          "detail-target",
          "scale-cue",
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
          "exclusions",
        ],
      },
    ],
  },
  {
    id: "product-p10-mold",
    sourcePresetId: "product-p10",
    name: "Copy Ready Campaign Layout",
    creativeObjective:
      "Create a product-led layout with a deliberate region for approved campaign copy.",
    instructionHierarchy:
      "Lead with communication, copy handling and spatial reservation; product depiction supports that layout.",
    sections: [
      {
        heading: "Communication and copy handling",
        fieldIds: [
          "use-case",
          "creative-objective",
          "audience",
          "copy-treatment",
          "copy-space",
          "exact-copy",
          "aspect-ratio",
        ],
      },
      {
        heading: "Product identity",
        fieldIds: [
          "product-description",
          "reference-mode",
          "reference-notes",
          "preserve-details",
        ],
      },
      {
        heading: "Layout supporting the message",
        fieldIds: [
          "composition",
          "product-arrangement",
          "shot-size",
          "camera-angle",
          "focus-treatment",
          "placement-surface",
          "environment",
          "props",
        ],
      },
      {
        heading: "Campaign visual finish",
        fieldIds: [
          "lighting-style",
          "light-direction",
          "shadow-treatment",
          "material-emphasis",
          "palette",
          "mood",
          "visual-treatment",
        ],
      },
      {
        heading: "Optional context and constraints",
        fieldIds: [
          "interaction-action",
          "detail-target",
          "scale-cue",
          "exclusions",
        ],
      },
    ],
  },
] as const satisfies readonly ExpectedProfileSummary[];

const SUPPLIED_FACT_SAFEGUARD =
  "Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.";

const OMISSION_BEHAVIOR =
  "Blank optional clauses and empty headings omitted. Invalid required values block compilation. No original default restored.";

const USER_OVERRIDE_RULE =
  "Current normalized values replace preset defaults; edit does not infer new values or switch profile. Profile remains stable until user explicitly chooses another.";

const NEGATIVE_INSTRUCTION_STRATEGY =
  "Natural-language exclusions supplied in exclusions; no model-specific negative API or universal forbidden aesthetic.";

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
] as const;

function readCatalogueExport<T>(name: string): T | undefined {
  return Reflect.get(catalogue, name) as T | undefined;
}

describe("CAT-02 researched Product template profiles", () => {
  it("publishes the ten canonical researched profiles without the neutral profile", () => {
    const profiles = readCatalogueExport<
      readonly ProductTemplateProfileDefinition[]
    >("PRODUCT_RESEARCHED_TEMPLATE_PROFILES");

    expect(
      profiles,
      "PRODUCT_RESEARCHED_TEMPLATE_PROFILES must be exported through src/catalogue",
    ).toBeDefined();

    if (!profiles) {
      return;
    }

    expect(profiles).toHaveLength(10);

    expect(profiles.map((profile) => profile.id)).toEqual(
      PRODUCT_RESEARCHED_PROFILE_IDS,
    );

    expect(new Set(profiles.map((profile) => profile.id)).size).toBe(
      PRODUCT_RESEARCHED_PROFILE_IDS.length,
    );

    expect(
      profiles.some((profile) => profile.id === PRODUCT_NEUTRAL_PROFILE_ID),
    ).toBe(false);
  });

  it("preserves explicit Preset-to-profile identity and immutable metadata", () => {
    const profiles = readCatalogueExport<
      readonly ProductTemplateProfileDefinition[]
    >("PRODUCT_RESEARCHED_TEMPLATE_PROFILES");

    expect(
      profiles,
      "PRODUCT_RESEARCHED_TEMPLATE_PROFILES must be exported through src/catalogue",
    ).toBeDefined();

    if (!profiles) {
      return;
    }

    expect(
      profiles.map((profile) => ({
        id: profile.id,
        sourcePresetId: profile.sourcePresetId,
        name: profile.name,
        creativeObjective: profile.creativeObjective,
        instructionHierarchy: profile.instructionHierarchy,
      })),
    ).toEqual(
      EXPECTED_PROFILE_SUMMARIES.map((profile) => ({
        id: profile.id,
        sourcePresetId: profile.sourcePresetId,
        name: profile.name,
        creativeObjective: profile.creativeObjective,
        instructionHierarchy: profile.instructionHierarchy,
      })),
    );

    const profileById = new Map(
      profiles.map((profile) => [profile.id, profile] as const),
    );

    for (const preset of PRODUCT_PRESETS) {
      const profile = profileById.get(preset.templateProfileId);

      expect(
        profile,
        `${preset.id} must resolve explicit profile ${preset.templateProfileId}`,
      ).toBeDefined();

      if (!profile) {
        continue;
      }

      expect(profile.sourcePresetId).toBe(preset.id);
      expect(profile.workflowId).toBe(PRODUCT_WORKFLOW_ID);
      expect(profile.profileVersion).toBe(PRODUCT_PROFILE_VERSION);
      expect(profile.name).toBe(preset.name);
    }

    expect(
      new Set(profiles.map((profile) => profile.sourcePresetId)).size,
    ).toBe(PRODUCT_PRESETS.length);
  });

  it("preserves the researched section and clause order with complete field coverage", () => {
    const profiles = readCatalogueExport<
      readonly ProductTemplateProfileDefinition[]
    >("PRODUCT_RESEARCHED_TEMPLATE_PROFILES");

    expect(
      profiles,
      "PRODUCT_RESEARCHED_TEMPLATE_PROFILES must be exported through src/catalogue",
    ).toBeDefined();

    if (!profiles) {
      return;
    }

    expect(
      profiles.map((profile) => ({
        id: profile.id,
        sections: profile.sections.map((section) => ({
          heading: section.heading,
          fieldIds: section.clauses.map((clause) => clause.fieldId),
        })),
      })),
    ).toEqual(
      EXPECTED_PROFILE_SUMMARIES.map((profile) => ({
        id: profile.id,
        sections: profile.sections,
      })),
    );

    for (const profile of profiles) {
      const clauses = profile.sections.flatMap((section) => section.clauses);
      const fieldIds = clauses.map((clause) => clause.fieldId);

      expect(profile.sections).toHaveLength(5);
      expect(clauses).toHaveLength(PRODUCT_FIELD_IDS.length);
      expect(new Set(fieldIds)).toEqual(new Set(PRODUCT_FIELD_IDS));

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
            `${profile.id}.${clause.fieldId} template must use its own field placeholder`,
          ).toContain(`{${clause.fieldId}}`);
        }
      }
    }
  });

  it("preserves omission, override, safeguard, negative, and copy-variant rules", () => {
    const profiles = readCatalogueExport<
      readonly ProductTemplateProfileDefinition[]
    >("PRODUCT_RESEARCHED_TEMPLATE_PROFILES");

    expect(
      profiles,
      "PRODUCT_RESEARCHED_TEMPLATE_PROFILES must be exported through src/catalogue",
    ).toBeDefined();

    if (!profiles) {
      return;
    }

    for (const profile of profiles) {
      expect(profile.suppliedFactSafeguard).toBe(SUPPLIED_FACT_SAFEGUARD);

      expect(profile.omissionBehavior).toBe(OMISSION_BEHAVIOR);
      expect(profile.userOverrideRule).toBe(USER_OVERRIDE_RULE);

      expect(profile.negativeInstructionStrategy).toBe(
        NEGATIVE_INSTRUCTION_STRATEGY,
      );

      const clauses = profile.sections.flatMap((section) => section.clauses);

      const exactCopyClauses = clauses.filter(
        (clause) => clause.fieldId === "exact-copy",
      );

      expect(exactCopyClauses).toHaveLength(1);
      expect(exactCopyClauses[0]?.variants).toEqual(EXPECTED_COPY_VARIANTS);

      for (const clause of clauses) {
        if (clause.fieldId !== "exact-copy") {
          expect(
            clause.variants,
            `${profile.id}.${clause.fieldId} must not invent a conditional variant`,
          ).toEqual([]);
        }
      }
    }
  });
});
