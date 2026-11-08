import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Trophy, BookOpenCheck, Target } from 'lucide-react';
import { SectionHeading, Badge, Card } from '@/components/ui';
import { practiceQuestions, type PracticeCategory, type PracticeDifficulty } from '@/data/practiceQuestions';
import { getPracticeProgress, getPracticeQuizKey, savePracticeResult, type PracticeResult } from '@/utils/practiceProgress';

type CategoryFilter = PracticeCategory | 'All';
type DifficultyFilter = PracticeDifficulty | 'all';
const categories: CategoryFilter[] = ['All', 'C', 'C++', 'DSA'];
const difficulties: { label: string; value: DifficultyFilter }[] = [
  { label: 'All levels', value: 'all' }, { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' }, { label: 'Hard', value: 'hard' },
];

export function PracticePage() {
  const [category, setCategory] = useState<CategoryFilter>('All');
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [savedResult, setSavedResult] = useState<PracticeResult | null>(null);
  const questions = useMemo(() => practiceQuestions.filter((q) =>
    (category === 'All' || q.category === category) &&
    (difficulty === 'all' || q.difficulty === difficulty)
  ), [category, difficulty]);
  const quizKey = getPracticeQuizKey(category, difficulty);
  const history = getPracticeProgress()[quizKey];
  const score = questions.reduce((total, question) => total + (answers[question.id] === question.correctOptionId ? 1 : 0), 0);
  const answeredCount = questions.filter((question) => Boolean(answers[question.id])).length;
  const percentage = questions.length ? Math.round((score / questions.length) * 100) : 0;

  const resetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
    setSavedResult(null);
  };

  const submitQuiz = () => {
    if (submitted || answeredCount !== questions.length || questions.length === 0) return;
    setSavedResult(savePracticeResult(quizKey, score));
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] mb-6">
        <ArrowLeft size={16} /> Back to CraftC
      </Link>
      <SectionHeading eyebrow="Practice Center" title="Test what you’ve learned" subtitle="Topic-based C, C++ and DSA quizzes with clear explanations. Your best scores are saved on this device." center />

      <Card hover={false} className="mb-7">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">Choose your track</p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">Start with all topics or focus on one subject.</p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Practice category">
            {categories.map((item) => (
              <button key={item} type="button" onClick={() => { setCategory(item); resetQuiz(); }}
                aria-pressed={category === item}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${category === item ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-primary)]'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-[var(--color-border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-sm font-medium text-[var(--color-text-secondary)]">Difficulty</span>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((item) => (
              <button key={item.value} type="button" onClick={() => { setDifficulty(item.value); resetQuiz(); }}
                aria-pressed={difficulty === item.value}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${difficulty === item.value ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        <Card hover={false} className="p-4"><div className="flex items-center gap-2 text-[var(--color-text-muted)] text-xs"><BookOpenCheck size={15} /> Questions</div><p className="text-2xl font-bold text-[var(--color-text)] mt-2">{questions.length}</p></Card>
        <Card hover={false} className="p-4"><div className="flex items-center gap-2 text-[var(--color-text-muted)] text-xs"><Target size={15} /> Answered</div><p className="text-2xl font-bold text-[var(--color-text)] mt-2">{answeredCount}/{questions.length}</p></Card>
        <Card hover={false} className="p-4 col-span-2 sm:col-span-1"><div className="flex items-center gap-2 text-[var(--color-text-muted)] text-xs"><Trophy size={15} /> Best score</div><p className="text-2xl font-bold text-[var(--color-text)] mt-2">{history ? `${history.bestScore}%` : '—'}</p></Card>
      </div>

      {questions.length === 0 ? (
        <Card hover={false}><p className="text-center text-[var(--color-text-secondary)] py-8">No questions match this filter yet. Try another difficulty.</p></Card>
      ) : (
        <div className="space-y-4">
          {questions.map((question, index) => {
            const selected = answers[question.id];
            const correct = selected === question.correctOptionId;
            return (
              <Card key={question.id} hover={false} className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge>{question.category}</Badge><Badge>{question.topic}</Badge>
                  <Badge variant={question.difficulty === 'easy' ? 'success' : question.difficulty === 'medium' ? 'warning' : 'error'}>{question.difficulty}</Badge>
                  <span className="ml-auto text-xs text-[var(--color-text-muted)]">Question {index + 1} of {questions.length}</span>
                </div>
                <h2 className="font-semibold leading-relaxed text-[var(--color-text)]">{question.prompt}</h2>
                <fieldset className="mt-4 space-y-2" disabled={submitted}>
                  <legend className="sr-only">Answer options for question {index + 1}</legend>
                  {question.options.map((option) => (
                    <label key={option.id} className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${submitted && option.id === question.correctOptionId ? 'border-[var(--color-success)] bg-[var(--color-success)]/10' : selected === option.id ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10' : 'border-[var(--color-border)] hover:border-[var(--color-primary)]/50'}`}>
                      <input type="radio" name={question.id} value={option.id} checked={selected === option.id}
                        onChange={() => setAnswers((current) => ({ ...current, [question.id]: option.id }))}
                        className="mt-1 accent-[var(--color-primary)]" />
                      <span className="text-sm text-[var(--color-text-secondary)]">{option.text}</span>
                    </label>
                  ))}
                </fieldset>
                {submitted && (
                  <div className="mt-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] p-4" aria-live="polite">
                    <p className={`flex items-center gap-2 text-sm font-semibold ${correct ? 'text-[var(--color-success)]' : 'text-[var(--color-primary)]'}`}>
                      {correct ? <CheckCircle2 size={16} /> : <Target size={16} />}
                      {correct ? 'Correct answer' : 'Not quite — review this concept'}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-2">{question.explanation}</p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {!submitted ? (
        <div className="sticky bottom-3 z-10 mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-lg">
          <p className="text-sm text-[var(--color-text-secondary)]">{answeredCount} of {questions.length} answered. Complete every question to submit.</p>
          <button type="button" onClick={submitQuiz} disabled={answeredCount !== questions.length || questions.length === 0}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-primary-hover)]">
            Submit quiz <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <Card hover={false} className="mt-6 p-6 border-[var(--color-primary)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-20 h-20 rounded-full border-4 border-[var(--color-primary)] flex flex-col items-center justify-center shrink-0">
              <span className="text-xl font-bold text-[var(--color-text)]">{percentage}%</span>
              <span className="text-[10px] text-[var(--color-text-muted)]">score</span>
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-[var(--color-text)]">{percentage >= 80 ? 'Strong understanding' : percentage >= 50 ? 'Good progress — keep practising' : 'Review the explanations and try again'}</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">You answered {score} of {questions.length} correctly ({answeredCount} attempted). Accuracy: {percentage}%.</p>
              {savedResult && <p className="text-xs text-[var(--color-text-muted)] mt-2">Attempt {savedResult.attempts} · Best score {savedResult.bestScore}% · Saved on this device</p>}
            </div>
            <button type="button" onClick={resetQuiz} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-primary)]">
              <RotateCcw size={16} /> Retry quiz
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}
