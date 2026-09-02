import { motion } from 'framer-motion';
import { profile } from '../data/content.js';
import Typewriter from '../components/Typewriter.jsx';
import MagneticButton from '../components/MagneticButton.jsx';
import TechnicalVisual from '../components/TechnicalVisual.jsx';

export default function Hero() {
  const words = profile.name.split(' ');

  return (
    <section id="hero" className="edition-hero section pt-32 overflow-hidden">
      <div className="hero-sticker">R<br />K<br />D</div>
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1fr]">
        <div className="hero-copy">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="edition-kicker"
        >
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-coral" />
          Available for opportunities
        </motion.div>

        <h1 className="edition-title font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.88] tracking-tight">
          {words.map((word, i) => (
            <span key={i} className="reveal-mask mr-3 last:mr-0">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35 + i * 0.12, ease: [0.19, 1, 0.22, 1] }}
              >
                {i === 1 ? <span className="title-highlight">{word}</span> : word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg sm:text-xl text-muted"
        >
          <span className="text-coral font-semibold">
            <Typewriter phrases={profile.roles} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="max-w-xl text-base sm:text-lg text-muted leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4 flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            href="#projects"
            className="edition-button edition-button-lime"
          >
            View my work →
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="edition-button edition-button-outline"
          >
            Get in touch
          </MagneticButton>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 text-left sm:grid-cols-4"
        >
          {[
            { k: 'IEEE 2025', v: 'Publication' },
            { k: '9.08 / 10', v: 'CGPA' },
            { k: '10+', v: 'Projects shipped' },
            { k: 'Global', v: 'Remote-ready' },
          ].map((s) => (
            <div key={s.v} className="edition-stat">
              <div className="text-lg font-semibold">{s.k}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted">{s.v}</div>
            </div>
          ))}
        </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 36, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-technical-frame"
        >
          <TechnicalVisual />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-10 left-5 text-muted">
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
