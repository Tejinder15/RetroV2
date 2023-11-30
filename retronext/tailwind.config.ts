import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: "var(--retro-color)",
        title: "var(--hero-title)",
        body: "var(--body-color)",
        category: "var(--category-color)",
        sidebar: "var(--sidebar-color)",
      },
      gridTemplateColumns: {
        videoContainer: "repeat(auto-fit, minmax(260px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
