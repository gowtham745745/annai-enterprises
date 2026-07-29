/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F57C00",
          "orange-hover": "#E65100",
          "orange-light": "#FFF3E0",
          dark: "#171717",
          "dark-surface": "#212121",
          "dark-border": "#2D2D2D",
          light: "#F5F5F5",
          steel: "#6B7280",
          "steel-light": "#9CA3AF",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px rgba(245, 124, 0, 0.3)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'premium-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
