import type { AppState } from "../app/state";
import { mountProductFields } from "./product-fields";
import { PRODUCT_PRESETS } from "../catalogue";
import { applyProductPreset } from "../app/presets";
import { mountPresetPreview } from "../ui/preset-preview";

export const mountBuild = (root: HTMLElement, state: AppState): void => {
  root.innerHTML = `
    <section class="hero">
      <p class="eyebrow">Product Advertising and Photography</p>
      <h1 tabindex="-1">Build a prompt</h1>
    </section>

    <section id="prompt-config-output">
      <section aria-label="Prompt details">
        <label for="prompt-name">Prompt name</label>
        <input type="text" id="prompt-name" />
        
        <label for="preset-select">Preset</label>
        <select id="preset-select"></select>
        
        <figure id="preset-preview"></figure>
        
        <div id="product-fields"></div>
        
        <button type="button" class="primary" disabled>Generate</button>
      </section>

      <section>
        <h2>Generated prompt</h2>
        <label 
        for="prompt-output">Prompt text</label>
        
        <p id="prompt-status"></p>
        
        <textarea id="prompt-output"></textarea>
        
        <button type="button" id="prompt-copy" disabled>Copy</button>  
      </section>
    </section>
  `;
  const inputPromptName = root.querySelector<HTMLInputElement>("#prompt-name");
  const productFieldsDiv = root.querySelector("#product-fields");
  const statusPromptOutput = root.querySelector("#prompt-status");
  const textareaPromptOutput =
    root.querySelector<HTMLTextAreaElement>("#prompt-output");
  const presetSelect = root.querySelector<HTMLSelectElement>("#preset-select");
  const presetPreviewDiv = root.querySelector("#preset-preview");

  if (!(inputPromptName instanceof HTMLInputElement)) {
    throw new Error("Build prompt-name input is missing or invalid.");
  }

  if (!(productFieldsDiv instanceof HTMLElement)) {
    throw new Error("Can not find product fields div.");
  }

  if (!(statusPromptOutput instanceof HTMLElement)) {
    throw new Error("Can not find prompt-status.");
  }

  if (!(textareaPromptOutput instanceof HTMLTextAreaElement)) {
    throw new Error("Build prompt-output input is missing or invalid.");
  }

  if (!presetSelect) {
    throw new Error("Build page preset-select is missing or invalid.");
  }

  if (!presetPreviewDiv) {
    throw new Error("Preset preview asset block is missing or invalid.");
  }

  const startBlankOptEle = document.createElement("option");
  startBlankOptEle.text = "Start Blank";
  startBlankOptEle.value = "";

  presetSelect.append(startBlankOptEle);

  for (const preset of PRODUCT_PRESETS) {
    const presetOptEle = document.createElement("option");
    presetOptEle.text = preset.name;
    presetOptEle.value = preset.id;
    presetSelect.append(presetOptEle);
  }

  if (state.build.activePresetId === null) {
    presetSelect.value = "";
  } else {
    presetSelect.value = state.build.activePresetId;
  }

  inputPromptName.value = state.build.promptName;

  inputPromptName.addEventListener("input", () => {
    state.build.promptName = inputPromptName.value;
  });

  statusPromptOutput.textContent = "No prompt generated yet";
  textareaPromptOutput.value = "";

  mountProductFields(productFieldsDiv, state);
  mountPresetPreview(root, state);

  presetSelect.addEventListener("change", () => {
    const selectedValue = presetSelect.value;

    if (selectedValue === "") {
      applyProductPreset(state, null);
    } else {
      const foundPreset = PRODUCT_PRESETS.find(
        (preset) => preset.id === selectedValue,
      );

      if (!foundPreset) {
        if (state.build.activePresetId === null) {
          presetSelect.value = "";
        } else {
          presetSelect.value = state.build.activePresetId;
        }
        throw new Error(`Can not find preset with value ${selectedValue}`);
      }

      applyProductPreset(state, foundPreset.id);
    }
    productFieldsDiv.replaceChildren();
    presetPreviewDiv.replaceChildren();
    mountProductFields(productFieldsDiv, state);
    mountPresetPreview(root, state);
  });
};
