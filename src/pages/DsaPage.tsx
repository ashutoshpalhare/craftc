import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BrainCircuit, CheckCircle2, Code2, Layers3 } from 'lucide-react';
import { dsaProblems, dsaTopics } from '@/data/dsa';
import { CodeBlock } from '@/components/CodeBlock';
import { Badge, Card, SectionHeading } from '@/components/ui';

type LevelFilter = 'All' | 'Foundation' | 'Core' | 'Advanced';

export function DsaPage() {
  const [level, setLevel] = useState<LevelFilter>('All');
  const [showSolutions, setShowSolutions] = useState<string[]>([]);
  const topics = useMemo(
    () => level === 'All' ? dsaTopics : dsaTopics.filter((topic) => topic.level === level),
    [level],
  );

  const toggleSolution = (id: string) => {
    setShowSolutions((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeading
        eyebrow="Data Structures & Algorithms"
        title="Learn to think in algorithms"
        subtitle="A practical C++17 DSA path: understand the data structure, know its trade-offs, analyze complexity, then solve progressively harder problems."
        center
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: BookOpen, value: String(dsaTopics.length), label: 'Core topics' },
          { icon: BrainCircuit, value: String(dsaProblems.length), label: 'Solved problems' },
          { icon: Layers3, value: '3 levels', label: 'Foundation to advanced' },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Icon size={21} className="text-[var(--color-primary)]" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--color-text)]">{item.value}</div>
                <div className="text-sm text-[var(--color-text-muted)]">{item.label}</div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-5 sm:p-6 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-text)]">Recommended learning order</h2>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Do not memorize complexity tables in isolation. Implement the operations and explain why the costs differ.</p>
          </div>
          <Badge variant="primary">C++17</Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            ['01', 'Foundation', 'Complexity, arrays, strings'],
            ['02', 'Core structures', 'Lists, stacks, queues, hashing, search, sorting, recursion'],
            ['03', 'Advanced patterns', 'Trees, heaps, graphs, greedy, dynamic programming'],
          ].map(([number, title, description]) => (
            <div key={number} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
              <div className="text-xs font-mono text-[var(--color-primary)] mb-2">{number}</div>
              <h3 className="font-semibold text-[var(--color-text)]">{title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">{description}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        {(['All', 'Foundation', 'Core', 'Advanced'] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLevel(item)}
            aria-pressed={level === item}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              level === item
                ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {topics.map((topic, index) => (
          <Card key={topic.id} className="p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[var(--color-text-muted)]">{String(index + 1).padStart(2, '0')}</span>
              <Badge variant={topic.level === 'Foundation' ? 'success' : topic.level === 'Core' ? 'warning' : 'primary'}>{topic.level}</Badge>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">{topic.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mt-2">{topic.explanation}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg bg-[var(--color-bg)] p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)] mb-2">When to use it</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">{topic.whenToUse}</p>
              </div>
              <div className="rounded-lg bg-[var(--color-bg)] p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)] mb-2">Complexity guide</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">{topic.complexity}</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-[var(--color-text)] mb-2">Common mistakes</h4>
              <ul className="space-y-1.5">
                {topic.pitfalls.map((pitfall) => (
                  <li key={pitfall} className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-accent)]">•</span>{pitfall}
                  </li>
                ))}
              </ul>
            </div>
            <CodeBlock code={topic.example} language="cpp" filename={`${topic.id}.cpp`} />
          </Card>
        ))}
      </div>

      <div className="mt-14 mb-6">
        <SectionHeading eyebrow="Practice with explanations" title="Solved DSA problems" subtitle="Try the problem first. Reveal the approach and reference implementation only after you have written your own attempt." />
      </div>
      <div className="space-y-4">
        {dsaProblems.map((problem, index) => {
          const visible = showSolutions.includes(problem.id);
          return (
            <Card key={problem.id} className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-mono text-[var(--color-text-muted)]">Problem {index + 1}</span>
                <Badge variant={problem.difficulty === 'Easy' ? 'success' : problem.difficulty === 'Medium' ? 'warning' : 'error'}>{problem.difficulty}</Badge>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text)]">{problem.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2">{problem.prompt}</p>
              <button
                type="button"
                onClick={() => toggleSolution(problem.id)}
                aria-expanded={visible}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border)] text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-bg)]"
              >
                <Code2 size={16} /> {visible ? 'Hide solution' : 'Show approach & solution'}
              </button>
              {visible && (
                <div className="mt-4 border-t border-[var(--color-border)] pt-4">
                  <h4 className="text-sm font-semibold text-[var(--color-text)]">Approach</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">{problem.approach}</p>
                  <p className="text-sm font-medium text-[var(--color-primary)] mt-3">Complexity: {problem.complexity}</p>
                  <CodeBlock code={problem.solution} language="cpp" filename={`${problem.id}.cpp`} />
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <Card className="p-6 mt-12">
        <div className="flex items-start gap-3">
          <CheckCircle2 size={22} className="text-[var(--color-success)] mt-0.5" />
          <div>
            <h2 className="font-semibold text-[var(--color-text)]">A reliable practice loop</h2>
            <ol className="mt-2 space-y-1.5 text-sm text-[var(--color-text-secondary)] list-decimal pl-5">
              <li>Restate the input, output and constraints before coding.</li>
              <li>Write a straightforward correct solution, then identify its bottleneck.</li>
              <li>Test empty, smallest, duplicate, sorted, reverse-sorted and boundary inputs where relevant.</li>
              <li>Explain time and auxiliary-space complexity in plain language.</li>
              <li>Compile with warnings enabled: <code className="font-mono">g++ -std=c++17 -Wall -Wextra -Wpedantic main.cpp -o main</code>.</li>
            </ol>
            <Link to="/interview-prep" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]">
              Continue to interview preparation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
