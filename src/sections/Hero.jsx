import { motion } from 'framer-motion';
import { profile } from '../data/content.js';
import Typewriter from '../components/Typewriter.jsx';
import MagneticButton from '../components/MagneticButton.jsx';

export default function Hero() {
  const words = profile.name.split(' ');

  return (
    <section id="hero" className="section pt-32 text-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70"
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulseGlow rounded-full bg-emerald-400 shadow-[0_0_10px_#22c55e]" />
          Available for opportunities
        </motion.div>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight">
          {words.map((word, i) => (
            <span key={i} className="reveal-mask mr-3 last:mr-0">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35 + i * 0.12, ease: [0.19, 1, 0.22, 1] }}
              >
                {i === 1 ? <span className="gradient-text">{word}</span> : word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg sm:text-xl text-white/80"
        >
          <span className="text-accent">
            <Typewriter phrases={profile.roles} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="max-w-xl text-base sm:text-lg text-white/60"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#projects"
            className="rounded-full bg-gradient-to-r from-neon to-accent px-6 py-3 text-sm font-medium text-white shadow-glow hover:brightness-110"
          >
            View my work →
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
          >
            Get in touch
          </MagneticButton>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-4"
        >
          {[
            { k: 'IEEE 2025', v: 'Publication' },
            { k: '9.08 / 10', v: 'CGPA' },
            { k: '10+', v: 'Projects shipped' },
            { k: 'Global', v: 'Remote-ready' },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
              <div className="text-lg font-semibold gradient-text">{s.k}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.35em]">Scroll to explore</span>
          <div className="h-8 w-[2px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-3 w-full bg-white/80"
              animate={{ y: [-12, 24] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
