/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9c9c9c",
        secondary: "#111827",
        accent: "#3f8e00",
        neutral: "#1B1B1B",
        base: "#080808",
        info: "#62ba1b",
        success: "#2ab090",
        warning: "#000aff",
        error: "#c2410c",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ibm: ["IBM Plex Mono", "monospace"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
