export type Screen = "home" | "build";

export interface AppState {
  view: {
    screen: Screen;
  };
}

export function createInitialState(): AppState {
  return {
    view: {
      screen: "home",
    },
  };
}
