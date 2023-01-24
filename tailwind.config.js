/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        adhesion: ["Adhesion", "sans-serif"],
      },
      colors: {
        dove: "#000612",
        olive: "#a1abb5",
      },
      dropShadow: {
        dove: "0 4px 20px 0 rgba(0,0,0,.3)",
        glass:
          "inset 6px 84px 79px -40px hsla(0,0%,100%,.01),inset 0 -4px 1px -3px hsla(0,0%,100%,.25),inset 0 4px 1px -3px hsla(0,0%,100%,.25)",
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
