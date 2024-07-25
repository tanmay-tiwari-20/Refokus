import React from "react";

function Navbar() {
  return (
    <div className="max-w-screen-xl py-6 mx-auto flex items-center">
      <img
        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture"].map((elem, index) => (
          <a className="text-sm flex items-center gap-1" href="#">
            {index===1 && (<span style={{boxShadow: "0 0 0.45rem #00FF19"}} className="inline-block w-1 h-1 rounded-full bg-green-500"></span>)}
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
