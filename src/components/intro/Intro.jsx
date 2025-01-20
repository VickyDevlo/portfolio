import React from "react";
import { SocialLinks } from "../../shared/socialLinks/SocialLinks";

const Intro = ({ content, introHeading }) => {
  return (
    <section className="py-6 px-5 md:px-0">
      <h2 className="text-xl md:text-5xl text-center underline text-[#6610f2] font-bold md:mb-12 mb-6 px-3 md:tracking-[10px]">
        {introHeading}
      </h2>
      <div className="mx-auto text-center">
        <p className="text-lg md:text-2xl mb-6 max-w-5xl mx-auto">
          {content.introductionText}
        </p>
        <ul className="text-lg md:text-2xl mb-8 list-disc list-inside space-y-2">
          {content.skills.map((skill) => (
            <li key={skill.id}>
              {skill.highlight ? (
                <>
                  {skill.text.split(skill.highlight)[0]}
                  <span className="font-bold text-blue-600">
                    {skill.highlight}
                  </span>
                  {skill.text.split(skill.highlight)[1]}
                </>
              ) : (
                skill.text
              )}
            </li>
          ))}
        </ul>
        <p className="text-lg md:text-2xl mb-6 max-w-3xl mx-auto">
          {content.closingText}
        </p>
      </div>
    </section>
  );
};

export default Intro;
