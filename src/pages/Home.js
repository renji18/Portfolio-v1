import React from "react";
import { useNavigate } from "react-router-dom";
import hi from "../assets/hi.png";

const Home = ({ setActiveMenu, menuOpen }) => {
  const navigate = useNavigate();
  return (
    <div
    style={{ filter: menuOpen && "blur(1px)" }} className="bg-[#0a192f] px-2 py-20 sm:justify-evenly w-full flex-col sm:flex-row flex text-[#BFA181] font-serif">
      <img src={hi} className="scale-75" alt="hi" />
      <div className="flex mt-10 sm:mt-0 flex-col lg:gap-20 gap-10 justify-center items-center text-center">
        <p className="sm:text-2xl lg:text-3xl text-xl font-semibold px-5 py-2 rounded-lg">
          My name is
          <span className="sm:text-3xl text-2xl lg:text-4xl"> Aadarsh Jha</span>
          .
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl">
          I'm a{" "}
          <span className="sm:text-2xl text-xl lg:text-3xl font-semibold">
            Full-Stack Blockchain Developer
          </span>{" "}
          based in Vadodara, Gujarat, India.
        </p>
        <p className="text-md sm:text-lg lg:text-xl">
          I like to craft solid and scalable{" "}
          <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
            Web Based Projects
          </span>{" "}
          with great user experiences.
        </p>
        <div className="flex items-center flex-col gap-10 lg:flex-row">
          <button
            onClick={() => {
              setActiveMenu("Browse All Projects");
              navigate("/all-projects");
            }}
            className="bg-[#64ffda] text-[#0a192f] w-[160px] text-xl font-semibold hover:font-serif font-mono px-8 py-4 rounded-full"
          >
            Projects
          </button>
          <button
            onClick={() => {
              setActiveMenu("Liked The Portfolio ?");
              navigate("/extras");
            }}
            className=" hover:font-serif bg-[#64ffda] text-[#0a192f] lg:mt-0 text-xl font-semibold font-mono px-8 py-4 rounded-full"
          >
            Wanna Know More?
          </button>
        </div>
        <div className="flex lg:text-3xl justify-center text-xl items-center gap-3">
          Stack |<i className="devicon-react-original colored"></i>
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
  );
};

export default Home;
