import React from "react";
import { Link } from "react-router-dom";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";
import "react-tooltip/dist/react-tooltip.css";

const Header = ({ activeMenu, setActiveMenu }) => {
  const ulElements = [
    { title: "About", route: "#aboutMe" },
    { title: "Experience", route: "#experience" },
    { title: "Work", route: "#projects" },
    { title: "Contact", route: "#contact" },
  ];

  return (
    <div
      id="header"
      className="md:flex text-sm sticky hidden  items-center justify-between px-10 pt-7 pb-5"
    >
      <p className="text-2xl cursor-pointer">
        <Link onClick={() => setActiveMenu("")} to="/">
          <img src={Watashi} alt="watashi" className="h-10 w-10 rounded-full" />
        </Link>
      </p>
      <div className="flex justify-center gap-5 lg:gap-10 items-center">
        <ul className="flex lg:gap-10 gap-7">
          {ulElements &&
            ulElements.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActiveMenu(item.title);
                }}
                className="cursor-pointer relative"
                style={{ color: activeMenu === item.title && "#64ffda" }}
              >
                {" "}
                <a href={item.route}>
                  <span>
                    <span className="text-[#64ffda] mr-1">0{index + 1}. </span>{" "}
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
        </ul>
        <Link
          target="_blank"
          to="https://drive.google.com/file/d/1FVly6kaIn1ou2-TH3rca2ArGb1dw31Kz/view?usp=sharing"
        >
          <div className="text-center text-[#64ffda] py-2 px-3 rounded-md border-[#64ffda] border">
            Resume
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
