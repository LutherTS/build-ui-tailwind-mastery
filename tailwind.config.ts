import type { Config } from "tailwindcss";

const ICON = 3; // for handling rounded-full dynamically

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // from Next.js
        background: "var(--background)",
        foreground: "var(--foreground)",
        // from me
        gray: {
          50: "#ECEDEE",
          100: "#DCDDDE",
          200: "#B9BBBE",
          300: "#829297",
          400: "#72767D",
          500: "#5C6067",
          600: "#464950",
          700: "#36393F",
          800: "#2F3136",
          900: "#202225",
        },
        brand: "#5865F2",
      },
      fontFamily: {
        // from Next.js
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        // from me
        ginto: ["var(--font-ginto)"],
        whitney: ["var(--font-whitney)"],
      },
      size: {
        icon: `${ICON}rem`,
      },
      borderRadius: {
        icon: `${ICON / 2}rem`,
        "icon-hover": `${ICON / 3}rem`, // now that's flexing
      },
    },
  },
  plugins: [],
};
export default config;
