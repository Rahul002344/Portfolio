import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 text-center text-xs text-white/50">
      <div className="mx-auto max-w-6xl px-4">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with React,
          Three.js & a lot of ☕.
        </p>
        <p className="mt-1">
          <a href={profile.socials.github} className="hover:text-white">GitHub</a>
          <span className="mx-2 text-white/20">•</span>
          <a href={profile.socials.linkedin} className="hover:text-white">LinkedIn</a>
          <span className="mx-2 text-white/20">•</span>
          <a href={`mailto:${profile.email}`} className="hover:text-white">Email</a>
        </p>
      </div>
    </footer>
  );
}
