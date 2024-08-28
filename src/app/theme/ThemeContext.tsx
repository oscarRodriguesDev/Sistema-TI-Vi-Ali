'use client'
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CookiesConsent } from "../components/useCookie";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookiesConsent');
    if (consentGiven) {
      const savedTheme = localStorage.getItem('theme') as Theme;

      if (savedTheme) {
        setTheme(savedTheme);
      }else{
        setTheme("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      
      const consentGiven = localStorage.getItem('cookiesConsent');
      if (consentGiven) {
        localStorage.setItem('theme', newTheme);
      }

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        <CookiesConsent/>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
