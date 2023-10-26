import { useTheme } from "@/context/ThemeContext";
import React from "react";

// const formatToDateString = (
//   dateValue: Date | string | null | undefined
// ): string => {
//   if (dateValue instanceof Date) {
//     return dateValue.toISOString().split("T")[0];
//   } else if (typeof dateValue === "string") {
//     const parsedDate = new Date(dateValue);
//     if (!isNaN(parsedDate.getTime())) {
//       return parsedDate.toISOString().split("T")[0];
//     }
//   }
//   return "";
// };

const DateField: React.FC<DateFieldProps> = ({
  label,
  name,
  register,
  error,
  min,
  isEditMode,
}) => {
  // const formattedDate = formatToDateString(new Date("2023-10-10"));
  const { color } = useTheme();
  return (
    <div className={"relative w-full"}>
      <input
        {...register(name, { required: true })}
        id={name}
        name={name}
        type="date"
        className={`peer placeholder-transparent w-full rounded-lg min-h-[2.5em] text-[14px] font-light
         border border-[#E2E5E8] flex items-center gap-[.5em] pl-4 pr-5 py-3 outline-none disabled:bg-white ${
           isEditMode
             ? `focus:border-primary theme-${color} theme-light cursor-pointer`
             : ""
         }`}
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

export default DateField;
