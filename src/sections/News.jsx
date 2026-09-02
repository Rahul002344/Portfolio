import { motion } from 'framer-motion';
import { projects } from '../data/content.js';
import HoverVideoCard from '../components/HoverVideoCard.jsx';

const stories = [
  { tag: 'RESEARCH NOTE', title: 'Making traffic intelligence work at the edge.', project: projects[0], video: 'https://cdn.coverr.co/videos/coverr-programming-on-a-laptop-1573/1080p.mp4' },
  { tag: 'BUILD LOG', title: 'A 3D portfolio that treats the scroll as a stage.', project: projects[2], video: 'https://cdn.coverr.co/videos/coverr-laptop-typing-1578/1080p.mp4' },
  { tag: 'FIELD NOTE', title: 'Designing calmer interfaces for complex systems.', project: projects[3], video: 'https://cdn.coverr.co/videos/coverr-working-on-a-laptop-1577/1080p.mp4' },
];

export default function News() {
  return (
    <section id="news" className="section news-section">
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-coral">08 — Dispatches</p>
            <h2 className="font-display text-4xl font-semibold sm:text-6xl">Notes from the <span className="title-highlight">lab</span>.</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-muted">Selected field notes / 2026</span>
        </div>
        <div className="news-grid">
          {stories.map((story, index) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
              className="news-card"
            >
              <HoverVideoCard image={story.project.image} video={story.video} alt={`${story.title} preview`}><span className="news-number">0{index + 1}</span></HoverVideoCard>
              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-coral">{story.tag}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{story.title}</h3>
              <a href="#projects" className="news-link">Read project story <span>↗</span></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
