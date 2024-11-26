import React from "react";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="text-xl md:text-2xl font-medium text-black dark:text-white"
    >
      {isDarkMode ? (
        <IoSunny className="text-yellow-300" />
      ) : (
        <FaMoon className="text-gray-600" />
      )}
    </button>
  );
}

export default ThemeToggle;
