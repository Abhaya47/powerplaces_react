/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-[url('/src/assets/hamburgbg.png')]",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      keyframes: {
        'fade-in': {
          '0%': { scale:0.8, opacity: 1 },
          '100%': { scale:1, opacity: 0 },
        },
      },
      animation: {
        fadeoutup: "fade-out 3s ease-in-out infinite", 
      },
    },
  },
  plugins: [],
}
