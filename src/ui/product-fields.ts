import type { AppState } from "../app/state";
import { PRODUCT_FIELD_GROUPS, PRODUCT_FIELDS } from "../catalogue";

export const mountProductFields = (
  root: HTMLElement,
  state: AppState,
  onConfigurationChange: () => void,
): void => {
  for (const group of PRODUCT_FIELD_GROUPS) {
    const detailsEle = document.createElement("details");
    const summaryEle = document.createElement("summary");
    summaryEle.textContent = group.label;
    detailsEle.append(summaryEle);

    detailsEle.open = group.defaultOpen;

    for (const fieldId of group.fieldIds) {
      const fieldDefinition = PRODUCT_FIELDS.find(
        (field) => field.id === fieldId,
      );

      if (!fieldDefinition) {
        throw new Error("Can not find field id in the group.");
      }

      switch (fieldDefinition.controlKind) {
        case "textarea": {
          const divEle = document.createElement("div");
          const labelEle = document.createElement("label");
          const textareaEle = document.createElement("textarea");
          const pEle = document.createElement("p");

          textareaEle.id = fieldDefinition.id;
          labelEle.htmlFor = textareaEle.id;
          labelEle.textContent = fieldDefinition.label;

          pEle.id = `${fieldDefinition.id}-help`;
          pEle.textContent = fieldDefinition.helpText;
          textareaEle.setAttribute("aria-describedby", pEle.id);

          const currentValue =
            state.build.configuration.values[fieldDefinition.id];
          textareaEle.value = currentValue;

          textareaEle.addEventListener("input", () => {
            const currentValue = textareaEle.value;

            if (currentValue !== state.build.configuration.values[fieldId]) {
              const newValuesObject = {
                ...state.build.configuration.values,
                [fieldId]: currentValue,
              };

              const newConfigObject = {
                ...state.build.configuration,
                values: { ...newValuesObject },
              };

              state.build.configuration = newConfigObject;

              onConfigurationChange();

              return;
            }
          });

          divEle.append(labelEle, textareaEle, pEle);
          detailsEle.append(divEle);
          break;
        }
        case "select": {
          const divEle = document.createElement("div");
          const labelEle = document.createElement("label");
          const selectEle = document.createElement("select");
          const pEle = document.createElement("p");

          selectEle.id = `${fieldDefinition.id}-select`;
          labelEle.htmlFor = selectEle.id;
          labelEle.textContent = fieldDefinition.label;

          pEle.id = `${fieldDefinition.id}-help`;
          pEle.textContent = fieldDefinition.helpText;
          selectEle.setAttribute("aria-describedby", pEle.id);

          const blankOptionEle = document.createElement("option");
          blankOptionEle.value = "";
          blankOptionEle.textContent = "Choose an option";
          selectEle.append(blankOptionEle);

          for (const optionDefinition of fieldDefinition.options) {
            const option = document.createElement("option");
            option.value = optionDefinition.storedValue;
            option.textContent = optionDefinition.label;
            selectEle.append(option);
          }

          const currentValue =
            state.build.configuration.values[fieldDefinition.id];
          selectEle.value = currentValue;

          selectEle.addEventListener("change", () => {
            const currentValue = selectEle.value;

            if (currentValue !== state.build.configuration.values[fieldId]) {
              const newValuesObject = {
                ...state.build.configuration.values,
                [fieldId]: currentValue,
              };
              const newConfigObject = {
                ...state.build.configuration,
                values: { ...newValuesObject },
              };

              state.build.configuration = newConfigObject;

              onConfigurationChange();

              return;
            }
          });

          divEle.append(labelEle, selectEle, pEle);
          detailsEle.append(divEle);
          break;
        }
        case "select-with-custom": {
          const divEle = document.createElement("div");
          const labelEle = document.createElement("label");
          const selectEle = document.createElement("select");
          const pEle = document.createElement("p");

          selectEle.id = `${fieldDefinition.id}-select`;
          labelEle.htmlFor = selectEle.id;
          labelEle.textContent = fieldDefinition.label;

          pEle.id = `${fieldDefinition.id}-help`;
          pEle.textContent = fieldDefinition.helpText;
          selectEle.setAttribute("aria-describedby", pEle.id);

          const blankOptionEle = document.createElement("option");
          blankOptionEle.value = "";
          blankOptionEle.textContent = "Choose an option";
          selectEle.append(blankOptionEle);

          for (const optionDefinition of fieldDefinition.options) {
            const option = document.createElement("option");
            option.value = optionDefinition.storedValue;
            option.textContent = optionDefinition.label;
            selectEle.append(option);
          }

          const finalOptionEle = document.createElement("option");
          finalOptionEle.label = "Custom…";
          finalOptionEle.value = "__custom__";
          selectEle.append(finalOptionEle);

          const customDivEle = document.createElement("div");
          const customLabelEle = document.createElement("label");
          const customInputEle = document.createElement("input");
          customLabelEle.textContent = `Custom ${fieldDefinition.label}`;
          customInputEle.id = `${fieldDefinition.id}-custom`;

          customLabelEle.htmlFor = customInputEle.id;
          customInputEle.setAttribute("aria-describedby", pEle.id);

          const currentValue =
            state.build.configuration.values[fieldDefinition.id];
          const matchesSuggestion = fieldDefinition.options.some(
            (optionDefinition) => optionDefinition.storedValue === currentValue,
          );

          if (!currentValue) {
            selectEle.value = "";
            customInputEle.value = "";
            customDivEle.hidden = true;
          } else if (matchesSuggestion) {
            selectEle.value = currentValue;
            customInputEle.value = "";
            customDivEle.hidden = true;
          } else {
            selectEle.value = "__custom__";
            customInputEle.value = currentValue;
            customDivEle.hidden = false;
          }

          selectEle.addEventListener("change", () => {
            if (selectEle.value === "__custom__") {
              customDivEle.hidden = false;

              const customInputValue = customInputEle.value;

              customInputEle.focus();

              if (
                customInputValue !== state.build.configuration.values[fieldId]
              ) {
                const newValuesObject = {
                  ...state.build.configuration.values,
                  [fieldId]: customInputValue,
                };
                const newConfigObject = {
                  ...state.build.configuration,
                  values: { ...newValuesObject },
                };

                state.build.configuration = newConfigObject;

                onConfigurationChange();

                return;
              }
            } else {
              customDivEle.hidden = true;

              if (selectEle.value === "") {
                customInputEle.value = "";
              }

              const nextValue = selectEle.value;

              if (nextValue !== state.build.configuration.values[fieldId]) {
                const newValuesObject = {
                  ...state.build.configuration.values,
                  [fieldId]: nextValue,
                };
                const newConfigObject = {
                  ...state.build.configuration,
                  values: { ...newValuesObject },
                };

                state.build.configuration = newConfigObject;

                onConfigurationChange();

                return;
              }
            }
          });

          customInputEle.addEventListener("input", () => {
            const customInputValue = customInputEle.value;

            if (
              customInputValue !== state.build.configuration.values[fieldId]
            ) {
              const newValuesObject = {
                ...state.build.configuration.values,
                [fieldId]: customInputValue,
              };
              const newConfigObject = {
                ...state.build.configuration,
                values: { ...newValuesObject },
              };

              state.build.configuration = newConfigObject;

              onConfigurationChange();

              return;
            }
          });

          customDivEle.append(customLabelEle, customInputEle);
          divEle.append(labelEle, selectEle, pEle, customDivEle);
          detailsEle.append(divEle);
          break;
        }
        default:
          break;
      }
    }
    root.append(detailsEle);
  }
};
