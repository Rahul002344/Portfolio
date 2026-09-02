import { motion } from 'framer-motion';
import { skills } from '../data/content.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">03 — Skills</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold">
              Tools I use to <span className="gradient-text">ship</span>.
            </h2>
          </div>
          <p className="hidden md:block max-w-sm text-sm text-white/60">
            A mix of ML, systems and modern web tech — chosen for whatever the problem needs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px' }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              data-cursor="hover"
              className="group glass rounded-xl p-4 neon-border"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/90">{s.name}</span>
                <span
                  className="inline-block h-2.5 w-2.5 rounded-full shadow"
                  style={{ background: s.color, boxShadow: `0 0 12px ${s.color}` }}
                />
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + i * 0.03, duration: 0.9, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${s.color}, #22d3ee)` }}
                />
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                {s.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
