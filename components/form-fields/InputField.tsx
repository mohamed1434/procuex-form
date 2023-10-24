import React from "react";
import { UseFormRegister } from "react-hook-form";

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  register,
  error,
  min,
  isEditMode,
  defaultValue,
}) => {
  return (
    <div className={`${type === "checkbox" ? "" : "relative w-full"}`}>
      <input
        {...register(name, { required: true })} //, value: defaultValue
        id={name}
        name={name}
        type={type}
        className="peer h-10  border-2 p-4 border-gray-300
         text-gray-900 placeholder-transparent focus:border-blue-600 dark:focus:border-pink-600 focus:outline-none w-full rounded-xl"
        placeholder={label}
        autoComplete="off"
        min={min}
        disabled={!isEditMode}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <label
        htmlFor={name}
        className="absolute -top-2 left-[12px] bg-white text-[12px] text-gray-600 transition-all peer-placeholder-shown:top-2 
        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-[12px] 
        peer-focus:text-blue-600 dark:peer-focus:text-pink-600"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
