import { PRODUCT_START_BLANK } from "../catalogue";
import type { ProductPresetId } from "../catalogue";
import type { ProductPromptConfig } from "../domain/product/types";

export type Screen = "home" | "build";

export interface AppState {
  view: {
    screen: Screen;
  };
  prompt: {
    generatedPrompt: string;
    editedPrompt: string | null;
    freshness: "empty" | "fresh" | "stale";
  };
  build: {
    promptName: string;
    activePresetId: ProductPresetId | null;
    configuration: ProductPromptConfig;
  };
}

export function createInitialState(): AppState {
  return {
    view: {
      screen: "home",
    },
    prompt: {
      generatedPrompt: "",
      editedPrompt: null,
      freshness: "empty",
    },
    build: {
      promptName: "",
      activePresetId: null,
      configuration: {
        workflow: "product",
        templateProfileId: PRODUCT_START_BLANK.templateProfileId,
        values: { ...PRODUCT_START_BLANK.defaultsByFieldId },
      },
    },
  };
}
