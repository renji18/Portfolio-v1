import React, { useState } from "react";
import axios from "axios";
import poster from "../assets/wallpaperflare.com_wallpaper.jpg";

const Extras = ({ menuOpen }) => {
  const [thoughts, setThoughts] = useState({
    name: "",
    email: "",
    text: "",
  });

  const settingThoughts = (e) => {
    setThoughts({ ...thoughts, [e.target.name]: e.target.value });
  };

  const handleButtonClick = async () => {
    const { name, email, text } = thoughts;

    if (!name || !email || !text) return alert("Please fill all the details.");

    const res = await axios.post(
      "https://portfolio-2cf75-default-rtdb.firebaseio.com/userThoughts.json",
      thoughts
    );

    if (res.status === 200) {
      alert("Successfully Sent Message");
      setThoughts({
        name: "",
        email: "",
        text: "",
      });
    } else {
      alert("An error occurred, try again!!!");
    }
  };

  const bullshit = [
    "Hey there, Aadarsh here. I've already showcased my projects and skills. But I thought I'd want you to know more about what I want to achieve and how I'm going to do it.",
    "My end goal is to be a Cyber Security Engineer. But I thought to myself, rather than to study about various type of attacks or exposures in a technology, why not learn that technology myself and explore all the vulnerabilites.",
    "I started off with Web Development because it has a lot of projects to show at the start of ones career. I created tons of sites, with various different technologies to try from.",
    "After almost 1 and a half year of creating web pages, I started studying Blockchain Development.",
    "Creating contracts in Solidity, testing them out using ethers and hardhat, and deploying them via thirdweb are just some of the stuff I've experimented with.",
    "There's still a long journey ahead, but the journey is worthwhile. Stick along if you wanna know what else I'll achieve in the near future.",
  ];
  return (
    <div
      style={{ filter: menuOpen && "blur(1px)" }}
      className="py-10 px-10 sm:px-20 gap-10 flex lg:text-2xl text-xl leading-[40px] flex-col items-center bg-[#0a192f] text-[#BFA181] font-serif"
    >
      <h1 className="text-4xl lg:mb-10 underline-offset-4 underline">
        About Me
      </h1>
      <div className="flex border-b pb-10 lg:pb-20 border-b-[#64ffda] lg:gap-10 flex-col gap-7">
        {bullshit.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <h1 className="text-3xl  underline-offset-4 underline">
        Share your thoughts
      </h1>
      <div className="text-[#0a192f] bg-[#0a192f] pb-10 font-serif">
        <div className="container lg:flex mx-auto">
          <div className="w-full hidden lg:block lg:w-1/2">
            <img src={poster} className="w-full h-[610px]" alt="posterImage" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:pt-24 lg:px-16">
            <form className="text-lg flex flex-col gap-5">
              <input
                autoComplete="off"
                type="text"
                value={thoughts.name}
                onChange={(e) => settingThoughts(e)}
                className="text-[#BFA181] outline-none bg-[#0a192f] placeholder:text-[#64ffda] border border-[#64ffda] rounded-md py-1 w-full px-2"
                name="name"
                placeholder="Your Name:"
              />
              <textarea
                autoComplete="off"
                placeholder="Whatever You Wanna Say"
                name="text"
                value={thoughts.text}
                onChange={(e) => settingThoughts(e)}
                className="outline-none bg-[#0a192f] text-[#BFA181] border border-[#64ffda] placeholder:text-[#64ffda] rounded-md resize-none py-1 w-full px-2"
                id="desc"
                cols="30"
                rows="10"
              />
              <input
                autoComplete="off"
                type="text"
                value={thoughts.email}
                onChange={(e) => settingThoughts(e)}
                className="text-[#BFA181] outline-none bg-[#0a192f] placeholder:text-[#64ffda] border border-[#64ffda] rounded-md py-1 w-full px-2"
                name="email"
                placeholder="Email"
              />
            </form>
            <button
              onClick={handleButtonClick}
              className=" hover:font-mono bg-[#64ffda] text-[#0a192f] text-lg my-5 px-6 py-3 rounded-3xl"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extras;
