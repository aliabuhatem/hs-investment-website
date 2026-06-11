import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette as semantic tokens — never use raw hex in components.
        ink: '#15222B', // primary dark / navy depth
        charcoal: '#2B2C2C', // secondary surfaces, cards
        black: '#0A0A0A', // deep backgrounds, 3D voids, footer
        sand: {
          DEFAULT: '#DCD5CD', // light surfaces, text on dark
          50: '#F6F4F1',
          100: '#ECE8E3',
          200: '#DCD5CD',
          300: '#C4BAAE',
          400: '#A99C8C',
        },
        accent: {
          DEFAULT: '#ED5225', // orange — CTAs, highlights, active, glow
          soft: '#F2784F',
          deep: '#C63E16',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.35em',
        wide2: '0.18em',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      boxShadow: {
        // Single unified elevation scale.
        e1: '0 1px 2px rgba(0,0,0,0.24)',
        e2: '0 4px 16px rgba(0,0,0,0.28)',
        e3: '0 12px 40px rgba(0,0,0,0.36)',
        glow: '0 0 0 1px rgba(237,82,37,0.4), 0 8px 32px rgba(237,82,37,0.28)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-soft': 'cubic-bezier(0.7, 0, 0.84, 0)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bar-wipe': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.4s cubic-bezier(0.16,1,0.3,1) both',
        'bar-wipe': 'bar-wipe 0.5s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
