import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire("C:\\Users\\LeVy\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\package.json");
const { chromium } = require("playwright");

const [htmlPath, outputDir] = process.argv.slice(2);
if (!htmlPath || !outputDir) throw new Error("Usage: node capture-mockups.mjs <html> <outputDir>");

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  args: ["--disable-gpu", "--disable-features=Vulkan,DawnGraphite"],
});

const screens = [
  { query: "screen=home", output: "Pages/VisualPrompt_Studio_M00_Home_Desktop_v1.4.png", fullPage: true },
  { query: "screen=build", output: "Pages/VisualPrompt_Studio_M01_Build_Desktop_v1.4.png", fullPage: true },
  { query: "screen=prompts", output: "Pages/VisualPrompt_Studio_M02_My_Prompts_Desktop_v1.4.png", fullPage: true },
  { query: "screen=builtin", output: "Pages/VisualPrompt_Studio_M07_Built-in_Desktop_v1.4.png", fullPage: true },
  { query: "screen=encyclopedia", output: "Pages/VisualPrompt_Studio_M08_Field_Encyclopedia_Desktop_v1.4.png", fullPage: true },
  { query: "screen=build&demo=learn", output: "States/VisualPrompt_Studio_M09_Field_Learn_Popover_v1.4.png", fullPage: true },
  { query: "screen=build&demo=reset", output: "States/VisualPrompt_Studio_M10_Reset_to_Preset_Confirmation_v1.4.png", fullPage: false },
];

for (const item of screens) {
  const page = await browser.newPage({ viewport: { width: 1600, height: 1100 }, deviceScaleFactor: 1 });
  await page.goto(`${pathToFileURL(htmlPath).href}?${item.query}`, { waitUntil: "load" });
  await page.waitForFunction(() => Array.from(document.images).every((img) => img.complete));
  await page.screenshot({ path: `${outputDir}/${item.output}`, fullPage: item.fullPage });
  const evidence = await page.evaluate(() => {
    const projectIcon = document.querySelector(".side-item.project.active .icon");
    const popover = document.getElementById("learn-popover");
    const resetDialog = document.getElementById("reset-dialog");
    return {
      screen: new URLSearchParams(location.search).get("screen"),
      demo: new URLSearchParams(location.search).get("demo"),
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
      brokenImages: Array.from(document.images).filter((img) => !img.naturalWidth).length,
      nonEnglishSignals: (document.body.innerText.match(/[ăâđêôơưàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/gi) || []).length,
      activeProjectIconColor: projectIcon ? getComputedStyle(projectIcon).color : null,
      learnPopoverOpen: popover ? !popover.hidden : false,
      resetDialogOpen: resetDialog ? resetDialog.open : false,
    };
  });
  process.stdout.write(`${JSON.stringify(evidence)}\n`);
  await page.close();
}

await browser.close();
