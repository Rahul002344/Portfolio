import { useEffect, useState } from 'react';

/**
 * Thin gradient bar at the top of the viewport that fills as
 * the user scrolls. Independent of Lenis — reads window.scrollY.
 */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop || document.body.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setPct(height > 0 ? (scrolled / height) * 100 : 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-neon via-accent to-glow shadow-glow"
        style={{ width: `${pct}%`, transition: 'width 120ms ease-out' }}
      />
    </div>
  );
}
