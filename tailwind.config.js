// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0', transform: 'translateY(-5px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'dropdown-fade': {
            '0%': { opacity: '0', transform: 'translateY(5px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'shake': {
            '0%, 100%': { transform: 'translateX(0)' },
            '25%': { transform: 'translateX(-3px)' },
            '75%': { transform: 'translateX(3px)' },
          }
        },
        animation: {
          'fade-in': 'fade-in 0.2s ease-out',
          'dropdown-fade': 'dropdown-fade 0.15s ease-out',
          'shake': 'shake 0.3s ease-in-out'
        }
      },
    },
    plugins: [],
  }