import React from "react";
import notFound_img from "../../assets/page_not_found.svg";
import { Wrapper } from "../../shared/wrapper/Wrapper";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="flex items-center justify-center w-full h-[50vh] md:h-[80vh] px-3 mt-3">
        <img
          src={notFound_img}
          alt="notfound"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="md:hidden flex items-center justify-center mt-5">
        <button
          onClick={() => navigate("/")}
          className="text-2xl text-white bg-[#3f2a5e] px-3 py-1 rounded-md"
        >
          Home
        </button>
      </div>
    </Wrapper>
  );
};

export default NotFound;
