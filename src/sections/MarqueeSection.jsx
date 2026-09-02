import TechMarquee from '../components/TechMarquee.jsx';

/**
 * Two counter-rotating rows of tech names. Sits between hero and about.
 */
export default function MarqueeSection() {
  return (
    <section id="marquee" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">Trusted stack</p>
        <h2 className="mt-3 font-display text-2xl md:text-3xl font-medium text-white/80">
          Built with battle-tested tools. Shipped with love.
        </h2>
      </div>
      <TechMarquee />
      <div className="h-4" />
      <TechMarquee reverse speed={38} />
    </section>
  );
}
