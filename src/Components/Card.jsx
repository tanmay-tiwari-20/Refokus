import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hoverClass }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl ${hoverClass} ${width} min-h-[30rem] flex flex-col justify-between transition-colors duration-300`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">wfwj</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start Your Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
