/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'forest-night': '#1b4332',
        'canopy':       '#2d6a4f',
        'stem':         '#40916c',
        'pale-sprout':  '#d8f3dc',
        'ink':          '#1c1c1a',
        'stone':        '#6b7280',
        'parchment':    '#e4e4e0',
        'cream':        '#f7f7f5',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}