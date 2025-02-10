/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#f9f9f9",
        darkBg: "#1a202c",
        lightText: "#1a202c",
        darkText: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
