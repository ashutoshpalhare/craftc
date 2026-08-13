# CraftC — Master C & C++ From Zero to Job Ready

CraftC is a complete, free learning platform for C and C++. It takes you from absolute beginner to job-ready through structured lessons, runnable code examples, visual roadmaps, real-world projects, interview preparation, and quick-reference cheatsheets — all in a fast, modern, responsive interface with light/dark themes.

![Built with React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Pages](#key-pages)
- [Data Model](#data-model)
- [Theme System](#theme-system)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

CraftC is not just another tutorial site. It is a full learning platform built around a clear philosophy:

> **Every learner should always know what to learn next, why it matters, and how to apply it.**

The curriculum is organised into structured lessons that follow a consistent format — introduction, theory, syntax, code example, expected output, explanation, notes, tips, and practice exercises. Each lesson is part of a larger roadmap with visual phases, so you never lose sight of the big picture.

### What's inside

| Resource | Count | Details |
|----------|-------|---------|
| **Lessons** | 40+ | Across C and C++ curricula, grouped by category |
| **Projects** | 12 | Beginner to advanced, in both C and C++ |
| **Interview Questions** | 27+ | Categorized by C, C++, DSA, and General |
| **Roadmaps** | 2 | Phase-by-phase roadmaps for C and C++ |
| **Cheatsheets** | 2 | Quick syntax reference for C and C++ |
| **Downloads** | 6 | Editors, compilers, and dev tools |

---

## Features

### Structured Curriculum

Every lesson follows a consistent, repeatable structure:

1. **Introduction** — what the concept is and why it matters
2. **Theory** — the underlying mechanics
3. **Syntax** — the formal grammar
4. **Example** — runnable code with a copy button
5. **Output** — what the code prints
6. **Explanation** — line-by-line walkthrough
7. **Notes & Tips** — gotchas and best practices
8. **Common Mistakes** — what beginners get wrong
9. **Interview Questions** — what employers ask about this topic
10. **Practice / Assignment** — exercises to reinforce learning
11. **Summary** — key takeaways

### Syntax Highlighting

Code blocks are rendered with [Shiki](https://shiki.style) using the GitHub Dark theme, with language badges, copy-to-clipboard buttons, and proper monospace formatting. The highlighter is lazy-loaded so it never blocks initial page render.

### Global Search

A command-palette-style search modal (`Ctrl+K` / `Cmd+K`) lets you instantly search across all lessons, projects, interview questions, roadmaps, and cheatsheets. Results are grouped by category with icons and keyboard navigation.

### Visual Roadmaps

Two complete roadmaps (C and C++) break the learning journey into phases with topics and estimated durations — from Foundations through Projects & Interview Prep.

### Project Library

12 real-world projects ranging from a beginner Calculator to an advanced HTTP Server and Snake Game. Each project lists its language, difficulty, topics covered, and estimated build time.

### Interview Preparation

Curated interview questions across four categories — C, C++, DSA, and General programming — each with a concise answer. Filterable by category and difficulty.

### Cheatsheets

Two quick-reference cheatsheets (C and C++) covering the most common syntax patterns — from Hello World to smart pointers and lambdas.

### Dark / Light Theme

A persistent theme toggle with smooth transitions. The entire color system is built on CSS custom properties, so theme switching is instant and flash-free.

### Responsive Design

Fully responsive from mobile to desktop with an 8px spacing system, fluid typography, and adaptive layouts throughout.

### Performance

- **Lazy-loaded routes** — each page is code-split and loaded on demand
- **Lazy-loaded syntax highlighter** — Shiki loads only when a code block is first rendered
- **CSS-based theming** — no JavaScript theme runtime; all colors are CSS variables

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev) | 19 | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 6 | Type safety |
| [Vite](https://vitejs.dev) | 8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Styling (CSS-based config, no `tailwind.config.js`) |
| [React Router](https://reactrouter.com) | 7 | Client-side routing |
| [Framer Motion](https://www.framer.com/motion) | 13 | Animations & micro-interactions |
| [Shiki](https://shiki.style) | 4 | Syntax highlighting |
| [Lucide React](https://lucide.dev) | — | Icon library |
| [Supabase](https://supabase.com) | — | Backend (auth, database, edge functions) |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- A modern browser

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/craftc.git
cd craftc

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Build for Production

```bash
# Type-check and build
npm run build

# Preview the production build locally
npm run preview
```

The built files are output to `dist/`.

---

## Project Structure

```
craftc/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CodeBlock.tsx    # Shiki-powered syntax-highlighted code block
│   │   ├── Footer.tsx       # Site footer with social links
│   │   ├── LessonSectionRender.tsx  # Renders individual lesson sections
│   │   ├── Navbar.tsx       # Top navigation with theme toggle & search
│   │   ├── SearchModal.tsx  # Command-palette global search (Ctrl+K)
│   │   ├── ThemeToggle.tsx  # Dark/light theme switcher
│   │   └── ui.tsx           # Shared primitives (Card, Badge, SectionHeading, etc.)
│   ├── data/                # All content data (curriculum, projects, etc.)
│   │   ├── cCurriculum.ts   # Full C programming curriculum
│   │   ├── cppCurriculum.ts # Full C++ programming curriculum
│   │   ├── roadmaps.ts      # Learning roadmaps for C and C++
│   │   ├── projects.ts      # Project library (12 projects)
│   │   ├── interviewQuestions.ts  # Interview Q&A bank
│   │   ├── cheatsheets.ts   # Syntax cheatsheets for C and C++
│   │   └── downloads.ts     # Dev tool download links
│   ├── hooks/
│   │   └── useTheme.ts      # Theme management hook
│   ├── layouts/
│   │   ├── MainLayout.tsx   # Standard site layout (navbar + footer)
│   │   └── LearnLayout.tsx  # LMS layout with course sidebar
│   ├── pages/
│   │   ├── HomePage.tsx     # Landing page with all sections
│   │   ├── CoursePage.tsx   # Course overview (/learn/:courseId)
│   │   ├── LessonPage.tsx   # Individual lesson view
│   │   ├── RoadmapsPage.tsx # Visual roadmaps
│   │   ├── ProjectsPage.tsx # Project library
│   │   ├── InterviewPrepPage.tsx  # Interview questions
│   │   ├── CheatsheetsPage.tsx    # Quick reference
│   │   ├── DownloadsPage.tsx      # Dev tools
│   │   ├── AboutPage.tsx    # About the project
│   │   └── NotFoundPage.tsx # 404
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces for all data models
│   ├── utils/
│   │   └── curriculum.ts    # Curriculum helper functions
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind import + theme variables
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Key Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, features, learning path, roadmap preview, projects showcase, interview teaser, testimonials, FAQ, and CTA |
| `/learn/:courseId` | Course | Course overview with a sidebar listing all categories and lessons |
| `/learn/:courseId/:lessonSlug` | Lesson | Full lesson with all structured sections and syntax-highlighted code |
| `/roadmaps` | Roadmaps | Phase-by-phase visual roadmaps for C and C++ |
| `/projects` | Projects | Filterable grid of 12 projects by language and difficulty |
| `/interview-prep` | Interview Prep | Filterable interview questions with answers |
| `/cheatsheets` | Cheatsheets | Quick syntax reference tables for C and C++ |
| `/downloads` | Downloads | Links to editors, compilers, and development tools |
| `/about` | About | About the project and its mission |

---

## Data Model

All content is stored as typed TypeScript data files in `src/data/`. The core types are defined in `src/types/index.ts`:

```typescript
interface Curriculum {
  id: string;
  title: string;
  subtitle: string;
  language: 'c' | 'cpp';
  categories: LessonCategory[];
}

interface LessonCategory {
  id: string;
  title: string;
  icon: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  sections: LessonSection[];
}

interface LessonSection {
  type: 'introduction' | 'theory' | 'syntax' | 'example' | 'output'
      | 'explanation' | 'notes' | 'tips' | 'bestPractices'
      | 'commonMistakes' | 'realWorld' | 'interviewQuestions'
      | 'practice' | 'assignment' | 'summary';
  title: string;
  content?: string;
  code?: { filename?: string; language: string; code: string; output?: string };
  items?: string[];
  questions?: { q: string; a: string }[];
}
```

This structure makes it straightforward to add new lessons — just append a new `Lesson` object to the appropriate category in the curriculum data file.

---

## Theme System

CraftC uses Tailwind CSS v4 with a CSS-based configuration. There is no `tailwind.config.js` — the theme is defined entirely through CSS custom properties in `src/index.css`:

```css
@theme {
  --color-primary: #...;
  --color-accent: #...;
  --color-surface: #...;
  /* ...full color ramp: primary, secondary, accent, success, warning, error, neutrals */
}
```

Dark/light themes are toggled by switching the `data-theme` attribute on `<html>`, with all colors referencing CSS variables like `var(--color-primary)`. The user's preference is persisted in `localStorage` and respects the system preference on first visit.

---

## Contributing

Contributions are welcome. Here are some ways to help:

1. **Add lessons** — append new `Lesson` objects to the curriculum data files
2. **Add projects** — add entries to `src/data/projects.ts`
3. **Add interview questions** — add entries to `src/data/interviewQuestions.ts`
4. **Improve cheatsheets** — add syntax entries to `src/data/cheatsheets.ts`
5. **Fix bugs or improve UX** — open an issue or submit a pull request

### Guidelines

- Follow the existing code style and conventions
- Ensure `npm run build` passes before submitting
- Keep lesson sections consistent with the established structure
- Test on both light and dark themes

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>CraftC</strong> — Built for serious learners. Free forever.
</p>
