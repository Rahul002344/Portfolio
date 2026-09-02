import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * A simple stylized 3D rocket for the contact section.
 * Built from primitives — replace with a GLTF later if desired
 * (see README section "Adding your own GLTF models").
 */
export default function ContactRocket() {
  const groupRef = useRef();

  useFrame((_, dt) => {
    if (groupRef.current) groupRef.current.rotation.y += dt * 0.35;
  });

  return (
    <group ref={groupRef} rotation={[0.15, 0, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.35, 1.2, 8, 24]} />
        <meshStandardMaterial color={'#f4f4f8'} metalness={0.5} roughness={0.35} />
      </mesh>

      {/* Nose cone */}
      <mesh position={[0, 1.05, 0]}>
        <coneGeometry args={[0.35, 0.6, 24]} />
        <meshStandardMaterial color={'#7c5cff'} emissive={'#7c5cff'} emissiveIntensity={0.4} />
      </mesh>

      {/* Fins */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} rotation={[0, (i * Math.PI) / 2, 0]} position={[0, -0.7, 0]}>
          <boxGeometry args={[0.05, 0.4, 0.35]} />
          <meshStandardMaterial color={'#22d3ee'} emissive={'#22d3ee'} emissiveIntensity={0.6} />
        </mesh>
      ))}

      {/* Flame */}
      <mesh position={[0, -1.3, 0]}>
        <coneGeometry args={[0.2, 0.7, 24]} />
        <meshBasicMaterial color={'#ffb14d'} />
      </mesh>
      <mesh position={[0, -1.55, 0]}>
        <coneGeometry args={[0.11, 0.4, 24]} />
        <meshBasicMaterial color={'#fff2b0'} />
      </mesh>
    </group>
  );
}
