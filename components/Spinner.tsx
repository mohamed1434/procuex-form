import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600
       dark:border-t-pink-500 transition-colors duration-300 ease-in-out"
      />
    </div>
  );
};

export default Spinner;
