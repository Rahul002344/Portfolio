/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        space: '#05070f',
        deep: '#0a0f1f',
        neon: '#7c5cff',
        accent: '#22d3ee',
        glow: '#a855f7',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 92, 255, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        floatY: 'floatY 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
