import React from "react";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="hidden bg-[#3a1d67] rounded-full w-8 h-8 text-white 
        md:flex items-center justify-center overflow-hidden p-5"
      style={{
        boxShadow: "0 0 20px rgba(76, 74, 79, 0.7)",
      }}
    >
      PM
    </button>
  );
};
