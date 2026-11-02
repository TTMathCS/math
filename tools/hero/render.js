// Renders math-hero.svg to math-hero.png (1600x900) with the pre-installed Playwright.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
(async () => {
  const dir = __dirname;
  const svg = fs.readFileSync(path.join(dir, 'math-hero.svg'), 'utf8');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><body style="margin:0;background:#000">${svg}</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(dir, 'math-hero.png'), clip: { x: 0, y: 0, width: 1600, height: 900 } });
  await browser.close();
})();
