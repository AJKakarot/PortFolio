import React from "react";

import pic from "../../public/photo.jpg";

import { FaMedium } from "react-icons/fa";;
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["web Developer","App Developer" ,"Problem Solver", "Tech Enthusiast"]}
                typeSpeed={35}
                backSpeed={45}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Hi, I'm a passionate MERN Stack Developer, with expertise in both frontend and backend development.
             I specialize in creating dynamic, responsive web applications, 
             and I am currently seeking exciting opportunities to contribute and grow.
              Let's build something amazing together!

            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://medium.com/@2301661530002" target="_blank">
                      <FaMedium  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/ajeet-gupta-99aa6b281/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-16 mt-4 md:mt-4 mb-10 md:mb-4 order-1 flex justify-center items-start md:items-center">
  <div className="rounded-full bg-white p-4 shadow-lg md:w-[500px] md:h-[540px] w-64 h-72 flex items-center justify-center overflow-hidden">
    <img
      src={pic}
      className="rounded-full w-[95%] h-[95%] object-cover"
      alt="Profile"
    />
  </div>
</div>
 </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
