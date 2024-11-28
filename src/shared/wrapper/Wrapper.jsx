import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen py-4 tracking-[5px]">
      {children}
    </div>
  );
};
