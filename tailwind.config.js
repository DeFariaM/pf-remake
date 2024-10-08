/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "var(--brand)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        bgray: "var(--bgray)",
      },
      fontFamily: {
        bebas: "var(--bebas)",
        montserrat: "var(--mont)",
      },
      backgroundImage: {
        pattern: "url('../public/img/subtle-prism.svg')",
        tornado: "url('../public/img/diamond-sunset.svg')",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
