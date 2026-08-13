export interface LessonSection {
  type:
    | 'introduction'
    | 'theory'
    | 'syntax'
    | 'example'
    | 'output'
    | 'explanation'
    | 'diagram'
    | 'notes'
    | 'tips'
    | 'bestPractices'
    | 'commonMistakes'
    | 'realWorld'
    | 'interviewQuestions'
    | 'practice'
    | 'assignment'
    | 'summary';
  title: string;
  content?: string;
  code?: { filename?: string; language: string; code: string; output?: string };
  items?: string[];
  questions?: { q: string; a: string }[];
}

export interface Lesson {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  sections: LessonSection[];
}

export interface LessonCategory {
  id: string;
  title: string;
  icon: string;
  lessons: Lesson[];
}

export interface Curriculum {
  id: string;
  title: string;
  subtitle: string;
  language: 'c' | 'cpp';
  categories: LessonCategory[];
}
