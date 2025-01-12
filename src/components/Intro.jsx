import React from "react";

const Intro = () => {
  return (
    <div className="bg-black">
      <div className="rounded-full flex justify-center items-center py-4 ">
        <img
          src="./images/ramesh.jpg"
          alt="ramesh"
          className="rounded-full"
          width={"150px"}
          height={"150px"}
        />
      </div>
      <div className="text-center">

      <div className="text-white pt-3 text-4xl font-bold ">
        I'm{" "}
        <span className="bg-gradient-to-tr from-green-400 to-blue-500 bg-clip-text text-transparent font-serif">
          Ramesh Rawat
        </span>
        , Full-Stack Developer
      </div>
      <p className="text-gray-600 py-2">I specialized in building modern and responsive web applications.</p>

      <div className="flex justify-center items-center py-3 ">
    <button className="text-white text-l rounded-full  bg-gradient-to-t from-green-400 to-blue-600 px-3 py-2 me-4">Contact with me</button>
    <button className="text-white text-l rounded-full bg-gradient-to-tr from-red-500 to-orange-500 px-3 py-2">Resume</button>
      </div>
      </div>
    </div>
  );
};

export default Intro;
