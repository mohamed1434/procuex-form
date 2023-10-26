"use client";
import { useTheme } from "@/context/ThemeContext";
const Navbar = () => {
  const { color, setColor } = useTheme();
  const colors = ["pink", "blue"];
  const toggleColor = () => {
    const index = colors.indexOf(color);
    const nextIndex = (index + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div className="flex items-center justify-between h-[6rem] bg-[#E4ECF4] px-8 shadow-sm">
      <img src="/assets/logo.svg" className="w-36 h-36" />
      <button
        onClick={toggleColor}
        className={`bg-primary theme-${color} theme-light text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
