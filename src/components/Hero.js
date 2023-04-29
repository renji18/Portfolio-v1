import React from "react";
import { Link } from "react-router-dom";
import hi from "../assets/hi.png";

const Hero = () => {
  return (
    <div className="h-[100vh] mt-[-65px] md:mt-[-40px] justify-center items-center sm:justify-evenly w-full flex-col sm:flex-row flex">
      <div className="flex customContainer px-7 sm:px-20 lg:px-0  flex-col gap-8">
        <p className="text-[#64ffda] text-lg">Hi, my name is</p>
        <div className="font-semibold lg:text-6xl md:text-5xl text-3xl sm:text-4xl">
          <p>Aadarsh Jha.</p>
          <p className="mt-5 text-[#8892b0]">I build things for the web.</p>
        </div>
        <div className="md:flex">
          <div className="text-[#8892b0] justify-center flex flex-col md:w-1/2 leading-7 lg:leading-9">
            <p>
              I'm a Full-Stack Blockchain Developer specializing in building
              (and occasionally designing) exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered
              website at{" "}
              <Link
                target="_blank"
                to="https://mykinderpass.com/"
                className="text-[#64ffda] hover:underline cursor-pointer"
              >
                Kinderpass.
              </Link>
            </p>
          </div>
          <div className="md:w-1/2 hidden md:flex justify-center">
            <img src={hi} className="w-[228px] h-[228px]" alt="hi" />
          </div>
        </div>
        {/* <div className="flex lg:text-3xl justify-center text-xl items-center gap-3">
          Stack |<i className="devicon-react-original colored"></i>
          <i className="devicon-express-original"></i>
          <i className="devicon-mongodb-plain colored"></i>
          <i className="devicon-solidity-plain"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-redux-original colored"></i>
          <i className="devicon-github-original"></i>
          <i className="devicon-tailwindcss-plain colored"></i>
          <i className="devicon-javascript-plain colored"></i>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
