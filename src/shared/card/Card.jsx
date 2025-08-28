import { Link } from "react-router-dom";

const Card = ({ image, title, demoLink }) => {
  return (
    <div className="group relative w-full max-w-lg mx-auto shadow-lg rounded-xl overflow-hidden">
      <div className="w-full h-72 flex items-center justify-center bg-gray-100 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          loading="lazy"
        />

        <div className="absolute bottom-2 left-0 w-full flex justify-center sm:hidden">
          <Link
            to={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-[#6610f2] rounded-lg hover:bg-[#5a23b2] transition-colors duration-300"
          >
            View Demo
          </Link>
        </div>
      </div>

      <div className="hidden sm:flex justify-center p-4 sm:absolute sm:inset-0 sm:items-center sm:justify-center sm:bg-black sm:bg-opacity-50 sm:opacity-0 sm:group-hover:opacity-100 sm:p-0 transition-all duration-300">
        <Link
          to={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-auto text-center px-6 py-2 text-base md:text-xl font-medium text-white bg-[#6610f2] rounded-lg hover:bg-[#5a23b2] transition-colors duration-300"
        >
          View Demo
        </Link>
      </div>
    </div>
  );
};

export default Card;
