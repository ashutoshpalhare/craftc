import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Clock, Filter } from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge, Card, SectionHeading } from '@/components/ui';

export function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'C' | 'C++'>('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.language === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeading eyebrow="Projects" title="Build real applications" subtitle="Apply what you learn by building these projects. Each one targets specific skills and looks great on your portfolio." center />

      <div className="flex items-center justify-center gap-2 mb-8">
        <Filter size={16} className="text-[var(--color-text-muted)]" />
        {(['all', 'C', 'C++'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === f
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
            }`}
          >
            {f === 'all' ? 'All Projects' : f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <Card className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <FolderGit2 size={22} className="text-[var(--color-primary)]" />
                </div>
                <div className="flex gap-2">
                  <Badge variant={p.language === 'C' ? 'primary' : 'default'}>{p.language}</Badge>
                  <Badge variant={p.difficulty === 'beginner' ? 'success' : p.difficulty === 'intermediate' ? 'warning' : 'error'}>
                    {p.difficulty}
                  </Badge>
                </div>
              </div>
              <h3 className="font-semibold text-[var(--color-text)] mb-2">{p.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.topics.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg)] text-[var(--color-text-muted)]">{t}</span>
                ))}
              </div>
              <div className="pt-3 border-t border-[var(--color-border)] flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Clock size={13} /> {p.estimatedTime}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
