import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/content.js';

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // For real send, integrate EmailJS or a serverless function.
    // Here we open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio contact from ${state.name}`);
    const body = encodeURIComponent(`${state.message}\n\n— ${state.name} (${state.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent">09 — Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight">
            Let's build something <span className="gradient-text">great</span>.
          </h2>
          <p className="mt-4 text-white/70">
            Reach out for collaborations, roles, or just to say hi. Response within 24h.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/5 border border-white/10">✉</span>
              {profile.email}
            </a>
            <div className="flex items-center gap-3 text-white/60">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/5 border border-white/10">◎</span>
              {profile.location}
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {[
              { label: 'GitHub', href: profile.socials.github },
              { label: 'LinkedIn', href: profile.socials.linkedin },
              { label: 'X', href: profile.socials.twitter },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest hover:bg-white/10"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="glass neon-border md:col-span-3 rounded-2xl p-6 space-y-4"
        >
          <FloatingField
            label="Your name"
            value={state.name}
            onChange={(v) => setState((s) => ({ ...s, name: v }))}
            required
          />
          <FloatingField
            label="Email"
            type="email"
            value={state.email}
            onChange={(v) => setState((s) => ({ ...s, email: v }))}
            required
          />
          <FloatingField
            label="Message"
            textarea
            value={state.message}
            onChange={(v) => setState((s) => ({ ...s, message: v }))}
            required
          />

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-white/50">
              {sent ? 'Thanks — your mail app should be open.' : 'By sending, you agree to be contacted back.'}
            </span>
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-neon to-accent px-6 py-3 text-sm font-medium text-white shadow-glow hover:brightness-110"
            >
              Send message →
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function FloatingField({ label, value, onChange, type = 'text', textarea = false, required }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Comp = textarea ? 'textarea' : 'input';
  return (
    <label className="relative block">
      <span
        className={`pointer-events-none absolute left-4 transition-all ${
          active ? 'top-1 text-[10px] uppercase tracking-widest text-accent' : 'top-3.5 text-sm text-white/50'
        }`}
      >
        {label}
      </span>
      <Comp
        type={textarea ? undefined : type}
        value={value}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        rows={textarea ? 4 : undefined}
        className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pt-6 pb-2 text-sm text-white outline-none focus:border-neon/60 focus:bg-white/10"
      />
    </label>
  );
}
