import type {
  ProductFieldValues,
  ProductTemplateClause,
  ProductTemplateSection,
} from "../../catalogue";
import {
  PRODUCT_FIELDS,
  PRODUCT_CATALOGUE,
  PRODUCT_PROFILE_VERSION,
} from "../../catalogue";
import type { ProductPromptConfig } from "./types";
import { normalizeProductFieldValues } from "./normalization";

export function escapeProductMarkdownText(value: string): string {
  let escapeValue = "";
  const escapeCharMarkdown = ["\\", "`", "*", "_", "[", "]", "<", ">", "#"];

  for (const character of value) {
    if (escapeCharMarkdown.some((char) => char === character)) {
      escapeValue += `\\${character}`;
    } else {
      escapeValue += character;
    }
  }

  return escapeValue;
}

export function renderProductTemplate(
  template: string,
  normalizedValues: ProductFieldValues,
): string {
  return template.replace(/\{([^{}]+)\}/g, (_wholeMatch, fieldId) => {
    const foundField = PRODUCT_FIELDS.find((field) => field.id === fieldId);

    if (!foundField) {
      throw new Error("Unknown placeholder");
    }

    const normalizedValue = normalizedValues[foundField.id];

    if (foundField.constraints.normalization === "exact-copy") {
      return JSON.stringify(normalizedValue);
    } else {
      return escapeProductMarkdownText(normalizedValue);
    }
  });
}

export function renderProductClause(
  clause: ProductTemplateClause,
  normalizedValues: ProductFieldValues,
): string | null {
  if (normalizedValues[clause.condition.fieldId].trim() === "") return null;
  else {
    for (const variant of clause.variants) {
      const variantFieldId = variant.when.equals[0];
      const variantValue = variant.when.equals[1];
      const matchedVariant = normalizedValues[variantFieldId] === variantValue;

      if (matchedVariant)
        return renderProductTemplate(variant.template, normalizedValues);
    }

    return renderProductTemplate(clause.template, normalizedValues);
  }
}

export function renderProductSection(
  section: ProductTemplateSection,
  normalizedValues: ProductFieldValues,
): string | null {
  const instructions = [];

  for (const clause of section.clauses) {
    const renderedClause = renderProductClause(clause, normalizedValues);

    if (renderedClause === null) continue;

    instructions.push(renderedClause);
  }

  let heading = `## ${section.heading}`;

  if (instructions.length === 0) {
    if (section.omitWhenNoClauses === true) return null;
    return heading;
  }

  const bulletLines = instructions.map((instruction) => `- ${instruction}`);

  const body = bulletLines.join("\n");

  return `${heading}\n\n${body}`;
}

export function compileProductPrompt(
  configuration: ProductPromptConfig,
): string {
  const matchedProfile = PRODUCT_CATALOGUE.templateProfiles.find(
    (profile) => profile.id === configuration.templateProfileId,
  );

  if (matchedProfile === undefined) {
    throw new Error("Missing Profile");
  }

  const matchedWorkflow = configuration.workflow === matchedProfile.workflowId;

  if (!matchedWorkflow) {
    throw new Error("Workflow Mismatch");
  }

  const matchedVersion =
    matchedProfile.profileVersion === PRODUCT_PROFILE_VERSION;

  if (!matchedVersion) {
    throw new Error("Version Mismatch");
  }

  const normalizedValues = normalizeProductFieldValues(configuration.values);
  const title = "# Product image brief";
  const bodyArr: string[] = [];
  const safeguard = `${matchedProfile.suppliedFactSafeguard}`;

  for (const section of matchedProfile.sections) {
    const renderedSection = renderProductSection(section, normalizedValues);

    if (renderedSection === null) {
      continue;
    } else {
      bodyArr.push(renderedSection);
    }
  }

  const promptArr: string[] = [title, ...bodyArr, safeguard];
  const prompt = promptArr.join("\n\n");

  return prompt;
}
