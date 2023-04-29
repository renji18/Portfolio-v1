import React from "react";

const AboutMe = () => {
  const bullshit = [
    "Hey there, My name is Aadarsh Jha and I enjoy creating things that live on the internet. My end goal is to be a Cyber Security Engineer. But I thought to myself, rather than to study about various type of attacks or exposures in a technology, why not learn that technology myself and explore all the vulnerabilites.",
    "I started off with Web Development because it has a lot of projects to show at the start of ones career. I created tons of sites, with various different technologies to try from.",
    "After almost 1 and a half year of creating web pages, I started studying Blockchain Development.",
    "Creating contracts in Solidity, testing them out using ethers and hardhat, and deploying them via thirdweb are just some of the stuff I've experimented with.",
    "There's still a long journey ahead, but the journey is worthwhile. Stick along if you wanna know what else I'll achieve in the near future.",
  ];
  return (
    <div
      id="aboutMe"
      className="py-10 justify-center px-7 sm:px-20 lg:px-0 flex flex-col items-center"
    >
      <div className="customContainer">
        <div className="flex gap-2 text-[15px] font-semibold lg:text-[30px] sm:text-[20px]">
          <span className="text-[#64ffda]">01.</span>
          <h1 className="lg:mb-10 w-full sm:w-4/12">About Me</h1>
          <div className="h-[1px] w-full -translate-x-5 sm:translate-x-0 translate-y-3 md bg-[#8892b0]"></div>
        </div>
        <div className="flex text-[#8892b0] pb-10 mt-10 lg:pb-20 lg:gap-10 flex-col gap-7">
          {bullshit.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
