'use client'
import React from "react";
import { useTheme } from "../theme/ThemeContext";

export function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    // Verifica se o consentimento foi dado
    if (typeof window !== 'undefined') {
      const hasConsented = localStorage.getItem("cookiesConsent");

      if (hasConsented) {
        // Alterna o tema e salva a preferência no localStorage
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme); // Salva a preferência no localStorage
        toggleTheme(); // Alterna o tema
      } else {
        // Apenas alterna o tema sem salvar, se o consentimento não for dado
        toggleTheme();
      }
    }
  };

  return (
    <button
      onClick={handleToggleTheme}
      className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
    >
      Mudar para {theme === "light" ? "Escuro" : "Claro"}
    </button>
  );
}
