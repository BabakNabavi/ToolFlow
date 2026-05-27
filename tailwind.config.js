/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink:     '#0f0f0f',
        'ink-2': '#3a3a3a',
        'ink-3': '#787878',
        canvas:  '#faf9f7',
        surface: '#ffffff',
        border:  '#e8e5e0',
        'border-dark': '#d4d0ca',
        fire:    '#e8440c',
        'fire-light': '#fff1ec',
        'fire-mid': '#ffd4c4',
        sage:    '#2d6a4f',
        sky:     '#0369a1',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        shimmer:   'shimmer 1.4s linear infinite',
      },
    },
  },
  plugins: [],
}
