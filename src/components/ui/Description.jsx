/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Description = ({ desc, icon, position, handleClick, otherClasses }) => {
  return (
    <p
      className="relative inline-flex lg:h-[250px] h-[230px] w-[300px] lg:w-[500px] md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full items-center justify-center rounded-lg
             bg-slate-950 px-7 lg:text-[16px] text-[14px] text-center font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {desc}
        {position === "right" && icon}
      </span>
    </p>
  );
};

export default Description;
