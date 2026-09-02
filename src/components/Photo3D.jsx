import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/content.js';

/**
 * 3D-tilting portrait card.
 *  - Follows the cursor with a subtle rotation on desktop
 *  - Animated conic glow ring
 *  - Uses `/rahul.jpg` if you drop your photo into `public/rahul.jpg`,
 *    otherwise falls back to a stylized SVG portrait.
 */
export default function Photo3D() {
  const wrap = useRef(null);
  const inner = useRef(null);
  const [src, setSrc] = useState(profile.photo);
  const [hasCustomPhoto, setHasCustomPhoto] = useState(true);

  useEffect(() => {
    // Probe whether the user has placed rahul.jpg — otherwise use fallback
    const img = new Image();
    img.onload = () => {
      setSrc(profile.photo);
      setHasCustomPhoto(true);
    };
    img.onerror = () => {
      setSrc('/rahul-fallback.svg');
      setHasCustomPhoto(false);
    };
    img.src = profile.photo;
  }, []);

  function onMove(e) {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -18;
    const ry = (px - 0.5) * 22;
    if (inner.current) {
      inner.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  }
  function onLeave() {
    if (inner.current) inner.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }

  return (
    <motion.div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.9 }}
      className="relative mx-auto w-full max-w-[360px]"
      style={{ perspective: 1200 }}
    >
      {/* Animated conic glow ring */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl"
           style={{
             background:
               'conic-gradient(from 0deg, #7c5cff, #22d3ee, #a855f7, #f472b6, #7c5cff)',
             animation: 'spin 8s linear infinite',
           }}
      />

      <div
        ref={inner}
        className="relative rounded-[1.75rem] overflow-hidden neon-border glass"
        style={{ transformStyle: 'preserve-3d', transition: 'transform 200ms ease-out' }}
        data-cursor="hover"
      >
        {/* Photo */}
        <div className="relative aspect-[4/5] w-full" style={{ transform: 'translateZ(0)' }}>
          <img
            src={src}
            alt={profile.name}
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 15%' }}
            onError={() => {
              setSrc('/rahul-fallback.svg');
              setHasCustomPhoto(false);
            }}
          />
          {/* Vignette + gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-space via-space/30 to-transparent" />
          <div className="absolute inset-0 mix-blend-overlay"
               style={{ background: 'radial-gradient(120% 100% at 30% 10%, rgba(124,92,255,0.35), transparent 60%)' }}
          />
          {/* Scan lines */}
          <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen"
               style={{
                 backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)',
               }}
          />
        </div>

        {/* Floating name plate */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl glass px-3 py-2"
             style={{ transform: 'translateZ(40px)' }}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">Available</div>
            <div className="text-sm font-semibold">{profile.name}</div>
          </div>
          <div className="text-right text-[10px] uppercase tracking-widest text-accent">
            {profile.location}
          </div>
        </div>

        {/* Corner badges */}
        <span className="absolute top-3 left-3 rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-widest backdrop-blur"
              style={{ transform: 'translateZ(60px)' }}>
          AI/ML
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-neon to-accent px-2 py-1 text-[10px] uppercase tracking-widest"
              style={{ transform: 'translateZ(60px)' }}>
          v2026
        </span>
      </div>

      {!hasCustomPhoto && (
        <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3 text-[11px] leading-relaxed text-white/60">
          <span className="font-mono text-accent">tip →</span> Drop your headshot at{' '}
          <code className="rounded bg-black/40 px-1 py-0.5">public/rahul.jpg</code>. The site
          will pick it up automatically (no config changes needed).
        </div>
      )}
    </motion.div>
  );
}
