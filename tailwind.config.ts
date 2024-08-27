import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Use "media" para modo escuro baseado no sistema ou "class" para controle com classes
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#1a73e8', // Definindo uma cor primária personalizada
        secondary: '#ff7043', // Definindo uma cor secundária personalizada
        dark: {
          background: "#1a1a1a",
          text: "#e5e5e5",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-primary-color": {
          color: "var(--primary-color)",
        },
        ".text-secondary-color": {
          color: "var(--secondary-color)",
        },
      });
    },
  ],
};

export default config;
