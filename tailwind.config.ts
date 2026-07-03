import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        ink: 'var(--color-text)',
        line: 'var(--color-line)'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      backgroundImage: {
        marker: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 16' preserveAspectRatio='none'%3E%3Cpath d='M2 10 Q 50 2, 100 8 T 198 6' stroke='%234F46E5' stroke-width='6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")"
      },
      borderRadius: {
        card: '10px'
      }
    }
  },
  plugins: []
};

export default config;
