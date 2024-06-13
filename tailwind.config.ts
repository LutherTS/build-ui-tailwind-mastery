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
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        ginto: ["var(--font-ginto)"],
        whitney: ["var(--font-whitney)"],
      },
    },
  },
  plugins: [],
};
export default config;
