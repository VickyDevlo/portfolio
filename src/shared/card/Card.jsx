import { Link } from "react-router-dom";

const Card = ({ image, title, description, demoLink }) => {
  return (
    <div
      className="shadow-lg rounded-md overflow-hidden bg-slate-700
     hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/path/to/default-image.jpg";
            e.target.alt = "Default image";
          }}
        />
      </div>

      <div className="p-4">
        <h3
          className="text-lg md:text-3xl text-white text-center font-semibold  
        mb-5 truncate"
        >
          {title}
        </h3>
        <p className="text-slate-300 text-xl md:text-2xl mb-5 text-center line-clamp-3">
          {description}
        </p>
        <div className="flex justify-center">
          <Link
            to={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-base md:text-xl font-medium text-center
             text-white bg-[#6610f2] rounded-lg hover:bg-[#5a23b2] 
             transition-colors duration-300"
          >
            View Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
