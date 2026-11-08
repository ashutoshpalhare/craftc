import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const baseUrl = process.env.CRAFTC_BASE_URL ?? 'http://127.0.0.1:4173/craftc';
const routes = [
  '/',
  '/learn/c',
  '/learn/cpp',
  '/roadmaps',
  '/dsa',
  '/projects',
  '/interview-prep',
  '/cheatsheets',
  '/downloads',
  '/about',
];

const browser = await chromium.launch({ headless: true });
const failures = [];
const warnings = [];

try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

  for (const route of routes) {
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
    if (!response?.ok()) {
      failures.push(`Route ${route} returned HTTP ${response?.status() ?? 'no response'}`);
      continue;
    }

    await page.locator('main').first().waitFor({ state: 'visible' });
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const serious = results.violations.filter((item) => ['critical', 'serious'].includes(item.impact));
    const moderate = results.violations.filter((item) => item.impact === 'moderate');
    if (serious.length) {
      failures.push(`${route}: ${serious.length} serious/critical axe violation(s)`);
      for (const item of serious) {
        failures.push(`  - [${item.impact}] ${item.id}: ${item.help} (${item.nodes.length} node(s))`);
      }
    }
    if (moderate.length) {
      warnings.push(`${route}: ${moderate.length} moderate axe violation(s): ${moderate.map((item) => item.id).join(', ')}`);
    }
  }

  // Footer must sit below the lesson content, not beside the sidebar/content row.
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${baseUrl}/learn/c`, { waitUntil: 'networkidle' });
  const layout = await page.evaluate(() => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    if (!main || !footer) return null;
    return { mainBottom: main.getBoundingClientRect().bottom, footerTop: footer.getBoundingClientRect().top };
  });
  if (!layout || layout.footerTop < layout.mainBottom - 2) {
    failures.push(`Footer overlaps lesson content: ${JSON.stringify(layout)}`);
  }

  // Search dialog: focus entry, tab containment, Escape close, focus restoration and scroll unlock.
  const searchButton = page.getByRole('button', { name: 'Search' }).first();
  await searchButton.click();
  const dialog = page.getByRole('dialog', { name: 'Search' });
  await dialog.waitFor({ state: 'visible' });
  const searchInput = page.getByRole('combobox', { name: 'Search CraftC content' });
  await searchInput.waitFor({ state: 'visible' });
  await page.waitForFunction(() => document.activeElement?.id === 'craftc-search-input');
  await searchInput.press('Shift+Tab');
  if (!(await dialog.locator(':focus').count())) failures.push('Search focus escaped the dialog on Shift+Tab.');
  await page.keyboard.press('Tab');
  if (!(await dialog.locator(':focus').count())) failures.push('Search focus escaped the dialog on Tab.');
  await page.keyboard.press('Escape');
  await dialog.waitFor({ state: 'detached' });
  if (!(await searchButton.evaluate((element) => element === document.activeElement))) {
    failures.push('Search did not restore focus to its opener.');
  }
  if (await page.evaluate(() => document.body.style.overflow === 'hidden')) {
    failures.push('Search left background scrolling locked after close.');
  }

  // Mobile navbar: Escape closes the disclosure and returns focus to its trigger.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  const menuButton = page.getByRole('button', { name: 'Open navigation menu' });
  await menuButton.click();
  await page.locator('#craftc-mobile-navigation').waitFor({ state: 'visible' });
  await page.keyboard.press('Escape');
  await page.locator('#craftc-mobile-navigation').waitFor({ state: 'detached' });
  if (!(await menuButton.evaluate((element) => element === document.activeElement))) {
    failures.push('Mobile navbar did not restore focus to its trigger after Escape.');
  }

  // Mobile lesson drawer: Escape closes it and restores focus to the drawer trigger.
  await page.goto(`${baseUrl}/learn/c`, { waitUntil: 'networkidle' });
  const drawerButton = page.getByRole('button', { name: 'Open lesson navigation' });
  await drawerButton.click();
  await page.getByRole('complementary', { name: 'Lesson navigation' }).waitFor({ state: 'visible' });
  await page.keyboard.press('Escape');
  await page.locator('#craftc-mobile-lesson-navigation').waitFor({ state: 'detached' });
  if (!(await drawerButton.evaluate((element) => element === document.activeElement))) {
    failures.push('Lesson drawer did not restore focus to its trigger after Escape.');
  }

  for (const warning of warnings) console.warn(`WARN ${warning}`);
  if (failures.length) {
    console.error('Accessibility smoke test failures:\n' + failures.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`Accessibility smoke tests passed across ${routes.length} routes, plus search, mobile navigation, lesson drawer and footer layout.`);
  }
} finally {
  await browser.close();
}
