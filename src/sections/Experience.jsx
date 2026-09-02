import { motion } from 'framer-motion';
import { experience } from '../data/content.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">07 — Experience</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">
            The <span className="gradient-text">journey</span> so far.
          </h2>
        </div>

        <ol className="relative border-l border-white/10 pl-6">
          {experience.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="mb-8 last:mb-0"
            >
              <span className="absolute -left-[9px] mt-1 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-neon to-accent shadow-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>

              <div className="glass rounded-2xl p-5 neon-border">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{e.role}</h3>
                  <span className="text-xs uppercase tracking-widest text-white/50">
                    {e.dates}
                  </span>
                </div>
                <p className="text-sm text-accent">{e.org}</p>
                <p className="mt-2 text-sm text-white/70">{e.impact}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
