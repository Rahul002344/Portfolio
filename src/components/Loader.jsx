import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Loading screen driven by drei's useProgress.
 * Fades out once assets finish loading, then calls onReady.
 */
export default function Loader({ onReady }) {
  const { progress, active } = useProgress();
  const [done, setDone] = useState(false);

  // Guarantee the loader dismisses even if there are no tracked assets
  // (all our meshes are procedural, so useProgress may stay at 0).
  useEffect(() => {
    const min = setTimeout(() => {
      setDone(true);
      onReady?.();
    }, 1200);
    return () => clearTimeout(min);
  }, [onReady]);

  useEffect(() => {
    if (!active && progress >= 100) {
      const t = setTimeout(() => {
        setDone(true);
        onReady?.();
      }, 400);
      return () => clearTimeout(t);
    }
  }, [active, progress, onReady]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-space"
        >
          <div className="relative mb-6">
            <div className="h-20 w-20 rounded-full border-2 border-white/10" />
            <div
              className="absolute inset-0 h-20 w-20 rounded-full border-2 border-transparent border-t-neon animate-spin"
              style={{ animationDuration: '1.1s' }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-sm font-mono text-white/80">
              {Math.floor(progress)}%
            </div>
          </div>
          <div className="text-xs tracking-[0.35em] uppercase text-white/60">
            Booting 3D world…
          </div>
          <div className="mt-6 h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-neon to-accent transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
