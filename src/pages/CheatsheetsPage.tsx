import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Filter } from 'lucide-react';
import { cheatsheets } from '@/data/cheatsheets';
import { CodeBlock } from '@/components/CodeBlock';
import { Badge, Card, SectionHeading } from '@/components/ui';

export function CheatsheetsPage() {
  const [filter, setFilter] = useState<'all' | 'C' | 'C++'>('all');
  const filtered = filter === 'all' ? cheatsheets : cheatsheets.filter((c) => c.language === filter);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeading eyebrow="Cheatsheets" title="Quick reference for C and C++" subtitle="Essential syntax at a glance. Bookmark these for when you need a fast reminder." center />

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
            {f === 'all' ? 'All' : f}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filtered.map((sheet, si) => (
          <motion.div key={sheet.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: si * 0.1 }}>
            <Card hover={false} className="overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--color-border)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <BookOpen size={20} className="text-[var(--color-primary)]" />
                </div>
                <h2 className="font-semibold text-[var(--color-text)] flex-1">{sheet.title}</h2>
                <Badge variant="primary">{sheet.language}</Badge>
              </div>
              <div className="p-6 space-y-4">
                {sheet.items.map((item) => (
                  <div key={item.topic} className="grid sm:grid-cols-[140px_1fr] gap-3 items-start">
                    <div>
                      <div className="text-sm font-medium text-[var(--color-text)]">{item.topic}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{item.description}</div>
                    </div>
                    <div className="min-w-0">
                      <CodeBlock code={item.syntax} language={sheet.language === 'C' ? 'c' : 'cpp'} showLineNumbers={false} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
