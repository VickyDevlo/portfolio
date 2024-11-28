import React from "react";
import { skillData } from "../../config/skillData";
import { Link } from "react-router-dom";

const SkillsExpertise = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-xl md:text-5xl text-center underline text-[#6610f2] font-bold md:mb-12 mb-6 px-3 md:tracking-[10px]">
        Skills & Expertise
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
        {skillData.map((data, i) => (
          <Link to={data.path} key={i} target="_blank">
            <img
              src={data.pic}
              alt={data.title}
              className="h-32 md:h-40 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SkillsExpertise;
