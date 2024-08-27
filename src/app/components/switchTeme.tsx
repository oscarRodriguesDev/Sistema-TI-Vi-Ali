import React from "react";
import { useTheme } from "../theme/ThemeContext";

export function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
    >
      Mudar para {theme === "light" ? "Escuro" : "Claro"}
    </button>
  );
}
