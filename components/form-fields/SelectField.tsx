import React from "react";
import { UseFormRegister } from "react-hook-form";

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  //   type,
  register,
  error,
  items,
  isEditMode,
  defaultValue,
}) => {
  return (
    <div className="relative w-full">
      <select
        {...register(name, { required: true })} //, value: defaultValue
        id={name}
        name={name}
        disabled={!isEditMode}
        className="border-2 p-2 border-gray-300
         text-gray-900 focus:border-blue-600 dark:focus:border-pink-600 focus:outline-none w-full rounded-lg"
      >
        <option value="" hidden >{label}</option>
        {items.map((item, index) => (
          <option className="bg-[#F3F4F6]" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <label
        htmlFor={name}
        className="absolute -top-2 left-[12px] bg-white text-[12px] text-gray-600 transition-all peer-placeholder-shown:top-2 
        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm 
        peer-focus:text-blue-600 dark:peer-focus:text-pink-600"
      >
        {label}
      </label>
    </div>
  );
};

export default SelectField;
