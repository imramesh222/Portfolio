// import React from "react";

// const Services = () => {
//   return (
//     <>
//       <div className=" text-center">
//         <h1 className="text-white text-4xl text-bold font-serif">
//           My Services
//         </h1>

//         <div className="flex justify-center gap-6 px-32 pt-12 ">
//           <div className="flex flex-col text-start bg-slate-600 rounded-xl p-1 w-1/3">
//             <h1 className="text-end bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text font-bold">1</h1>
//             <h1 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//               Web Design
//             </h1>
//             <p className="text-white pe-2">
//               Creating visually appealing and user-friendly designs.
//               <a href="#">
//                 <h2 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//                   Read More
//                 </h2>
//               </a>
//             </p>
//           </div>

//           <div className="flex flex-col text-start bg-slate-600 rounded-xl p-1 w-1/3">
//             <h1 className="text-end bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text font-bold">2</h1>
//             <h1 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//               frontend Development
//             </h1>
//             <p className="text-white pe-2">
//               buliding responsive and interactive user interfaces.
//               <a href="#">
//                 <h2 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text ">
//                   Read More
//                 </h2>
//               </a>
//             </p>
//           </div>
//           <div className="flex flex-col text-start bg-slate-600 rounded-xl p-1 w-1/3">
//             <h1 className="text-end bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text font-bold">3</h1>
//             <h1 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//               Backend Development
//             </h1>
//             <p className="text-white pe-2">
//               Developing robust server-side logic and databases.
//               <a href="#">
//                 <h2 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//                   Read More
//                 </h2>
//               </a>
//             </p>
//           </div>
//           <div className="flex flex-col text-start bg-slate-600 rounded-xl p-1 w-1/3">
//             <h1 className="text-end bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text font-bold">4</h1>
//             <h1 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//               Full-Stack Development
//             </h1>
//             <p className="text-white pe-2">
//               Combining both frontend and backend development skills.
//               <a href="#">
//                 <h2 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//                   Read More
//                 </h2>
//               </a>
//             </p>
//           </div>
//           <div className="flex flex-col text-start bg-slate-600 rounded-xl p-1 w-1/3">
//             <h1 className="text-end bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text font-bold">5</h1>
//             <h1 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//               Content Writing
//             </h1>
//             <p className="text-white pe-2">
//               Writing content for your buisness and companies.
//               <a href="#">
//                 <h2 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//                   Read More
//                 </h2>
//               </a>
//             </p>
//           </div>
//           <div className="flex flex-col text-start bg-slate-600 rounded-xl p-1 w-1/3">
//             <h1 className="text-end bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text font-bold">6</h1>
//             <h1 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//               Digital Marketing
//             </h1>
//             <p className="text-white pe-2">
//               Promote your buisness with our digital marketing team.
//               <a href="#">
//                 <h2 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
//                   Read More
//                 </h2>
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;



import React from "react";

const Services = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold font-serif">
          My Services
        </h1>

        <div className="flex flex-wrap justify-center gap-6 px-32 pt-12">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col text-start bg-slate-600 rounded-xl p-4 w-1/3"
            >
              <h1 className="text-end bg-gradient-to-r from-green-100 to-blue-100 text-transparent bg-clip-text font-bold">
                {index + 1}
              </h1>
              <h1 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
                Web Design
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur.loem.
              </p>
              <a href="#">
                <h2 className="font-serif bg-gradient-to-r from-green-400 to-blue-600 text-transparent bg-clip-text">
                  Read More
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
