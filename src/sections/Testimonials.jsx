import { motion } from 'framer-motion';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">06 — Kind words</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold">
            What others <span className="gradient-text">say</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative glass neon-border rounded-2xl p-6"
            >
              <div className="mb-4 text-4xl leading-none gradient-text">“</div>
              <p className="text-white/80 leading-relaxed">{t.quote}</p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <div className="text-sm font-semibold">{t.author}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
