import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Ring } from '@react-three/drei';

/**
 * Hero centerpiece: a glowing distorted "planet" with an orbital ring.
 * Purely procedural — no external assets required.
 */
export default function HeroPlanet() {
  const planetRef = useRef();
  const ringRef = useRef();

  useFrame((_, dt) => {
    if (planetRef.current) planetRef.current.rotation.y += dt * 0.15;
    if (ringRef.current) {
      ringRef.current.rotation.z += dt * 0.35;
      ringRef.current.rotation.x = Math.PI / 2.4;
    }
  });

  return (
    <group>
      <Sphere ref={planetRef} args={[1.35, 96, 96]}>
        <MeshDistortMaterial
          color={'#7c5cff'}
          emissive={'#4b2fff'}
          emissiveIntensity={0.55}
          roughness={0.28}
          metalness={0.6}
          distort={0.35}
          speed={1.6}
        />
      </Sphere>

      <Ring ref={ringRef} args={[1.9, 2.05, 128]}>
        <meshBasicMaterial color={'#22d3ee'} transparent opacity={0.85} />
      </Ring>

      {/* Small satellite */}
      <mesh position={[2.4, 0.4, 0.2]}>
        <sphereGeometry args={[0.08, 24, 24]} />
        <meshStandardMaterial color={'#22d3ee'} emissive={'#22d3ee'} emissiveIntensity={2} />
      </mesh>
    </group>
  );
}
