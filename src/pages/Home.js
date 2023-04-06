import React from "react";
import { useNavigate } from "react-router-dom";
import hi from "../assets/hi.png";

const Home = ({ setActiveMenu }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#DDD0C8] dark:bg-[#041828] px-2 py-10 lg:h-[100vh] sm:justify-evenly w-full flex-col sm:flex-row flex text-[#323232] dark:text-[#BFA181] font-serif">
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
        <div className="lg:flex gap-10 lg:flex-row">
          <button
            onClick={() => {
              setActiveMenu("Browse All Projects");
              navigate("/all-projects");
            }}
            className="bg-[#323232b2] dark:bg-[#178582] dark:text-[#0A1828] text-xl text-[#DDD0C8] font-semibold hover:font-serif font-mono px-8 py-4 rounded-full"
          >
            Projects
          </button>
          <button
            onClick={() => {
              setActiveMenu("Liked The Portfolio ?");
              navigate("/extras");
            }}
            className="bg-[#323232b2] hover:font-serif dark:bg-[#178582] dark:text-[#0A1828] mt-10 lg:mt-0 text-xl text-[#DDD0C8] font-semibold font-mono px-8 py-4 rounded-full"
          >
            Wanna Know More?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
