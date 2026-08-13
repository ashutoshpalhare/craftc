import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { cCurriculum } from '@/data/cCurriculum';
import { cppCurriculum } from '@/data/cppCurriculum';
import type { Curriculum } from '@/types';
import { getTotalLessons } from '@/utils/curriculum';
import { Badge, Card } from '@/components/ui';

function getCurriculum(id: string): Curriculum | null {
  if (id === 'c') return cCurriculum;
  if (id === 'cpp') return cppCurriculum;
  return null;
}

export function CoursePage() {
  const { courseId } = useParams();
  const curriculum = courseId ? getCurriculum(courseId) : null;

  if (!curriculum) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[var(--color-text)]">Course not found</h1>
        <Link to="/" className="mt-4 inline-block text-[var(--color-primary)]">Go home</Link>
      </div>
    );
  }

  const totalLessons = getTotalLessons(curriculum);
  const firstLesson = curriculum.categories[0]?.lessons[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <nav className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] mb-6">
          <Link to="/" className="hover:text-[var(--color-text)]">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[var(--color-text)]">{curriculum.title}</span>
        </nav>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20">
            <GraduationCap size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)]">{curriculum.title}</h1>
            <p className="text-[var(--color-text-secondary)] mt-1">{curriculum.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 text-sm text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1.5"><BookOpen size={16} /> {curriculum.categories.length} categories</span>
          <span className="flex items-center gap-1.5"><BookOpen size={16} /> {totalLessons} lessons</span>
          <span className="flex items-center gap-1.5"><Clock size={16} /> Self-paced</span>
        </div>

        {firstLesson && (
          <Link
            to={`/learn/${courseId}/${firstLesson.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-hover)] transition-all mb-10"
          >
            Start First Lesson <ArrowRight size={18} />
          </Link>
        )}
      </motion.div>

      <div className="space-y-6">
        {curriculum.categories.map((category, ci) => (
          <motion.div key={category.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.05 }}>
            <Card hover={false} className="overflow-hidden">
              <div className="px-5 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[var(--color-text-muted)] w-6">{String(ci + 1).padStart(2, '0')}</span>
                  <h2 className="font-semibold text-[var(--color-text)]">{category.title}</h2>
                </div>
                <Badge>{category.lessons.length} lessons</Badge>
              </div>
              <ul className="divide-y divide-[var(--color-border)]">
                {category.lessons.map((lesson, li) => (
                  <li key={lesson.id}>
                    <Link
                      to={`/learn/${courseId}/${lesson.slug}`}
                      className="flex items-center gap-4 px-5 py-3.5 hover:bg-[var(--color-surface-hover)] transition-colors group"
                    >
                      <span className="text-xs font-mono text-[var(--color-text-muted)] w-6">{String(li + 1).padStart(2, '0')}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{lesson.title}</div>
                        <div className="text-xs text-[var(--color-text-muted)] truncate">{lesson.description}</div>
                      </div>
                      <Badge variant={lesson.difficulty === 'beginner' ? 'success' : lesson.difficulty === 'intermediate' ? 'warning' : 'error'}>
                        {lesson.difficulty}
                      </Badge>
                      <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 flex-shrink-0">
                        <Clock size={12} /> {lesson.duration}
                      </span>
                      <ArrowRight size={16} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
