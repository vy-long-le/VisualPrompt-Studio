import { PRODUCT_WORKFLOW_ID } from "../ids";
import type { ProductValidationRuleDefinition } from "../types";

const SUGGESTED_RESOLUTION =
  "Edit the named fields to express one coherent intent, or clear an optional field. Warnings can be retained deliberately; errors require a corrected contract.";

export const PRODUCT_VALIDATION_RULES = [
  {
    id: "V01",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["product-description", "use-case"],
    trigger: {
      op: "requiredNonBlank",
    },
    message: "Supply product identity and a use case.",
    explanation: "Supply product identity and a use case.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V02",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: [
      "product-description",
      "reference-mode",
      "reference-notes",
      "preserve-details",
      "use-case",
      "creative-objective",
      "audience",
      "placement-surface",
      "environment",
      "props",
      "product-arrangement",
      "shot-size",
      "camera-angle",
      "composition",
      "focus-treatment",
      "lighting-style",
      "light-direction",
      "shadow-treatment",
      "material-emphasis",
      "palette",
      "mood",
      "visual-treatment",
      "interaction-action",
      "detail-target",
      "scale-cue",
      "copy-treatment",
      "copy-space",
      "exact-copy",
      "aspect-ratio",
      "exclusions",
    ],
    trigger: {
      op: "contractShape",
    },
    message:
      "Reject unknown fields, non-string values, invalid fixed-choice values, control characters and over-limit input.",
    explanation:
      "Reject unknown fields, non-string values, invalid fixed-choice values, control characters and over-limit input.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V03",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["reference-mode", "reference-notes"],
    trigger: {
      all: [
        {
          equals: ["reference-mode", "External product reference"],
        },
        {
          blank: "reference-notes",
        },
      ],
    },
    message: "Explain the externally attached reference role.",
    explanation: "Explain the externally attached reference role.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V04",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["copy-treatment", "exact-copy"],
    trigger: {
      all: [
        {
          equals: ["copy-treatment", "Render supplied copy"],
        },
        {
          blank: "exact-copy",
        },
      ],
    },
    message: "Supply approved exact copy before requesting rendered text.",
    explanation: "Supply approved exact copy before requesting rendered text.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V05",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["copy-treatment", "exact-copy"],
    trigger: {
      all: [
        {
          equals: ["copy-treatment", "No added copy"],
        },
        {
          nonBlank: "exact-copy",
        },
      ],
    },
    message:
      "Exact copy conflicts with No added copy. Change policy or clear this field; physical label text belongs in Preserve details.",
    explanation:
      "Exact copy conflicts with No added copy. Change policy or clear this field; physical label text belongs in Preserve details.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V06",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "error",
    fieldIds: ["use-case", "copy-treatment"],
    trigger: {
      all: [
        {
          equals: ["use-case", "Google Merchant Center primary listing"],
        },
        {
          equals: ["copy-treatment", "Render supplied copy"],
        },
      ],
    },
    message:
      "Added promotional copy conflicts with primary-image policy. Physical product labels are distinct.",
    explanation:
      "Added promotional copy conflicts with primary-image policy. Physical product labels are distinct.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V07",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["shot-size", "detail-target"],
    trigger: {
      all: [
        {
          oneOf: ["shot-size", ["Tight detail crop", "Macro detail view"]],
        },
        {
          blank: "detail-target",
        },
      ],
    },
    message:
      "Select the supplied feature to inspect; otherwise the model chooses the detail.",
    explanation:
      "Select the supplied feature to inspect; otherwise the model chooses the detail.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V08",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["product-arrangement", "camera-angle"],
    trigger: {
      all: [
        {
          equals: ["product-arrangement", "Overhead flat lay arrangement"],
        },
        {
          oneOf: [
            "camera-angle",
            [
              "Straight-on at product level",
              "Three-quarter view at product level",
              "Low angle",
              "High angle looking down",
              "Side profile",
            ],
          ],
        },
      ],
    },
    message:
      "Overhead flat-lay arrangement and the selected oblique viewpoint may conflict. Custom viewpoints require human review.",
    explanation:
      "Overhead flat-lay arrangement and the selected oblique viewpoint may conflict. Custom viewpoints require human review.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V09",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["lighting-style", "shadow-treatment"],
    trigger: {
      all: [
        {
          oneOf: [
            "lighting-style",
            [
              "Soft diffused studio key with gentle fill",
              "Broad high-key illumination",
            ],
          ],
        },
        {
          equals: ["shadow-treatment", "Crisp graphic shadow"],
        },
      ],
    },
    message:
      "A crisp shadow with broad soft illumination needs a deliberate additional light or a revised intent.",
    explanation:
      "A crisp shadow with broad soft illumination needs a deliberate additional light or a revised intent.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V10",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["composition", "copy-space"],
    trigger: {
      any: [
        {
          all: [
            {
              equals: ["composition", "Product on the left third"],
            },
            {
              equals: ["copy-space", "Uncluttered left third"],
            },
          ],
        },
        {
          all: [
            {
              equals: ["composition", "Product on the right third"],
            },
            {
              equals: ["copy-space", "Uncluttered right third"],
            },
          ],
        },
      ],
    },
    message: "The chosen copy region overlaps the product region.",
    explanation: "The chosen copy region overlaps the product region.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V11",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["use-case", "props"],
    trigger: {
      all: [
        {
          equals: ["use-case", "Google Merchant Center primary listing"],
        },
        {
          nonBlank: "props",
        },
      ],
    },
    message:
      "Styling props may imply items not sold. Put included bundle items in Product description and check current channel policy.",
    explanation:
      "Styling props may imply items not sold. Put included bundle items in Product description and check current channel policy.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V12",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["reference-mode", "preserve-details"],
    trigger: {
      all: [
        {
          equals: ["reference-mode", "External product reference"],
        },
        {
          blank: "preserve-details",
        },
      ],
    },
    message:
      "State which visible product attributes must survive scene changes.",
    explanation:
      "State which visible product attributes must survive scene changes.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V13",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["use-case", "copy-treatment"],
    trigger: {
      all: [
        {
          equals: ["use-case", "Google Merchant Center primary listing"],
        },
        {
          equals: ["copy-treatment", "Reserve space for later copy"],
        },
      ],
    },
    message:
      "A later promotional overlay would need a separate advertising asset, not the primary listing image.",
    explanation:
      "A later promotional overlay would need a separate advertising asset, not the primary listing image.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
  {
    id: "V14",
    workflowId: PRODUCT_WORKFLOW_ID,
    severity: "warning",
    fieldIds: ["scale-cue"],
    trigger: {
      all: [
        {
          profileEquals: "product-p06-mold",
        },
        {
          blank: "scale-cue",
        },
      ],
    },
    message:
      "Add the relative-size reference or accept that this image will not demonstrate scale reliably.",
    explanation:
      "Add the relative-size reference or accept that this image will not demonstrate scale reliably.",
    suggestedResolution: SUGGESTED_RESOLUTION,
  },
] as const satisfies readonly ProductValidationRuleDefinition[];
