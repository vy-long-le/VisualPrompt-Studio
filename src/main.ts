import "./ui/style.css";
import { createInitialState } from "./app/state";
import { mountShell } from "./ui/shell";

const root = document.querySelector<HTMLElement>("#app");

if (!root) {
  throw new Error("Application root is missing!");
}

mountShell(root, createInitialState());
