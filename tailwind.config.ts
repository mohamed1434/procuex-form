import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        onNeutralBg: "var(--onNeutralBg)",
        neutralBg: "var(--neutralBg)",
        onPrimaryBg: "var(--onPrimaryBg)",
        primaryBg: "var(--primaryBg)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
};
export default config;
