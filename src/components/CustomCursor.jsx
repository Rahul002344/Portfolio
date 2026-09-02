import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor: small dot + trailing ring.
 * Scales up when hovering any element marked with [data-cursor="hover"]
 * (or common interactive tags: a, button, input, textarea).
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setEnabled(mq.matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf;

    function loop() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    function onOver(e) {
      const t = e.target;
      const hover =
        t.closest('a, button, input, textarea, [data-cursor="hover"]') != null;
      ringRef.current?.classList.toggle('cursor-ring--hover', hover);
    }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 34,
          height: 34,
          borderRadius: '9999px',
          border: '1.5px solid rgba(124,92,255,0.7)',
          pointerEvents: 'none',
          zIndex: 999,
          transition: 'width .18s ease, height .18s ease, background-color .18s ease',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '9999px',
          background: '#22d3ee',
          pointerEvents: 'none',
          zIndex: 1000,
          boxShadow: '0 0 12px #22d3ee',
        }}
      />
      <style>{`
        .cursor-ring--hover {
          width: 56px !important;
          height: 56px !important;
          background: rgba(124,92,255,0.15);
        }
      `}</style>
    </>
  );
}
