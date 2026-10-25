import { describe, expect, it } from "vitest";
import { createInitialState } from "../../src/app/state";
import { PRODUCT_START_BLANK } from "../../src/catalogue";

describe("UX-01 initial application state", () => {
  it("starts each application instance on Home with independent state", () => {
    const firstState = createInitialState();
    const secondState = createInitialState();

    expect(firstState).toEqual({
      view: {
        screen: "home",
      },
      build: {
        promptName: "",
        activePresetId: null,
        configuration: {
          workflow: "product",
          templateProfileId: PRODUCT_START_BLANK.templateProfileId,
          values: PRODUCT_START_BLANK.defaultsByFieldId,
        },
      },
    });

    expect(secondState).toEqual({
      view: {
        screen: "home",
      },
      build: {
        promptName: "",
        activePresetId: null,
        configuration: {
          workflow: "product",
          templateProfileId: PRODUCT_START_BLANK.templateProfileId,
          values: PRODUCT_START_BLANK.defaultsByFieldId,
        },
      },
    });

    expect(firstState).not.toBe(secondState);
    expect(firstState.view).not.toBe(secondState.view);
    expect(firstState.build).not.toBe(secondState.build);
    expect(firstState.build.configuration).not.toBe(
      secondState.build.configuration,
    );
    expect(firstState.build.configuration.values).not.toBe(
      secondState.build.configuration.values,
    );
    expect(firstState.build.configuration.values).not.toBe(
      PRODUCT_START_BLANK.defaultsByFieldId,
    );
  });
});
