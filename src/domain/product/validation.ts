import type { ProductConfigCheckResult, ProductValidationIssue } from "./types";
import {
  PRODUCT_TEMPLATE_PROFILE_IDS,
  PRODUCT_FIELD_IDS,
  PRODUCT_FIELDS,
} from "../../catalogue";
import type { ProductFieldValues } from "../../catalogue/types";
import {
  normalizeProductFieldValue,
  countUnicodeScalars,
} from "./normalization";

const isValidFixedChoiceValues = (
  values: ProductFieldValues,
): ProductValidationIssue[] => {
  const issues: ProductValidationIssue[] = [];

  for (const field of PRODUCT_FIELDS) {
    if (field.inputKind !== "fixed-choice") {
      continue;
    }

    const rawValue = values[field.id];
    const normalizedValue = normalizeProductFieldValue(
      rawValue,
      field.constraints.normalization,
    );

    if (normalizedValue === "") {
      continue;
    }

    const matchesOption: boolean = field.options.some(
      (option) => option.storedValue === normalizedValue,
    );
    if (!matchesOption) {
      issues.push({
        ruleId: "V02",
        severity: "error",
        message: `Choose a listed value for ${field.label}.`,
        fieldIds: [field.id],
      });
    }
  }
  return issues;
};

const validCodePoint: number[] = [9, 10, 13];
const forbiddenRanges = [
  { start: 0, end: 8 },
  { start: 11, end: 12 },
  { start: 14, end: 31 },
  { start: 127, end: 127 },
];

const checkForbiddenControlChar = (
  values: ProductFieldValues,
): ProductValidationIssue[] => {
  const issues: ProductValidationIssue[] = [];
  for (const field of PRODUCT_FIELDS) {
    const rawValue: string = values[field.id];
    for (const c of rawValue) {
      const codePoint: number | undefined = c.codePointAt(0);
      if (
        codePoint === undefined ||
        validCodePoint.some((code) => code === codePoint)
      ) {
        continue;
      }
      if (
        forbiddenRanges.some(
          (range) => codePoint >= range.start && codePoint <= range.end,
        )
      ) {
        issues.push({
          ruleId: "V02",
          severity: "error",
          message: `${field.label} contain forbidden character ${c} with code point ${codePoint}`,
          fieldIds: [field.id],
        });
        break;
      }
    }
  }
  return issues;
};

const checkExceedLength = (
  values: ProductFieldValues,
): ProductValidationIssue[] => {
  const issues: ProductValidationIssue[] = [];

  for (const field of PRODUCT_FIELDS) {
    const rawValue: string = values[field.id];
    const normalizedValue: string = normalizeProductFieldValue(
      rawValue,
      field.constraints.normalization,
    );

    if (normalizedValue.trim() === "") {
      continue;
    }

    const scalarCount: number = countUnicodeScalars(normalizedValue);
    const maxLength: number = field.constraints.maxLength;

    if (scalarCount > maxLength) {
      issues.push({
        ruleId: "V02",
        severity: "error",
        message: `${field.label} must contain at most ${field.constraints.maxLength} Unicode scalar values`,
        fieldIds: [field.id],
      });
    }
  }
  return issues;
};

const isProductFieldValues = (
  values: unknown,
): values is ProductFieldValues => {
  if (typeof values !== "object" || values === null || Array.isArray(values)) {
    return false;
  }
  const valueArray = Object.entries(values);
  const hasSameLength: boolean = valueArray.length === PRODUCT_FIELD_IDS.length;
  if (!hasSameLength) {
    return false;
  }

  for (const [key, value] of valueArray) {
    const hasKnownKey = PRODUCT_FIELD_IDS.some((fieldId) => fieldId === key);
    const hasStringValue = typeof value === "string";
    if (!hasKnownKey || !hasStringValue) {
      return false;
    }
  }

  return true;
};

export const checkProductConfig = (
  input: unknown,
): ProductConfigCheckResult => {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    return {
      ok: false,
      issues: [
        {
          ruleId: "V02",
          severity: "error",
          message: "Container Invalid",
          fieldIds: [],
        },
      ],
    };
  }

  const propertyNames = Object.keys(input);
  const hasWorkflowField = Object.hasOwn(input, "workflow");
  const hasTemplateProfileIdField = Object.hasOwn(input, "templateProfileId");
  const hasValuesField = Object.hasOwn(input, "values");
  if (
    !(propertyNames.length === 3) ||
    !hasWorkflowField ||
    !hasTemplateProfileIdField ||
    !hasValuesField
  ) {
    return {
      ok: false,
      issues: [
        {
          ruleId: "V02",
          severity: "error",
          message: "Field Invalid",
          fieldIds: [],
        },
      ],
    };
  }

  if (!("workflow" in input) || input.workflow !== "product") {
    return {
      ok: false,
      issues: [
        {
          ruleId: "V02",
          severity: "error",
          message: "Unsupported workflow",
          fieldIds: [],
        },
      ],
    };
  }

  const candidateTemplateProfileId =
    "templateProfileId" in input ? input.templateProfileId : undefined;
  const matchedTemplateProfileId = PRODUCT_TEMPLATE_PROFILE_IDS.find(
    (item) => item === candidateTemplateProfileId,
  );

  if (!("templateProfileId" in input) || !matchedTemplateProfileId) {
    return {
      ok: false,
      issues: [
        {
          ruleId: "V02",
          severity: "error",
          message: "Template profile Id invalid",
          fieldIds: [],
        },
      ],
    };
  }

  const candidateValues = "values" in input ? input.values : undefined;
  if (
    candidateValues === null ||
    Array.isArray(candidateValues) ||
    typeof candidateValues !== "object"
  ) {
    return {
      ok: false,
      issues: [
        {
          ruleId: "V02",
          severity: "error",
          message: "Values shape invalid",
          fieldIds: [],
        },
      ],
    };
  }

  if (!isProductFieldValues(candidateValues)) {
    return {
      ok: false,
      issues: [
        {
          ruleId: "V02",
          severity: "error",
          message: "Value field invalid",
          fieldIds: [],
        },
      ],
    };
  }

  const fixedChoiceIssues: ProductValidationIssue[] =
    isValidFixedChoiceValues(candidateValues);
  const exceedLengthIssues: ProductValidationIssue[] =
    checkExceedLength(candidateValues);
  const forbiddenCharIssues: ProductValidationIssue[] =
    checkForbiddenControlChar(candidateValues);
  const issues: ProductValidationIssue[] = [
    ...fixedChoiceIssues,
    ...exceedLengthIssues,
    ...forbiddenCharIssues,
  ];
  if (issues.length > 0) {
    return {
      ok: false,
      issues: issues,
    };
  }

  return {
    ok: true,
    configuration: {
      workflow: input.workflow,
      templateProfileId: matchedTemplateProfileId,
      values: candidateValues,
    },
  };
};
