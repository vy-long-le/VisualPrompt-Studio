import type { Screen, AppState } from "../app/state";
import { createIcons, House, PencilLine } from "lucide";
import { mountBuild } from "./build";
import { PRODUCT_PRESETS, PRODUCT_PREVIEW_ASSETS } from "../catalogue";

export function mountShell(root: HTMLElement, state: AppState): void {
  root.innerHTML = `
  <header class="topbar">
    <strong class="brand">VisualPrompt Studio</strong>

    <nav class="primary-nav" aria-label="Primary navigation">
      <button
        class="nav-item"
        type="button"
        data-screen="home">
          <i data-lucide="house"></i>
          <span>Home</span>
      </button>

      <button
        class="nav-item"
        type="button"
        data-screen="build">
          <i data-lucide="pencil-line"></i>
          <span>Build</span>
      </button>
    </nav>
  </header>
  
  <main id="screen-content"></main>
  `;

  function renderShellIcons(): void {
    createIcons({
      icons: {
        House,
        PencilLine,
      },
      attrs: {
        class: "nav-icon",
        width: "18",
        height: "18",
        "stroke-width": "2",
        "aria-hidden": "true",
        focusable: "false",
      },
      root,
    });
  }

  const content = root.querySelector<HTMLElement>("#screen-content");

  if (!content) {
    throw new Error("Screen Container Is Missing!");
  }

  function renderScreen(moveFocus: boolean): void {
    if (!content) return;

    if (state.view.screen === "home") {
      const foundPreset = PRODUCT_PRESETS.find(
        (preset) => preset.id === "product-p02",
      );

      if (!foundPreset) {
        throw new Error("Home featured preset is missing.");
      }

      const foundPreviewAsset = PRODUCT_PREVIEW_ASSETS.find(
        (asset) => asset.id === foundPreset.previewAssetId,
      );

      if (!foundPreviewAsset) {
        throw new Error("Home featured Preset preview is missing.");
      }

      const foundSecondPreset = PRODUCT_PRESETS.find(
        (preset) => preset.id === "product-p01",
      );

      if (!foundSecondPreset) {
        throw new Error("Product Workflow Preset is missing.");
      }

      const foundSecondPreviewAsset = PRODUCT_PREVIEW_ASSETS.find(
        (asset) => asset.id === foundSecondPreset.previewAssetId,
      );

      if (!foundSecondPreviewAsset) {
        throw new Error("Product Workflow Preview Asset is missing.");
      }

      content.innerHTML = `
            <section class="hero home-hero">
              <div class="hero-content">
                <p class="eyebrow">Creative direction, made operational</p>
                <h1 tabindex="-1">Build prompts with a point of view.</h1>
                <p class="lead">
                  Choose a researched Workflow, start from a visual Preset,
                  then shape the details into a prompt you can save,
                  explain and reuse.
                </p>

                <button class="primary" type="button" data-screen="build">Start Building</button>
              </div>
              <figure class="hero-image">
                <img src="${foundPreviewAsset.src}" alt="${foundPreviewAsset.alt}" />
                <figcaption class="home-hero-caption">
                  <strong>${foundPreset.name}</strong>
                  <p>${foundPreviewAsset.creativeIntent}</p>
                  <p>${foundPreviewAsset.disclaimer}</p>
                </figcaption>
              </figure>
            </section>

            <section aria-labelledby="workflows-heading">
              <h2 id="workflows-heading">Start with a researched field.</h2>
              
              <div class="workflow-grid">
                <article class="card workflow-card workflow-card--available">
                  <div class="workflow-info">
                    <p class="status">Available now</p>
                    <h3>Product Advertising and Photography</h3>
                    <p>
                      Shape subject, light, material, setting and composition
                      with domain-specific guidance.
                    </p>
                    <button class="primary" type="button" data-screen="build">
                      Open Product Workflow
                    </button>
                  </div>

                  <div class="workflow-preview">
                    <img src="${foundPreviewAsset.src}" alt="${foundPreviewAsset.alt}" />
                    <img src="${foundSecondPreviewAsset.src}" alt="${foundSecondPreviewAsset.alt}" />
                  </div>
                </article>

                <article class="card workflow-card workflow-card--pending">
                  <div class="workflow-info">
                    <p class="status">Research Pending</p>
                    <h3>Portrait and Editorial</h3>
                    <p>Not released until its fields and rules are researched.</p>
                  </div>
                </article>

                <article class="card workflow-card workflow-card--pending">
                  <div class="workflow-info">
                    <p class="status">Research pending</p>
                    <h3>Environment and Interior</h3>
                    <p>Planned after the Product MVP.</p>
                  </div>
                </article>
              </div>
            </section>
          `;
    } else {
      mountBuild(content, state);
    }

    root
      .querySelectorAll<HTMLButtonElement>("nav [data-screen]")
      .forEach((button) => {
        if (button.dataset.screen === state.view.screen) {
          button.setAttribute("aria-current", "page");
        } else {
          button.removeAttribute("aria-current");
        }
      });

    if (moveFocus) {
      content.querySelector<HTMLHeadElement>("h1")?.focus();
    }
  }

  root.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const button = event.target.closest<HTMLButtonElement>(
      "button[data-screen]",
    );

    if (!button || !root.contains(button)) return;

    const screen = button.dataset.screen;

    if (screen !== "home" && screen !== "build") return;
    if (screen === state.view.screen) return;

    state.view.screen = screen as Screen;
    renderScreen(true);
  });

  renderShellIcons();
  renderScreen(false);
}
