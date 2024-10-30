/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // for custom colors
      colors: {
        mantis: {
          300: "#afd89d",
          600: "#4c8435",
          900: "#2b4522",
        },
        shark: {
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          700: "#4f4f4f",
        },
      },
    },
  },
  plugins: [],
};
