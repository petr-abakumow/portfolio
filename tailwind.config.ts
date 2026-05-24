import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#1a1a1a',
          surface: '#282828',
          elevated: '#1f1f1f',
        },
        text: {
          primary: '#fafafa',
          muted: '#a0a0a0',
          dim: '#6b6b6b',
        },
        accent: {
          coral: '#ff4d5a',
          'coral-soft': '#ff4d5a33',
          blue: '#51a2e9',
        },
        line: {
          subtle: '#333333',
          strong: '#4d4d4d',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-raleway)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(40px, 8vw, 72px)', { lineHeight: '1.1' }],
        h2: ['clamp(32px, 5vw, 48px)', { lineHeight: '1.15' }],
        h3: ['clamp(24px, 3.5vw, 32px)', { lineHeight: '1.25' }],
      },
      letterSpacing: {
        wider2: '0.125em',
        widest2: '0.18em',
      },
      borderRadius: {
        '2': '2px',
        '10': '10px',
      },
    },
  },
  plugins: [],
};

export default config;
