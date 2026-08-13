import { motion } from 'framer-motion';
import { CheckCircle2, Map, Clock } from 'lucide-react';
import { roadmaps } from '@/data/roadmaps';
import { Badge, Card, SectionHeading } from '@/components/ui';

export function RoadmapsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeading eyebrow="Roadmaps" title="Your learning journey, visualized" subtitle="Follow these structured roadmaps to go from complete beginner to job-ready in C and C++." center />

      <div className="space-y-12">
        {roadmaps.map((rm, ri) => (
          <motion.div key={rm.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ri * 0.1 }}>
            <Card hover={false} className="overflow-hidden">
              <div className="p-6 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Map size={22} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[var(--color-text)]">{rm.title}</h2>
                    <p className="text-sm text-[var(--color-text-secondary)]">{rm.description}</p>
                  </div>
                  <Badge variant="primary" >{rm.language}</Badge>
                </div>
              </div>
              <div className="relative p-6">
                <div className="absolute left-[2.25rem] top-6 bottom-6 w-px bg-[var(--color-border)] hidden sm:block" />
                <div className="space-y-4">
                  {rm.phases.map((phase, pi) => (
                    <motion.div
                      key={phase.id}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pi * 0.08 }}
                      className="relative flex gap-4"
                    >
                      <div className="hidden sm:flex w-10 h-10 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-primary)] flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-sm font-bold text-[var(--color-primary)]">{pi + 1}</span>
                      </div>
                      <div className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 hover:border-[var(--color-primary)]/30 transition-colors">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <h3 className="font-semibold text-[var(--color-text)]">{phase.title}</h3>
                          <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                            <Clock size={12} /> {phase.duration}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-3">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.topics.map((topic) => (
                            <span key={topic} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg)] text-[var(--color-text-secondary)]">
                              <CheckCircle2 size={12} className="text-[var(--color-success)]" /> {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
