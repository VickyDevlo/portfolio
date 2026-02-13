import { Link } from "react-router-dom";

const Card = ({ image, title, demoLink }) => {
  return (
    <div className="group relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500">
      <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="hidden sm:flex absolute inset-0 items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
          <Link
            to={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-lg font-semibold text-white bg-[#6610f2] rounded-xl hover:bg-[#5a23b2] transition-all duration-300 hover:scale-105"
          >
            View Demo
          </Link>
        </div>
      </div>

      <div className="max-md:p-1 text-center">
        <div className="sm:hidden">
          <Link
            to={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-[#6610f2] rounded-lg hover:bg-[#5a23b2] transition-all duration-300"
          >
            View Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
