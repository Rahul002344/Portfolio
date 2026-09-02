import { useEffect, useState } from 'react';

/**
 * Tracks normalized mouse position (-1 → 1 on both axes).
 * Used for camera / model parallax.
 */
export default function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(e) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      setPos({ x, y });
    }
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return pos;
}
