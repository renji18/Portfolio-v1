import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";
import "react-tooltip/dist/react-tooltip.css";

const Header = ({ activeMenu, setActiveMenu }) => {
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const ulElements = [
    { title: "About", route: "#aboutMe" },
    { title: "Experience", route: "#experience" },
    { title: "Work", route: "#projects" },
    { title: "Contact", route: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollData.y > 100 && scrollData.lastY < scrollData.y) {
      document.getElementById("header").classList.add("hideNav");
    } else {
      document.getElementById("header").classList.remove("hideNav");
    }
  }, [scrollData]);

  return (
    <div
      id="header"
      className="md:flex transition-all text-sm sticky top-0 hidden  items-center bg-[#0a192f] bg-clip-padding blur-backdrop-filter bg-opacity-80 ease-in-out duration-300 justify-between px-10 pt-7 pb-5"
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
