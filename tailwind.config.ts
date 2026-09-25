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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // User-specified brand colors
        secondary: {
          DEFAULT: "#DA7715",
          hover: "#c4650d",
          light: "#fff7ed",
        },
        accent: {
          DEFAULT: "#DA7715",
          hover: "#c4650d",
          light: "#fff7ed",
          muted: "rgba(218, 119, 21, 0.1)",
        },
        "brand-dark": "#111827",
        "brand-surface": "#FFFFFF",
        "brand-muted": "#6B7280",
        "brand-border": "#E5E7EB",
        "brand-subtle": "#F3F4F6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
