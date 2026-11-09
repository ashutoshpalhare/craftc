import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import ts from 'typescript';

const curriculumFiles = [
  { path: 'src/data/cCurriculum.ts', language: 'c', standard: 'c17', compiler: 'gcc' },
  { path: 'src/data/cppCurriculum.ts', language: 'cpp', standard: 'c++17', compiler: 'g++' },
];

const failures = [];
const lessonIds = new Set();
const lessonSlugs = new Set();
let checked = 0;
let lessonCount = 0;

async function loadCurriculum(path) {
  const source = await readFile(path, 'utf8');
  const { outputText, diagnostics } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    reportDiagnostics: true,
  });
  const errors = (diagnostics ?? []).filter((item) => item.category === ts.DiagnosticCategory.Error);
  if (errors.length) {
    throw new Error(`Could not load ${path}: ${errors.map((item) => ts.flattenDiagnosticMessageText(item.messageText, '\n')).join('; ')}`);
  }
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
  const module = await import(moduleUrl);
  return path.includes('cCurriculum') ? module.cCurriculum : module.cppCurriculum;
}

for (const config of curriculumFiles) {
  const compilerCheck = spawnSync(config.compiler, ['--version'], { encoding: 'utf8' });
  if (compilerCheck.error || compilerCheck.status !== 0) {
    console.error(`${config.compiler} is required to validate ${config.language.toUpperCase()} lesson examples.`);
    process.exit(1);
  }

  const curriculum = await loadCurriculum(config.path);
  const categoryIds = new Set();
  for (const category of curriculum.categories) {
    if (!category.id?.trim() || categoryIds.has(category.id)) failures.push({ label: `${config.language.toUpperCase()} / category ${category.title || '(untitled)'}`, stderr: 'Category id is empty or duplicated.' });
    categoryIds.add(category.id);
  }
  const lessons = curriculum.categories.flatMap((category) => category.lessons);
  for (const lesson of lessons) {
    lessonCount += 1;
    const lessonLabel = `${config.language.toUpperCase()} / ${lesson.title || '(untitled lesson)'}`;
    if (!lesson.id?.trim() || lessonIds.has(lesson.id)) failures.push({ label: lessonLabel, stderr: `Lesson id is empty or duplicated: ${lesson.id || '(empty)'}` });
    lessonIds.add(lesson.id);
    const slugKey = `${config.language}:${lesson.slug}`;
    if (!lesson.slug?.trim() || lessonSlugs.has(slugKey)) failures.push({ label: lessonLabel, stderr: `Lesson slug is empty or duplicated: ${lesson.slug || '(empty)'}` });
    lessonSlugs.add(slugKey);
    if (!lesson.title?.trim() || !lesson.description?.trim() || !/^\\d+\\s+min$/.test(lesson.duration)) {
      failures.push({ label: lessonLabel, stderr: 'Lesson title, description, or duration metadata is missing/invalid.' });
    }
    if (!Array.isArray(lesson.sections) || lesson.sections.length === 0) {
      failures.push({ label: lessonLabel, stderr: 'Lesson has no content sections.' });
      continue;
    }
    for (const [sectionIndex, section] of lesson.sections.entries()) {
      const sectionLabel = `${lessonLabel} / ${section.title || `section ${sectionIndex + 1}`}`;
      if (!section.title?.trim()) failures.push({ label: sectionLabel, stderr: 'Section title is empty.' });
      const hasBody = Boolean(section.content?.trim()) || Boolean(section.code?.code?.trim()) || Boolean(section.items?.some((item) => item.trim())) || Boolean(section.questions?.length);
      if (!hasBody) failures.push({ label: sectionLabel, stderr: 'Section has no readable content, code, list items, or questions.' });
      if (section.link?.url && !/^https?:\\/\\//.test(section.link.url)) failures.push({ label: sectionLabel, stderr: `External resource URL must use http(s): ${section.link.url}` });
      const example = section.code;
      if (!example || example.language.trim().toLowerCase() !== config.language) continue;

      checked += 1;
      const args = [
        `-std=${config.standard}`,
        '-Wall',
        '-Wextra',
        '-Wpedantic',
        '-fsyntax-only',
        '-x',
        config.language === 'c' ? 'c' : 'c++',
        '-',
      ];
      const result = spawnSync(config.compiler, args, {
        input: example.code,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024,
      });

      if (result.status !== 0) {
        const label = `${config.language.toUpperCase()} / ${lesson.title} / ${section.title} (section ${sectionIndex + 1})`;
        failures.push({ label, stderr: result.stderr || result.error?.message || 'Compiler exited unsuccessfully.' });
      }
    }
  }
}

console.log(`Audited ${lessonCount} lessons and checked ${checked} C/C++ lesson code examples with GCC/G++ in C17/C++17 syntax-only mode.`);
if (failures.length) {
  console.error(`Lesson example validation failed for ${failures.length} example(s):`);
  for (const failure of failures) {
    console.error(`\\nFAIL ${failure.label}\\n${failure.stderr}`);
  }
  process.exitCode = 1;
} else {
  console.log('Curriculum structure and all standalone lesson code examples passed validation.');
}
