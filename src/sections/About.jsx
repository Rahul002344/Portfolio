import { motion } from 'framer-motion';
import { about } from '../data/content.js';
import Photo3D from '../components/Photo3D.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        {/* Photo card (3D-tilt with cursor) */}
        <Photo3D />

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">01 — About</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            {about.headline}
          </h2>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="text-white/75 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {about.facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                className="rounded-xl bg-white/5 p-3 text-center border border-white/5"
              >
                <div className="text-lg font-semibold gradient-text">{f.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">{f.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
