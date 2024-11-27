import React from "react";
import sampleResume from "../../assets/pranav_magare.pdf";
import { Wrapper } from "../../shared/wrapper/Wrapper";
import { FaFileDownload } from "react-icons/fa";

const Resume = () => {
  // Handle the download action
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = sampleResume;
    link.download = "pranav_magare.pdf"; // Set the download filename
    link.click();
  };

  return (
    <Wrapper>
      <div className="w-full h-screen flex justify-center items-center px-5 py-10">
        <button
          onClick={handleDownload}
          className="flex items-center gap-3 px-4 py-2 bg-[#3a1d67] text-white rounded-lg shadow-md hover:bg-[#3f2a5e] transition duration-300 ease-in-out"
        >
          <FaFileDownload className="text-lg" size={30}/>
          Download CV
        </button>
      </div>
    </Wrapper>
  );
};

export default Resume;
