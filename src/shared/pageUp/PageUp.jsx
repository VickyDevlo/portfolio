import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

const PageUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkMode } = useTheme();

  const pageUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 30);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 md:right-5 md:bottom-16 z-10 transition-colors duration-500 outline-none ${
        isDarkMode ? "bg-lightBg" : "bg-darkBg"
      } rounded-full cursor-pointer ${
        isVisible ? "opacity-70" : "opacity-0 pointer-events-none"
      }`}
      onClick={pageUpHandler}
    >
      <MdKeyboardArrowUp
        size={30}
        color={`${isDarkMode ? "black" : "white"}`} 
      />
    </div>
  );
};

export default PageUp;
