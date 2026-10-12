import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire("C:\\Users\\LeVy\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\package.json");
const { chromium } = require("playwright");

const [htmlPath] = process.argv.slice(2);
if (!htmlPath) throw new Error("Usage: node verify-interactions.mjs <html>");

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  args: ["--disable-gpu", "--disable-features=Vulkan,DawnGraphite"],
});

const page = await browser.newPage({ viewport: { width: 1600, height: 1100 } });
await page.goto(`${pathToFileURL(htmlPath).href}?screen=build`, { waitUntil: "load" });

const learn = page.locator('[data-field="key-light-quality"]');
await learn.click();
if (await page.locator("#learn-popover").getAttribute("hidden") !== null) throw new Error("Learn popover did not open");
const fullHref = await page.locator("#open-full-article").getAttribute("href");
if (!fullHref?.includes("field=key-light-quality") || !fullHref.includes("return=build")) throw new Error("Full article link does not deep-link to the field and return context");
await page.keyboard.press("Escape");
if (await page.locator("#learn-popover").getAttribute("hidden") === null) throw new Error("Escape did not close Learn popover");
if (!(await learn.evaluate((node) => node === document.activeElement))) throw new Error("Focus did not return to the Learn trigger");

const promptBefore = await page.locator(".prompt-box").innerText();
await page.locator("#reset-preset").click();
if (!(await page.locator("#reset-dialog").evaluate((node) => node.open))) throw new Error("Reset confirmation did not open");
await page.locator("#confirm-reset").click();
const composition = await page.locator('select[data-preset-default="Asymmetric hero"]').inputValue();
const exclusions = await page.locator('input[data-preset-default="People"]').inputValue();
const promptAfter = await page.locator(".prompt-box").innerText();
if (composition !== "Asymmetric hero" || exclusions !== "People") throw new Error("Reset did not restore Preset values");
if (promptBefore !== promptAfter) throw new Error("Reset incorrectly changed generated Prompt text");

const projectIcon = page.locator(".side-item.project.active .icon");
const projectIconState = await projectIcon.evaluate((node) => {
  const style = getComputedStyle(node);
  return { color: style.color, fill: style.fill };
});
if (projectIconState.color !== "rgb(20, 90, 135)" || projectIconState.fill !== "rgb(20, 90, 135)") throw new Error("Selected Project icon does not use the selected blue state");

process.stdout.write(JSON.stringify({ learn: "pass", deepLink: fullHref, reset: "pass", generatedPromptPreserved: true, projectIconState }) + "\n");
await browser.close();
