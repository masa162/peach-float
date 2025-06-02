/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#fff5f5",
          100: "#ffeaea",
          200: "#ffd4d6",
          300: "#ffc0c3",
          400: "#ff9e9f",
          500: "#ff7d7c",
          600: "#ff5b59",
          700: "#e14443",
          800: "#c92f2e",
          900: "#b01a1a",
          950: "#650c0b"
        }
      }
    }
  }
};
