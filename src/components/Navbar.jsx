import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/content.js';
import ResumeWindow from './ResumeWindow.jsx';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#motion', label: 'Motion' },
  { href: '#skills', label: 'Skills' },
  { href: '#news', label: 'Notes' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 editions-nav">
        <a href="#hero" className="flex items-center gap-3 min-w-0">
          <span className="brand-mark">R</span>
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="truncate text-sm font-semibold">{profile.name}</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted">AI/ML Engineer</span>
          </span>
        </a>

        <nav className="edition-links items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button type="button" className="nav-resume" onClick={() => setResumeOpen(true)}>Resume</button>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 edition-button edition-button-dark"
        >
          Let's talk
          <span className="text-accent">→</span>
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden rounded-lg border border-white/10 p-2"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-ink ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mx-auto mt-2 max-w-7xl edition-menu p-4"
          >
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-ink/80 hover:bg-lime"
                >
                  {l.label}
                </a>
              ))}
              <button type="button" className="mobile-resume" onClick={() => { setOpen(false); setResumeOpen(true); }}>Resume</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ResumeWindow open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </header>
  );
}
