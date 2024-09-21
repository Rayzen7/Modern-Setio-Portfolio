/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Circle = ({ icon, position, handleClick, otherClasses }) => {
  return (
    <div
      className="relative inline-flex h-[50px] w-[50px] md:mt-10 overflow-hidden rounded-full p-[2px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full items-center justify-center rounded-full
             bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {position === "right" && icon}
      </span>
    </div>
  );
};

export default Circle;
