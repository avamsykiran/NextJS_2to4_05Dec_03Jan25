"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default to light during server-side pre-rendering
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Sync preference with localStorage and HTML properties on boot
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as Theme;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    
    // React-Bootstrap handles themes natively via the data-bs-theme attribute
    document.documentElement.setAttribute("data-bs-theme", initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("app-theme", nextTheme);
    document.documentElement.setAttribute("data-bs-theme", nextTheme);
  };

  // Prevent hydration layout flashes by rendering children only after mounting
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for consumption safety
export function useTheme() {
  const context = useContext(ThemeContext); 
  return context;
}