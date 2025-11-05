export const ContentSection = ({
  title,
  content,
  isWorkExperience = false,
}) => {
  return (
    <div
      className={`border-l-4 ${
        isWorkExperience ? "border-blue-500" : "border-gray-500"
      } pl-6 py-4 mb-6`}
    >
      <h2
        className="text-lg md:text-xl text-[#7935e6] underline font-bold 
      tracking-[8px]"
      >
        {title}:
      </h2>
      {content.map((text, index) => (
        <p
          key={index}
          className="text-xl md:text-2xl mt-5"
          style={{ textIndent: "50px" }}
        >
          {text}
        </p>
      ))}
    </div>
  );
};
