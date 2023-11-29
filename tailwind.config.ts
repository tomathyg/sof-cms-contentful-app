import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-druk-wide-heavy)'],
        mono: ['var(--font-dm-mono)'],
        serif: ['var(--font-gambarino)'],
      },
      fontSize: {
        xsm: '0.5rem',
      },
      colors: {
        'off-white': '#e8e0c5',
        'orange': '#d6301a',
      },
      screens: {
        'xsm': '480px',
      },
      aspectRatio: {
        'landscape': '1.5 / 1',
        'portrait': '1 / 2',
        'portrait-tall': '1 / 3'
      },
      height: {
        'h-full-screen': 'calc(100vh - 170px)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config
