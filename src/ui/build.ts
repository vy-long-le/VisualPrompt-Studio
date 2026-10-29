import type { AppState } from "../app/state";
import { mountProductFields } from "./product-fields";
import { PRODUCT_PRESETS } from "../catalogue";
import { applyProductPreset } from "../app/presets";
import { mountPresetPreview } from "../ui/preset-preview";
import { generateProductPrompt } from "../app/generation";

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
        
        <button type="button" class="primary" id="prompt-generate">Generate</button>
      </section>

      <section>
        <h2>Generated prompt</h2>
        <label 
        for="prompt-output">Prompt text</label>
        
        <p id="prompt-status" role="status"></p>
        
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
  const presetPreviewEle = root.querySelector("#preset-preview");
  const generatePromptBtn = root.querySelector("#prompt-generate");
  const copyPromptBtn = root.querySelector("#prompt-copy");

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

  if (!(presetSelect instanceof HTMLSelectElement)) {
    throw new Error("Build page preset-select is missing or invalid.");
  }

  if (!(presetPreviewEle instanceof HTMLElement)) {
    throw new Error("Preset preview asset block is missing or invalid.");
  }

  if (!(generatePromptBtn instanceof HTMLButtonElement)) {
    throw new Error("Generate Prompt Button is missing or invalid.");
  }

  if (!(copyPromptBtn instanceof HTMLButtonElement)) {
    throw new Error("Copy Prompt Button is missing or invalid.");
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

  textareaPromptOutput.addEventListener("input", () => {
    if (textareaPromptOutput.value === state.prompt.generatedPrompt) {
      state.prompt.editedPrompt = null;
    } else {
      state.prompt.editedPrompt = textareaPromptOutput.value;
    }

    if (state.prompt.freshness === "stale") {
      statusPromptOutput.textContent =
        "Configuration changed. Generate again to update this prompt. Not saved.";
    } else if (state.prompt.editedPrompt !== null) {
      statusPromptOutput.textContent = "Edited, not saved.";
    } else if (state.prompt.freshness === "empty") {
      statusPromptOutput.textContent = "No prompt generated yet.";
    } else {
      statusPromptOutput.textContent = "Generated, not saved.";
    }

    if (textareaPromptOutput.value !== "") {
      copyPromptBtn.disabled = false;
    } else {
      copyPromptBtn.disabled = true;
    }
  });

  if (state.prompt.editedPrompt === null) {
    if (state.prompt.generatedPrompt === "") {
      textareaPromptOutput.value = "";
    } else {
      textareaPromptOutput.value = state.prompt.generatedPrompt;
    }
  } else {
    textareaPromptOutput.value = state.prompt.editedPrompt;
  }

  if (state.prompt.freshness === "stale") {
    statusPromptOutput.textContent =
      "Configuration changed. Generate again to update this prompt. Not saved.";
  } else if (state.prompt.editedPrompt !== null) {
    statusPromptOutput.textContent = "Edited, not saved.";
  } else if (state.prompt.freshness === "empty") {
    statusPromptOutput.textContent = "No prompt generated yet.";
  } else {
    statusPromptOutput.textContent = "Generated, not saved.";
  }

  generatePromptBtn.addEventListener("click", () => {
    // ! Preserve the current output until generation succeeds.
    if (state.prompt.editedPrompt !== null) {
      const confirmed = window.confirm(
        "There is a manually edited version of the prompt inside the textarea, clicking Generate will replace that edited version. Do you want to proceed?",
      );

      if (!confirmed) {
        textareaPromptOutput.value = state.prompt.editedPrompt;
        return;
      }
    }
    try {
      const result = generateProductPrompt(state.build.configuration);

      if (result.ok === false) {
        const messages: string[] = [];

        for (const issue of result.issues) {
          messages.push(issue.message);
        }

        statusPromptOutput.textContent = messages.join("\n");
        return;
      }

      state.prompt.generatedPrompt = result.generatedPrompt;
      state.prompt.editedPrompt = null;
      state.prompt.freshness = "fresh";
      textareaPromptOutput.value = state.prompt.generatedPrompt;
      statusPromptOutput.textContent = "Generated, not saved";

      if (textareaPromptOutput.value !== "") {
        copyPromptBtn.disabled = false;
      } else {
        copyPromptBtn.disabled = true;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      statusPromptOutput.textContent =
        "Could not generate the prompt. Your existing text has been kept.";
    }
  });

  const onConfigurationChange = (): void => {
    if (state.prompt.generatedPrompt !== "") {
      state.prompt.freshness = "stale";
      statusPromptOutput.textContent =
        "Configuration changed. Generate again to update this prompt. Not saved.";
    }
  };

  mountProductFields(productFieldsDiv, state, onConfigurationChange);
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
    presetPreviewEle.replaceChildren();
    mountProductFields(productFieldsDiv, state, onConfigurationChange);
    mountPresetPreview(root, state);
  });

  if (textareaPromptOutput.value !== "") {
    copyPromptBtn.disabled = false;
  } else {
    copyPromptBtn.disabled = true;
  }

  copyPromptBtn.addEventListener("click", async () => {
    const prompt = textareaPromptOutput.value;

    if (prompt !== "") {
      try {
        await navigator.clipboard.writeText(prompt);
        statusPromptOutput.textContent = "Copied to clipboard.";
      } catch (error) {
        statusPromptOutput.textContent =
          "Could not copy. Select the prompt text and copy it manually.";
      }
    } else {
      statusPromptOutput.textContent = "There is no prompt text to copy.";
    }
  });
};
