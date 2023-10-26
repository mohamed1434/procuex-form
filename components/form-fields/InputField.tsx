import { useTheme } from "@/context/ThemeContext";
import React from "react";

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  register,
  error,
  min,
  isEditMode,
}) => {
  const { color } = useTheme();
  return (
    <div className={`${type === "checkbox" ? "" : "relative w-full"}`}>
      <input
        {...register(name, { required: true })}
        id={name}
        name={name}
        type={type}
        className={`peer placeholder-transparent w-full rounded-lg min-h-[2.5em] text-[14px] font-light
         border border-[#E2E5E8] flex items-center gap-[.5em] px-4 py-3 outline-none disabled:bg-white ${
           isEditMode
             ? `focus:border-primary theme-${color} theme-light cursor-pointer`
             : ""
         }`}
        placeholder={label}
        autoComplete="off"
        min={min}
        disabled={!isEditMode}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <label
        htmlFor={name}
        className={`absolute -top-2 left-[12px] bg-white text-[12px] text-gray-400 transition-all peer-placeholder-shown:top-3 
        peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-[12px] 
        peer-focus:text-primary theme-${color} theme-light peer-placeholder-shown:cursor-pointer`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
