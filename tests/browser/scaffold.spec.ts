import { expect, test, type Page } from "@playwright/test";

function captureRuntimeErrors(page: Page): string[] {
  const runtimeErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      runtimeErrors.push(`console: ${message.text()}`);
    }
  });

  page.on("pageerror", (error) => {
    runtimeErrors.push(`pageerror: ${error.message}`);
  });

  return runtimeErrors;
}

function getWorkflowCard(page: Page, heading: string) {
  return page.locator("article.card").filter({
    has: page.getByRole("heading", {
      name: heading,
      exact: true,
    }),
  });
}

test.describe("T01 application scaffold", () => {
  test("CAT-01 UX-01 UX-04 UX-11: Home exposes only the supported Product workflow", async ({
    page,
  }) => {
    const runtimeErrors = captureRuntimeErrors(page);

    await page.goto("/");

    await expect(page).toHaveTitle("VisualPrompt Studio");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Build prompts with a point of view.",
        exact: true,
      }),
    ).toBeVisible();

    const primaryNavigation = page.getByRole("navigation", {
      name: "Primary navigation",
    });

    const homeNavigation = primaryNavigation.getByRole("button", {
      name: "Home",
      exact: true,
    });

    const buildNavigation = primaryNavigation.getByRole("button", {
      name: "Build",
      exact: true,
    });

    await expect(homeNavigation).toHaveAttribute("aria-current", "page");
    await expect(buildNavigation).not.toHaveAttribute("aria-current");

    const navigationIcons = primaryNavigation.locator("svg.nav-icon");

    await expect(navigationIcons).toHaveCount(2);

    for (let index = 0; index < 2; index += 1) {
      const icon = navigationIcons.nth(index);

      await expect(icon).toHaveAttribute("width", "18");
      await expect(icon).toHaveAttribute("height", "18");
      await expect(icon).toHaveAttribute("stroke-width", "2");
      await expect(icon).toHaveAttribute("aria-hidden", "true");
    }

    const productCard = getWorkflowCard(
      page,
      "Product Advertising and Photography",
    );

    await expect(productCard).toContainText("Available now");

    await expect(
      productCard.getByRole("button", {
        name: "Open Product Workflow",
        exact: true,
      }),
    ).toBeVisible();

    const portraitCard = getWorkflowCard(page, "Portrait and Editorial");

    await expect(portraitCard).toContainText(/Research pending/i);
    await expect(portraitCard).toContainText(
      "Not released until its fields and rules are researched.",
    );
    await expect(portraitCard.getByRole("button")).toHaveCount(0);

    const environmentCard = getWorkflowCard(page, "Environment and Interior");

    await expect(environmentCard).toContainText(/Research pending/i);
    await expect(environmentCard).toContainText(
      "Planned after the Product MVP.",
    );
    await expect(environmentCard.getByRole("button")).toHaveCount(0);

    expect(runtimeErrors).toEqual([]);
  });

  test("UX-01: mouse navigation supports Home to Build and back", async ({
    page,
  }) => {
    const runtimeErrors = captureRuntimeErrors(page);

    await page.goto("/");

    await page
      .getByRole("button", {
        name: "Start Building",
        exact: true,
      })
      .click();

    const buildHeading = page.getByRole("heading", {
      level: 1,
      name: "Build a prompt",
      exact: true,
    });

    await expect(buildHeading).toBeVisible();
    await expect(buildHeading).toBeFocused();

    const primaryNavigation = page.getByRole("navigation", {
      name: "Primary navigation",
    });

    const homeNavigation = primaryNavigation.getByRole("button", {
      name: "Home",
      exact: true,
    });

    const buildNavigation = primaryNavigation.getByRole("button", {
      name: "Build",
      exact: true,
    });

    await expect(buildNavigation).toHaveAttribute("aria-current", "page");
    await expect(homeNavigation).not.toHaveAttribute("aria-current");

    await homeNavigation.click();

    const homeHeading = page.getByRole("heading", {
      level: 1,
      name: "Build prompts with a point of view.",
      exact: true,
    });

    await expect(homeHeading).toBeVisible();
    await expect(homeHeading).toBeFocused();

    await page
      .getByRole("button", {
        name: "Open Product Workflow",
        exact: true,
      })
      .click();

    await expect(buildHeading).toBeVisible();
    await expect(buildHeading).toBeFocused();
    await expect(buildNavigation).toHaveAttribute("aria-current", "page");

    expect(runtimeErrors).toEqual([]);
  });

  test("UX-01 UX-04: keyboard navigation reaches Build and moves focus", async ({
    page,
  }) => {
    const runtimeErrors = captureRuntimeErrors(page);

    await page.goto("/");

    const primaryNavigation = page.getByRole("navigation", {
      name: "Primary navigation",
    });

    const homeNavigation = primaryNavigation.getByRole("button", {
      name: "Home",
      exact: true,
    });

    const buildNavigation = primaryNavigation.getByRole("button", {
      name: "Build",
      exact: true,
    });

    await page.keyboard.press("Tab");
    await expect(homeNavigation).toBeFocused();

    await page.keyboard.press("Tab");
    await expect(buildNavigation).toBeFocused();

    await page.keyboard.press("Enter");

    const buildHeading = page.getByRole("heading", {
      level: 1,
      name: "Build a prompt",
      exact: true,
    });

    await expect(buildHeading).toBeVisible();
    await expect(buildHeading).toBeFocused();
    await expect(buildNavigation).toHaveAttribute("aria-current", "page");

    expect(runtimeErrors).toEqual([]);
  });

  for (const viewportWidth of [320, 375]) {
    test(`UX-04 UX-06: Home reflows without horizontal overflow at ${viewportWidth}px`, async ({
      page,
    }) => {
      const runtimeErrors = captureRuntimeErrors(page);

      await page.setViewportSize({
        width: viewportWidth,
        height: 812,
      });

      await page.goto("/");

      await expect(
        page.getByRole("navigation", {
          name: "Primary navigation",
        }),
      ).toBeVisible();

      await expect(
        page.getByRole("button", {
          name: "Start Building",
          exact: true,
        }),
      ).toBeVisible();

      await expect(
        page.getByRole("button", {
          name: "Open Product Workflow",
          exact: true,
        }),
      ).toBeVisible();

      const layout = await page.evaluate(() => {
        const workflowGrid =
          document.querySelector<HTMLElement>(".workflow-grid");

        if (!workflowGrid) {
          throw new Error("Workflow grid is missing.");
        }

        return {
          documentWidth: document.documentElement.scrollWidth,
          viewportWidth: document.documentElement.clientWidth,
          gridColumns:
            window.getComputedStyle(workflowGrid).gridTemplateColumns,
        };
      });

      expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth);

      expect(layout.gridColumns.trim().split(/\s+/)).toHaveLength(1);

      expect(runtimeErrors).toEqual([]);
    });
  }
});
