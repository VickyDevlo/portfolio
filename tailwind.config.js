/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1420",
        panel: "#161D2E",
        paper: "#EEF0F5",
        mist: "#93A0BC",
        mistdim: "#5C6785",
        blue: "#2E6FF2",
        bluedim: "#1C3E8C",
        ember: "#FF6B35",
        emberdim: "#8C3A1C",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"IBM Plex Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
