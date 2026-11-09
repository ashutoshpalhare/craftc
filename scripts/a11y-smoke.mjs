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
  '/practice',
  '/interview-prep',
  '/cheatsheets',
  '/downloads',
  '/about',
];

const browser = await chromium.launch({ headless: true });
const failures = [];
const warnings = [];

try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();

  for (const route of routes) {
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
    if (!response?.ok()) {
      failures.push(`Route ${route} returned HTTP ${response?.status() ?? 'no response'}`);
      continue;
    }

    await page.locator('main').first().waitFor({ state: 'visible' });
    // Trigger while-in-view components and let entrance animations reach their final styles
    // before measuring contrast; partially transparent motion frames distort axe results.
    await page.evaluate(async () => {
      const height = document.documentElement.scrollHeight;
      for (let y = 0; y < height; y += Math.max(window.innerHeight, 600)) {
        window.scrollTo(0, y);
        await new Promise((resolve) => window.setTimeout(resolve, 100));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1200);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const serious = results.violations.filter((item) => ['critical', 'serious'].includes(item.impact));
    const moderate = results.violations.filter((item) => item.impact === 'moderate');
    if (serious.length) {
      failures.push(`${route}: ${serious.length} serious/critical axe violation(s)`);
      for (const item of serious) {
        failures.push(`  - [${item.impact}] ${item.id}: ${item.help} (${item.nodes.length} node(s))`);
        for (const node of item.nodes) {
          const details = node.any?.map((check) => check.data ? JSON.stringify(check.data) : check.message).join('; ');
          failures.push(`      target: ${node.target.join(' ')} | ${node.failureSummary ?? details ?? 'No details'}`);
        }
      }
    }
    if (moderate.length) {
      warnings.push(`${route}: ${moderate.length} moderate axe violation(s): ${moderate.map((item) => item.id).join(', ')}`);
    }
  }

  // Repeat the route scan in the light theme to catch theme-specific contrast regressions.
  for (const route of routes) {
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
    if (!response?.ok()) {
      failures.push(`Light theme route ${route} returned HTTP ${response?.status() ?? 'no response'}`);
      continue;
    }
    await page.locator('main').first().waitFor({ state: 'visible' });
    await page.evaluate(async () => {
      document.documentElement.classList.add('light');
      const height = document.documentElement.scrollHeight;
      for (let y = 0; y < height; y += Math.max(window.innerHeight, 600)) {
        window.scrollTo(0, y);
        await new Promise((resolve) => window.setTimeout(resolve, 100));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1200);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    const serious = results.violations.filter((item) => ['critical', 'serious'].includes(item.impact));
    for (const item of serious) {
      failures.push(`Light theme ${route}: [${item.impact}] ${item.id}: ${item.help} (${item.nodes.length} node(s))`);
      for (const node of item.nodes) {
        const details = node.any?.map((check) => check.data ? JSON.stringify(check.data) : check.message).join('; ');
        failures.push(`      target: ${node.target.join(' ')} | ${node.failureSummary ?? details ?? 'No details'}`);
      }
    }
    await page.evaluate(() => document.documentElement.classList.remove('light'));
  }

  // Scan the most interaction-heavy screens at a narrow mobile viewport as well.
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of ['/', '/learn/c', '/dsa', '/projects', '/practice']) {
    const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
    if (!response?.ok()) {
      failures.push(`Mobile route ${route} returned HTTP ${response?.status() ?? 'no response'}`);
      continue;
    }
    await page.locator('main').first().waitFor({ state: 'visible' });
    await page.evaluate(async () => {
      const height = document.documentElement.scrollHeight;
      for (let y = 0; y < height; y += Math.max(window.innerHeight, 600)) {
        window.scrollTo(0, y);
        await new Promise((resolve) => window.setTimeout(resolve, 100));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(1200);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
    if (overflow) failures.push(`Mobile ${route}: page has horizontal overflow at 390px.`);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    const serious = results.violations.filter((item) => ['critical', 'serious'].includes(item.impact));
    for (const item of serious) {
      failures.push(`Mobile ${route}: [${item.impact}] ${item.id}: ${item.help} (${item.nodes.length} node(s))`);
      for (const node of item.nodes) {
        const details = node.any?.map((check) => check.data ? JSON.stringify(check.data) : check.message).join('; ');
        failures.push(`      target: ${node.target.join(' ')} | ${node.failureSummary ?? details ?? 'No details'}`);
      }
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

  // Search dialog: verify its focus management at the mobile viewport too.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
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

  // Desktop navigation: verify the compact layout fits common laptop/desktop widths,
  // and that secondary routes remain discoverable through the keyboard-operable More menu.
  for (const width of [1024, 1152, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
    const navRow = page.locator('nav[aria-label="Main navigation"] > div').first();
    const dimensions = await navRow.evaluate((element) => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    }));
    if (dimensions.scrollWidth > dimensions.clientWidth + 1) {
      failures.push(`Desktop navigation overflows at ${width}px: ${JSON.stringify(dimensions)}`);
    }
    const moreSummary = page.locator('nav[aria-label="Main navigation"] summary[aria-label="More navigation links"]');
    if (!(await moreSummary.isVisible())) {
      failures.push(`Desktop More menu is not visible at ${width}px.`);
      continue;
    }
    await moreSummary.click();
    for (const label of ['Projects', 'Interview Prep', 'Cheatsheets', 'Downloads', 'About']) {
      if (!(await page.locator('details').getByRole('link', { name: label, exact: true }).isVisible())) {
        failures.push(`Desktop More menu is missing ${label} at ${width}px.`);
      }
    }
    await page.keyboard.press('Escape');
    if (await page.locator('details[open]').count()) failures.push(`Desktop More menu did not close with Escape at ${width}px.`);
  }

  // Mobile navbar: Escape closes the disclosure and returns focus to its trigger.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  const menuButton = page.getByRole('button', { name: 'Open navigation menu' });
  await menuButton.click();
  await page.locator('#craftc-mobile-navigation').waitFor({ state: 'visible' });
  for (const label of ['Home', 'Learn C', 'Learn C++', 'Roadmaps', 'DSA', 'Practice', 'Projects', 'Interview Prep', 'Cheatsheets', 'Downloads', 'About']) {
    if (!(await page.locator('#craftc-mobile-navigation').getByRole('link', { name: label, exact: true }).count())) {
      failures.push(`Mobile navigation is missing ${label}.`);
    }
  }
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

  // Practice Center: answer every question, submit, verify result feedback and retry.
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${baseUrl}/practice`, { waitUntil: 'networkidle' });
  const quizRadios = page.locator('input[type="radio"]');
  const quizQuestionCount = await quizRadios.count();
  if (quizQuestionCount !== 72) {
    failures.push(`Practice Center expected 72 radio options (18 questions × 4); found ${quizQuestionCount}.`);
  } else {
    const questionNames = await quizRadios.evaluateAll((items) => [...new Set(items.map((item) => item.getAttribute('name')))]);
    for (const name of questionNames) {
      await page.locator(`input[name="${name}"]`).first().check();
    }
    const submitButton = page.getByRole('button', { name: /Submit quiz/ });
    if (await submitButton.isDisabled()) failures.push('Practice Center submit remained disabled after every question was answered.');
    await submitButton.click();
    if (!(await page.getByText(/Attempt 1 · Best score/).isVisible())) failures.push('Practice Center did not show the saved quiz result.');
    await page.getByRole('button', { name: /Retry quiz/ }).click();
    if (await page.getByRole('button', { name: /Submit quiz/ }).isDisabled()) {
      // Retry correctly clears answers; submit should be disabled until the learner answers again.
    } else {
      failures.push('Practice Center retry did not clear the previous answers.');
    }
  }

  // Course certificate request is gated on all lesson slugs being marked complete.
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${baseUrl}/learn/c`, { waitUntil: 'networkidle' });
  const courseSlugs = await page.locator('a[href*="/learn/c/"]').evaluateAll((anchors) => {
    const slugs = anchors.map((anchor) => {
      const segments = new URL(anchor.href).pathname.split('/').filter(Boolean);
      return segments.at(-1);
    }).filter(Boolean);
    return [...new Set(slugs)];
  });
  if (!courseSlugs.length) {
    failures.push('Certificate smoke test could not find C course lesson links.');
  } else {
    await page.evaluate((slugs) => {
      localStorage.setItem('craftc:completed-lessons:v1:c', JSON.stringify(slugs));
    }, courseSlugs);
    await page.reload({ waitUntil: 'networkidle' });
    if (!(await page.getByRole('heading', { name: 'Request your CraftC certificate' }).isVisible())) {
      failures.push('Certificate request did not appear after all C lessons were marked complete.');
    } else {
      const certificateForm = page.locator('form').filter({ has: page.getByRole('button', { name: 'Prepare certificate request' }) });
      if (!(await certificateForm.getByLabel('Full name').count())) failures.push('Certificate form is missing the required full-name field.');
      if (!(await certificateForm.locator('input[type="email"][required]').count())) failures.push('Certificate form is missing the required email field.');
      if (!(await certificateForm.getByRole('radio', { name: /Printed/ }).count())) failures.push('Certificate form is missing the printed delivery option.');
    }
  }

  for (const warning of warnings) console.warn(`WARN ${warning}`);
  if (failures.length) {
    console.error('Accessibility smoke test failures:\n' + failures.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`Accessibility smoke tests passed across ${routes.length} routes in dark/light themes, plus mobile scans, search, navigation, lesson drawer and footer layout.`);
  }
} finally {
  await browser.close();
}
