import { defineConfig } from "@playwright/test";

const previewUrl = "http://127.0.0.1:4173";

export default defineConfig({
  testDir: "./tests/browser",
  outputDir: "./test-results",

  fullyParallel: true,
  forbidOnly: true,
  retries: 0,

  timeout: 30_000,

  expect: {
    timeout: 5_000,
  },

  reporter: [
    ["list"],
    [
      "html",
      {
        outputFolder: "playwright-report",
        open: "never",
      },
    ],
  ],

  use: {
    baseURL: previewUrl,
    headless: true,
    viewport: {
      width: 1280,
      height: 800,
    },
    colorScheme: "light",
    locale: "en-US",
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chrome",
      use: {
        channel: "chrome",
      },
    },
    {
      name: "edge",
      use: {
        channel: "msedge",
      },
    },
  ],

  webServer: {
    command: "npm run preview",
    url: previewUrl,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
