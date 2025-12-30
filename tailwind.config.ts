import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#00B1D5",
          "blue-light": "#90E0EF",
        },
        background: {
          dark: "#000000",
          black: "#000000",
        },
        nav: {
          stroke: "#003556",
          gradient: {
            start: "#031D72",
            end: "#000000",
          },
        },
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
        geist: ["var(--font-geist)", "sans-serif"],
      },
      maxWidth: {
        "site-container": "1440px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;

