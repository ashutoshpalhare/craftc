import { Link } from 'react-router-dom';
import { Terminal, ArrowRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] items-center justify-center mb-6 shadow-lg shadow-[var(--color-primary)]/20">
          <Terminal size={32} className="text-white" />
        </div>
        <h1 className="text-5xl font-extrabold text-[var(--color-text)] mb-3">404</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">This page does not exist or was moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-hover)] transition-all">
          Back to Home <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
