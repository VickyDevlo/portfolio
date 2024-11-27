import React from "react";
import homeSvg from "../../../assets/home_svg.svg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {

  return (
    <div className="w-full px-2 py-4 h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-evenly gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-xl md:text-7xl font-medium md:tracking-[12px]">
            <p>Hi, There!</p>
            <span>I'm Pranav Magare</span>
          </div>
          <div className="w-full text-center text-base md:text-4xl mt-3 text-blue-700">
            <Typewriter
              words={["React Developer", "Frontend Developer"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </div>
        </div>

        <div className="mt-3 w-full max-w-[250px] md:max-w-[350px] md:h-[500px]">
          <img
            src={homeSvg}
            alt="home_pic"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
