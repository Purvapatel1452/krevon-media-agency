/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A8B4BE",
        secondary: "#C8D2DA",
        accent: "#6A7880",
        dark: {
          DEFAULT: "#0C0D0F",
          light: "#131518",
          lighter: "#1E2228",
        },
        light: "#F0F2F4",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spotlight': 'spotlight 6s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-600px 0' },
          '100%': { backgroundPosition: '600px 0' },
        },
        spotlight: {
          '0%, 100%': { opacity: '0.06' },
          '50%': { opacity: '0.12' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(2%, 1%)' },
          '30%': { transform: 'translate(-1%, 3%)' },
          '40%': { transform: 'translate(3%, -1%)' },
          '50%': { transform: 'translate(-2%, 2%)' },
          '60%': { transform: 'translate(1%, -2%)' },
          '70%': { transform: 'translate(-3%, 1%)' },
          '80%': { transform: 'translate(2%, 3%)' },
          '90%': { transform: 'translate(-1%, -1%)' },
        },
      },
    },
  },
  plugins: [],
}

