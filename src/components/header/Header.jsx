import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { navlinks } from "../../config/navLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const currentPath = location.pathname;

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const navigateHandler = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-20 shadow-lg backdrop-blur-md`}>
      <div className={`w-full md:h-16 h-14 flex justify-center items-center`}>
        <div className="container flex items-center md:justify-center px-4 py-2">
          <nav>
            <ul
              className={`md:flex md:items-center gap-12  ${
                isOpen
                  ? "absolute top-0 left-0 w-full p-4 shadow-2xl md:static md:p-0 md:shadow-none bg-slate-500 md:bg-transparent"
                  : "hidden"
              }`}
            >
              <li className="md:hidden flex justify-start pb-2 w-full">
                <IoMdClose
                  size={25}
                  onClick={toggleIsOpen}
                  className="cursor-pointer"
                />
              </li>

              {navlinks.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer flex items-center justify-between w-full p-1 md:py-0 font-medium md:hover:text-[#805eb6] tracking-[3px]
                   text-lg md:text-2xl hover:bg-gray-400 md:hover:bg-transparent rounded-md ${
                     currentPath === item.path
                       ? "text-gray-200 md:text-[#6610f2] md:bg-transparent"
                       : "text-black md:text-current"
                   }`}
                  onClick={() => navigateHandler(item.path)}
                >
                  {item.navlink}
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <GiHamburgerMenu
              size={25}
              onClick={toggleIsOpen}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="pr-5 md:pr-5">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;