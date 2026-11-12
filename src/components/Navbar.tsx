import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Search, X, Terminal, ChevronDown, ExternalLink } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Learn C', path: '/learn/c' },
  { label: 'Learn C++', path: '/learn/cpp' },
  { label: 'Roadmaps', path: '/roadmaps' },
  { label: 'DSA', path: '/dsa' },
  { label: 'Practice', path: '/practice' },
];

const moreLinks = [
  { label: 'Projects', path: '/projects' },
  { label: 'Interview Prep', path: '/interview-prep' },
  { label: 'Cheatsheets', path: '/cheatsheets' },
  { label: 'Downloads', path: '/downloads' },
  { label: 'About', path: '/about' },
];

interface NavbarProps {
  onSearchOpen: () => void;
}

export function Navbar({ onSearchOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const moreMenuRef = useRef<HTMLDetailsElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setMobileOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    const handleMoreMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && moreMenuRef.current?.open) {
        moreMenuRef.current.open = false;
        moreMenuRef.current.querySelector('summary')?.focus();
      }
    };
    window.addEventListener('keydown', handleMoreMenuKeyDown);
    return () => window.removeEventListener('keydown', handleMoreMenuKeyDown);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/85 backdrop-blur-xl border-b border-[var(--color-border)]'
          : 'bg-[var(--color-bg)] border-b border-transparent'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] focus:rounded-lg focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group" aria-label="CraftC home">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/20 group-hover:scale-105 transition-transform">
              <Terminal size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-[var(--color-text)]">
              Craft<span className="text-[var(--color-primary)]">C</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-[var(--color-primary)] bg-[var(--color-surface)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <details ref={moreMenuRef} className="relative">
              <summary className={`flex list-none cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors [&::-webkit-details-marker]:hidden hover:bg-[var(--color-surface)] ${
                moreLinks.some((link) => location.pathname === link.path || location.pathname.startsWith(`${link.path}/`))
                  ? 'text-[var(--color-primary)] bg-[var(--color-surface)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
              }`} aria-label="More navigation links">
                More <ChevronDown size={15} aria-hidden="true" />
              </summary>
              <div className="absolute right-0 top-full z-50 mt-2 min-w-52 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-2 shadow-xl shadow-black/20">
                {moreLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => { if (moreMenuRef.current) moreMenuRef.current.open = false; }}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[var(--color-surface)] text-[var(--color-primary)]'
                          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </details>
            <a
              href="https://github.com/ashutoshpalhare?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
              aria-label="Open all GitHub projects in a new tab"
            >
              GitHub <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onSearchOpen}
              className="flex items-center gap-2 px-3 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] rounded-lg transition-colors"
              aria-label="Search ⌘K"
            >
              <Search size={18} />
              <span className="hidden xl:inline">Search</span>
              <kbd className="hidden xl:inline px-1.5 py-0.5 text-xs rounded bg-[var(--color-surface)] border border-[var(--color-border)]">⌘K</kbd>
            </button>
            <ThemeToggle />
            <button
              ref={menuButtonRef}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="craftc-mobile-navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div id="craftc-mobile-navigation" className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-[var(--color-primary)] bg-[var(--color-surface)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {moreLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-[var(--color-primary)] bg-[var(--color-surface)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://github.com/ashutoshpalhare?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
            >
              GitHub Projects <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
