import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/content.js';

export default function InteractiveWindows() {
  const [open, setOpen] = useState(0);

  return (
    <section id="windows" className="section interactive-windows-section">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div className="sticky-copy">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-coral">03 — Capabilities</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Open a window into how I <span className="title-highlight">work</span>.
          </h2>
          <p className="mt-5 max-w-md text-muted">
            Each capability expands into the tools, thinking, and outcomes behind the work.
          </p>
        </div>

        <div className="window-list">
          {services.map((service, index) => {
            const isOpen = open === index;
            return (
              <motion.article
                key={service.title}
                layout
                className={`feature-window ${isOpen ? 'is-open' : ''}`}
                style={{ '--window-accent': service.accent }}
              >
                <button type="button" className="window-trigger" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="window-index">0{index + 1}</span>
                  <span className="window-title">{service.title}</span>
                  <span className="window-toggle">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="window-content"
                    >
                      <div className="window-visual" aria-hidden="true"><span>{service.icon}</span></div>
                      <p>{service.description}</p>
                      <a href="#contact" className="window-link">Start a conversation <span>↗</span></a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
