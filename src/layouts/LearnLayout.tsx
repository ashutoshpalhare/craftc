import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ChevronDown, Menu, X, Search,
  ArrowLeft, ArrowRight, CheckCircle2, Circle, Terminal, BookOpen
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SearchModal } from '@/components/SearchModal';
import { cCurriculum } from '@/data/cCurriculum';
import { cppCurriculum } from '@/data/cppCurriculum';
import type { Curriculum, LessonCategory } from '@/types';
import { getAllLessons, getPrevNextLessons } from '@/utils/curriculum';

function getCurriculum(id: string): Curriculum | null {
  if (id === 'c') return cCurriculum;
  if (id === 'cpp') return cppCurriculum;
  return null;
}

interface LearnLayoutProps {
  children: ReactNode;
}

export function LearnLayout({ children }: LearnLayoutProps) {
  const { courseId, lessonSlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const curriculum = courseId ? getCurriculum(courseId) : null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (curriculum && lessonSlug) {
      for (const cat of curriculum.categories) {
        if (cat.lessons.some((l) => l.slug === lessonSlug)) {
          setExpandedCategories((prev) => new Set(prev).add(cat.id));
          break;
        }
      }
    }
  }, [curriculum, lessonSlug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  if (!curriculum) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
        <p className="text-[var(--color-text-secondary)]">Course not found.</p>
      </div>
    );
  }

  const allLessons = getAllLessons(curriculum);
  const currentIndex = lessonSlug ? allLessons.findIndex((item) => item.lesson.slug === lessonSlug) : -1;
  const { prev, next } = lessonSlug ? getPrevNextLessons(curriculum, lessonSlug) : { prev: null, next: null };
  const progress = currentIndex >= 0 ? Math.round(((currentIndex + 1) / allLessons.length) * 100) : 0;

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <Navbar onSearchOpen={() => setSearchOpen(true)} />

      <div className="flex-1 max-w-[1600px] mx-auto w-full flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex flex-col w-72 xl:w-80 flex-shrink-0 border-r border-[var(--color-border)] sticky top-16 h-[calc(100vh-4rem)]">
          <SidebarContent
            curriculum={curriculum}
            courseId={courseId!}
            lessonSlug={lessonSlug}
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory}
            progress={progress}
            currentIndex={currentIndex}
          />
        </aside>

        {/* Sidebar - Mobile */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <motion.aside
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed left-0 top-0 bottom-0 z-50 w-80 bg-[var(--color-bg)] border-r border-[var(--color-border)] lg:hidden overflow-y-auto"
              >
                <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)] sticky top-0 bg-[var(--color-bg)] z-10">
                  <span className="font-semibold text-[var(--color-text)]">{curriculum.title}</span>
                  <button onClick={() => setSidebarOpen(false)} className="p-1 text-[var(--color-text-muted)]">
                    <X size={20} />
                  </button>
                </div>
                <SidebarContent
                  curriculum={curriculum}
                  courseId={courseId!}
                  lessonSlug={lessonSlug}
                  expandedCategories={expandedCategories}
                  toggleCategory={toggleCategory}
                  progress={progress}
                  currentIndex={currentIndex}
                />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Mobile bar */}
          <div className="lg:hidden sticky top-16 z-30 flex items-center gap-3 px-4 py-3 bg-[var(--color-bg)]/85 backdrop-blur-xl border-b border-[var(--color-border)]">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg hover:bg-[var(--color-surface)] text-[var(--color-text-secondary)]"
              aria-label="Open sidebar"
            >
              <Menu size={20} />
            </button>
            <span className="text-sm font-medium text-[var(--color-text)] truncate">
              {lessonSlug ? allLessons[currentIndex]?.lesson.title : curriculum.title}
            </span>
          </div>

          <div className="flex-1">{children}</div>

          {/* Prev/Next Navigation */}
          {lessonSlug && (prev || next) && (
            <div className="border-t border-[var(--color-border)] max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between gap-4">
                {prev ? (
                  <Link
                    to={`/learn/${courseId}/${prev.slug}`}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-all flex-1 max-w-[48%] group"
                  >
                    <ArrowLeft size={18} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] flex-shrink-0" />
                    <div className="min-w-0 text-left">
                      <div className="text-xs text-[var(--color-text-muted)]">Previous</div>
                      <div className="text-sm font-medium text-[var(--color-text)] truncate">{prev.title}</div>
                    </div>
                  </Link>
                ) : <div className="flex-1 max-w-[48%]" />}
                {next ? (
                  <Link
                    to={`/learn/${courseId}/${next.slug}`}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-all flex-1 max-w-[48%] group justify-end"
                  >
                    <div className="min-w-0 text-right">
                      <div className="text-xs text-[var(--color-text-muted)]">Next</div>
                      <div className="text-sm font-medium text-[var(--color-text)] truncate">{next.title}</div>
                    </div>
                    <ArrowRight size={18} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] flex-shrink-0" />
                  </Link>
                ) : <div className="flex-1 max-w-[48%]" />}
              </div>
            </div>
          )}

          <Footer />
        </div>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}

interface SidebarContentProps {
  curriculum: Curriculum;
  courseId: string;
  lessonSlug?: string;
  expandedCategories: Set<string>;
  toggleCategory: (id: string) => void;
  progress: number;
  currentIndex: number;
}

function SidebarContent({
  curriculum, courseId, lessonSlug, expandedCategories, toggleCategory, progress, currentIndex,
}: SidebarContentProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-[var(--color-border)] sticky top-0 bg-[var(--color-bg)] z-10">
        <Link to={`/learn/${courseId}`} className="block">
          <h2 className="font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
            {curriculum.title}
          </h2>
        </Link>
        <p className="text-xs text-[var(--color-text-muted)] mt-1">{curriculum.subtitle}</p>
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--color-surface-active)] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2 px-2" aria-label="Lesson navigation">
        {curriculum.categories.map((category, catIndex) => {
          const isExpanded = expandedCategories.has(category.id);
          const hasActiveLesson = category.lessons.some((l) => l.slug === lessonSlug);
          return (
            <div key={category.id} className="mb-1">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-[var(--color-text)] rounded-lg hover:bg-[var(--color-surface)] transition-colors"
                aria-expanded={isExpanded}
              >
                {isExpanded ? <ChevronDown size={16} className="text-[var(--color-text-muted)]" /> : <ChevronRight size={16} className="text-[var(--color-text-muted)]" />}
                <span className="text-left flex-1 truncate">{category.title}</span>
                <span className="text-xs text-[var(--color-text-muted)]">{category.lessons.length}</span>
              </button>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <ul className="pl-3 pr-1 py-1 space-y-0.5">
                      {category.lessons.map((lesson, li) => {
                        const globalIdx = curriculum.categories
                          .slice(0, catIndex)
                          .reduce((sum, c) => sum + c.lessons.length, 0) + li;
                        const isActive = lesson.slug === lessonSlug;
                        const isCompleted = currentIndex > globalIdx;
                        return (
                          <li key={lesson.id}>
                            <Link
                              to={`/learn/${courseId}/${lesson.slug}`}
                              className={`flex items-center gap-2.5 px-3 py-2 text-sm rounded-lg transition-all ${
                                isActive
                                  ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium border-l-2 border-[var(--color-primary)]'
                                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]'
                              }`}
                            >
                              {isCompleted ? (
                                <CheckCircle2 size={14} className="text-[var(--color-success)] flex-shrink-0" />
                              ) : (
                                <Circle size={14} className="text-[var(--color-border-light)] flex-shrink-0" />
                              )}
                              <span className="truncate flex-1">{lesson.title}</span>
                              <span className="text-xs text-[var(--color-text-muted)] flex-shrink-0">{lesson.duration}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
