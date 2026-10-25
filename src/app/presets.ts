import type { AppState } from "./state";
import type { ProductPresetId } from "../catalogue";
import { PRODUCT_START_BLANK, PRODUCT_PRESETS } from "../catalogue";

export function applyProductPreset(
  state: AppState,
  presetId: ProductPresetId | null,
): void {
  if (presetId === null) {
    state.build.activePresetId = null;
    state.build.configuration = {
      workflow: "product",
      templateProfileId: PRODUCT_START_BLANK.templateProfileId,
      values: { ...PRODUCT_START_BLANK.defaultsByFieldId },
    };
  } else {
    const foundPreset = PRODUCT_PRESETS.find(
      (preset) => preset.id === presetId,
    );

    if (!foundPreset) {
      throw new Error(`Can not find the preset with id ${presetId}`);
    } else {
      state.build.activePresetId = foundPreset.id;
      state.build.configuration = {
        workflow: "product",
        templateProfileId: foundPreset.templateProfileId,
        values: { ...foundPreset.defaultsByFieldId },
      };
    }
  }
}
