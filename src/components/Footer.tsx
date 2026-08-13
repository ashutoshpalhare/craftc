import { Link } from 'react-router-dom';
import { Terminal, GitBranch, Link as LinkIcon, Camera, Video, Hash, Mail } from 'lucide-react';

const footerLinks = {
  Learn: [
    { label: 'Learn C', path: '/learn/c' },
    { label: 'Learn C++', path: '/learn/cpp' },
    { label: 'Roadmaps', path: '/roadmaps' },
    { label: 'Cheatsheets', path: '/cheatsheets' },
  ],
  Resources: [
    { label: 'Projects', path: '/projects' },
    { label: 'Interview Prep', path: '/interview-prep' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'About', path: '/about' },
  ],
};

const socials = [
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com' },
  { icon: LinkIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Video, label: 'YouTube', href: 'https://youtube.com' },
  { icon: Hash, label: 'X', href: 'https://x.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@craftc.dev' },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                <Terminal size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-[var(--color-text)]">
                Craft<span className="text-[var(--color-primary)]">C</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-sm leading-relaxed">
              India's most beautiful C & C++ learning platform. Master C and C++ from zero to job-ready through structured lessons, real projects, and interview preparation.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            Built with passion by Ashutosh Palhare. CraftC © {new Date().getFullYear()}.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Made for learners in India and beyond.
          </p>
        </div>
      </div>
    </footer>
  );
}
