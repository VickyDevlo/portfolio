import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div className="min-h-screen text-xl md:text-4xl py-4 tracking-[5px]">
      {children}
    </div>
  );
};
