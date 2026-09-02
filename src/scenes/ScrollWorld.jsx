import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroPlanet from './HeroPlanet.jsx';
import SkillOrbitors from './SkillOrbitors.jsx';
import ProjectMonoliths from './ProjectMonoliths.jsx';
import TimelineNodes from './TimelineNodes.jsx';
import ContactRocket from './ContactRocket.jsx';
import Astronaut from './Astronaut.jsx';

gsap.registerPlugin(ScrollTrigger);

/**
 * The whole 3D "world" lives here.
 *
 * Section anchors laid out along -Z. Camera flies through waypoints via GSAP.
 * The Astronaut mascot follows a parallel path so it feels like your guide.
 */
const SECTION_Z = {
  hero: 0,
  marquee: -12,
  about: -24,
  services: -38,
  skills: -52,
  process: -66,
  projects: -80,
  testimonials: -94,
  experience: -108,
  playground: -122,
  contact: -136,
};

export default function ScrollWorld({ isSmall }) {
  const { camera, mouse } = useThree();
  const camTarget = useRef(new THREE.Vector3(0, 0, 0));
  const lookTarget = useRef(new THREE.Vector3(0, 0, -2));
  const astroTarget = useRef(new THREE.Vector3(2, -0.4, -1));
  const astroRef = useRef();
  const groupRef = useRef();
  const tmpLook = useMemo(() => new THREE.Vector3(), []);

  useEffect(() => {
    const state = {
      z: 0, y: 0, x: 0,
      lookY: 0, lookX: 0,
      ax: 2, ay: -0.4, az: -1,
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.1,
      },
    });

    tl
      .to(state, { z: SECTION_Z.marquee, y: 0.2, x: 0.4, lookY: 0, lookX: 0.2, ax: -2, ay: 0.4, az: SECTION_Z.marquee - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.about, y: 0.5, x: -0.5, lookY: 0, lookX: -0.3, ax: 2.4, ay: -0.2, az: SECTION_Z.about - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.services, y: -0.2, x: 0.5, lookY: 0.2, lookX: 0.3, ax: -2.4, ay: 0.6, az: SECTION_Z.services - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.skills, y: 0, x: 0.6, lookY: 0.2, lookX: 0.4, ax: 2.6, ay: -0.3, az: SECTION_Z.skills - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.process, y: 0.4, x: -0.4, lookY: -0.1, lookX: -0.2, ax: -2.4, ay: 0.5, az: SECTION_Z.process - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.projects, y: -0.3, x: -0.2, lookY: -0.2, lookX: 0, ax: 2.8, ay: -0.2, az: SECTION_Z.projects - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.testimonials, y: 0.2, x: 0.3, lookY: 0.2, lookX: 0.1, ax: -2.6, ay: 0.4, az: SECTION_Z.testimonials - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.experience, y: 0.4, x: 0.4, lookY: 0.3, lookX: 0.2, ax: 2.4, ay: -0.4, az: SECTION_Z.experience - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.playground, y: -0.2, x: -0.5, lookY: -0.2, lookX: -0.3, ax: -2.4, ay: 0.6, az: SECTION_Z.playground - 1, ease: 'none' })
      .to(state, { z: SECTION_Z.contact, y: 0, x: 0, lookY: 0, lookX: 0, ax: 0, ay: 0, az: SECTION_Z.contact - 1.5, ease: 'none' });

    tl.eventCallback('onUpdate', () => {
      camTarget.current.set(state.x, state.y, state.z + 6);
      lookTarget.current.set(state.lookX, state.lookY, state.z - 2);
      astroTarget.current.set(state.ax, state.ay, state.az);
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  useFrame((_, dt) => {
    const d = Math.min(dt, 0.05);
    const parallaxX = mouse.x * 0.35;
    const parallaxY = mouse.y * 0.25;
    camera.position.x += (camTarget.current.x + parallaxX - camera.position.x) * (1 - Math.pow(0.001, d));
    camera.position.y += (camTarget.current.y + parallaxY - camera.position.y) * (1 - Math.pow(0.001, d));
    camera.position.z += (camTarget.current.z - camera.position.z) * (1 - Math.pow(0.001, d));

    tmpLook.copy(lookTarget.current);
    camera.lookAt(tmpLook);

    if (astroRef.current) {
      astroRef.current.position.x += (astroTarget.current.x - astroRef.current.position.x) * (1 - Math.pow(0.002, d));
      astroRef.current.position.y += (astroTarget.current.y - astroRef.current.position.y) * (1 - Math.pow(0.002, d));
      astroRef.current.position.z += (astroTarget.current.z - astroRef.current.position.z) * (1 - Math.pow(0.002, d));
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[6, 8, 4]} intensity={0.9} color={'#b3a4ff'} />
      <pointLight position={[-6, -4, -2]} intensity={1.2} color={'#22d3ee'} distance={20} />
      <Environment preset="night" />

      <Stars radius={110} depth={70} count={isSmall ? 1500 : 5500} factor={4} fade speed={0.6} />
      <Sparkles count={isSmall ? 60 : 140} scale={[30, 12, 130]} size={2} speed={0.4} color={'#7c5cff'} position={[0, 0, -68]} />

      {/* Traveling astronaut mascot */}
      <group ref={astroRef} position={[2, -0.4, -1]}>
        <Astronaut scale={isSmall ? 0.55 : 0.7} />
      </group>

      {/* Hero */}
      <group position={[0, 0, SECTION_Z.hero]}>
        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1.2}>
          <HeroPlanet />
        </Float>
      </group>

      {/* Marquee scene */}
      <group position={[0, 0, SECTION_Z.marquee]}>
        {Array.from({ length: 14 }).map((_, i) => {
          const a = (i / 14) * Math.PI * 2;
          const r = 3.2;
          return (
            <Float key={i} speed={1.4} rotationIntensity={0.6} floatIntensity={1}>
              <mesh position={[Math.cos(a) * r, Math.sin(a * 2) * 0.6, Math.sin(a) * r]}>
                <boxGeometry args={[0.25, 0.25, 0.25]} />
                <meshStandardMaterial color={'#0a0f1f'} emissive={i % 2 ? '#7c5cff' : '#22d3ee'} emissiveIntensity={1.2} />
              </mesh>
            </Float>
          );
        })}
      </group>

      {/* About — torus knot */}
      <group position={[2.2, 0.2, SECTION_Z.about]}>
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.5}>
          <mesh>
            <torusKnotGeometry args={[0.9, 0.28, 180, 24]} />
            <meshStandardMaterial
              color={'#7c5cff'}
              emissive={'#7c5cff'}
              emissiveIntensity={0.6}
              metalness={0.55}
              roughness={0.25}
            />
          </mesh>
        </Float>
      </group>

      {/* Services — floating icos */}
      <group position={[-1.8, 0, SECTION_Z.services]}>
        {Array.from({ length: 4 }).map((_, i) => {
          const a = (i / 4) * Math.PI * 2;
          return (
            <Float key={i} speed={1.5} rotationIntensity={0.7} floatIntensity={1.2}>
              <mesh position={[Math.cos(a) * 1.9, Math.sin(a) * 1.1, Math.sin(a) * 0.8]}>
                <icosahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color={'#0a0f1f'} emissive={['#7c5cff', '#22d3ee', '#a855f7', '#f472b6'][i]} emissiveIntensity={0.9} wireframe />
              </mesh>
            </Float>
          );
        })}
      </group>

      {/* Skills */}
      <group position={[-1.6, 0, SECTION_Z.skills]}>
        <SkillOrbitors small={isSmall} />
      </group>

      {/* Process — floating steps */}
      <group position={[1.8, 0, SECTION_Z.process]}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Float key={i} speed={1.3} rotationIntensity={0.5} floatIntensity={1}>
            <mesh position={[Math.sin(i) * 0.8, 1.2 - i * 0.9, Math.cos(i) * 0.5]}>
              <torusGeometry args={[0.5, 0.14, 16, 48]} />
              <meshStandardMaterial color={'#22d3ee'} emissive={'#22d3ee'} emissiveIntensity={0.7} />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Projects */}
      <group position={[0, -0.2, SECTION_Z.projects]}>
        <ProjectMonoliths small={isSmall} />
      </group>

      {/* Testimonials */}
      <group position={[-1.7, 0, SECTION_Z.testimonials]}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Float key={i} speed={1.2} rotationIntensity={0.7} floatIntensity={1.4}>
            <mesh position={[i * 1.4 - 1.4, Math.sin(i) * 0.4, 0]}>
              <octahedronGeometry args={[0.55, 0]} />
              <meshStandardMaterial color={'#a855f7'} emissive={'#a855f7'} emissiveIntensity={0.9} metalness={0.6} roughness={0.2} />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Experience */}
      <group position={[1.5, 0, SECTION_Z.experience]}>
        <TimelineNodes small={isSmall} />
      </group>

      {/* Playground */}
      <group position={[-1.5, 0, SECTION_Z.playground]}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Float key={i} speed={1.6 + i * 0.1} rotationIntensity={0.8} floatIntensity={1.4}>
            <mesh position={[Math.cos(i) * 1.6, Math.sin(i * 1.3) * 1.1, Math.sin(i) * 0.9]}>
              <dodecahedronGeometry args={[0.4, 0]} />
              <meshStandardMaterial color={'#0a0f1f'} emissive={i % 2 ? '#f472b6' : '#22d3ee'} emissiveIntensity={0.8} />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Contact — rocket */}
      <group position={[0, 0, SECTION_Z.contact]}>
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.4}>
          <ContactRocket />
        </Float>
      </group>
    </group>
  );
}
