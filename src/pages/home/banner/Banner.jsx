import React from "react";
import homeSvg from "../../../assets/home_svg.svg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="w-full px-2 py-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-[26px] md:text-7xl font-medium md:tracking-[12px]">
            <p className="whitespace-nowrap">Hi, There!</p>
            <p>
              I'm <span className="text-[#6610f2]">Pranav Magare</span>
            </p>
          </div>
          <div className="w-full text-center text-base md:text-4xl my-3">
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
