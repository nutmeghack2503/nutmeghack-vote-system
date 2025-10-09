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
        primary: "var(--primary)",
        "background-dark": "var(--background-dark)",
        "card-dark": "var(--card-dark)",
        "text-dark": "var(--text-dark)",
        "secondary-text-dark": "var(--secondary-text-dark)",
        "accent-yellow": "var(--accent-yellow)",
      },
    },
  },
  plugins: [],
};
export default config;
