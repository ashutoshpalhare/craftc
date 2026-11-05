import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const source = readFileSync(new URL('../src/data/dsa.ts', import.meta.url), 'utf8');
const solutions = [...source.matchAll(/solution:\s*`([\s\S]*?)`/g)];

if (solutions.length === 0) {
  console.error('No DSA reference solutions were found.');
  process.exit(1);
}

const compiler = spawnSync('g++', ['--version'], { encoding: 'utf8' });
if (compiler.error || compiler.status !== 0) {
  console.error('g++ is required to validate the DSA C++17 reference solutions.');
  process.exit(1);
}

let failed = 0;
solutions.forEach((match, index) => {
  const code = match[1];
  const result = spawnSync(
    'g++',
    ['-std=c++17', '-Wall', '-Wextra', '-Wpedantic', '-fsyntax-only', '-x', 'c++', '-'],
    { input: code, encoding: 'utf8' },
  );

  if (result.status === 0) {
    console.log(`PASS DSA solution ${index + 1}`);
  } else {
    failed += 1;
    console.error(`FAIL DSA solution ${index + 1}`);
    if (result.stderr) console.error(result.stderr);
  }
});

console.log(`Validated ${solutions.length} DSA reference solutions; ${failed} failed.`);
if (failed > 0) process.exitCode = 1;
