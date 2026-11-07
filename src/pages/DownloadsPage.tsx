import { motion } from 'framer-motion';
import { ExternalLink, Monitor, Apple, Terminal as TerminalIcon, BookOpen } from 'lucide-react';
import { downloads } from '@/data/downloads';
import { Badge, Card, SectionHeading } from '@/components/ui';
import {
  Code, Blocks, GitBranch, Settings, Terminal
} from 'lucide-react';

const iconMap: Record<string, typeof Code> = {
  Code, Terminal, Blocks, GitBranch, Settings,
};

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === 'Windows') return <Monitor size={14} />;
  if (platform === 'macOS') return <Apple size={14} />;
  return <TerminalIcon size={14} />;
}

export function DownloadsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <SectionHeading eyebrow="Downloads" title="Everything you need to get started" subtitle="Install these free tools to write, compile, and run C and C++ programs on your computer." center />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {downloads.map((dl, i) => {
          const Icon = iconMap[dl.icon] || Code;
          return (
            <motion.div key={dl.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Icon size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <Badge variant={dl.category === 'editor' ? 'primary' : dl.category === 'compiler' ? 'warning' : 'default'}>
                    {dl.category}
                  </Badge>
                </div>
                <h3 className="font-semibold text-[var(--color-text)] mb-2">{dl.name}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">{dl.description}</p>
                <div className="mb-4">
                  <div className="text-xs font-medium text-[var(--color-text-muted)] mb-2">Supported Platforms</div>
                  <div className="flex flex-wrap gap-1.5">
                    {dl.platforms.map((p) => (
                      <span key={p} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-[var(--color-bg)] text-[var(--color-text-secondary)]">
                        <PlatformIcon platform={p} /> {p}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={dl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-foreground)] text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-all"
                >
                  Download <ExternalLink size={16} />
                </a>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <section className="mt-16">
        <SectionHeading eyebrow="Official references" title="Keep learning from primary sources" subtitle="Use language references and toolchain documentation for exact rules, compiler options and deeper explanations." center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'cppreference — C', description: 'C language reference, standard library headers and language rules.', url: 'https://en.cppreference.com/w/c' },
            { title: 'cppreference — C++', description: 'C++ language reference, standard library and version-specific features.', url: 'https://en.cppreference.com/w/cpp' },
            { title: 'LearnCpp', description: 'Structured modern C++ tutorials with practical explanations.', url: 'https://www.learncpp.com/' },
            { title: 'GCC Documentation', description: 'Compiler options, diagnostics and GCC toolchain reference.', url: 'https://gcc.gnu.org/onlinedocs/' },
            { title: 'Clang Documentation', description: 'Clang compiler user manual, diagnostics and tooling.', url: 'https://clang.llvm.org/docs/' },
            { title: 'C++ Core Guidelines', description: 'Guidelines for safer, clearer modern C++ design.', url: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines' },
          ].map((resource) => (
            <Card key={resource.title} className="p-5 h-full">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={18} className="text-[var(--color-primary)]" />
                <h3 className="font-semibold text-[var(--color-text)]">{resource.title}</h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{resource.description}</p>
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline">
                Open reference <ExternalLink size={14} />
              </a>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
