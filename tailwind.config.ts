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
        overlayMod: "#010A05",
        overlayBg: "#020F08",
      },

      backgroundImage: {
        "hero-sm": "url('/assets/sm/hero-sm.jpg')",
        "hero-md": "url('/assets/md/hero-md.jpg')",
        "hero-xl": "url('/assets/xl/hero-xl.jpg')",

        "about-sm": "url('/assets/sm/about-sm.jpg')",
        "about-md": "url('/assets/md/about-md.jpg')",
        "about-xl": "url('/assets/xl/about-xl.jpg')",

        "career-sm": "url('/assets/sm/career-sm.jpg')",
        "career-md": "url('/assets/md/career-md.jpg')",
        "career-xl": "url('/assets/xl/career-xl.jpg')",

        "gallery-sm": "url('/assets/sm/gallery-sm.jpg')",
        "gallery-md": "url('/assets/md/gallery-md.jpg')",
        "gallery-xl": "url('/assets/xl/gallery-xl.jpg')",

        "contacts-sm": "url('/assets/sm/contacts-sm.jpg')",
        "contacts-md": "url('/assets/md/contacts-md.jpg')",
        "contacts-xl": "url('/assets/xl/contacts-xl.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
