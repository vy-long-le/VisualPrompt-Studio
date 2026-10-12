import { describe, expect, it } from "vitest";
import { createInitialState } from "../../src/app/state";

describe("UX-01 initial application state", () => {
  it("starts each application instance on Home with independent state", () => {
    const firstState = createInitialState();
    const secondState = createInitialState();

    expect(firstState).toEqual({
      view: {
        screen: "home",
      },
    });

    expect(secondState).toEqual({
      view: {
        screen: "home",
      },
    });

    expect(firstState).not.toBe(secondState);
    expect(firstState.view).not.toBe(secondState.view);
  });
});
