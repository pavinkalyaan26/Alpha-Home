import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      screens: {
        xs: '320px',
        sm: '375px'
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'single-ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1)',
        'tilt-shaking': 'tilt-shaking .5s infinite linear',
        'move-shaking': 'tilt-n-move-shaking 1s infinite linear',
        'jello-vertical': 'jello-vertical 3s both infinite',
        'wobble-right': 'wobble-ver-right 3s both infinite',
        'tada':"tada 10s linear infinite;"
      },
      colors: {
        primary: {
          50:'#eaf4fb',
          100: '#d5e9f6',
          200: '#c5e1f3',
          300: '#c0dff2',
          400: '#95c9e9',
          500: '#6bb3e1',
          600: '#419ed8',
          700: '#2784be',
          800: '#1e6794',
          DEFAULT: '#c5e1f3'
        },
        primary2: {
          50:'#fbe9f2',
          100: '#f9ddeb',
          200: '#f4bed9',
          300: '#f0a8cc',
          400: '#e87db3',
          500: '#e05299',
          600: '#d92680',
          700: '#ad1f66',
          800: '#82174d',
          DEFAULT: '#f9ddeb'
        },
        secondary: {
          100: '#fceccf',
          200: '#fad89e',
          300: '#f8c976',
          400: '#f6bb55',
          500: '#f4a825',
          600: '#da8e0b',
          700: '#aa6f09',
          800: '#794f06',
          DEFAULT: '#f8c976',
        },
        salmon: {
          100: '#fde8ea',
          200: '#f8bac1',
          300: '#f496a1',
          400: '#f07583',
          500: '#ec465a',
          600: '#e71830',
          700: '#b91327',
          800: '#8a0f1d',
          DEFAULT: '#f496a1'
        },
        jade: {
          100: '#d1faf6',
          200: '#a2f6ec',
          300: '#74f1e3',
          400: '#45edd9',
          500: '#17e8d0',
          600: '#12baa6',
          700: '#0f9b8a',
          800: '#0b7468',
          DEFAULT: '#0f9b8a'
        },
        black: {
          100: '#434356',
          200: '#373748',
          300: '#2c2c3a',
          400: '#21212b',
          500: '#16161d',
          600: '#111116',
          700: '#0b0b0e',
          DEFAULT: '#000000'
        },
        gray: {
          100: '#f2f2f2',
          200: '#e5e5e6',
          300: '#d8d8d9',
          400: '#cbcbcd',
          500: '#bfbfc0',
          600: '#b7b7b9',
          700: '#b2b2b3',
          800: '#a5a5a7',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      maxWidth: {
        '8xl': '100rem'
      },
      zIndex: {
        '-z-100': '-100'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config