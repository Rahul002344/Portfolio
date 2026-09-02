import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

/**
 * A small stylized astronaut character — the visual "guide" who
 * accompanies visitors through the scenes. Built entirely from
 * three.js primitives so it needs no external asset.
 *
 * Props: any group props (position/scale/rotation).
 */
export default function Astronaut(props) {
  const groupRef = useRef();
  const armL = useRef();
  const armR = useRef();

  useFrame((state, dt) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += dt * 0.4;
    }
    // Waving arms
    const t = state.clock.elapsedTime;
    if (armL.current) armL.current.rotation.z = 0.6 + Math.sin(t * 2) * 0.25;
    if (armR.current) armR.current.rotation.z = -0.6 - Math.sin(t * 2 + 1) * 0.25;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.8} {...props}>
      <group ref={groupRef}>
        {/* Backpack */}
        <mesh position={[0, 0.05, -0.42]}>
          <boxGeometry args={[0.7, 0.9, 0.35]} />
          <meshStandardMaterial color={'#eaeaf2'} metalness={0.35} roughness={0.5} />
        </mesh>
        {/* Backpack antenna */}
        <mesh position={[0.2, 0.6, -0.55]}>
          <cylinderGeometry args={[0.02, 0.02, 0.35, 8]} />
          <meshStandardMaterial color={'#cfd3e0'} />
        </mesh>
        <mesh position={[0.2, 0.82, -0.55]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={'#22d3ee'} emissive={'#22d3ee'} emissiveIntensity={2} />
        </mesh>

        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <capsuleGeometry args={[0.5, 0.6, 8, 24]} />
          <meshStandardMaterial color={'#f4f4f8'} metalness={0.25} roughness={0.55} />
        </mesh>
        {/* Chest control panel */}
        <mesh position={[0, 0.1, 0.5]}>
          <boxGeometry args={[0.42, 0.28, 0.06]} />
          <meshStandardMaterial color={'#0a0f1f'} emissive={'#7c5cff'} emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[-0.1, 0.16, 0.54]}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial color={'#22d3ee'} emissive={'#22d3ee'} emissiveIntensity={2.5} />
        </mesh>
        <mesh position={[0.1, 0.16, 0.54]}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial color={'#a855f7'} emissive={'#a855f7'} emissiveIntensity={2.5} />
        </mesh>

        {/* Helmet */}
        <mesh position={[0, 0.75, 0]}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshPhysicalMaterial
            color={'#0a0f1f'}
            metalness={0.2}
            roughness={0.05}
            transmission={0.85}
            thickness={0.5}
            clearcoat={1}
            envMapIntensity={1.4}
          />
        </mesh>
        {/* Helmet inner (face gradient) */}
        <mesh position={[0, 0.72, 0.05]}>
          <sphereGeometry args={[0.36, 24, 24]} />
          <meshStandardMaterial color={'#1a2a5a'} emissive={'#22d3ee'} emissiveIntensity={0.25} />
        </mesh>
        {/* Helmet rim */}
        <mesh position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.44, 0.06, 12, 32]} />
          <meshStandardMaterial color={'#dfe4ef'} metalness={0.6} roughness={0.35} />
        </mesh>

        {/* Left arm */}
        <group position={[-0.55, 0.15, 0]}>
          <mesh ref={armL} rotation={[0, 0, 0.7]}>
            <capsuleGeometry args={[0.13, 0.5, 6, 16]} />
            <meshStandardMaterial color={'#f4f4f8'} />
          </mesh>
        </group>
        {/* Right arm */}
        <group position={[0.55, 0.15, 0]}>
          <mesh ref={armR} rotation={[0, 0, -0.7]}>
            <capsuleGeometry args={[0.13, 0.5, 6, 16]} />
            <meshStandardMaterial color={'#f4f4f8'} />
          </mesh>
        </group>

        {/* Legs */}
        <mesh position={[-0.2, -0.7, 0]}>
          <capsuleGeometry args={[0.16, 0.55, 6, 16]} />
          <meshStandardMaterial color={'#f4f4f8'} />
        </mesh>
        <mesh position={[0.2, -0.7, 0]}>
          <capsuleGeometry args={[0.16, 0.55, 6, 16]} />
          <meshStandardMaterial color={'#f4f4f8'} />
        </mesh>

        {/* Boots */}
        <mesh position={[-0.2, -1.05, 0.05]}>
          <boxGeometry args={[0.28, 0.14, 0.34]} />
          <meshStandardMaterial color={'#0a0f1f'} />
        </mesh>
        <mesh position={[0.2, -1.05, 0.05]}>
          <boxGeometry args={[0.28, 0.14, 0.34]} />
          <meshStandardMaterial color={'#0a0f1f'} />
        </mesh>
      </group>
    </Float>
  );
}
