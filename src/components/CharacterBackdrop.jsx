import { motion } from 'framer-motion';

const characters = [
  { className: 'character character-blue', label: '01', delay: 0 },
  { className: 'character character-coral', label: '02', delay: 0.8 },
  { className: 'character character-lime', label: '03', delay: 1.6 },
];

export default function CharacterBackdrop() {
  return (
    <div className="character-backdrop" aria-hidden="true">
      {characters.map((character) => (
        <motion.div
          key={character.label}
          className={character.className}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: character.delay },
            y: { duration: 4.5, delay: character.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <span className="character-number">{character.label}</span>
          <span className="character-antenna" />
          <span className="character-head"><i /><i /></span>
          <span className="character-body" />
          <span className="character-arm character-arm-left" />
          <span className="character-arm character-arm-right" />
          <span className="character-foot character-foot-left" />
          <span className="character-foot character-foot-right" />
        </motion.div>
      ))}
    </div>
  );
}
