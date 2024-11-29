import React from "react";
import SkillsExpertise from "../../components/skillsExpertise/SkillsExpertise";
import { ContentSection } from "../../shared/contentSection/ContentSection";
import { Wrapper } from "../../shared/wrapper/Wrapper";
import { aboutContent, workExprienceData } from "../../config/aboutContent";

const About = () => {
  return (
    <Wrapper>
      <div className="text-center px-2 mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 md:tracking-[15px]">
          About Me
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          A glimpse into my journey, education, and vision for a brighter
          future.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-3 md:px-10">
        <div className="space-y-8">
          {aboutContent.map((content) => (
            <ContentSection
              key={content.id}
              title={content.title}
              content={[content.intro, content.education, content.vision]}
            />
          ))}

          <ContentSection
            title="Work Experience"
            content={workExprienceData.map(
              (job) =>
                `${job.jobTitle} at ${job.company} - ${job.duration} : ${job.description}`
            )}
            isWorkExperience={true}
          />
        </div>
      </div>

      <div className="py-12 px-4 md:px-10 rounded-lg shadow-md">
        <SkillsExpertise />
      </div>
    </Wrapper>
  );
};

export default About;
