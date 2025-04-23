import React from "react";
import mongo from "../../public/mongodb.jpg";
import tailwind from "../../public/tailwind.png";
import cpp from "../../public/Untitled.png";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import Expo from "../../public/Expo.png";
import nodejs from "../../public/node.png";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: tailwind,
      name: "tailwind",
    },
    {
      id: 3,
      logo: cpp,
      name: "Cpp",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo:  reactjs,
      name: " reactjs",
    },
    {
      id: 6,
      logo: Expo,
      name: "Expo",
    },
    {
      id: 7,
      logo: nodejs,
      name: "NodeJS",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
