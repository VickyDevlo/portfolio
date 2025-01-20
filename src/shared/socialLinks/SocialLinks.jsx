import React from "react";
import { socialLinks } from "../../config/socialLinks";

export const SocialLinks = ({ bgColor, textColor }) => {
  return (
    <div className="flex gap-5 md:gap-8 mt-3">
      {socialLinks.map((links, i) => (
        <a
          href={links.path}
          target="_blank"
          key={i}
          className={`rounded-full ${bgColor} ${textColor} p-2`}
          style={{
            boxShadow: "0 0 20px rgba(76, 74, 79, 0.7)",
          }}
        >
          <links.icon className="text-sm md:text-base" />
        </a>
      ))}
    </div>
  );
};
