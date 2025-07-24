import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../../config/navLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { Logo } from "../../shared/logo/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-20 shadow-lg backdrop-blur-md">
      <div className="w-full md:h-16 h-10 flex justify-center items-center px-4">
        <Logo />
        <div className="container flex items-center md:justify-center px-4">
          <nav>
            <ul
              className={`md:flex md:items-center gap-12 ${
                isOpen
                  ? "absolute top-0 left-0 w-full p-4 shadow-2xl md:static md:p-0 md:shadow-none max-md:bg-slate-500"
                  : "hidden md:flex"
              }`}
            >
              <li className="md:hidden flex justify-start pb-2 w-full">
                <IoMdClose
                  size={25}
                  onClick={toggleIsOpen}
                  className="cursor-pointer"
                />
              </li>

              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block w-full p-1 md:py-0 font-bold tracking-[5px] text-lg md:text-2xl rounded-md transition-all duration-100 
                      ${
                        isActive
                          ? "text-gray-200 md:text-[#6610f2] md:bg-transparent"
                          : "text-black md:text-current"
                      }
                      md:hover:text-[#805eb6] hover:bg-gray-400 md:hover:bg-transparent`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.navLink}
                  </NavLink>
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

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
