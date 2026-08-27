/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07090d',
        panel: '#0d1119',
        line: '#202633',
        mist: '#98a2b3',
        electric: '#4f8cff',
        cyan: '#48d9d3',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: { glow: '0 0 60px rgba(79,140,255,.16)' },
    },
  },
  plugins: [],
}
