import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Terminal, BookOpen, Map, FolderGit2, HelpCircle,
  Zap, Target, Users, Code2, GraduationCap, Briefcase, Rocket,
  CheckCircle2, ChevronDown, Download, Search, Layers, Trophy
} from 'lucide-react';
import { SectionHeading, Card, Badge } from '@/components/ui';
import { cCurriculum } from '@/data/cCurriculum';
import { cppCurriculum } from '@/data/cppCurriculum';
import { projects } from '@/data/projects';
import { roadmaps } from '@/data/roadmaps';
import { getTotalLessons } from '@/utils/curriculum';
import { useState } from 'react';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyCraftC />
      <LearningPath />
      <PlatformFeatures />
      <RoadmapsSection />
      <PopularTopics />
      <ProjectsSection />
      <InterviewSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              <span className="text-sm text-[var(--color-text-secondary)]">Beginner to Job-Ready · Free Forever</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] leading-[1.1] tracking-tight">
              Master C & C++
              <br />
              <span className="gradient-text">From Zero to Job Ready</span>
            </h1>

            <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              Learn C and C++ through structured lessons, real examples, projects, roadmaps, interview preparation, and practical exercises.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/learn/c"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-hover)] transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/30 hover:-translate-y-0.5"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/roadmaps"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] font-semibold hover:border-[var(--color-primary)]/40 transition-all"
              >
                <Map size={18} className="text-[var(--color-primary)]" />
                Explore Roadmap
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>{getTotalLessons(cCurriculum) + getTotalLessons(cppCurriculum)}+ Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <FolderGit2 size={16} />
                <span>{projects.length}+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <HelpCircle size={16} />
                <span>Interview Prep</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <HeroCodeCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCodeCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/10 rounded-3xl blur-2xl" />
      <div className="relative bg-[#0d1117] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-xs font-mono text-[var(--color-text-muted)]">hello.c</span>
        </div>
        <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
<span className="text-[#8b949e]">#include</span><span className="text-[#8b949e]"> </span><span className="text-[#a5d6ff]">&lt;stdio.h&gt;</span>{'\n'}
{'\n'}
<span className="text-[#ff7b72]">int</span> <span className="text-[#d2a8ff]">main</span><span className="text-[#8b949e]">() {'{'}</span>{'\n'}
{'  '}<span className="text-[#ff7b72]">printf</span><span className="text-[#8b949e]">(</span><span className="text-[#a5d6ff]">"Hello, CraftC!\n"</span><span className="text-[#8b949e]">);</span>{'\n'}
{'  '}<span className="text-[#ff7b72]">return</span> <span className="text-[#79c0ff]">0</span><span className="text-[#8b949e]">;</span>{'\n'}
<span className="text-[#8b949e]">{'}'}</span>
        </pre>
        <div className="px-5 py-3 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="flex items-center gap-2 text-xs">
            <Terminal size={14} className="text-[var(--color-success)]" />
            <span className="font-mono text-[var(--color-success)]">$ gcc hello.c -o hello && ./hello</span>
          </div>
          <div className="mt-1.5 text-xs font-mono text-[var(--color-accent)]">Hello, CraftC!</div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 -right-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <Zap size={16} className="text-[var(--color-primary)]" />
          <span className="text-sm font-medium text-[var(--color-text)]">Fast Compilation</span>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-6 -left-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-3 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <GraduationCap size={16} className="text-[var(--color-accent)]" />
          <span className="text-sm font-medium text-[var(--color-text)]">Structured Learning</span>
        </div>
      </motion.div>
    </div>
  );
}

function WhyCraftC() {
  const reasons = [
    { icon: Target, title: 'Structured Learning Path', desc: 'Follow a clear roadmap from absolute beginner to job-ready, with every step planned out.' },
    { icon: Code2, title: 'Real Code Examples', desc: 'Every concept comes with runnable code, expected output, and a detailed explanation.' },
    { icon: Briefcase, title: 'Job-Focused Curriculum', desc: 'Built around what employers actually ask — interview questions, projects, and best practices.' },
    { icon: Users, title: 'Beginner Friendly', desc: 'No prior programming knowledge needed. We start from "what is a variable" and build up.' },
  ];
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Why CraftC" title="Everything you need to go from zero to hired" subtitle="CraftC is not just another tutorial site. It is a complete learning platform designed to take you from no programming experience to job-ready." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-2">{r.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{r.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LearningPath() {
  const steps = [
    { icon: Rocket, title: 'Getting Started', desc: 'Setup, history, and your first program', color: 'from-orange-500 to-amber-500' },
    { icon: BookOpen, title: 'Basics', desc: 'Variables, data types, operators, I/O', color: 'from-amber-500 to-yellow-500' },
    { icon: Layers, title: 'Intermediate', desc: 'Functions, arrays, pointers, structures', color: 'from-yellow-500 to-orange-500' },
    { icon: Code2, title: 'Advanced', desc: 'Dynamic memory, file handling, preprocessor', color: 'from-orange-600 to-red-500' },
    { icon: FolderGit2, title: 'Projects', desc: 'Build real applications for your portfolio', color: 'from-red-500 to-orange-600' },
    { icon: Trophy, title: 'Job Ready', desc: 'Interview prep, practice, and checklists', color: 'from-amber-600 to-orange-600' },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Learning Path" title="A clear journey from zero to job-ready" subtitle="Every step is planned. You always know what to learn next and why it matters." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-5 h-full relative">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-3`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] mb-1">Step {i + 1}</div>
                  <h3 className="font-semibold text-[var(--color-text)] text-sm mb-1">{step.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{step.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlatformFeatures() {
  const features = [
    { icon: BookOpen, title: 'Structured Lessons', desc: 'Every lesson follows the same consistent structure: introduction, theory, syntax, example, output, explanation, notes, tips, and practice.' },
    { icon: Code2, title: 'Syntax Highlighting', desc: 'Beautiful code blocks with Shiki syntax highlighting, copy buttons, line numbers, and language badges.' },
    { icon: Search, title: 'Global Search', desc: 'Search across all lessons, projects, interview questions, roadmaps, and cheatsheets instantly.' },
    { icon: Map, title: 'Visual Roadmaps', desc: 'See the entire learning journey at a glance with phase-by-phase roadmaps for both C and C++.' },
    { icon: FolderGit2, title: 'Real Projects', desc: 'Build portfolio-worthy projects from calculators to library management systems.' },
    { icon: HelpCircle, title: 'Interview Prep', desc: 'Curated interview questions with answers for C, C++, DSA, and general programming.' },
  ];
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Platform Features" title="Built for serious learners" subtitle="Every feature is designed to help you learn faster and retain more." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)] mb-1.5">{f.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RoadmapsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Roadmaps" title="Know exactly what to learn and when" subtitle="Visual phase-by-phase roadmaps keep you on track from day one to job-ready." center />
        <div className="grid md:grid-cols-2 gap-6">
          {roadmaps.map((rm, i) => (
            <motion.div key={rm.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to="/roadmaps">
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <Map size={22} className="text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--color-text)]">{rm.title}</h3>
                      <Badge variant="primary">{rm.language}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{rm.description}</p>
                  <div className="space-y-2">
                    {rm.phases.slice(0, 4).map((phase) => (
                      <div key={phase.id} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={14} className="text-[var(--color-success)] flex-shrink-0" />
                        <span className="text-[var(--color-text-secondary)]">{phase.title}</span>
                        <span className="text-xs text-[var(--color-text-muted)] ml-auto">{phase.duration}</span>
                      </div>
                    ))}
                    {rm.phases.length > 4 && <p className="text-xs text-[var(--color-text-muted)] pt-1">+ {rm.phases.length - 4} more phases</p>}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm text-[var(--color-primary)] font-medium">
                    View full roadmap <ArrowRight size={16} />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularTopics() {
  const topics = [
    { name: 'Pointers', path: '/learn/c/pointers', count: 'C' },
    { name: 'Functions', path: '/learn/c/functions', count: 'C' },
    { name: 'Arrays', path: '/learn/c/arrays', count: 'C' },
    { name: 'Structures', path: '/learn/c/structures', count: 'C' },
    { name: 'Classes & Objects', path: '/learn/cpp/classes', count: 'C++' },
    { name: 'Inheritance', path: '/learn/cpp/inheritance', count: 'C++' },
    { name: 'Polymorphism', path: '/learn/cpp/polymorphism', count: 'C++' },
    { name: 'STL Vectors', path: '/learn/cpp/vectors', count: 'C++' },
    { name: 'Templates', path: '/learn/cpp/templates', count: 'C++' },
    { name: 'Smart Pointers', path: '/learn/cpp/smart-pointers', count: 'C++' },
    { name: 'Lambda Expressions', path: '/learn/cpp/lambda', count: 'C++' },
    { name: 'Dynamic Memory', path: '/learn/c/dynamic-memory-allocation', count: 'C' },
  ];
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Popular Topics" title="Jump straight to what you need" subtitle="Quick links to the most-searched C and C++ topics." center />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {topics.map((topic, i) => (
            <motion.div key={topic.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <Link to={topic.path}>
                <Card className="p-4 flex items-center justify-between group">
                  <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{topic.name}</span>
                  <Badge variant={topic.count === 'C' ? 'primary' : 'default'}>{topic.count}</Badge>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const featured = projects.slice(0, 3);
  return (
    <section className="py-20 px-4 sm:px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Projects" title="Learn by building real things" subtitle="Theory is good. Building is better. These projects take you from understanding to doing." center />
        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to="/projects">
                <Card className="p-6 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={p.language === 'C' ? 'primary' : 'default'}>{p.language}</Badge>
                    <Badge variant={p.difficulty === 'beginner' ? 'success' : p.difficulty === 'intermediate' ? 'warning' : 'error'}>{p.difficulty}</Badge>
                  </div>
                  <h3 className="font-semibold text-[var(--color-text)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{p.description}</p>
                  <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1"><Target size={12} /> {p.estimatedTime}</span>
                    <span className="flex items-center gap-1 text-[var(--color-primary)] font-medium">View project <ArrowRight size={12} /></span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:gap-3 transition-all">
            Browse all projects <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function InterviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <Card hover={false} className="overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 sm:p-10">
              <Badge variant="primary" >Interview Preparation</Badge>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[var(--color-text)] leading-tight">Crack your next C/C++ interview</h2>
              <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
                Curated interview questions covering pointers, memory management, OOP, STL, DSA, and more — each with a clear, concise answer.
              </p>
              <Link to="/interview-prep" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-hover)] transition-all">
                Start Practicing <ArrowRight size={18} />
              </Link>
            </div>
            <div className="p-8 sm:p-10 bg-[var(--color-bg-secondary)] border-l border-[var(--color-border)]">
              <div className="space-y-3">
                {['What is a pointer?', 'Difference between malloc and calloc?', 'What are the four pillars of OOP?', 'What is RAII?'].map((q, i) => (
                  <motion.div
                    key={q}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)]"
                  >
                    <HelpCircle size={16} className="text-[var(--color-accent)] flex-shrink-0" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{q}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Testimonials" title="Loved by learners across India" subtitle="Join thousands of students who are using CraftC to learn C and C++." center />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: 'Engineering Student', role: 'Computer Science', text: 'The structured lessons made pointers finally click for me. The examples are clear and the progression feels natural.' },
            { name: 'Self Learner', role: 'Career Switcher', text: 'I went from zero programming knowledge to building a phonebook app in C. The roadmaps kept me focused the entire time.' },
            { name: 'Diploma Student', role: 'Electronics', text: 'The interview prep section helped me land my first embedded systems internship. Exactly what I needed.' },
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="p-6 h-full">
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm italic">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                  <div className="font-semibold text-[var(--color-text)] text-sm">{t.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{t.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  { q: 'Is CraftC free to use?', a: 'Yes, CraftC is completely free. All lessons, projects, roadmaps, and interview prep materials are available at no cost.' },
  { q: 'Do I need any programming experience?', a: 'No. CraftC is designed for absolute beginners. We start from "what is a variable" and build up to advanced topics.' },
  { q: 'What do I need to start?', a: 'A computer with internet access. We guide you through installing a C/C++ compiler and editor in the first lessons.' },
  { q: 'Can I learn both C and C++?', a: 'Absolutely. We recommend starting with C, then moving to C++. The roadmaps show you the optimal order.' },
  { q: 'Will this help me get a job?', a: 'The curriculum is designed to make you job-ready, with interview questions, projects for your portfolio, and a job-ready checklist.' },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" center />
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-[var(--color-text)] text-sm">{item.q}</span>
                <ChevronDown size={18} className={`text-[var(--color-text-muted)] transition-transform flex-shrink-0 ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIdx === i ? 'auto' : 0, opacity: openIdx === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-10 sm:p-14 text-center">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">Ready to start your journey?</h2>
            <p className="mt-4 text-white/90 text-lg max-w-xl mx-auto">Join thousands of learners mastering C and C++ from zero to job-ready. It is free, structured, and built for you.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/learn/c" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-all">
                Start Learning C <ArrowRight size={18} />
              </Link>
              <Link to="/learn/cpp" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 text-white font-semibold border border-white/30 hover:bg-white/25 transition-all backdrop-blur-sm">
                Start Learning C++ <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
