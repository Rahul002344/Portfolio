import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/content.js';

const chapters = [
  { id: 'hero', label: '01 / INTRO', image: projects[2].image, accent: '#d7f75b', topic: 'WEB / INTERFACE', title: 'Interfaces in motion' },
  { id: 'about', label: '02 / ABOUT', image: projects[3].image, accent: '#4a62ff', topic: 'ML / PIPELINE', title: 'Models become systems' },
  { id: 'services', label: '03 / SERVICES', image: projects[1].image, accent: '#e86346', topic: 'SYSTEMS / DATA', title: 'Signals into decisions' },
  { id: 'skills', label: '04 / SKILLS', image: projects[2].image, accent: '#d7f75b', topic: '3D / WEBGL', title: 'Depth you can feel' },
  { id: 'projects', label: '05 / PROJECTS', image: projects[2].image, accent: '#4a62ff', topic: 'WEB / INTERFACE', title: 'Interfaces in motion' },
  { id: 'experience', label: '06 / EXPERIENCE', image: projects[1].image, accent: '#e86346', topic: 'SYSTEMS / DATA', title: 'Signals into decisions' },
  { id: 'contact', label: '07 / CONTACT', image: projects[3].image, accent: '#d7f75b', topic: '3D / WEBGL', title: 'Depth you can feel' },
];

const books = [
  { title: 'VISION', color: '#d7f75b' },
  { title: 'SYSTEMS', color: '#4a62ff' },
  { title: 'WEBGL', color: '#e86346' },
];

function getActiveChapter() {
  const midpoint = window.innerHeight * 0.42;
  let active = 0;
  chapters.forEach((chapter, index) => {
    const section = document.getElementById(chapter.id);
    if (section && section.getBoundingClientRect().top <= midpoint) active = index;
  });
  return active;
}

export default function BackgroundGallery() {
  const [active, setActive] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setActive((current) => {
        const next = getActiveChapter();
        return current === next ? current : next;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const chapter = chapters[active];

  return (
    <div className="background-gallery" style={{ '--chapter-accent': chapter.accent, '--chapter-progress': (active + 1) / chapters.length }} aria-hidden="true">
      <AnimatePresence mode="sync">
        <motion.img
          key={chapter.image}
          src={chapter.image}
          alt=""
          className="background-gallery-image"
          initial={{ opacity: 0, scale: 1.12, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -20 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>
      {!videoFailed && (
        <video
          className="ambient-background-video"
          src="https://videos.pexels.com/video-files/3130284/3130284-uhd_3840_2160_30fps.mp4"
          poster={chapter.image}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        />
      )}
      <div className="background-gallery-wash" />
      <div className="background-gallery-constellation">{chapters.map((item, index) => <i key={item.id} className={index === active ? 'is-active' : ''} />)}</div>
      <div className="scene-props">
        <div className={`book-stack book-stack-${active}`}>
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              className="scene-book"
              style={{ background: book.color, zIndex: books.length - index }}
              animate={{
                x: (active % 2 ? 1 : -1) * index * 16,
                rotate: (active % 2 ? 1 : -1) * (index * 5 + 3),
              }}
              transition={{ type: 'spring', stiffness: 90, damping: 16, delay: index * 0.06 }}
            >
              <span>{book.title}</span>
              <b>{String(active + index + 1).padStart(2, '0')}</b>
            </motion.div>
          ))}
        </div>
        <div className="spark-field">
          {Array.from({ length: 18 }).map((_, index) => (
            <i key={index} style={{ '--spark-x': `${(index * 37) % 100}%`, '--spark-y': `${(index * 53) % 100}%`, '--spark-delay': `${(index % 6) * 0.3}s` }} />
          ))}
        </div>
      </div>
      <div className="background-gallery-meta">
        <span>{chapter.label}</span>
        <span className="background-gallery-progress">
          {String(active + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
        </span>
      </div>
      <div className="background-gallery-line" style={{ transform: `scaleY(${(active + 1) / chapters.length})` }} />
    </div>
  );
}
