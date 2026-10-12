import type { Screen, AppState } from "../app/state";
import { createIcons, House, PencilLine } from "lucide";

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

    content.innerHTML =
      state.view.screen === "home"
        ? `
            <section class="hero">
              <p class="eyebrow">Creative direction, made operational</p>
              <h1 tabindex="-1">Build prompts with a point of view.</h1>
              <p class="lead">
                Choose a researched Workflow, start from a visual Preset,
                then shape the details into a prompt you can save,
                explain and reuse.
              </p>

              <button class="primary" type="button" data-screen="build">Start Building</button>
            </section>

            <section aria-labelledby="workflows-heading">
              <h2 id="workflows-heading">Start with a researched field.</h2>
              
              <div class="workflow-grid">
                <article class="card">
                  <p class="status">Available now</p>
                  <h3>Product Advertising and Photography</h3>
                  <p>
                    Shape subject, light, material, setting and composition
                    with domain-specific guidance.
                  </p>
                  <button type="button" data-screen="build">
                  Open Product Workflow
                  </button>
                </article>

                <article class="card">
                  <p class="status">Research Pending</p>
                  <h3>Portrait and Editorial</h3>
                  <p>Not released until its fields and rules are researched.</p>
                </article>

                <article class="card">
                  <p class="status">Research pending</p>
                  <h3>Environment and Interior</h3>
                  <p>Planned after the Product MVP.</p>
                </article>
              </div>
            </section>
          `
        : `
            <section class="hero">
              <p class="eyebrow">Product Advertising and Photography</p>
              <h1 tabindex="-1">Build a prompt</h1>
              <p class="lead">
                Your Product configuration form will appear here.
              </p>
            </section>
          `;

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
