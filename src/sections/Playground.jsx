import { motion } from 'framer-motion';
import { playground } from '../data/content.js';

export default function Playground() {
  return (
    <section id="playground" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">08 — Playground</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold">
            Things I’m <span className="gradient-text">tinkering</span> with.
          </h2>
          <p className="mt-4 max-w-xl text-white/60">
            A rotating shelf of experiments and small builds. Some become products, some just spark ideas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {playground.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              data-cursor="hover"
              className="group flex items-center justify-between rounded-2xl glass neon-border p-5"
            >
              <div>
                <div className="text-[10px] uppercase tracking-widest text-accent">{p.tag}</div>
                <div className="mt-1 font-semibold text-white">{p.title}</div>
              </div>
              <span className="text-lg text-white/40 transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
