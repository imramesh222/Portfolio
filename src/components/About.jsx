import React from "react";

const About = () => {
  return (
    <>
      <div className="px-32 pb-12 text-white">
        <div className="flex justify-center pb-16 ">
          <h1 className="text-white font-serif text-bold text-4xl ">
            About Me
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items center md:space-x-12">
          <img
            src="./images/ramesh.jpg"
            alt=""
            className="w-72 h-80 transform transistion-transform duration-300 hover:scale-105"
          />
          <div className="block">
            <div>
              <p className="text-white mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                officia quo eveniet facere alias, perferendis vitae est impedit
                perferendis natus harum nobis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nostrum sed numquam ea quis? Quia, ipsum molestiae quasi quod animi laudantium doloremque. Voluptatibus natus ullam obcaecati nesciunt harum enim beatae.
              </p>
              <div className="space-y-4 text-white">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    {" "}
                    React JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transistion-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    {" "}
                    NODE JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transistion-transform duration-300 hover:scale-105 w-8/12"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    {" "}
                    HTML & CSS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transistion-transform duration-300 hover:scale-105 w-11/12"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-around">

            <div className="mt-12 text-center">
              <h3 className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  rounded-full  ">3+</h3>
              Years Experience
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  rounded-full  ">50+</h3>
              Projects Completed
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  rounded-full  ">10+</h3>
              Happy Clients
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
