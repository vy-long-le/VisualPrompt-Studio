import { PRODUCT_NEUTRAL_PROFILE_ID, PRODUCT_WORKFLOW_ID } from "../ids";
import type { ProductFieldId } from "../ids";
import type {
  ProductTemplateClause,
  ProductTemplateClauseVariant,
  ProductTemplateProfileDefinition,
  ProductTemplateSection,
} from "../types";
import { PRODUCT_PROFILE_VERSION } from "../versions";

const SUPPLIED_FACT_SAFEGUARD =
  "Use only supplied product facts. Do not invent offers, dimensions, physical details or branding.";

const OMISSION_BEHAVIOR =
  "Blank optional clauses and empty headings omitted. Invalid required values block compilation. No original default restored.";

const USER_OVERRIDE_RULE =
  "Current normalized values replace preset defaults; edit does not infer new values or switch profile. Profile remains stable until user explicitly chooses another.";

const NEGATIVE_INSTRUCTION_STRATEGY =
  "Natural-language exclusions supplied in exclusions; no model-specific negative API or universal forbidden aesthetic.";

const COPY_HANDLING_VARIANTS = [
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

function createClause(
  fieldId: ProductFieldId,
  template: string,
  variants: readonly ProductTemplateClauseVariant[] = [],
): ProductTemplateClause {
  return {
    fieldId,
    template,
    condition: {
      op: "nonBlank",
      fieldId,
    },
    variants,
  };
}

function createSection(
  heading: string,
  clauses: readonly ProductTemplateClause[],
): ProductTemplateSection {
  return {
    heading,
    clauses,
    omitWhenNoClauses: true,
  };
}

export const PRODUCT_RESEARCHED_TEMPLATE_PROFILES = [
  {
    id: "product-p01-mold",
    sourcePresetId: "product-p01",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Clean Catalog Packshot",
    creativeObjective:
      "Clear product identity and unobstructed silhouette for a primary listing.",
    instructionHierarchy:
      "Prioritize identity and channel restrictions before scene or aesthetics.",
    sections: [
      createSection("Identity and listing intent", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
      ]),
      createSection("Unobstructed depiction", [
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause(
          "composition",
          "Keep the supplied subject readable using {composition}.",
        ),
        createClause("focus-treatment", "Focus intent: {focus-treatment}."),
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause(
          "props",
          "Only the explicitly supplied supporting elements are requested: {props}.",
        ),
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
      ]),
      createSection("Readable finish", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
      ]),
      createSection("Optional product context", [
        createClause(
          "interaction-action",
          "Interaction or frozen action: {interaction-action}.",
        ),
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
      ]),
      createSection("Output and constraints", [
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p02-mold",
    sourcePresetId: "product-p02",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Sculptural Studio Hero",
    creativeObjective:
      "Present one product as the focal object in a deliberately designed set.",
    instructionHierarchy:
      "Establish product priority, then placement and sculptural spatial hierarchy before finishing.",
    sections: [
      createSection("Hero object and objective", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
      ]),
      createSection("Designed spatial hierarchy", [
        createClause(
          "placement-surface",
          "Build the selected product staging around {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause("props", "Supporting props and their roles: {props}."),
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause(
          "composition",
          "Arrange the set around the hero object using {composition}.",
        ),
        createClause("focus-treatment", "Focus intent: {focus-treatment}."),
      ]),
      createSection("Set and surface finish", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
      ]),
      createSection("Optional secondary detail", [
        createClause(
          "interaction-action",
          "Interaction or frozen action: {interaction-action}.",
        ),
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
      ]),
      createSection("Campaign delivery", [
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p03-mold",
    sourcePresetId: "product-p03",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Contextual Lifestyle",
    creativeObjective:
      "Show how the product belongs in an everyday environment.",
    instructionHierarchy:
      "Lead with environment and relation to use, then preserve subject and readable framing.",
    sections: [
      createSection("Everyday context and relevance", [
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
        createClause(
          "environment",
          "Let the everyday context be {environment}.",
        ),
        createClause(
          "interaction-action",
          "Relate the supplied product to this concrete moment: {interaction-action}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
      ]),
      createSection("Product identity within the scene", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
      ]),
      createSection("Contextual staging and framing", [
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("props", "Supporting props and their roles: {props}."),
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause("composition", "Spatial composition: {composition}."),
        createClause("focus-treatment", "Focus intent: {focus-treatment}."),
      ]),
      createSection("Natural scene treatment", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
      ]),
      createSection("Delivery and exclusions", [
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p04-mold",
    sourcePresetId: "product-p04",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Craft and Material Detail",
    creativeObjective:
      "Direct attention to a supplied construction feature or texture.",
    instructionHierarchy:
      "Lead with detail target and focus; describe crop from current values without forcing a macro after override.",
    sections: [
      createSection("Inspection priority", [
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
        createClause(
          "detail-target",
          "Inspect this supplied feature, without inventing additional construction: {detail-target}.",
        ),
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause(
          "focus-treatment",
          "Make the chosen information readable with {focus-treatment}.",
        ),
      ]),
      createSection("Supplied identity boundaries", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
      ]),
      createSection("Detail viewpoint and staging", [
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause("composition", "Spatial composition: {composition}."),
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause("props", "Supporting props and their roles: {props}."),
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
      ]),
      createSection("Surface reading", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
      ]),
      createSection("Optional context and output", [
        createClause(
          "interaction-action",
          "Interaction or frozen action: {interaction-action}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p05-mold",
    sourcePresetId: "product-p05",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Editorial Flat Lay",
    creativeObjective:
      "Arrange the product and supporting props in an overhead visual story.",
    instructionHierarchy:
      "Establish arrangement and view together, then supporting-element hierarchy and texture.",
    sections: [
      createSection("Arrangement narrative", [
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
        createClause(
          "product-arrangement",
          "Construct the chosen arrangement as {product-arrangement}.",
        ),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause("composition", "Spatial composition: {composition}."),
      ]),
      createSection("Hero item identity", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
      ]),
      createSection("Supporting layout", [
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause(
          "props",
          "Use these secondary objects to support the layout rather than replace the product: {props}.",
        ),
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause("focus-treatment", "Focus intent: {focus-treatment}."),
      ]),
      createSection("Texture and illumination", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
      ]),
      createSection("Optional detail and delivery", [
        createClause(
          "interaction-action",
          "Interaction or frozen action: {interaction-action}.",
        ),
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p06-mold",
    sourcePresetId: "product-p06",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Relative Scale Demonstration",
    creativeObjective:
      "Help the viewer understand approximate relative size using a supplied context cue.",
    instructionHierarchy:
      "Lead with scale relation and interaction; never convert a contextual cue into an exact measurement.",
    sections: [
      createSection("Relative size relationship", [
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
        createClause(
          "scale-cue",
          "Represent this relative-size cue as contextual information, not certified measurement: {scale-cue}.",
        ),
        createClause(
          "interaction-action",
          "Make the scale relationship legible through {interaction-action}.",
        ),
      ]),
      createSection("Product facts and preservation", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
      ]),
      createSection("Readable comparison", [
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause("composition", "Spatial composition: {composition}."),
        createClause("focus-treatment", "Focus intent: {focus-treatment}."),
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause("props", "Supporting props and their roles: {props}."),
      ]),
      createSection("Comparison finish", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
      ]),
      createSection("Delivery constraints", [
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p07-mold",
    sourcePresetId: "product-p07",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Bundle and Packaging Overview",
    creativeObjective:
      "Show exactly the supplied collection, including packaging when it is part of the brief.",
    instructionHierarchy:
      "Lead with complete inventory and arrangement, then equal readability and containment.",
    sections: [
      createSection("Collection contents and purpose", [
        createClause(
          "product-description",
          "Show precisely this supplied inventory, preserving stated item counts: {product-description}.",
        ),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
      ]),
      createSection("Inventory layout", [
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
        createClause("composition", "Spatial composition: {composition}."),
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause("props", "Supporting props and their roles: {props}."),
      ]),
      createSection("Per item readability", [
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause(
          "focus-treatment",
          "Keep the collection legible with {focus-treatment}.",
        ),
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
      ]),
      createSection("Collection finish", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
        createClause(
          "interaction-action",
          "Interaction or frozen action: {interaction-action}.",
        ),
      ]),
      createSection("Output boundaries", [
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p08-mold",
    sourcePresetId: "product-p08",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Reflective Luxury Still Life",
    creativeObjective:
      "Make supplied reflective surfaces readable through controlled highlights and separation.",
    instructionHierarchy:
      "Lead with material response and light control, then scene restraint; preserve the actual product finish.",
    sections: [
      createSection("Surface response and objective", [
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
        createClause(
          "material-emphasis",
          "Read the actual surface through {material-emphasis}; do not invent a different physical finish.",
        ),
        createClause(
          "lighting-style",
          "Control surface readability with {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
      ]),
      createSection("Actual product identity", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
      ]),
      createSection("Reflection and framing", [
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause("props", "Supporting props and their roles: {props}."),
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause("composition", "Spatial composition: {composition}."),
        createClause("focus-treatment", "Focus intent: {focus-treatment}."),
      ]),
      createSection("Art direction and optional context", [
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
        createClause(
          "interaction-action",
          "Interaction or frozen action: {interaction-action}.",
        ),
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
      ]),
      createSection("Delivery and exclusions", [
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p09-mold",
    sourcePresetId: "product-p09",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Dynamic Performance Concept",
    creativeObjective:
      "Communicate energy in a single frozen product-centered scene.",
    instructionHierarchy:
      "Lead with action cue and framing; stabilize identity and visibility before atmospheric styling.",
    sections: [
      createSection("Frozen action and communication", [
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
        createClause(
          "interaction-action",
          "Stage one still image with this action cue: {interaction-action}.",
        ),
        createClause("composition", "Spatial composition: {composition}."),
        createClause("shot-size", "Selected framing: {shot-size}."),
      ]),
      createSection("Unchanged product", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
      ]),
      createSection("Energy and readability", [
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause("props", "Supporting props and their roles: {props}."),
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause(
          "focus-treatment",
          "Retain product readability using {focus-treatment}.",
        ),
      ]),
      createSection("Light and visual treatment", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
      ]),
      createSection("Optional inspection and delivery", [
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Layout breathing room or copy region: {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
  {
    id: "product-p10-mold",
    sourcePresetId: "product-p10",
    workflowId: PRODUCT_WORKFLOW_ID,
    profileVersion: PRODUCT_PROFILE_VERSION,
    name: "Copy Ready Campaign Layout",
    creativeObjective:
      "Create a product-led layout with a deliberate region for approved campaign copy.",
    instructionHierarchy:
      "Lead with communication, copy handling and spatial reservation; product depiction supports that layout.",
    sections: [
      createSection("Communication and copy handling", [
        createClause("use-case", "Output use: {use-case}."),
        createClause(
          "creative-objective",
          "Creative objective: {creative-objective}.",
        ),
        createClause("audience", "Intended viewer context: {audience}."),
        createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
        createClause(
          "copy-space",
          "Organize the message layout around {copy-space}.",
        ),
        createClause(
          "exact-copy",
          "Approved copy: {exact-copy}",
          COPY_HANDLING_VARIANTS,
        ),
        createClause(
          "aspect-ratio",
          "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
        ),
      ]),
      createSection("Product identity", [
        createClause("product-description", "Depict {product-description}."),
        createClause("reference-mode", "Reference handling: {reference-mode}."),
        createClause(
          "reference-notes",
          "Reference roles and scope: {reference-notes}.",
        ),
        createClause(
          "preserve-details",
          "Keep these supplied details unchanged: {preserve-details}.",
        ),
      ]),
      createSection("Layout supporting the message", [
        createClause(
          "composition",
          "Position the product to support the current copy policy with {composition}.",
        ),
        createClause(
          "product-arrangement",
          "Product arrangement: {product-arrangement}.",
        ),
        createClause("shot-size", "Selected framing: {shot-size}."),
        createClause("camera-angle", "Viewpoint: {camera-angle}."),
        createClause("focus-treatment", "Focus intent: {focus-treatment}."),
        createClause(
          "placement-surface",
          "Product placement: {placement-surface}.",
        ),
        createClause("environment", "Surrounding scene: {environment}."),
        createClause("props", "Supporting props and their roles: {props}."),
      ]),
      createSection("Campaign visual finish", [
        createClause(
          "lighting-style",
          "Light quality and setup: {lighting-style}.",
        ),
        createClause(
          "light-direction",
          "Primary light direction: {light-direction}.",
        ),
        createClause(
          "shadow-treatment",
          "Shadow rendering: {shadow-treatment}.",
        ),
        createClause(
          "material-emphasis",
          "Emphasize existing surface features: {material-emphasis}.",
        ),
        createClause(
          "palette",
          "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
        ),
        createClause("mood", "Visual mood: {mood}."),
        createClause(
          "visual-treatment",
          "Image treatment: {visual-treatment}.",
        ),
      ]),
      createSection("Optional context and constraints", [
        createClause(
          "interaction-action",
          "Interaction or frozen action: {interaction-action}.",
        ),
        createClause(
          "detail-target",
          "Supplied feature to inspect within the selected framing: {detail-target}.",
        ),
        createClause(
          "scale-cue",
          "Relative size context, without adding unverified measurements: {scale-cue}.",
        ),
        createClause("exclusions", "Additional constraints: {exclusions}."),
      ]),
    ],
    suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
    omissionBehavior: OMISSION_BEHAVIOR,
    userOverrideRule: USER_OVERRIDE_RULE,
    negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
  },
] as const satisfies readonly ProductTemplateProfileDefinition[];

export const PRODUCT_NEUTRAL_TEMPLATE_PROFILE = {
  id: PRODUCT_NEUTRAL_PROFILE_ID,
  sourcePresetId: null,
  workflowId: PRODUCT_WORKFLOW_ID,
  profileVersion: PRODUCT_PROFILE_VERSION,
  name: "Start Blank",
  creativeObjective:
    "Compile only the Product direction explicitly supplied by the user.",
  instructionHierarchy:
    "Preserve supplied product facts, then emit nonblank fields in canonical category and field order without adding Preset art direction.",
  sections: [
    createSection("Product identity", [
      createClause("product-description", "Depict {product-description}."),
      createClause("reference-mode", "Reference handling: {reference-mode}."),
      createClause(
        "reference-notes",
        "Reference roles and scope: {reference-notes}.",
      ),
      createClause(
        "preserve-details",
        "Keep these supplied details unchanged: {preserve-details}.",
      ),
      createClause("use-case", "Output use: {use-case}."),
      createClause(
        "creative-objective",
        "Creative objective: {creative-objective}.",
      ),
      createClause("audience", "Intended viewer context: {audience}."),
    ]),
    createSection("Lighting and composition", [
      createClause(
        "lighting-style",
        "Light quality and setup: {lighting-style}.",
      ),
      createClause(
        "light-direction",
        "Primary light direction: {light-direction}.",
      ),
      createClause("shadow-treatment", "Shadow rendering: {shadow-treatment}."),
      createClause("composition", "Spatial composition: {composition}."),
    ]),
    createSection("Camera and optics", [
      createClause("shot-size", "Selected framing: {shot-size}."),
      createClause("camera-angle", "Viewpoint: {camera-angle}."),
      createClause("focus-treatment", "Focus intent: {focus-treatment}."),
      createClause(
        "detail-target",
        "Supplied feature to inspect within the selected framing: {detail-target}.",
      ),
      createClause(
        "scale-cue",
        "Relative size context, without adding unverified measurements: {scale-cue}.",
      ),
    ]),
    createSection("Materials and styling", [
      createClause(
        "placement-surface",
        "Product placement: {placement-surface}.",
      ),
      createClause("environment", "Surrounding scene: {environment}."),
      createClause("props", "Supporting props and their roles: {props}."),
      createClause(
        "product-arrangement",
        "Product arrangement: {product-arrangement}.",
      ),
      createClause(
        "material-emphasis",
        "Emphasize existing surface features: {material-emphasis}.",
      ),
      createClause(
        "palette",
        "Apply this palette to the scene, while retaining supplied product colors: {palette}.",
      ),
      createClause("mood", "Visual mood: {mood}."),
      createClause("visual-treatment", "Image treatment: {visual-treatment}."),
      createClause(
        "interaction-action",
        "Interaction or frozen action: {interaction-action}.",
      ),
    ]),
    createSection("Output and guardrails", [
      createClause("copy-treatment", "Added copy policy: {copy-treatment}."),
      createClause(
        "copy-space",
        "Layout breathing room or copy region: {copy-space}.",
      ),
      createClause(
        "exact-copy",
        "Approved copy: {exact-copy}",
        COPY_HANDLING_VARIANTS,
      ),
      createClause(
        "aspect-ratio",
        "Compose for width:height ratio {aspect-ratio}; set the matching output control in the external generator.",
      ),
      createClause("exclusions", "Additional constraints: {exclusions}."),
    ]),
  ],
  suppliedFactSafeguard: SUPPLIED_FACT_SAFEGUARD,
  omissionBehavior: OMISSION_BEHAVIOR,
  userOverrideRule: USER_OVERRIDE_RULE,
  negativeInstructionStrategy: NEGATIVE_INSTRUCTION_STRATEGY,
} as const satisfies ProductTemplateProfileDefinition;
