import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const distDir = 'dist';
const baseUrl = 'https://ashutoshpalhare.github.io/craftc';

const pages = [
  {
    path: '/',
    title: 'CraftC — Learn C & C++ From Zero to Job Ready',
    description: 'Learn C and C++ with structured lessons, practical coding projects, DSA, interview preparation, roadmaps and downloadable cheatsheets.',
  },
  {
    path: '/learn/c',
    title: 'Learn C Programming — Complete Beginner to Advanced Course | CraftC',
    description: 'Master C programming through structured lessons, examples, practice programs and a guided roadmap on CraftC.',
  },
  {
    path: '/learn/cpp',
    title: 'Learn C++ Programming — Modern C++ Course | CraftC',
    description: 'Learn modern C++ with practical lessons, STL, templates, exceptions, projects and interview preparation on CraftC.',
  },
  {
    path: '/roadmaps',
    title: 'C, C++ & DSA Learning Roadmaps | CraftC',
    description: 'Follow structured C, C++ and Data Structures & Algorithms roadmaps from fundamentals to interview readiness.',
  },
  {
    path: '/dsa',
    title: 'Data Structures & Algorithms — Learn and Practice | CraftC',
    description: 'Study DSA concepts, complexity, data structures, algorithms and progressive C++ practice problems with CraftC.',
  },
  {
    path: '/projects',
    title: 'C & C++ Programming Projects | CraftC',
    description: 'Build practical C and C++ projects with guided requirements, milestones, sample input/output and quality checklists.',
  },
  {
    path: '/interview-prep',
    title: 'C, C++ & DSA Interview Questions | CraftC',
    description: 'Prepare for developer interviews with curated C, C++ and DSA questions and clear explanations.',
  },
  {
    path: '/cheatsheets',
    title: 'C & C++ Cheatsheets — Quick Reference | CraftC',
    description: 'Review essential C and C++ syntax, concepts and examples with downloadable programming cheatsheets.',
  },
  {
    path: '/downloads',
    title: 'Programming Resources & Downloads | CraftC',
    description: 'Explore trusted C and C++ documentation, compiler references, learning resources and developer tools.',
  },
  {
    path: '/about',
    title: 'About CraftC — A Practical C & C++ Learning Platform',
    description: 'Learn about CraftC, its learning approach and the resources designed to help developers grow from beginner to job ready.',
  },
];

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

function setMeta(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Expected metadata tag was not found: ${pattern}`);
  return html.replace(pattern, replacement);
}

function renderPage(template, page) {
  const url = `${baseUrl}${page.path === '/' ? '/' : `${page.path}/`}`;
  let html = template;
  html = setMeta(html, /<title>[^<]*<\/title>/, `<title>${escapeAttribute(page.title)}</title>`);
  html = setMeta(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttribute(page.description)}" />`);
  html = setMeta(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  html = setMeta(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = setMeta(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttribute(page.title)}" />`);
  html = setMeta(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttribute(page.description)}" />`);
  html = setMeta(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`);
  html = setMeta(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`);
  return html;
}

const template = await readFile(join(distDir, 'index.html'), 'utf8');

for (const page of pages) {
  const outputPath = page.path === '/'
    ? join(distDir, 'index.html')
    : join(distDir, page.path.slice(1), 'index.html');
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderPage(template, page));
}

let notFound = template;
notFound = setMeta(notFound, /<title>[^<]*<\/title>/, '<title>Page Not Found | CraftC</title>');
notFound = setMeta(notFound, /<meta name="description" content="[^"]*" \/>/, '<meta name="description" content="The page you requested could not be found on CraftC." />');
notFound = setMeta(notFound, /<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, nofollow" />');
await writeFile(join(distDir, '404.html'), notFound);

console.log(`Generated SEO-ready HTML for ${pages.length} routes and a noindex 404 page.`);
