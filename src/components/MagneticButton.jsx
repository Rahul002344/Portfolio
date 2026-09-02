import { useRef } from 'react';

/**
 * A button/link that magnetically follows the cursor when hovered.
 * Wrap any anchor content — supports both <a href> and <button onClick>.
 */
export default function MagneticButton({ href, onClick, children, className = '', strength = 0.35, ...rest }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
  }

  const props = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className: `inline-flex items-center gap-2 will-change-transform transition-transform duration-200 ${className}`,
    'data-cursor': 'hover',
    ...rest,
  };

  if (href) return <a href={href} {...props}>{children}</a>;
  return <button onClick={onClick} {...props}>{children}</button>;
}
