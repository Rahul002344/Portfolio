import { motion, AnimatePresence } from 'framer-motion';
import { about, experience, profile } from '../data/content.js';

export default function ResumeWindow({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="resume-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            className="resume-window"
            initial={{ opacity: 0, y: 32, scale: 0.78, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 24, scale: 0.82, filter: 'blur(8px)' }}
            transition={{
              opacity: { duration: 0.3 },
              y: { type: 'spring', stiffness: 170, damping: 19 },
              scale: { type: 'spring', stiffness: 170, damping: 19 },
              filter: { duration: 0.3, ease: 'easeOut' },
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <header className="resume-window-bar">
              <span className="resume-dots"><i /><i /><i /></span>
              <span>rahul_resume.pdf</span>
              <button type="button" onClick={onClose} aria-label="Close resume">×</button>
            </header>
            <div className="resume-window-body">
              <div className="resume-heading">
                <div><p className="resume-eyebrow">Curriculum vitae / 2026</p><h2 id="resume-title">{profile.name}</h2><p>{profile.role}</p></div>
                <a className="edition-button edition-button-lime" href={profile.resumeUrl === '#' ? `mailto:${profile.email}` : profile.resumeUrl} target={profile.resumeUrl === '#' ? undefined : '_blank'} rel="noreferrer">View full resume ↗</a>
              </div>
              <p className="resume-summary">{about.paragraphs[0]}</p>
              <div className="resume-columns">
                <div><p className="resume-label">Experience</p>{experience.slice(0, 3).map((item) => <article key={item.role} className="resume-item"><strong>{item.role}</strong><span>{item.dates}</span><small>{item.org}</small></article>)}</div>
                <div><p className="resume-label">Contact</p><p className="resume-contact">{profile.email}<br />{profile.location}<br />{profile.socials.linkedin.replace('https://', '')}</p><p className="resume-label">Focus</p><p className="resume-contact">Machine learning<br />Full-stack systems<br />Interactive technology</p></div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
