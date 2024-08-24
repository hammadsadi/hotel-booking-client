/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "los-ster": "Lobster, 'sans-serif'",
      },
      colors: {
        primary: "#ff5f00",
        secondary: "#eee",
      },
    },
  },
  plugins: [],
};
