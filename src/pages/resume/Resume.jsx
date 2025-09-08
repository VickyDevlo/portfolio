import { Wrapper } from "../../shared/wrapper/Wrapper";
import { FaFileDownload } from "react-icons/fa";
import resume_pic from "../../assets/resume_Pic.svg";

const Resume = () => {
  const handleDownload = async () => {
    const fileUrl = "/pranav_resume.pdf";
    const filename = "pranav_resume.pdf";

    try {
      const response = await fetch(fileUrl);

      if (!response.ok) {
        throw new Error("File not found or failed to fetch.");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl); // Clean up
    } catch (error) {
      console.error("Failed to download the file:", error);
      alert("Sorry, the resume couldn't be downloaded at this time.");
    }
  };

  return (
    <Wrapper>
      <div className="w-full flex justify-evenly items-center md:items-start flex-col md:flex-row gap-8 md:gap-12 px-5 py-10">
        <button
          onClick={handleDownload}
          aria-label="Download CV"
          className="flex items-center gap-3 text-xl md:text-3xl px-4 py-2 bg-[#3a1d67] text-white rounded-lg shadow-md hover:bg-[#3f2a5e]
           transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3a1d67]"
        >
          <FaFileDownload className="text-lg" size={30} />
          Download CV
        </button>

        <div className="mt-3 w-full max-w-[400px] md:max-w-[500px] md:h-[500px]">
          <img
            src={resume_pic}
            alt="Illustration of resume"
            className="w-full h-full object-contain object-top"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Resume;
