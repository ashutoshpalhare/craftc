import type { PracticeCategory, PracticeDifficulty } from '@/data/practiceQuestions';

export interface PracticeResult {
  attempts: number;
  bestScore: number;
  lastScore: number;
  lastAttemptAt: string;
}

type PracticeStore = Record<string, PracticeResult>;
const STORAGE_KEY = 'craftc-practice-progress-v1';

export function getPracticeProgress(): PracticeStore {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed as PracticeStore : {};
  } catch {
    return {};
  }
}

export function getPracticeQuizKey(category: PracticeCategory | 'All', difficulty: PracticeDifficulty | 'all'): string {
  return `${category.toLowerCase()}-${difficulty}`;
}

export function savePracticeResult(key: string, score: number): PracticeResult {
  const store = getPracticeProgress();
  const previous = store[key];
  const next: PracticeResult = {
    attempts: (previous?.attempts ?? 0) + 1,
    bestScore: Math.max(previous?.bestScore ?? 0, score),
    lastScore: score,
    lastAttemptAt: new Date().toISOString(),
  };
  store[key] = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // Quiz results remain visible for this session when storage is unavailable.
  }
  return next;
}
