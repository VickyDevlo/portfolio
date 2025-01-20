import React from "react";
import pranav from "../../assets/resume.pdf";
import { Wrapper } from "../../shared/wrapper/Wrapper";
import { FaFileDownload } from "react-icons/fa";
import resume_pic from "../../assets/resume_Pic.svg";

const Resume = () => {
  const handleDownload = () => {
    if (!pranav) {
      console.error("Resume file is missing!");
      return;
    }

    const link = document.createElement("a");
    link.href = pranav;
    link.download = "pranav.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Wrapper>
      <div className="w-full flex justify-evenly items-center md:items-start flex-col md:flex-row gap-8 md:gap-12 px-5 py-10">
        <button
          onClick={handleDownload}
          className="flex items-center gap-3 text-xl md:text-3xl px-4 py-2 bg-[#3a1d67] text-white rounded-lg shadow-md hover:bg-[#3f2a5e] 
          transition duration-300 ease-in-out"
        >
          <FaFileDownload className="text-lg" size={30} />
          Download CV
        </button>
        <div className="mt-3 w-full max-w-[400px] md:max-w-[500px] md:h-[500px]">
          <img
            src={resume_pic}
            alt="resume_pic"
            className="w-full h-full object-contain object-top"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Resume;
