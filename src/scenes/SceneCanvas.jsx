import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { AdaptiveDpr, AdaptiveEvents, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import ScrollWorld from './ScrollWorld.jsx';

/**
 * Fixed, full-viewport 3D canvas that sits behind all HTML sections.
 * Camera + scene content are driven by scroll via GSAP ScrollTrigger.
 *
 * Performance-first:
 *  - pixel ratio clamped
 *  - postprocessing disabled on small screens
 *  - AdaptiveDpr scales DPR under load
 */
export default function SceneCanvas() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="fixed-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, isSmall ? 1.25 : 1.75]}
        camera={{ position: [0, 0, 6], fov: 55, near: 0.1, far: 100 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <color attach="background" args={[0x05070f]} />
        <fog attach="fog" args={[0x05070f, 8, 30]} />

        <Suspense fallback={null}>
          <ScrollWorld isSmall={isSmall} />
          <Preload all />
        </Suspense>

        {!isSmall && (
          <EffectComposer multisampling={0} disableNormalPass>
            <Bloom
              intensity={0.9}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.2} darkness={0.85} />
          </EffectComposer>
        )}

        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </div>
  );
}
