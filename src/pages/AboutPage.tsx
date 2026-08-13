import { motion } from 'framer-motion';
import {
  GitBranch, Link as LinkIcon, Camera, Video, Hash, Mail,
  Download, Briefcase, GraduationCap, Code2, Heart, Target
} from 'lucide-react';
import { Card, SectionHeading, Badge } from '@/components/ui';

const skills = ['C', 'C++', 'Data Structures', 'Algorithms', 'React', 'TypeScript', 'Python', 'Git', 'Linux', 'SQL'];

const socials = [
    { icon: GitBranch, label: 'GitHub', href: 'https://github.com', handle: '@ashutoshpalhare' },
    { icon: LinkIcon, label: 'LinkedIn', href: 'https://linkedin.com', handle: '/in/ashutoshpalhare' },
    { icon: Camera, label: 'Instagram', href: 'https://instagram.com', handle: '@ashutosh.palhare' },
    { icon: Video, label: 'YouTube', href: 'https://youtube.com', handle: '@craftc' },
    { icon: Hash, label: 'X (Twitter)', href: 'https://x.com', handle: '@ashutoshpalhare' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@craftc.dev', handle: 'hello@craftc.dev' },
];

export function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card hover={false} className="overflow-hidden">
          <div className="h-32  relative">
            <div className="absolute inset-0 grid-pattern opacity-60" />
          </div>
          <div className="px-6 sm:px-8 pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16">
              <div className="w-28 h-28 rounded-2xl bg-[var(--color-surface)] border-4 border-[var(--color-surface)] flex items-center justify-center text-4xl font-bold text-[var(--color-primary)] shadow-xl">
                AP
              </div>
              <div className="flex-1 pb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)]">Ashutosh Palhare</h1>
                <p className="text-[var(--color-text-secondary)] mt-1">Software Engineer · C/C++ Educator · Open Source Contributor</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-hover)] transition-all"
              >
                <Download size={16} /> Resume
              </a>
            </div>

            <p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed">
              Hi, I am Ashutosh. I built CraftC because when I was learning C and C++, I wished there was one place that took me from absolute zero to job-ready without jumping between scattered tutorials. CraftC is that place — structured, beautiful, and free.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Mission */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-6">
        <Card hover={false} className="p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
              <Target size={22} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-2">My Mission</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                To make high-quality C and C++ education accessible to every student in India — regardless of background, college, or budget. I believe that with the right structure, anyone can go from zero to job-ready. CraftC is my way of giving back to the community that taught me everything.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Skills */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="mt-6">
        <Card hover={false} className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <Code2 size={22} className="text-[var(--color-primary)]" />
            <h2 className="text-xl font-bold text-[var(--color-text)]">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="primary">{skill}</Badge>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Experience & Education */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Card hover={false} className="p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={22} className="text-[var(--color-primary)]" />
              <h2 className="text-xl font-bold text-[var(--color-text)]">Experience</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-[var(--color-text)] text-sm">Software Engineer</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-0.5">Building tools and teaching along the way</div>
              </div>
              <div className="pt-4 border-t border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
                Open to collaboration on open-source projects and educational content. Reach out via the social links below.
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
          <Card hover={false} className="p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap size={22} className="text-[var(--color-primary)]" />
              <h2 className="text-xl font-bold text-[var(--color-text)]">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="font-medium text-[var(--color-text)] text-sm">Engineering Degree</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-0.5">Computer Science</div>
              </div>
              <div className="pt-4 border-t border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
                Self-taught in C, C++, and modern web development. Passionate about making education accessible.
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Open Source */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-6">
        <Card hover={false} className="p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
              <Heart size={22} className="text-[var(--color-primary)]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-2">Open Source</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                CraftC is an open-source project. The entire curriculum, code, and design are available on GitHub. Contributions, corrections, and new lessons are welcome from the community.
              </p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:gap-3 transition-all">
                <GitBranch size={16} /> View on GitHub
              </a>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Contact / Socials */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }} className="mt-6">
        <Card hover={false} className="p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Connect with me</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-surface)] flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 transition-colors">
                    <Icon size={18} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-[var(--color-text)]">{social.label}</div>
                    <div className="text-xs text-[var(--color-text-muted)] truncate">{social.handle}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
