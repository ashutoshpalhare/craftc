import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { interviewQuestions } from '@/data/interviewQuestions';
import { Badge, Card, SectionHeading } from '@/components/ui';

const categories = ['All', 'C', 'C++', 'DSA', 'General'] as const;

export function InterviewPrepPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = category === 'All' ? interviewQuestions : interviewQuestions.filter((q) => q.category === category);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeading eyebrow="Interview Prep" title="Crack your next C/C++ interview" subtitle="Curated interview questions with clear answers. Practice these until you can explain them confidently." center />

      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              category === c
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] border border-[var(--color-border)]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((q, i) => (
          <motion.div key={q.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
            <Card hover={false} className="overflow-hidden">
              <button
                onClick={() => setOpenId(openId === q.id ? null : q.id)}
                className="w-full flex items-start gap-3 px-5 py-4 text-left"
              >
                <HelpCircle size={18} className={`mt-0.5 flex-shrink-0 transition-colors ${openId === q.id ? 'text-[var(--color-primary)]' : 'text-[var(--color-accent)]'}`} />
                <span className="flex-1 text-sm font-medium text-[var(--color-text)]">{q.question}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Badge variant={q.difficulty === 'easy' ? 'success' : q.difficulty === 'medium' ? 'warning' : 'error'}>{q.difficulty}</Badge>
                  <Badge>{q.category}</Badge>
                  <ChevronDown size={16} className={`text-[var(--color-text-muted)] transition-transform ${openId === q.id ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openId === q.id ? 'auto' : 0, opacity: openId === q.id ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 pl-12 text-sm text-[var(--color-text-secondary)] leading-relaxed">{q.answer}</p>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
