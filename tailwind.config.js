/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1565C0',
        'primary-dark': '#0D47A1',
        'primary-light': '#E3F2FD',
        section: '#F8FAFC',
        ink: '#263238',
        'ink-soft': '#607D8B',
        border: '#E2E8F0',
        success: '#2E7D32',
        error: '#D32F2F',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(21, 101, 192, 0.08)',
        'card-hover': '0 12px 32px rgba(21, 101, 192, 0.16)',
      },
    },
  },
  plugins: [],
}
