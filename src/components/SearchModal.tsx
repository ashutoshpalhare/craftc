import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileCode, FolderGit2, HelpCircle, Map, BookOpen } from 'lucide-react';
import { cCurriculum } from '@/data/cCurriculum';
import { cppCurriculum } from '@/data/cppCurriculum';
import { interviewQuestions } from '@/data/interviewQuestions';
import { projects } from '@/data/projects';
import { cheatsheets } from '@/data/cheatsheets';
import { roadmaps } from '@/data/roadmaps';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'lesson' | 'project' | 'interview' | 'roadmap' | 'cheatsheet';
  path: string;
  icon: typeof FileCode;
}

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const allResults = useMemo<SearchResult[]>(() => {
    const results: SearchResult[] = [];
    [cCurriculum, cppCurriculum].forEach((curr) => {
      curr.categories.forEach((cat) => {
        cat.lessons.forEach((lesson) => {
          results.push({
            id: `${curr.id}-${lesson.id}`,
            title: lesson.title,
            description: lesson.description,
            type: 'lesson',
            path: `/learn/${curr.id}/${lesson.slug}`,
            icon: FileCode,
          });
        });
      });
    });
    projects.forEach((p) => {
      results.push({
        id: `project-${p.id}`,
        title: p.title,
        description: p.description,
        type: 'project',
        path: '/projects',
        icon: FolderGit2,
      });
    });
    interviewQuestions.forEach((q) => {
      results.push({
        id: `iq-${q.id}`,
        title: q.question,
        description: q.answer.slice(0, 80) + '...',
        type: 'interview',
        path: '/interview-prep',
        icon: HelpCircle,
      });
    });
    roadmaps.forEach((r) => {
      results.push({
        id: `roadmap-${r.id}`,
        title: r.title,
        description: r.description,
        type: 'roadmap',
        path: '/roadmaps',
        icon: Map,
      });
    });
    cheatsheets.forEach((c) => {
      results.push({
        id: `cheat-${c.id}`,
        title: c.title,
        description: `${c.items.length} quick reference entries`,
        type: 'cheatsheet',
        path: '/cheatsheets',
        icon: BookOpen,
      });
    });
    return results;
  }, []);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return allResults.slice(0, 8);
    const q = query.toLowerCase();
    return allResults
      .filter((r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q))
      .slice(0, 12);
  }, [query, allResults]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filteredResults.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && filteredResults[selectedIndex]) {
        navigate(filteredResults[selectedIndex].path);
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, filteredResults, selectedIndex, navigate, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4" role="dialog" aria-modal="true" aria-label="Search">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-[var(--color-border)]">
          <Search size={20} className="text-[var(--color-text-muted)]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, projects, interview questions..."
            className="flex-1 bg-transparent py-4 text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)]"
          />
          <button onClick={onClose} className="p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text)]" aria-label="Close search">
            <X size={20} />
          </button>
        </div>
        <div className="max-h-[50vh] overflow-y-auto">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-[var(--color-text-muted)]">No results found for "{query}"</div>
          ) : (
            filteredResults.map((result, idx) => {
              const Icon = result.icon;
              return (
                <button
                  key={result.id}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => {
                    navigate(result.path);
                    onClose();
                  }}
                  className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors ${
                    idx === selectedIndex ? 'bg-[var(--color-surface-active)]' : 'hover:bg-[var(--color-surface-hover)]'
                  }`}
                >
                  <Icon size={18} className="mt-0.5 text-[var(--color-primary)] flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-[var(--color-text)] truncate">{result.title}</div>
                    <div className="text-xs text-[var(--color-text-muted)] truncate">{result.description}</div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-[var(--color-bg)] text-[var(--color-text-muted)] capitalize flex-shrink-0">
                    {result.type}
                  </span>
                </button>
              );
            })
          )}
        </div>
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-[var(--color-bg)] border border-[var(--color-border)]">↑↓</kbd> navigate</span>
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-[var(--color-bg)] border border-[var(--color-border)]">↵</kbd> select</span>
          </div>
          <span>{filteredResults.length} results</span>
        </div>
      </div>
    </div>
  );
}
