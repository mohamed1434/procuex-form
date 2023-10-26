import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Spinner = () => {
  const { color } = useTheme();
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className={`border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary theme-${color} theme-light transition-colors duration-300 ease-in-out`}
      />
    </div>
  );
};

export default Spinner;
