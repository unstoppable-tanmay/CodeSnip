import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        FiraMono: ["Fira Mono", "monospace"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
    },
    colors: {
      def_dark_purple: "#141318",
      def_blue_gray: "#1d1e22",
      def_rose: "#ff5f56",
      def_gold: "#ffbd2e",
      def_green: "#27c93f",
      def_white: "#ffffff",
      def_text_primary: "#ffffff",
      def_text_second: "#555457",
    },
  },
  plugins: [],
};
export default config;
