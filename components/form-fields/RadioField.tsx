import React from "react";
import { UseFormRegister } from "react-hook-form";

const RadioField: React.FC<RadioFieldProps> = ({
  label,
  name,
  register,
  error,
  isChecked,
  isEditMode,
  defaultValue,
  //   items,
}) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id={label}
          {...(register(name))} //, value: defaultValue
          disabled={!isEditMode}
          value={defaultValue}
        />
        <label htmlFor={label} className="text-[12px]">{label}</label>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </>
  );
};

export default RadioField;
