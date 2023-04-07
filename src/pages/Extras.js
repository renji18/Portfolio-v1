import React from "react";

const Extras = () => {
  const bullshit = [
    "Hi, Myself Aadarsh. You've already seen the home page so I'll spare the repetition.",
    "My end goal is to be a Cyber Security Engineer. But I thought to myself, rather than to study about various type of attacks or exposures in a technology, why not learn that technology and explore all the vulnerabilites myself.",
    "I started off with Web Development because it has a lot of projects to show at the start of ones career. I created tons of sites, with various different technologies to try from.",
    "Instead of going on a spree and naming out all the techs and frameworks, I'll ask you to scan through my github repos, or my resume and see them for yourself, if you want to.",
    "After almost 1 and a half year of creating web pages, I started studying Blockchain Development.",
    "Creating contracts in Solidity, testing them out using ethers and hardhat, and deploying them via thirdweb are just some of the stuff I've experimented with.",
    "There's still a long journey ahead, but the journey is worthwhile. Stick along if you wanna know what else I'll achieve in the near future.",
  ];
  return (
    <div className="bg-[#DDD0C8] py-5 px-10 sm:px-20 gap-10 flex lg:text-2xl text-xl leading-[40px] flex-col items-center dark:bg-[#041828] text-[#323232] dark:text-[#BFA181] font-serif">
      <h1 className="text-4xl underline-offset-4 underline">About Me</h1>
      <div className="flex border-b border-b-[#323232] pb-5 dark:border-b-[#178582] lg:gap-10 flex-col gap-7">
        {bullshit.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <h1 className="text-3xl underline-offset-4 underline">Contact</h1>
    </div>
  );
};

export default Extras;
