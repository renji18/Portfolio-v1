import React from "react";
import { useNavigate } from "react-router-dom";
import hi from "../assets/hi.png";

const Home = ({ setActiveMenu }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#DEF2F1] px-2 py-10 lg:h-[100vh] sm:justify-evenly w-full flex-col sm:flex-row flex text-[#17252A] font-serif">
      <img src={hi} className="scale-75" alt="hi" />
      <div className="flex  mt-10 sm:mt-0 flex-col lg:gap-20 gap-10 justify-center items-center text-center">
        <p className="sm:text-3xl lg:text-4xl text-2xl font-semibold shadow-inner px-5 py-2 rounded-lg shadow-[#3AA4A9]">
          My name is
          <span className="sm:text-4xl text-3xl lg:text-5xl"> Aadarsh Jha</span>
          .
        </p>
        <p className="text-xl sm:text-2xl lg:text-3xl">
          I'm a{" "}
          <span className="sm:text-3xl text-2xl lg:text-4xl font-semibold">
            Full-Stack Blockchain Developer
          </span>{" "}
          based in Vadodara, Gujarat, India.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl">
          I like to craft solid and scalable{" "}
          <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
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
            style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
            className="bg-[#5ac4beb6] text-2xl text-[#17252A] hover:font-semibold hover:font-mono hover:bg-[#17252A] px-8 py-4 hover:text-[#DEF2F1] rounded-full"
          >
            Projects
          </button>
          <button
            onClick={() => {
              setActiveMenu("Liked The Portfolio ?");
              navigate("/extras");
            }}
            style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
            className="bg-[#5ac4beb6] mt-10 lg:mt-0 text-2xl text-[#17252A] hover:font-semibold hover:font-mono hover:bg-[#17252A] px-8 py-4 hover:text-[#DEF2F1] rounded-full"
          >
            Wanna Know More?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
