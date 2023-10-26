"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const colors = ["pink", "blue"];

type ThemeContextType = {
  color: string;
  setColor: (color: string) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [color, setColor] = useState(() => {
    const stickyValue = localStorage.getItem("theme-color");
    return stickyValue !== null ? stickyValue : colors[0];
  });

  useEffect(() => {
    localStorage.setItem("theme-color", color);
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
