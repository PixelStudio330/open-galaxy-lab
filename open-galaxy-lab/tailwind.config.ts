import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        surfaceSoft: 'var(--surface-soft)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        accentSoft: 'var(--accent-soft)',
        panel: 'var(--panel)',
        border: 'var(--border)',
        navy: '#050814',
        ink: '#0d1323',
        mist: '#e8eef9',
        sky: '#94a6ff',
        violet: '#a685ff',
      },
      boxShadow: {
        soft: '0 40px 120px rgba(3, 13, 39, 0.32)',
      },
      backgroundImage: {
        cosmic:
          'radial-gradient(circle at top, rgba(111, 117, 255, 0.16), transparent 28%), radial-gradient(circle at 10% 15%, rgba(144, 190, 255, 0.08), transparent 16%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
