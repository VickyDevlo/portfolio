import React from "react";
import { socialLinks } from "../../config/socialLinks";
import { Link } from "react-router-dom";

export const SocialLinks = ({ bgColor, textColor }) => {
  return (
    <div className="flex gap-5 md:gap-8 pt-2">
      {socialLinks.map((links, i) => (
        <Link
          to={links.path}
          target="_blank"
          key={i}
          className={`rounded-full ${bgColor} ${textColor} p-2`}
          style={{
            boxShadow: "0 0 20px rgba(76, 74, 79, 0.7)",
          }}
        >
          <links.icon className="text-sm md:text-base" />
        </Link>
      ))}
    </div>
  );
};
