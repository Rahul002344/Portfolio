import { motion } from 'framer-motion';
import { services } from '../data/content.js';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mb-4 text-xs uppercase tracking-[0.35em] text-accent"
          >
            02 — Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
          >
            What I <span className="gradient-text">build</span>.
          </motion.h2>
          <p className="mt-4 max-w-xl text-white/60">
            A focused set of things I do well — deeply. If your problem lives somewhere in this space, we’ll get along.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              data-cursor="hover"
              className="group relative overflow-hidden rounded-2xl glass neon-border p-6"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                style={{ background: s.accent }}
              />
              <div
                className="mb-4 grid h-14 w-14 place-items-center rounded-2xl text-3xl"
                style={{
                  background: `linear-gradient(135deg, ${s.accent}44, transparent 70%)`,
                  border: `1px solid ${s.accent}55`,
                }}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.description}</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
                <span className="h-[1px] w-8 bg-white/20" />
                <span className="uppercase tracking-widest">0{i + 1} / 0{services.length}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
