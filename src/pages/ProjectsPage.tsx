import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Filter, FolderGit2, ListChecks, Terminal, ShieldCheck } from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge, Card, SectionHeading } from '@/components/ui';

type ProjectFilter = 'all' | 'C' | 'C++';

export function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const filtered = useMemo(
    () => filter === 'all' ? projects : projects.filter((project) => project.language === filter),
    [filter],
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeading
        eyebrow="Guided Project Lab"
        title="Build real applications"
        subtitle="Every project now includes requirements, implementation milestones, sample input/output, architecture guidance and a code-quality checklist. Treat these as build specifications, not copy-paste projects."
        center
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <Card className="p-4 flex items-center gap-3">
          <FolderGit2 className="text-[var(--color-primary)]" size={21} />
          <div><div className="text-xl font-bold text-[var(--color-text)]">{projects.length}</div><div className="text-xs text-[var(--color-text-muted)]">Project briefs</div></div>
        </Card>
        <Card className="p-4 flex items-center gap-3">
          <ListChecks className="text-[var(--color-primary)]" size={21} />
          <div><div className="text-xl font-bold text-[var(--color-text)]">3 levels</div><div className="text-xs text-[var(--color-text-muted)]">Beginner to advanced</div></div>
        </Card>
        <Card className="p-4 flex items-center gap-3">
          <ShieldCheck className="text-[var(--color-primary)]" size={21} />
          <div><div className="text-xl font-bold text-[var(--color-text)]">Quality first</div><div className="text-xs text-[var(--color-text-muted)]">Validation and test criteria</div></div>
        </Card>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-8" aria-label="Filter projects by language">
        <Filter size={16} className="text-[var(--color-text-muted)]" />
        {(['all', 'C', 'C++'] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
              filter === item
                ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
            }`}
          >
            {item === 'all' ? 'All Projects' : item}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {filtered.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.04, 0.2) }}
          >
            <Card className="p-5 sm:p-6 h-full flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <FolderGit2 size={22} className="text-[var(--color-primary)]" />
                </div>
                <div className="flex flex-wrap justify-end gap-2">
                  <Badge variant={project.language === 'C' ? 'primary' : 'default'}>{project.language}</Badge>
                  <Badge variant={project.difficulty === 'beginner' ? 'success' : project.difficulty === 'intermediate' ? 'warning' : 'error'}>
                    {project.difficulty}
                  </Badge>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-[var(--color-text)]">{project.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.topics.map((topic) => (
                  <span key={topic} className="text-xs px-2 py-1 rounded bg-[var(--color-bg)] text-[var(--color-text-muted)]">{topic}</span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mt-4">
                <Clock size={13} /> Estimated build time: {project.estimatedTime}
              </div>

              <details className="group mt-5 border-t border-[var(--color-border)] pt-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-3 text-sm font-semibold text-[var(--color-primary)]">
                  Open complete project brief
                  <span className="transition-transform group-open:rotate-180" aria-hidden="true">⌄</span>
                </summary>

                <div className="space-y-5 mt-5">
                  <section>
                    <h4 className="text-sm font-semibold text-[var(--color-text)] mb-2">Requirements</h4>
                    <ul className="space-y-1.5">
                      {project.requirements.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                          <span className="text-[var(--color-primary)]">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold text-[var(--color-text)] mb-2">Implementation milestones</h4>
                    <ol className="space-y-2">
                      {project.milestones.map((item, step) => (
                        <li key={item} className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                          <span className="w-6 h-6 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-xs flex-shrink-0">{step + 1}</span>
                          <span className="pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="grid sm:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-[var(--color-bg)] p-3 min-w-0">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)] mb-2 flex items-center gap-2"><Terminal size={13} /> Sample input</h4>
                      <pre className="text-xs font-mono text-[var(--color-text-secondary)] whitespace-pre-wrap break-words">{project.sampleInput}</pre>
                    </div>
                    <div className="rounded-lg bg-[var(--color-bg)] p-3 min-w-0">
                      <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)] mb-2">Expected behavior</h4>
                      <pre className="text-xs font-mono text-[var(--color-text-secondary)] whitespace-pre-wrap break-words">{project.expectedOutput}</pre>
                    </div>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold text-[var(--color-text)] mb-2">Suggested source architecture</h4>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{project.architecture}</p>
                  </section>

                  <section>
                    <h4 className="text-sm font-semibold text-[var(--color-text)] mb-2">Code-quality acceptance checks</h4>
                    <ul className="space-y-1.5">
                      {project.qualityChecks.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                          <ShieldCheck size={15} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />{item}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </details>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
