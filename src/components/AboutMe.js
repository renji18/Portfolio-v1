import React from "react";
import respect from "../assets/respect.png";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="py-10 justify-center md:h-[100vh] flex flex-col items-center"
    >
      <div className="customContainer px-7 sm:px-20 lg:px-0">
        <div className="flex gap-2 text-lg font-semibold sm:text-2xl">
          <span className="text-[#64ffda]">01.</span>
          <h1 className="lg:mb-10 w-full ">About Me</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="hidden lg:block">
            <img src={respect} alt="about me" />
          </div>
          <div className="flex lg:text-end text-[#8892b0] pb-10 mt-10 lg:gap-10 flex-col gap-5">
            <p className="leading-7">
              Hey there, My name is Aadarsh Jha and I enjoy creating things that
              live on the internet. My interest in{" "}
              <span className="text-[#64ffda]">Web Development</span> started
              back when I was in my second semester of college.
            </p>
            <p className="leading-7">
              I started off with Web Development because it has a lot of
              projects to work with. I created tons of sites, with various
              different technologies to try from.
            </p>
            <p className="leading-7">
              After almost 1 and a half year of creating web pages, I started
              studying{" "}
              <span className="text-[#64ffda]">Blockchain Development</span>.
            </p>
            <p className="leading-7">
              Creating contracts in Solidity, testing them out using ethers and
              hardhat, and deploying them via thirdweb are just some of the
              stuff I've experimented with.
            </p>
            <p className="leading-7">
              There's still a long journey ahead, but the journey is worthwhile.
              Stick along if you wanna know what else I'll achieve in the near
              future.
            </p>
            <p className="leading-7">
              Here are a few technologies I've been working with recently:
            </p>
          </div>
        </div>
        <div className="flex lg:justify-end text-lg md:text-2xl flex-col sm:flex-row items-center gap-2">
          <p className="text-[#64ffda]">Stack</p>
          <p className="hidden sm:block">|</p>
          <div className="flex items-center gap-3">
            <i className="devicon-react-original colored"></i>
            <i className="devicon-express-original"></i>
            <i className="devicon-mongodb-plain colored"></i>
            <i className="devicon-solidity-plain"></i>
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-redux-original colored"></i>
            <i className="devicon-github-original"></i>
            <i className="devicon-tailwindcss-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
