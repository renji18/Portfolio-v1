import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";
import "react-tooltip/dist/react-tooltip.css";

const Header = ({ activeMenu, setActiveMenu }) => {
  const [resumeLink, setResumeLink] = useState(null);

  const { portfolio } = useSelector((state) => state?.portfolioData);

  useEffect(() => {
    setResumeLink(portfolio?.footer?.right[3].link);
  }, [portfolio]);

  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const ulElements = [
    { title: "About", route: "aboutMe" },
    { title: "Experience", route: "experience" },
    { title: "Projects", route: "projects" },
    { title: "Contact", route: "contact" },
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
      <ScrollLink smooth={true} duration={500} to="hero">
        <Link to="/">
          <p className="text-2xl cursor-pointer">
            <img
              src={Watashi}
              alt="watashi"
              className="h-10 w-10 rounded-full"
            />
          </p>
        </Link>
      </ScrollLink>
      <div className="flex justify-center gap-5 lg:gap-10 items-center">
        <ul className="flex lg:gap-10 gap-7">
          {ulElements &&
            ulElements.map((item, index) => (
              <ScrollLink
                key={index}
                smooth={true}
                duration={500}
                to={item.route}
              >
                <Link to="/">
                  <li
                    onClick={() => {
                      setActiveMenu(item.title);
                    }}
                    className="cursor-pointer relative"
                    style={{ color: activeMenu === item.title && "#64ffda" }}
                  >
                    {" "}
                    <span>
                      <span
                        style={{ fontFamily: "Fira" }}
                        className="text-[#64ffda] mr-1"
                      >
                        0{index + 1}.{" "}
                      </span>{" "}
                      {item.title}
                    </span>
                  </li>
                </Link>
              </ScrollLink>
            ))}
        </ul>
        <Link target="_blank" to={resumeLink}>
          <div className="text-center text-[#64ffda] py-2 px-3 rounded-md border-[#64ffda] border hover:bg-[#64ffda] hover:text-[#0a192f] hover:font-semibold hover:font-serif">
            Resume
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
