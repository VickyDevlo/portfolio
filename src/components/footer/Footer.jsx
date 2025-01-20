import React from "react";
import { SocialLinks } from "../../shared/socialLinks/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`top-shadow`}>
      <div className="container mx-auto w-full flex flex-col md:flex-row justify-around items-center py-2">
        <p className="hidden md:block md:text-lg tracking-widest underline">
          Developed by Pranav Magare
        </p>
        <p className="text-sm md:text-lg tracking-[3px]">
          &copy; {currentYear} All rights reserved.
        </p>
        <SocialLinks bgColor={"bg-[#3a1d67]"} textColor={"text-white"} />
      </div>
    </div>
  );
};

export default Footer;
