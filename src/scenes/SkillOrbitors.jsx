import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { skills } from '../data/content.js';

/**
 * Skill nodes orbiting a glowing central sphere.
 * Each node is placed around a sphere using Fibonacci lattice,
 * with a gentle rotation to feel alive.
 */
export default function SkillOrbitors({ small }) {
  const groupRef = useRef();

  const nodes = useMemo(() => {
    const count = Math.min(skills.length, small ? 8 : skills.length);
    const list = skills.slice(0, count);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const radius = 2.3;
    return list.map((s, i) => {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return {
        ...s,
        position: [Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius],
      };
    });
  }, [small]);

  useFrame((_, dt) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += dt * 0.2;
      groupRef.current.rotation.x += dt * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core */}
      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color={'#0a0f1f'}
          emissive={'#7c5cff'}
          emissiveIntensity={0.9}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </mesh>

      {nodes.map((n, i) => (
        <Float key={n.name} speed={2 + (i % 3)} rotationIntensity={0.5} floatIntensity={0.6}>
          <mesh position={n.position}>
            <boxGeometry args={[0.32, 0.32, 0.32]} />
            <meshStandardMaterial
              color={n.color}
              emissive={n.color}
              emissiveIntensity={0.6}
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}
