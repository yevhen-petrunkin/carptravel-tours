import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tn: "480px",
      },
      colors: {
        error: "#FF5757",
      },
    },
  },
  plugins: [],
};
export default config;
