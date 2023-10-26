import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";

const CustomSelect = ({
  label,
  isEditMode,
  items,
  name,
  onChange,
  value,
  error,
}: CustomSelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const { color } = useTheme()

  function selectOption(option: string) {
    onChange(option);
    setIsOpen(false);
  }

  return (
    <div className="w-full">
      <div
        id={name}
        onBlur={() => {
          setIsOpen(false);
          setIsFocused(false);
        }}
        onClick={() => {
          if (isEditMode) {
            setIsOpen((prev) => !prev);
            setIsFocused(true);
          }
        }}
        tabIndex={0}
        className={`relative w-full min-h-[2.9em] border border-[#E2E5E8] flex
    items-center gap-[.5em] p-[.5em] outline-none ${
      isEditMode
        ? `focus:border-primary theme-${color} theme-light cursor-pointer`
        : ""
    } rounded-lg`}
      >
        <span className="flex-1 text-[14px] pl-2 py-1 font-light">{value}</span>
        <div className="border-[.25em] mr-4 border-transparent border-t-black translate-y-[25%] translate-x-[0]"></div>
        <ul
          className={`absolute m-0 p-0 list-none max-h-[15em] overflow-y-auto border-[.05em]
       border-black rounded-[.25em] w-full left-0 top-[calc(100%+.25em)] bg-gray-100 z-[100] ${
         isOpen ? "block" : "hidden"
       }`}
        >
          {items.map((item) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(item);
              }}
              key={item}
              className={`px-[1em] py-[.5em] cursor-pointer hover:bg-gray-300 
              `}
            >
              {item}
            </li>
          ))}
        </ul>
        <label
          htmlFor={name}
          className={`absolute ${
            isFocused || value ? "-top-2" : "top-3 text-[14px] cursor-pointer"
          } left-[12px] text-gray-400 bg-white text-[12px] transition-all duration-200   
        ${isFocused ? `text-primary theme-${color} theme-light` : ""}`}
        >
          {label}
        </label>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default CustomSelect;
