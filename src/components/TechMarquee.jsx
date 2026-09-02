import { marqueeStack } from '../data/content.js';

/**
 * Infinite CSS-driven marquee of tech names. Duplicated content
 * so the loop is seamless. Reverses direction if `reverse` is true.
 */
export default function TechMarquee({ reverse = false, speed = 30 }) {
  const items = [...marqueeStack, ...marqueeStack];
  return (
    <div className="marquee relative overflow-hidden py-4 border-y border-white/10 bg-white/[0.02]">
      <div
        className="marquee-track flex whitespace-nowrap gap-10"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-2xl md:text-4xl font-display font-semibold text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-neon to-accent" />
            {t}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
