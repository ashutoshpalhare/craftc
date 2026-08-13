import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={center ? 'text-center max-w-2xl mx-auto mb-12' : 'max-w-2xl mb-12'}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-[var(--color-text-secondary)] leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl ${hover ? 'transition-all duration-300 hover:border-[var(--color-primary)]/40 hover:shadow-lg hover:shadow-[var(--color-primary)]/5' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const styles = {
    default: 'bg-[var(--color-surface-active)] text-[var(--color-text-secondary)]',
    primary: 'bg-[var(--color-primary)]/15 text-[var(--color-primary)]',
    success: 'bg-[var(--color-success)]/15 text-[var(--color-success)]',
    warning: 'bg-[var(--color-warning)]/15 text-[var(--color-warning)]',
    error: 'bg-[var(--color-error)]/15 text-[var(--color-error)]',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
}
