import React from "react";
import { UseFormRegister } from "react-hook-form";

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  register,
  error,
  isEditMode,
  defaultValue,
}) => {
  return (
    <div className="relative w-full">
      <textarea
        {...register(name, { required: true })} //, value: defaultValue
        rows={4}
        id={name}
        name={name}
        className="peer border-2 p-4 border-gray-300
         text-gray-900 placeholder-transparent focus:border-blue-600 dark:focus:border-pink-600 focus:outline-none w-full rounded-xl resize-none"
        placeholder={label}
        disabled={!isEditMode}
        
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <label
        htmlFor={name}
        className="absolute -top-3.5 left-[12px] bg-white text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 
        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm 
        peer-focus:text-blue-600 dark:peer-focus:text-pink-600"
      >
        {label}
      </label>
    </div>
  );
};

export default TextAreaField;
