import type { LessonSection } from '@/types';
import { CodeBlock } from './CodeBlock';
import {
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Target,
  Briefcase,
  HelpCircle,
  PenTool,
  ClipboardList,
  CheckCircle2,
  Info,
  Code2,
  Terminal,
  GraduationCap,
  StickyNote,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';

const sectionConfig: Record<LessonSection['type'], { icon: typeof BookOpen; label: string; color: string }> = {
  introduction: { icon: BookOpen, label: 'Introduction', color: 'text-[var(--color-primary)]' },
  theory: { icon: Info, label: 'Theory', color: 'text-blue-400' },
  syntax: { icon: Code2, label: 'Syntax', color: 'text-[var(--color-accent)]' },
  example: { icon: Terminal, label: 'Example', color: 'text-[var(--color-primary)]' },
  output: { icon: Terminal, label: 'Output', color: 'text-[var(--color-success)]' },
  explanation: { icon: GraduationCap, label: 'Explanation', color: 'text-[var(--color-accent)]' },
  diagram: { icon: BookOpen, label: 'Diagram', color: 'text-purple-400' },
  notes: { icon: StickyNote, label: 'Notes', color: 'text-[var(--color-text-secondary)]' },
  tips: { icon: Lightbulb, label: 'Tips', color: 'text-[var(--color-warning)]' },
  bestPractices: { icon: Star, label: 'Best Practices', color: 'text-[var(--color-success)]' },
  commonMistakes: { icon: AlertTriangle, label: 'Common Mistakes', color: 'text-[var(--color-error)]' },
  realWorld: { icon: Briefcase, label: 'Real World Usage', color: 'text-[var(--color-primary)]' },
  interviewQuestions: { icon: HelpCircle, label: 'Interview Questions', color: 'text-[var(--color-accent)]' },
  practice: { icon: PenTool, label: 'Practice Questions', color: 'text-[var(--color-primary)]' },
  assignment: { icon: ClipboardList, label: 'Assignment', color: 'text-[var(--color-warning)]' },
  summary: { icon: CheckCircle2, label: 'Summary', color: 'text-[var(--color-success)]' },
};

export function LessonSectionRender({ section, index }: { section: LessonSection; index: number }) {
  const config = sectionConfig[section.type];
  const Icon = config.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.15) }}
      className="mb-8"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <Icon size={20} className={config.color} />
        <h3 className="text-lg font-semibold text-[var(--color-text)]">{section.title}</h3>
      </div>

      <div className="pl-1">
        {section.content && (
          <p className="text-[var(--color-text-secondary)] leading-relaxed">{section.content}</p>
        )}


{section.link && (
  <a
    href={section.link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2.5 mt-4 px-4 py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
  >
    {section.link.icon === 'vscode' && (
      <img
        src="/VSCODE.webp"
        alt=""
        className="w-5 h-5"
      />
    )}

    <span>{section.link.label}</span>
  </a>
)}


        {section.items && section.items.length > 0 && (
          <ul className="space-y-2 mt-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[var(--color-text-secondary)] leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {section.code && (
          <div className="mt-3">
            <CodeBlock
              code={section.code.code}
              language={section.code.language}
              filename={section.code.filename}
            />
          </div>
        )}

        {section.questions && section.questions.length > 0 && (
          <div className="space-y-3 mt-3">
            {section.questions.map((qa, i) => (
              <details key={i} className="group bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden">
                <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer text-[var(--color-text)] font-medium hover:bg-[var(--color-surface-hover)] transition-colors list-none">
                  <HelpCircle size={16} className="text-[var(--color-accent)] flex-shrink-0" />
                  <span className="text-sm">{qa.q}</span>
                </summary>
                <div className="px-4 pb-3 pl-12 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {qa.a}
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
