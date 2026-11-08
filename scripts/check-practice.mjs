import { readFile } from 'node:fs/promises';

const source = await readFile('src/data/practiceQuestions.ts', 'utf8');
const { outputText } = (await import('typescript')).transpileModule(source, {
  compilerOptions: { module: 99, target: 9 },
});
const moduleUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`;
const { practiceQuestions } = await import(moduleUrl);
const failures = [];
const ids = new Set();
const categories = new Set(['C', 'C++', 'DSA']);
for (const question of practiceQuestions) {
  if (ids.has(question.id)) failures.push(`Duplicate question id: ${question.id}`);
  ids.add(question.id);
  if (!categories.has(question.category)) failures.push(`Invalid category: ${question.id}`);
  if (!question.topic?.trim() || !question.prompt?.trim() || !question.explanation?.trim()) failures.push(`Missing question content: ${question.id}`);
  if (!Array.isArray(question.options) || question.options.length !== 4) failures.push(`Expected exactly four options: ${question.id}`);
  const optionIds = new Set((question.options ?? []).map((option) => option.id));
  if (optionIds.size !== 4) failures.push(`Option ids must be unique: ${question.id}`);
  if (!optionIds.has(question.correctOptionId)) failures.push(`Correct option does not exist: ${question.id}`);
}
for (const category of categories) {
  const count = practiceQuestions.filter((question) => question.category === category).length;
  if (count < 5) failures.push(`Expected at least five questions for ${category}; found ${count}`);
}
if (failures.length) {
  console.error(['Practice question audit failed:', ...failures.map((failure) => `- ${failure}`)].join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Practice question audit passed: ${practiceQuestions.length} unique questions across C, C++ and DSA; four options and valid explanations per question.`);
}
