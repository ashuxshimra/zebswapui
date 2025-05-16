/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: "#a78bfa",
            DEFAULT: "#8b5cf6", 
            dark: "#7c3aed",
          },
          secondary: "#3b82f6",
          background: {
            dark: "#0f172a",
            DEFAULT: "#1e293b",
            light: "#334155"
          },
          card: {
            DEFAULT: "#1e1b4b",
            light: "#312e81",
          }
        },
      },
    },
    plugins: [],
  }