"use client";
import { useState, useEffect } from "react";
const Navbar = () => {
  // const toggleTheme = () => {
  //   if (localStorage.gettheme === "dark") {
  //     localStorage.theme = "light";
  //     document.documentElement.classList.remove("dark");
  //   } else {
  //     localStorage.theme = "dark";
  //     document.documentElement.classList.add("dark");
  //   }
  // };

  // useEffect(() => {
  //   // On page load, check the user's theme preference and apply it
  //   if (localStorage.theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  const toggleTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    // On page load, check the user's theme preference and apply it
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="flex items-center justify-between h-[6rem] bg-[#E4ECF4] px-8 shadow-sm">
      <img src="/assets/logo.svg" className="w-36 h-36" />
      <button
        onClick={toggleTheme}
        className={`bg-blue-700 dark:bg-pink-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
