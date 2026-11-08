const STORAGE_PREFIX = 'craftc:completed-lessons:v1:';
const LAST_VISITED_PREFIX = 'craftc:last-visited:v1:';

export function getCompletedLessons(courseId: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${courseId}`);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? [...new Set(parsed.filter((slug): slug is string => typeof slug === 'string'))]
      : [];
  } catch {
    return [];
  }
}

export function saveCompletedLessons(courseId: string, slugs: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${courseId}`, JSON.stringify([...new Set(slugs)]));
  } catch {
    // Progress remains usable for this session even if browser storage is unavailable.
  }
}

export function getLastVisitedLesson(courseId: string): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(`${LAST_VISITED_PREFIX}${courseId}`);
    return value && value.trim() ? value : null;
  } catch {
    return null;
  }
}

export function saveLastVisitedLesson(courseId: string, lessonSlug: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(`${LAST_VISITED_PREFIX}${courseId}`, lessonSlug);
  } catch {
    // Resume links are an enhancement; navigation remains available without storage.
  }
}
