import { useTheme } from "@/context/ThemeContext";
import React from "react";

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  register,
  error,
  isEditMode,
}) => {
  const { color } = useTheme();
  return (
    <div className="relative w-full">
      <textarea
        {...register(name, { required: true })} 
        rows={4}
        id={name}
        name={name}
        className={`peer placeholder-transparent w-full rounded-lg min-h-[2.5em] text-[14px] font-light
         border border-[#E2E5E8] flex items-center gap-[.5em] pl-4 py-3 outline-none disabled:bg-white resize-none ${
           isEditMode
             ? `focus:border-primary theme-${color} theme-light cursor-pointer`
             : ""
         }`}
        placeholder={label}
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

export default TextAreaField;
