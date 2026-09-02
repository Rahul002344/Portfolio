import { profile } from '../data/content.js';

/**
 * Rendered only when WebGL is unavailable — provides a
 * clean, accessible, fully static version of the site.
 */
export default function WebGLFallback() {
  return (
    <main className="min-h-screen bg-space text-white">
      <section className="section flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold gradient-text">{profile.name}</h1>
        <p className="mt-4 max-w-xl text-white/70">{profile.tagline}</p>
        <p className="mt-8 text-sm text-white/50">
          WebGL isn’t supported on your browser, so the 3D experience is disabled.
          You can still reach me at{' '}
          <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </section>
    </main>
  );
}
