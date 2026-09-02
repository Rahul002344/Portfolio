import { useEffect, useState } from 'react';
import Loader from './components/Loader.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './sections/Hero.jsx';
import MarqueeSection from './sections/MarqueeSection.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Skills from './sections/Skills.jsx';
import Approach from './sections/Approach.jsx';
import Projects from './sections/Projects.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Experience from './sections/Experience.jsx';
import Playground from './sections/Playground.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import SceneCanvas from './scenes/SceneCanvas.jsx';
import useLenis from './hooks/useLenis.js';
import WebGLFallback from './components/WebGLFallback.jsx';

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function App() {
  const [webglOk, setWebglOk] = useState(true);
  const [, setReady] = useState(false);
  useLenis();

  useEffect(() => {
    setWebglOk(detectWebGL());
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.body.classList.add('custom-cursor');
    }
  }, []);

  if (!webglOk) return <WebGLFallback />;

  return (
    <>
      <Loader onReady={() => setReady(true)} />
      <CustomCursor />
      <ScrollProgress />
      {/* Fixed 3D layer behind all sections */}
      <SceneCanvas />

      {/* Foreground UI */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <MarqueeSection />
          <About />
          <Services />
          <Skills />
          <Approach />
          <Projects />
          <Testimonials />
          <Experience />
          <Playground />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
