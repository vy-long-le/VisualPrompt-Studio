import type { AppState } from "../app/state";
import { PRODUCT_PREVIEW_ASSETS, PRODUCT_PRESETS } from "../catalogue";

export function mountPresetPreview(root: HTMLElement, state: AppState): void {
  const presetPreviewDiv = root.querySelector("#preset-preview");
  const presetPreviewImgEle = document.createElement("img");
  const presetPreviewCapEle = document.createElement("figcaption");

  if (!presetPreviewDiv) {
    throw new Error("Preset preview asset block is missing or invalid.");
  }

  if (state.build.activePresetId === null) {
    presetPreviewCapEle.textContent =
      "There are no preview asset for Start Blank";
    presetPreviewDiv.append(presetPreviewCapEle);
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

  if (!foundPreviewAsset) {
    presetPreviewCapEle.textContent =
      "Can not find preview asset for this preset.";
    presetPreviewDiv.append(presetPreviewCapEle);
  } else {
    presetPreviewImgEle.id = foundPreviewAsset.id;
    presetPreviewImgEle.src = foundPreviewAsset.src;
    presetPreviewImgEle.alt = foundPreviewAsset.alt;
    presetPreviewCapEle.textContent = foundPreviewAsset.creativeIntent;
    presetPreviewDiv.append(presetPreviewImgEle, presetPreviewCapEle);
  }
}
