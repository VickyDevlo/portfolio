import React from "react";
import { Wrapper } from "../../shared/wrapper/Wrapper";
import aboutPic from "../../assets/designer.svg";
import SkillsExpertise from "../../components/skillsExpertise/SkillsExpertise";
import { aboutContent } from "../../config/aboutContent";

const About = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 p-3">
        <div className="flex-1">
          {aboutContent.map(({ id, intro, education, vision }) => (
            <div key={id} className="mb-6">
              <p className="text-lg md:text-2xl font-medium mb-2">{intro}</p>
              <p className="text-base md:text-2xl mb-2">{education}</p>
              <p className="text-base md:text-2xl">{vision}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[250px] md:max-w-[350px] md:h-[500px]">
          <img
            src={aboutPic}
            alt="About"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-10">
        <SkillsExpertise />
      </div>
    </Wrapper>
  );
};

export default About;
