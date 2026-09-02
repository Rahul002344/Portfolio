import { useEffect, useState } from 'react';

/**
 * Types through an array of phrases with pause + delete cycle.
 */
export default function Typewriter({ phrases, typingSpeed = 60, pause = 1400, className = '' }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    let delay = typingSpeed;

    if (!deleting && text === current) {
      delay = pause;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1),
      );
    }, deleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases, typingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-current ml-1 animate-pulseGlow" />
    </span>
  );
}
