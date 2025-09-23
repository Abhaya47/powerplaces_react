/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
  ],
  theme: {
    extend: {
      colors:{
        'pastel-pink': '#FCE6EE',
        'pastel-blue': '#FEF7F7',
        pastelgreen: '#a8e6cf',
        pastelpurple: '#d4c5f9',
        pastelyellow: '#fff2cc',
        pastelpeach: '#ffcccb',
        matchagreen: '#87a96b',

      },
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
