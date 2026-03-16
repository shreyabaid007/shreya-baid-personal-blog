import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', ...fontFamily.serif],
        body: ['var(--font-lora)', ...fontFamily.serif],  // no change needed here actually
        mono: ['var(--font-jetbrains)', ...fontFamily.mono],
      },
      colors: {
        ink: {
          DEFAULT: '#18181B',
          soft: '#3F3F46',
          muted: '#71717A',
          faint: '#A1A1AA',
        },
        paper: {
          DEFAULT: '#F9F8F5',
          warm: '#F4F2ED',
          border: '#E4E2DC',
        },
        forest: {
          DEFAULT: '#0F4C35',
          light: '#1A6B4A',
          pale: '#E8F3EE',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#3F3F46',
            '--tw-prose-headings': '#18181B',
            '--tw-prose-links': '#0F4C35',
            '--tw-prose-bold': '#18181B',
            '--tw-prose-counters': '#71717A',
            '--tw-prose-bullets': '#71717A',
            '--tw-prose-hr': '#E4E2DC',
            '--tw-prose-quotes': '#18181B',
            '--tw-prose-quote-borders': '#0F4C35',
            '--tw-prose-captions': '#71717A',
            '--tw-prose-code': '#18181B',
            '--tw-prose-pre-code': '#E4E2DC',
            '--tw-prose-pre-bg': '#1C1C1E',
            '--tw-prose-th-borders': '#E4E2DC',
            '--tw-prose-td-borders': '#E4E2DC',
            maxWidth: 'none',
            fontSize: '1.0625rem',
            lineHeight: '1.85',
            fontFamily: 'var(--font-lora)',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            h1: { fontFamily: 'var(--font-playfair)', fontWeight: '700' },
            h2: { fontFamily: 'var(--font-playfair)', fontWeight: '700', marginTop: '2.5em' },
            h3: { fontFamily: 'var(--font-playfair)', fontWeight: '600', marginTop: '2em' },
            a: {
              textDecoration: 'underline',
              textDecorationColor: '#0F4C3550',
              textUnderlineOffset: '3px',
              fontWeight: 'inherit',
              transition: 'text-decoration-color 0.15s',
              '&:hover': {
                textDecorationColor: '#0F4C35',
              }
            },
            code: {
              fontFamily: 'var(--font-jetbrains)',
              fontSize: '0.875em',
              background: '#F4F2ED',
              padding: '0.15em 0.4em',
              borderRadius: '3px',
              fontWeight: '400',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
            pre: {
              borderRadius: '6px',
              padding: '1.5em',
              marginTop: '1.75em',
              marginBottom: '1.75em',
            },
            blockquote: {
              fontStyle: 'normal',
              borderLeftWidth: '2px',
              paddingLeft: '1.5em',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
