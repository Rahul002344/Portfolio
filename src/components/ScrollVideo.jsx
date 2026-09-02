import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import TechnicalVisual from './TechnicalVisual.jsx';

export default function ScrollVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const stageRotate = useTransform(progress, [0, 0.45, 1], [-3, 2, -1]);
  const stageScale = useTransform(progress, [0, 0.5, 1], [0.82, 1, 0.88]);
  const panelX = useTransform(progress, [0, 0.5, 1], ['-18%', '0%', '14%']);
  const panelY = useTransform(progress, [0, 0.5, 1], ['10%', '0%', '-10%']);
  const panelOpacity = useTransform(progress, [0, 0.18, 0.8, 1], [0, 1, 1, 0]);
  const stageLabel = useTransform(scrollYProgress, (value) => {
    if (value < 0.25) return '01 / CAPTURE';
    if (value < 0.55) return '02 / DETECT';
    if (value < 0.82) return '03 / UNDERSTAND';
    return '04 / SHIP';
  });
  const orbitOne = useTransform(progress, [0, 1], [0, 180]);
  const orbitTwo = useTransform(progress, [0, 1], [45, -135]);

  useEffect(() => {
    const stage = videoRef.current;
    if (!stage) return undefined;
    const observer = new IntersectionObserver(([entry]) => stage.classList.toggle('is-active', entry.isIntersecting), { threshold: 0.2 });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="motion" ref={sectionRef} className="section scroll-video-section scroll-film">
      <div className="scroll-film-sticky">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          className="video-copy"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-coral">04 — In motion</p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Ideas are better when they <span className="title-highlight">move</span>.
          </h2>
          <p className="mt-5 max-w-md text-muted">A live computer-vision pipeline, told as a four-part scroll sequence. Watch the system move from raw signal to useful decision.</p>
          <div className="film-stage-readout"><motion.span>{stageLabel}</motion.span><span><motion.i style={{ scaleX: scrollYProgress }} /> scroll to advance</span></div>
        </motion.div>
        <motion.div className="video-frame film-stage" style={{ rotate: stageRotate, scale: stageScale }}>
          <video className="technical-demo-video" src="https://videos.pexels.com/video-files/3130284/3130284-uhd_3840_2160_30fps.mp4" muted autoPlay loop playsInline preload="metadata" onError={(event) => { event.currentTarget.style.display = 'none'; }} aria-label="Technical interface animation" />
          <div ref={videoRef} className="video-technical-overlay"><TechnicalVisual compact /></div>
          <motion.div className="film-panel film-panel-left" style={{ x: panelX, y: panelY, opacity: panelOpacity }}><b>STREAM / 0042</b><span>frame received</span><strong>30.00 FPS</strong></motion.div>
          <motion.div className="film-panel film-panel-right" style={{ x: panelX, y: panelY, opacity: panelOpacity }}><b>MODEL OUTPUT</b><span>vehicle density</span><strong>HIGH / 82%</strong></motion.div>
          <motion.div className="film-orbit film-orbit-one" style={{ rotate: orbitOne }} />
          <motion.div className="film-orbit film-orbit-two" style={{ rotate: orbitTwo }} />
          <div className="video-frame-label"><span className="video-dot" /> Live visual study <span>Scroll-controlled</span></div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
