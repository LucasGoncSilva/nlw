/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background.png')",
        gradientDUO: 'linear-gradient(90deg, #9572fc, #43e7ad, #e1d55d)',
        gradientBanner: 'linear-gradient(to top, #000, #0000)',
      }
    },
  },
  plugins: [],
}
