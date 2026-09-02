import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
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
import CharacterBackdrop from './components/CharacterBackdrop.jsx';
import BackgroundGallery from './components/BackgroundGallery.jsx';
import InteractiveWindows from './components/InteractiveWindows.jsx';
import ScrollVideo from './components/ScrollVideo.jsx';
import News from './sections/News.jsx';

export default function App() {
  useEffect(() => {
    document.body.classList.add('editions-theme');
    return () => document.body.classList.remove('editions-theme');
  }, []);

  return (
    <>
      <div className="relative z-10">
        <BackgroundGallery />
        <Navbar />
        <main>
          <CharacterBackdrop />
          <Hero />
          <MarqueeSection />
          <About />
          <Services />
          <InteractiveWindows />
          <ScrollVideo />
          <Skills />
          <Approach />
          <Projects />
          <Testimonials />
          <Experience />
          <Playground />
          <News />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
