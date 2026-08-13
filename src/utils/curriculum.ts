import type { Curriculum, Lesson, LessonCategory } from '@/types';

export function getAllLessons(curriculum: Curriculum): { lesson: Lesson; category: LessonCategory; categoryIndex: number; lessonIndex: number }[] {
  const all: { lesson: Lesson; category: LessonCategory; categoryIndex: number; lessonIndex: number }[] = [];
  curriculum.categories.forEach((category, ci) => {
    category.lessons.forEach((lesson, li) => {
      all.push({ lesson, category, categoryIndex: ci, lessonIndex: li });
    });
  });
  return all;
}

export function findLessonBySlug(curriculum: Curriculum, slug: string): { lesson: Lesson; category: LessonCategory; categoryIndex: number; lessonIndex: number } | null {
  for (let ci = 0; ci < curriculum.categories.length; ci++) {
    const category = curriculum.categories[ci];
    for (let li = 0; li < category.lessons.length; li++) {
      if (category.lessons[li].slug === slug) {
        return { lesson: category.lessons[li], category, categoryIndex: ci, lessonIndex: li };
      }
    }
  }
  return null;
}

export function getPrevNextLessons(curriculum: Curriculum, slug: string): { prev: Lesson | null; next: Lesson | null } {
  const all = getAllLessons(curriculum);
  const idx = all.findIndex((item) => item.lesson.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? all[idx - 1].lesson : null,
    next: idx < all.length - 1 ? all[idx + 1].lesson : null,
  };
}

export function getTotalLessons(curriculum: Curriculum): number {
  return curriculum.categories.reduce((sum, cat) => sum + cat.lessons.length, 0);
}
