import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        coal: "#0b0f17",
        pewter: "#87919f",
        vellum: "#e7dfcf",
        gold: "#d4a83f",
        copper: "#b86f45",
        verdigris: "#5aa697"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        atlas: "0 18px 70px rgba(0, 0, 0, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;

