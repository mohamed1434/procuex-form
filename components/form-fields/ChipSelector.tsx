import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";

const ChipSelector = ({
  label,
  isEditMode,
  items,
  name,
  onChange,
  value,
  error,
}: ChipFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { color } = useTheme()

  function toggleOption(option: string) {
    const updatedValue = value.includes(option)
      ? value.filter((item) => item !== option)
      : [...value, option];
    onChange(updatedValue);
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
        ? `border-primary theme-${color} theme-light cursor-pointer`
        : ""
    } rounded-lg`}
      >
        <div className="flex flex-wrap gap-2 py-1 pl-2">
          {value.map((selectedOption) => (
            <div
              key={selectedOption}
              className={`bg-primary theme-${color} theme-light text-white px-2 flex items-center justify-between w-[6em] md:w-[8em]`}
            >
              <p className="text-[14px] font-light">{selectedOption}</p>
              <span
                onClick={(e) => {
                  if (isEditMode) {
                    e.stopPropagation();
                    toggleOption(selectedOption);
                  }
                }}
                className={`ml-1 ${
                  isEditMode && "cursor-pointer" 
                } h-4 w-4 bg-white rounded-full text-black
              font-light text-[16px] flex items-center justify-center`}
              >
                &times;
              </span>
            </div>
          ))}
        </div>

        <div className="absolute border-[.25em] mr-6 border-transparent border-t-black translate-y-[25%] translate-x-[0] right-0"></div>
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
                toggleOption(item);
              }}
              key={item}
              className={`px-[1em] py-[.5em] cursor-pointer hover:bg-gray-300
              ${value.includes(item) ? `bg-primary theme-${color} theme-light text-white` : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
        <label
          htmlFor={name}
          className={`absolute ${
            isFocused || value[0]
              ? "-top-2 "
              : "top-3 text-[14px] cursor-pointer"
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

export default ChipSelector;
