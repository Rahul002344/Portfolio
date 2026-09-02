import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Enables smooth, physics-based scrolling site-wide.
 * Also drives the Lenis raf loop and keeps GSAP ScrollTrigger in sync
 * when it's imported elsewhere.
 */
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
