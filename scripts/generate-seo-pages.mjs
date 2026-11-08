import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import ts from 'typescript';

const distDir = 'dist';
const baseUrl = 'https://ashutoshpalhare.github.io/craftc';

const pages = [
  {
    path: '/',
    title: 'CraftC — Learn C & C++ From Zero to Job Ready',
    description: 'Learn C and C++ with structured lessons, practical coding projects, DSA, interview preparation, roadmaps and downloadable cheatsheets.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/learn/c',
    title: 'Learn C Programming — Complete Beginner to Advanced Course | CraftC',
    description: 'Master C programming through structured lessons, examples, practice programs and a guided roadmap on CraftC.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/learn/cpp',
    title: 'Learn C++ Programming — Modern C++ Course | CraftC',
    description: 'Learn modern C++ with practical lessons, STL, templates, exceptions, projects and interview preparation on CraftC.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/roadmaps',
    title: 'C, C++ & DSA Learning Roadmaps | CraftC',
    description: 'Follow structured C, C++ and Data Structures & Algorithms roadmaps from fundamentals to interview readiness.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/dsa',
    title: 'Data Structures & Algorithms — Learn and Practice | CraftC',
    description: 'Study DSA concepts, complexity, data structures, algorithms and progressive C++ practice problems with CraftC.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/projects',
    title: 'C & C++ Programming Projects | CraftC',
    description: 'Build practical C and C++ projects with guided requirements, milestones, sample input/output and quality checklists.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/practice',
    title: 'C, C++ & DSA Practice Quizzes — Interactive Coding Knowledge Checks | CraftC',
    description: 'Test your programming knowledge with interactive C, C++ and DSA quizzes, instant scoring, clear explanations and saved best scores.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/interview-prep',
    title: 'C, C++ & DSA Interview Questions | CraftC',
    description: 'Prepare for developer interviews with curated C, C++ and DSA questions and clear explanations.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/cheatsheets',
    title: 'C & C++ Cheatsheets — Quick Reference | CraftC',
    description: 'Review essential C and C++ syntax, concepts and examples with downloadable programming cheatsheets.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/downloads',
    title: 'Programming Resources & Downloads | CraftC',
    description: 'Explore trusted C and C++ documentation, compiler references, learning resources and developer tools.',
    priority: '0.6',
    changefreq: 'monthly',
  },
  {
    path: '/about',
    title: 'About CraftC — A Practical C & C++ Learning Platform',
    description: 'Learn about CraftC, its learning approach and the resources designed to help developers grow from beginner to job ready.',
    priority: '0.5',
    changefreq: 'yearly',
  },
];

function escapeAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
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

function truncateDescription(value, maxLength = 160) {
  const normalized = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (!normalized) return 'Study this programming lesson with examples and guided explanations on CraftC.';
  if (normalized.length <= maxLength) return normalized;

  const shortened = normalized.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(' ');
  return `${shortened.slice(0, lastSpace > 100 ? lastSpace : maxLength - 1).trimEnd()}…`;
}

async function loadCurriculum(sourcePath, exportName) {
  const source = await readFile(sourcePath, 'utf8');
  const result = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    reportDiagnostics: true,
  });

  const errors = (result.diagnostics ?? []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
  if (errors.length) {
    const messages = errors.map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
    throw new Error(`Could not compile ${sourcePath}: ${messages.join('; ')}`);
  }

  const moduleUrl = `data:text/javascript;base64,${Buffer.from(result.outputText).toString('base64')}`;
  const module = await import(moduleUrl);
  const curriculum = module[exportName];

  if (!curriculum?.id || !Array.isArray(curriculum.categories)) {
    throw new Error(`Invalid curriculum export: ${exportName} from ${sourcePath}`);
  }

  return curriculum;
}

function buildLessonPages(curricula) {
  const lessonPages = [];

  for (const curriculum of curricula) {
    const seenSlugs = new Set();

    for (const category of curriculum.categories) {
      for (const lesson of category.lessons ?? []) {
        const slug = String(lesson.slug ?? '').trim();
        if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
          throw new Error(`Invalid lesson slug in ${curriculum.id}: ${lesson.id ?? lesson.title ?? 'unknown lesson'}`);
        }
        if (seenSlugs.has(slug)) {
          throw new Error(`Duplicate lesson slug in ${curriculum.id}: ${slug}`);
        }
        seenSlugs.add(slug);

        if (!lesson.title || !lesson.description) {
          throw new Error(`Missing SEO title or description for lesson: ${curriculum.id}/${slug}`);
        }

        const courseName = curriculum.id === 'cpp' ? 'C++' : 'C';
        const path = `/learn/${curriculum.id}/${slug}`;
        lessonPages.push({
          path,
          title: `${lesson.title} — ${courseName} Programming | CraftC`,
          description: truncateDescription(lesson.description),
          priority: '0.6',
          changefreq: 'monthly',
        });
      }
    }

    if (seenSlugs.size === 0) {
      throw new Error(`No lessons found for curriculum: ${curriculum.id}`);
    }
  }

  return lessonPages;
}

function renderSitemap(allPages) {
  const entries = allPages.map((page) => {
    const url = `${baseUrl}${page.path === '/' ? '/' : `${page.path}/`}`;
    return [
      '  <url>',
      `    <loc>${escapeXml(url)}</loc>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority}</priority>`,
      '  </url>',
    ].join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');
}

const [cCurriculum, cppCurriculum] = await Promise.all([
  loadCurriculum('src/data/cCurriculum.ts', 'cCurriculum'),
  loadCurriculum('src/data/cppCurriculum.ts', 'cppCurriculum'),
]);

const lessonPages = buildLessonPages([cCurriculum, cppCurriculum]);
const allPages = [...pages, ...lessonPages];
const template = await readFile(join(distDir, 'index.html'), 'utf8');

for (const page of allPages) {
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

if (!/<meta name="robots" content="noindex, nofollow" \/>/.test(notFound)) {
  throw new Error('The generated 404 page must be marked noindex, nofollow.');
}

await writeFile(join(distDir, '404.html'), notFound);
await writeFile(join(distDir, 'sitemap.xml'), renderSitemap(allPages));

console.log(`Generated SEO HTML for ${pages.length} main routes and ${lessonPages.length} lesson routes, plus a noindex 404 page and synchronized sitemap.`);
