export default {
  darkMode: "class", // 🔥 MUST ADD THIS

  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#a5d8ff",
        secondary: "#b2f2bb",

        bgMain: "#3b4456",
        bgSecondary: "#4a5568",
        bgDark: "#2d3748",

        textMain: "#e2e8f0",
        textSoft: "#cbd5e1",
      },
    },
  },

  plugins: [],
};