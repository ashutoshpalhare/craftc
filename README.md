# CraftC — Master C & C++ From Zero to Job Ready

CraftC is a complete, free learning platform for C and C++. It takes you from absolute beginner to job-ready through structured lessons, explained code examples, visual roadmaps, guided project briefs, interview preparation, and quick-reference cheatsheets — all in a fast, modern, responsive interface with light/dark themes.

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
| **Lessons** | 62 | Across C and C++ curricula, grouped by category |
| **Projects** | 12 | Guided C and C++ project briefs with requirements, milestones, sample I/O, architecture and quality checks |
| **DSA Topics** | 13 | Foundation-to-advanced explanations, complexity notes and C++17 examples |
| **DSA Problems** | 11 | Progressive problems with approaches, reference solutions and complexity analysis |
| **Interview Questions** | 42 | Categorized by C, C++, DSA, and General |
| **Roadmaps** | 3 | Phase-by-phase roadmaps for C, C++, and DSA |
| **Cheatsheets** | 2 | Quick syntax reference for C and C++ |
| **Downloads & References** | 6 tools + 6 references | Editors, compilers, development tools, and official language documentation |

---

## Features

### Structured Curriculum

Every lesson follows a consistent, repeatable structure:

1. **Introduction** — what the concept is and why it matters
2. **Theory** — the underlying mechanics
3. **Syntax** — the formal grammar
4. **Example** — annotated code with a copy button
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

A command-palette-style search modal (`Ctrl+K` / `Cmd+K`) lets you instantly search across all lessons, projects, practice quizzes, interview questions, roadmaps, and cheatsheets. Results are grouped by category with icons and keyboard navigation.

### Visual Roadmaps

Three complete roadmaps (C, C++ and DSA) break the learning journey into phases with topics and estimated durations — from Foundations through Projects & Interview Prep.

### Project Library

12 guided project briefs ranging from a beginner Calculator to advanced ideas such as an HTTP Server and Snake Game. Each project lists its language, difficulty, topics covered, and estimated build time.

### Interview Preparation

42 interview questions across C, C++, DSA and General programming, each with a concise answer. Filterable by category and difficulty.

### Interactive Practice Center

The Practice Center offers 18 original multiple-choice questions across C, C++17 and DSA, with subject and difficulty filters, four answer choices, scored results, per-question explanations, retry controls and best-score tracking saved locally in the browser.

### Course Completion Certificates

When a learner marks every lesson in a C or C++ course complete, the course page reveals a ₹99 certificate request form. Learners can request a digital or printed certificate; the form opens a pre-filled email draft for manual review. Payment is not collected on the website and certificate issuance is not automated. Printed delivery details are requested separately after review.

### Cheatsheets

Two quick-reference cheatsheets (C and C++) covering the most common syntax patterns — from Hello World to smart pointers and lambdas.

### Dark / Light Theme

A persistent theme toggle with smooth transitions. The entire color system is built on CSS custom properties, so theme switching is instant and flash-free.

### Responsive Design

Fully responsive from mobile to desktop with an 8px spacing system, fluid typography, and adaptive layouts throughout.

### Quality Checks

- **C/C++ lesson validation** — curriculum structure, unique lesson IDs/slugs and every C/C++ lesson code example are checked; code is compiled in C17/C++17 syntax-only mode with GCC/G++.
- **C++17 DSA validation** — DSA reference solutions are compiled with strict warning flags in CI.
- **Accessibility smoke tests** — Playwright and axe scan the main routes in dark/light themes and key mobile layouts, and exercise keyboard focus behavior.
- **Release artifact checks** — the build validates generated SEO pages, sitemap coverage, metadata, crawler files and local assets.

### Performance

- **Lazy-loaded routes** — each page is code-split and loaded on demand
- **Lazy-loaded syntax highlighter** — Shiki loads only when a code block is first rendered
- **CSS-based theming** — centralized CSS variables keep theme colors consistent across components

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

---

## Dependency Security

Build dependencies are installed from the committed npm lockfile. CI runs `npm audit` and checks the production build. The security refresh locks Vite 8.3.8, nanoid 3.3.20 and source-map-js 1.2.2; the lockfile records exact resolved versions.

For a local audit, run:

```bash
npm ci
npm audit
```

## Getting Started

### Prerequisites

- **Node.js** 20.19+ or 22.12+ and npm 10+
- A modern browser

### Installation

```bash
# Clone the repository
git clone https://github.com/ashutoshpalhare/craftc.git
cd craftc

# Install the locked dependencies
npm ci

# Start the development server
npm run dev
```

The dev server runs at `http://localhost:5173`.

The production site is published at [https://ashutoshpalhare.github.io/craftc/](https://ashutoshpalhare.github.io/craftc/). Crawler discovery files are available at `/robots.txt` and `/sitemap.xml`.

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
├── .github/workflows/      # Build, accessibility checks and GitHub Pages deployment
├── public/                 # Static assets, robots.txt and sitemap.xml
├── scripts/                # SEO generation, curriculum/DSA/practice validation and browser QA
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CodeBlock.tsx    # Shiki-powered syntax-highlighted code block
│   │   ├── Footer.tsx       # Site footer with social links
│   │   ├── LessonSectionRender.tsx  # Renders individual lesson sections
│   │   ├── Navbar.tsx       # Top navigation with theme toggle & search
│   │   ├── SearchModal.tsx  # Command-palette global search (Ctrl+K)
│   │   ├── ThemeToggle.tsx  # Dark/light theme switcher
│   │   ├── CertificationCard.tsx # Course completion certificate request
│   │   └── ui.tsx           # Shared primitives (Card, Badge, SectionHeading, etc.)
│   ├── data/                # All content data (curriculum, projects, etc.)
│   │   ├── cCurriculum.ts   # Full C programming curriculum
│   │   ├── cppCurriculum.ts # Full C++ programming curriculum
│   │   ├── roadmaps.ts      # Learning roadmaps for C, C++ and DSA
│   │   ├── dsa.ts            # DSA topics and solved problems
│   │   ├── projects.ts      # Project library (12 projects)
│   │   ├── interviewQuestions.ts  # Interview Q&A bank
│   │   ├── practiceQuestions.ts   # Interactive quiz question bank
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
│   │   ├── DsaPage.tsx      # DSA topics and C++17 practice
│   │   ├── InterviewPrepPage.tsx  # Interview questions
│   │   ├── PracticePage.tsx       # Interactive practice quizzes
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
├── README.md
└── LICENSE
```

---

## Key Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, features, learning path, roadmap preview, projects showcase, interview teaser, FAQ, and CTA |
| `/learn/:courseId` | Course | Course overview with a sidebar listing all categories and lessons |
| `/learn/:courseId/:lessonSlug` | Lesson | Full lesson with all structured sections and syntax-highlighted code |
| `/roadmaps` | Roadmaps | Phase-by-phase visual roadmaps for C, C++ and DSA |
| `/projects` | Projects | Filterable project briefs with requirements, milestones, sample I/O, architecture and quality checks |
| `/dsa` | DSA | Data structure explanations, complexity guidance and solved C++17 practice problems |
| `/practice` | Practice | Interactive C, C++ and DSA quizzes with scoring and explanations |
| `/learn/:courseId` | Certificate request | Appears after all lessons in a course are marked complete |
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

Dark/light themes use the `data-theme` attribute on `<html>` and CSS custom properties such as `var(--color-primary)`. The React theme hook persists the user's preference in `localStorage` and uses the system preference on first visit.

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
