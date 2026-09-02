import { motion } from 'framer-motion';
import { processSteps } from '../data/content.js';

export default function Approach() {
  return (
    <section id="approach" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">04 — Approach</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold">
            How I <span className="gradient-text">work</span>.
          </h2>
          <p className="mt-4 text-white/60">
            A calm, incremental process. Fewer surprises, more shipping.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />
          <div className="space-y-10">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`grid gap-6 md:grid-cols-2 md:items-center ${i % 2 ? 'md:[direction:rtl]' : ''}`}
              >
                <div className="[direction:ltr]">
                  <div className="glass neon-border rounded-2xl p-6">
                    <div className="mb-3 flex items-baseline gap-3">
                      <span className="font-mono text-4xl gradient-text">{p.step}</span>
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed">{p.text}</p>
                  </div>
                </div>
                <div className="[direction:ltr] hidden md:flex md:justify-center">
                  <div
                    className="grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-white/5 font-mono text-2xl"
                    style={{
                      boxShadow: '0 0 40px rgba(124,92,255,0.35)',
                    }}
                  >
                    {['◆', '◇', '△', '○'][i % 4]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
