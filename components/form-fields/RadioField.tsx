import { useTheme } from "@/context/ThemeContext";
import React from "react";

const RadioField: React.FC<RadioFieldProps> = ({
  label,
  name,
  register,
  error,
  isEditMode,
  defaultValue,
}) => {
  const { color } = useTheme();
  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <input
          type="radio"
          id={label}
          {...register(name)}
          disabled={!isEditMode}
          value={defaultValue}
          className={`accent-primary theme-${color} theme-light transition-colors ease-in-out duration-300`}
        />
        <label htmlFor={label} className="text-[14px]">
          {label}
        </label>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </>
  );
};

export default RadioField;
