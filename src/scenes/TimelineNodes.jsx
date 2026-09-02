import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { experience } from '../data/content.js';

/**
 * Vertical curved timeline of glowing nodes.
 * Nodes pulse; a connecting line runs through them.
 */
export default function TimelineNodes({ small }) {
  const groupRef = useRef();

  const points = useMemo(() => {
    const total = experience.length;
    return experience.map((_, i) => {
      const t = i / Math.max(1, total - 1);
      const y = 2.4 - t * 4.8;
      const x = Math.sin(t * Math.PI * 1.4) * 0.6;
      const z = Math.cos(t * Math.PI * 1.2) * 0.3;
      return new THREE.Vector3(x, y, z);
    });
  }, []);

  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const tube = useMemo(() => new THREE.TubeGeometry(curve, 128, 0.015, 8, false), [curve]);

  useFrame((_, dt) => {
    if (groupRef.current) groupRef.current.rotation.y += dt * 0.15;
  });

  return (
    <group ref={groupRef} scale={small ? 0.75 : 1}>
      <mesh geometry={tube}>
        <meshBasicMaterial color={'#7c5cff'} transparent opacity={0.6} />
      </mesh>

      {points.map((p, i) => (
        <mesh key={i} position={p.toArray()}>
          <sphereGeometry args={[0.11, 24, 24]} />
          <meshStandardMaterial
            color={'#22d3ee'}
            emissive={'#22d3ee'}
            emissiveIntensity={1.4}
          />
        </mesh>
      ))}
    </group>
  );
}
