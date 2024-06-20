/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'md': '920px',
    },
    extend: {
      backgroundPosition: {
        "top-50": "0 -50px",
      },
    },
  },
  plugins: [],
};
