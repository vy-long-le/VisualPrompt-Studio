import type { AppState } from "../app/state";
import {
  PRODUCT_PREVIEW_ASSETS,
  PRODUCT_PRESETS,
  PRODUCT_PREVIEW_FALLBACK,
} from "../catalogue";

export function mountPresetPreview(root: HTMLElement, state: AppState): void {
  const presetPreviewDiv = root.querySelector("#preset-preview");

  const presetPreviewImgEle = document.createElement("img");
  const presetPreviewCapEle = document.createElement("figcaption");
  const presetPreviewCapPar = document.createElement("p");
  const presetNameHeading = document.createElement("h4");
  const presetNamePar = document.createElement("p");
  const presetCreativeDirectionHeading = document.createElement("h4");
  const presetCreativeDirectionPar = document.createElement("p");
  const presetDisclaimerHeading = document.createElement("h4");
  const presetDisclaimerPar = document.createElement("p");
  const presetPreviewStatusPar = document.createElement("p");

  presetPreviewCapPar.id = "preset-preview-caption";
  presetNamePar.id = "preset-name";
  presetCreativeDirectionPar.id = "preset-creative-direction";
  presetDisclaimerPar.id = "preset-disclaimer";

  presetNameHeading.textContent = "Name";
  presetCreativeDirectionHeading.textContent = "Creative Direction";
  presetDisclaimerHeading.textContent = "Disclaimer";

  if (!presetPreviewDiv) {
    throw new Error("Preset preview asset block is missing or invalid.");
  }

  if (state.build.activePresetId === null) {
    presetPreviewStatusPar.textContent =
      "Start Blank: enter your own creative direction. No Preset reference image is selected.";
    presetPreviewDiv.append(presetPreviewStatusPar);
    return;
  }

  const foundPreset = PRODUCT_PRESETS.find(
    (preset) => preset.id === state.build.activePresetId,
  );

  if (!foundPreset) {
    throw new Error(
      `Can not find the preset with id ${state.build.activePresetId}`,
    );
  }

  const foundPreviewAsset = PRODUCT_PREVIEW_ASSETS.find(
    (asset) => asset.id === foundPreset.previewAssetId,
  );

  presetPreviewImgEle.addEventListener("error", () => {
    presetPreviewImgEle.remove();

    presetPreviewCapPar.textContent =
      PRODUCT_PREVIEW_FALLBACK.accessibleDescription;
    presetNamePar.textContent = foundPreset.name;
    presetCreativeDirectionPar.textContent = foundPreset.creativeDirection;
    presetDisclaimerPar.textContent = PRODUCT_PREVIEW_FALLBACK.disclaimer;
    presetPreviewStatusPar.textContent = PRODUCT_PREVIEW_FALLBACK.label;
  });

  if (!foundPreviewAsset) {
    presetPreviewCapPar.textContent =
      PRODUCT_PREVIEW_FALLBACK.accessibleDescription;
    presetNamePar.textContent = foundPreset.name;
    presetCreativeDirectionPar.textContent = foundPreset.creativeDirection;
    presetDisclaimerPar.textContent = PRODUCT_PREVIEW_FALLBACK.disclaimer;
    presetPreviewStatusPar.textContent = PRODUCT_PREVIEW_FALLBACK.label;

    presetPreviewCapEle.append(
      presetPreviewCapPar,
      presetNameHeading,
      presetNamePar,
      presetCreativeDirectionHeading,
      presetCreativeDirectionPar,
      presetDisclaimerHeading,
      presetDisclaimerPar,
      presetPreviewStatusPar,
    );
    presetPreviewDiv.append(presetPreviewCapEle, presetPreviewCapEle);
  } else {
    presetPreviewImgEle.id = foundPreviewAsset.id;
    presetPreviewImgEle.src = foundPreviewAsset.src;
    presetPreviewImgEle.alt = foundPreviewAsset.alt;
    presetPreviewCapPar.textContent = foundPreviewAsset.creativeIntent;
    presetNamePar.textContent = foundPreset.name;
    presetCreativeDirectionPar.textContent = foundPreset.creativeDirection;
    presetDisclaimerPar.textContent = foundPreviewAsset.disclaimer;

    presetPreviewCapEle.append(
      presetPreviewCapPar,
      presetNameHeading,
      presetNamePar,
      presetCreativeDirectionHeading,
      presetCreativeDirectionPar,
      presetDisclaimerHeading,
      presetDisclaimerPar,
      presetPreviewStatusPar,
    );
    presetPreviewDiv.append(presetPreviewImgEle, presetPreviewCapEle);
  }
}
