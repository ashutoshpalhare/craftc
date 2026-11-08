import { access, readFile } from 'node:fs/promises';
import { join, sep } from 'node:path';

const distDir = 'dist';
const siteOrigin = 'https://ashutoshpalhare.github.io';
const basePath = '/craftc';
const siteBase = `${siteOrigin}${basePath}`;
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

async function readDist(path) {
  try {
    return await readFile(join(distDir, path), 'utf8');
  } catch {
    failures.push(`Missing build output: dist/${path}`);
    return '';
  }
}

async function fileExists(path) {
  try {
    await access(join(distDir, path));
    return true;
  } catch {
    return false;
  }
}

const sitemap = await readDist('sitemap.xml');
const robots = await readDist('robots.txt');
const notFound = await readDist('404.html');
const indexHtml = await readDist('index.html');

check(sitemap.startsWith('<?xml version="1.0"'), 'Sitemap is missing its XML declaration.');
check(sitemap.includes('<urlset') && sitemap.includes('</urlset>'), 'Sitemap XML root element is incomplete.');
check(robots.includes(`Sitemap: ${siteBase}/sitemap.xml`), 'robots.txt does not point to the production sitemap.');
check(/<meta name="robots" content="noindex, nofollow" \/>/.test(notFound), 'Generated 404 page must be noindex, nofollow.');
check(/<title>Page Not Found \| CraftC<\/title>/.test(notFound), 'Generated 404 page title is incorrect.');

for (const asset of ['favicon.png', 'og-image.png']) {
  check(await fileExists(asset), `Missing public asset in build output: ${asset}`);
}

const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
const uniqueLocs = new Set(locs);
check(locs.length >= 72, `Expected at least 72 sitemap URLs (10 main + 62 lessons); found ${locs.length}.`);
check(uniqueLocs.size === locs.length, 'Sitemap contains duplicate URLs.');

const requiredRoutes = [
  '/', '/learn/c', '/learn/cpp', '/roadmaps', '/dsa',
  '/projects', '/interview-prep', '/cheatsheets', '/downloads', '/about',
];
const sitemapPaths = new Set(locs.map((loc) => {
  try {
    const url = new URL(loc);
    check(url.origin === siteOrigin, `Unexpected sitemap host: ${loc}`);
    check(url.pathname === basePath + '/' || url.pathname.startsWith(basePath + '/'), `Sitemap URL is outside the GitHub Pages base path: ${loc}`);
    return url.pathname.slice(basePath.length).replace(/\/$/, '') || '/';
  } catch {
    failures.push(`Invalid sitemap URL: ${loc}`);
    return '';
  }
}));

for (const route of requiredRoutes) {
  check(sitemapPaths.has(route), `Required route missing from sitemap: ${route}`);
}

const canonicalSeen = new Set();
let lessonCount = 0;
for (const loc of locs) {
  let url;
  try {
    url = new URL(loc);
  } catch {
    continue;
  }

  const route = url.pathname.slice(basePath.length).replace(/\/$/, '') || '/';
  if (route.startsWith('/learn/c/') || route.startsWith('/learn/cpp/')) lessonCount += 1;
  const relativeRoute = route === '/' ? '' : route.slice(1).split('/').join(sep);
  const htmlPath = relativeRoute ? join(relativeRoute, 'index.html') : 'index.html';
  const html = await readDist(htmlPath);
  if (!html) continue;

  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim() ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)" \/>/)?.[1]?.trim() ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)" \/>/)?.[1] ?? '';
  const ogUrl = html.match(/<meta property="og:url" content="([^"]*)" \/>/)?.[1] ?? '';

  check(Boolean(title), `Missing page title for ${route}`);
  check(Boolean(description), `Missing meta description for ${route}`);
  check(canonical === loc, `Canonical URL mismatch for ${route}: ${canonical || '(missing)'}`);
  check(ogUrl === loc, `Open Graph URL mismatch for ${route}: ${ogUrl || '(missing)'}`);
  check(!canonicalSeen.has(canonical), `Duplicate canonical URL: ${canonical}`);
  canonicalSeen.add(canonical);
}

check(lessonCount >= 62, `Expected at least 62 lesson URLs in sitemap; found ${lessonCount}.`);

// Validate local assets referenced by the root and 404 HTML templates.
for (const [label, html] of [['index.html', indexHtml], ['404.html', notFound]]) {
  const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
  for (const ref of refs) {
    if (!ref.startsWith(`${basePath}/`)) continue;
    const assetPath = ref.slice(basePath.length + 1).split(/[?#]/, 1)[0];
    if (!assetPath || assetPath.endsWith('/')) continue;
    check(await fileExists(assetPath), `${label} references a missing local asset: ${ref}`);
  }
}

// Catch accidental reintroduction of the old placeholder profile links or stale dependency claims.
const aboutSource = await readFile('src/pages/AboutPage.tsx', 'utf8');
const footerSource = await readFile('src/components/Footer.tsx', 'utf8');
const packageJson = JSON.parse(await readFile('package.json', 'utf8'));
const lockJson = JSON.parse(await readFile('package-lock.json', 'utf8'));
const readme = await readFile('README.md', 'utf8');

check(!aboutSource.includes('href="#"'), 'About page contains a placeholder href="#" link.');
check(!aboutSource.includes('hello@craftc.dev'), 'About page contains the placeholder CraftC email address.');
check(!footerSource.includes('https://github.com"'), 'Footer links to the generic GitHub homepage instead of the owner profile.');
check(!packageJson.dependencies?.['@supabase/supabase-js'], 'Unused Supabase SDK is still listed as a direct dependency.');
check(!lockJson.packages?.['node_modules/@supabase/supabase-js'], 'Unused Supabase SDK remains in package-lock.json.');
check(Boolean(packageJson.engines?.node), 'package.json must declare its supported Node.js engine range.');
check(readme.includes('Node.js** 20.19+ or 22.12+'), 'README Node.js requirement does not match Vite 8.');
check(!readme.includes('Supabase'), 'README still advertises a Supabase backend that the app does not use.');
check(!readme.includes('\\n|'), 'README route table contains a literal escaped newline.');

if (failures.length) {
  console.error(['Release artifact audit failed:', ...failures.map((failure) => \`- \${failure}\`)].join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Release artifact audit passed: ${locs.length} sitemap URLs (${requiredRoutes.length} main routes + ${lessonCount} lesson routes), unique canonical metadata, local assets, robots.txt and noindex 404.`);
}
