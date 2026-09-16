/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F3EC',
        pine: {
          DEFAULT: '#1F3D3A',
          deep: '#162C2A',
          soft: '#2A4F4B',
        },
        rust: {
          DEFAULT: '#B5622E',
          dark: '#96501F',
          soft: '#D08A5A',
        },
        charcoal: '#2B2B28',
        sage: {
          DEFAULT: '#DCE3D3',
          light: '#EAF0E3',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Source Serif 4', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
