const STORAGE_PREFIX = 'craftc:completed-lessons:v1:';

export function getCompletedLessons(courseId: string): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(`${STORAGE_PREFIX}${courseId}`);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((slug): slug is string => typeof slug === 'string')
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
