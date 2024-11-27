import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../../config/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`top-shadow`}>
      <div className="container mx-auto w-full flex flex-col md:flex-row justify-around items-center py-2">
        <p className="hidden md:block text-blue-700 md:text-sm tracking-widest underline">
          Developed by Pranav Magare
        </p>
        <p className="text-sm md:text-lg tracking-[3px]">
          &copy; {currentYear} All rights reserved.
        </p>
        <div className="flex gap-5 md:gap-10 pt-2">
          {socialLinks.map((links, i) => (
            <Link
              to={links.path}
              target="_blank"
              key={i}
              className="rounded-full bg-[#3a1d67] text-white p-2"
            >
              <links.icon className="text-sm md:text-base" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
