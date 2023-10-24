import React from "react";
import { UseFormRegister } from "react-hook-form";

const formatToDateString = (
  dateValue: Date | string | null | undefined
): string => {
  if (dateValue instanceof Date) {
    return dateValue.toISOString().split("T")[0];
  } else if (typeof dateValue === "string") {
    const parsedDate = new Date(dateValue);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toISOString().split("T")[0];
    }
  }
  return "";
};

const DateField: React.FC<DateFieldProps> = ({
  label,
  name,
  register,
  error,
  min,
  isEditMode,
  defaultValue,
}) => {
  const formattedDate = formatToDateString(new Date("2023-10-10"));
  return (
    <div className={"relative w-full"}>
      <input
        {...register(name, { required: true })} //, value: defaultValue
        id={name}
        name={name}
        type="date"
        className="peer h-10  border-2 p-4 border-gray-300
         text-gray-900 placeholder-transparent focus:border-blue-600 dark:focus:border-pink-600 focus:outline-none w-full rounded-xl"
        placeholder={formattedDate}
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

export default DateField;
