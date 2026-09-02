import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="relative z-10 editorial-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="footer-kicker">© {new Date().getFullYear()} / {profile.location}</p>
          <h2 className="footer-title">Let’s make<br /><em>something useful.</em></h2>
        </div>
        <div className="footer-links">
          <a href="#hero">Back to top <span>↑</span></a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href={`mailto:${profile.email}`}>Email <span>↗</span></a>
        </div>
      </div>
    </footer>
  );
}
