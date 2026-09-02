import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/content.js';

/**
 * Interactive project cards with mouse-tilt effect.
 * Hover → 3D tilt + glow + tech tags animate in.
 * Click → modal with details and links.
 */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">05 — Projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            Selected <span className="gradient-text">work</span>.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ rx: (py - 0.5) * -12, ry: (px - 0.5) * 14 });
  }
  function onLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      data-cursor="hover"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 120ms ease-out',
      }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl glass neon-border"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space via-space/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(500px circle at var(--x,50%) var(--y,50%), ${project.accent}22, transparent 60%)`,
          }}
        />
      </div>

      <div className="p-5" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/65">{project.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ boxShadow: `0 0 0 1px ${project.accent}22 inset` }}
      />
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl glass neon-border"
      >
        <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80 hover:bg-white/5"
            >
              Close
            </button>
          </div>
          <p className="mt-4 text-white/75">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
              >
                View repository ↗
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-neon to-accent px-4 py-2 text-sm font-medium"
              >
                Live demo →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
