import React from "react";
import { SocialLinks } from "../../shared/socialLinks/SocialLinks";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="top-shadow">
      <div className="container mx-auto w-full flex max-md:flex-col-reverse flex-col md:flex-row justify-around items-center py-2">
        <p className="hidden md:block tracking-widest underline">
          Developed by Pranav Magare
        </p>
        <div className="flex max-md:mt-3 items-center text-sm md:text-lg font-semibold tracking-[3px]">
          <CgCopyright /> &nbsp;
          {currentYear} All rights reserved.
        </div>
        <SocialLinks bgColor={"bg-[#3a1d67]"} textColor={"text-white"} />
      </div>
    </div>
  );
};

export default Footer;
