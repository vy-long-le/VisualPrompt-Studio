import { expect, test } from "@playwright/test";

test("Build preserves the prompt name across view navigation", async ({
  page,
}) => {
  await page.goto("/");

  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });

  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  const promptName = page.getByRole("textbox", {
    name: "Prompt name",
    exact: true,
  });

  await promptName.fill("Notebook campaign");
  await expect(promptName).toBeFocused();

  await navigation
    .getByRole("button", {
      name: "Home",
      exact: true,
    })
    .click();

  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  await expect(promptName).toHaveValue("Notebook campaign");
});

test("Build preserves product field edits across view navigation", async ({
  page,
}) => {
  await page.goto("/");

  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });

  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  const productDescription = page.getByRole("textbox", {
    name: "Product description",
    exact: true,
  });

  await productDescription.fill("A hardcover notebook with a blue cloth cover");
  await expect(productDescription).toBeFocused();

  await navigation
    .getByRole("button", {
      name: "Home",
      exact: true,
    })
    .click();

  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  await expect(productDescription).toHaveValue(
    "A hardcover notebook with a blue cloth cover",
  );
});

test("Build preserves a fixed-choice selection across view navigation", async ({
  page,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });
  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  const referenceCombobox = page.getByRole("combobox", {
    name: "Reference mode",
    exact: true,
  });
  await expect(referenceCombobox).toHaveValue("");

  await referenceCombobox.selectOption("External product reference");

  await navigation
    .getByRole("button", {
      name: "Home",
      exact: true,
    })
    .click();
  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  await expect(referenceCombobox).toHaveValue("External product reference");

  await referenceCombobox.selectOption("");
  await expect(referenceCombobox).toHaveValue("");

  await navigation
    .getByRole("button", {
      name: "Home",
      exact: true,
    })
    .click();
  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  await expect(referenceCombobox).toHaveValue("");
});

test("Build preserves a suggested choice across view navigation", async ({
  page,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });
  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  const creativeObjective = page.getByRole("combobox", {
    name: "Creative objective",
    exact: true,
  });
  await expect(creativeObjective).toHaveValue("");

  await creativeObjective.selectOption("Introduce a product launch");

  await navigation
    .getByRole("button", {
      name: "Home",
      exact: true,
    })
    .click();
  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();
  await expect(creativeObjective).toHaveValue("Introduce a product launch");
});

test("Build preserves custom field text across view navigation", async ({
  page,
}) => {
  await page.goto("/");
  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });
  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();

  const creativeObjective = page.getByRole("combobox", {
    name: "Creative objective",
    exact: true,
  });
  await creativeObjective.selectOption({ label: "Custom…" });

  const customTextbox = page.getByRole("textbox", {
    name: "Custom Creative objective",
    exact: true,
  });
  await expect(customTextbox).toBeVisible();
  await expect(customTextbox).toBeFocused();
  await customTextbox.fill("Show the notebook as a thoughtful graduation gift");
  await expect(customTextbox).toBeFocused();

  await navigation
    .getByRole("button", {
      name: "Home",
      exact: true,
    })
    .click();
  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();
  await expect(customTextbox).toBeVisible();
  await expect(customTextbox).toHaveValue(
    "Show the notebook as a thoughtful graduation gift",
  );

  await creativeObjective.selectOption("");
  await navigation
    .getByRole("button", {
      name: "Home",
      exact: true,
    })
    .click();
  await navigation
    .getByRole("button", {
      name: "Build",
      exact: true,
    })
    .click();
  await expect(customTextbox).toBeHidden();

  await expect(creativeObjective).toHaveValue("");
  await expect(customTextbox).toBeHidden();
});
