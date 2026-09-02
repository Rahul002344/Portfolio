import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { projects } from '../data/content.js';

/**
 * A row of tall 3D "monoliths" — one per project.
 * They gently bob and slowly rotate; each glows in its accent color.
 */
export default function ProjectMonoliths({ small }) {
  const groupRef = useRef();

  useFrame((_, dt) => {
    if (groupRef.current) groupRef.current.rotation.y += dt * 0.08;
  });

  const spacing = small ? 1.8 : 2.4;
  const startX = -((projects.length - 1) * spacing) / 2;

  return (
    <group ref={groupRef}>
      {projects.map((p, i) => (
        <Float
          key={p.title}
          speed={1.5}
          rotationIntensity={0.4}
          floatIntensity={0.8}
          position={[startX + i * spacing, 0, 0]}
        >
          <mesh castShadow>
            <boxGeometry args={[1, 1.8, 0.18]} />
            <meshStandardMaterial
              color={'#0a0f1f'}
              emissive={p.accent}
              emissiveIntensity={0.9}
              roughness={0.25}
              metalness={0.75}
            />
          </mesh>
          {/* thin glow bar at the bottom */}
          <mesh position={[0, -0.95, 0.11]}>
            <boxGeometry args={[0.85, 0.05, 0.02]} />
            <meshBasicMaterial color={p.accent} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
