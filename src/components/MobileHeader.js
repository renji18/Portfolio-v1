import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";

const MobileHeader = ({ activeMenu, setActiveMenu, menuOpen, setMenuOpen }) => {
  const ulElements = [
    { title: "About", route: "#aboutMe" },
    { title: "Experience", route: "#experience" },
    { title: "Work", route: "#projects" },
    { title: "Contact", route: "#contact" },
  ];

  return (
    <div id="mobileHeader">
      <div className="flex md:hidden w-[100vw] items-center justify-between px-6 bg-transparent pt-5">
        <p className="cursor-pointer">
          <Link to="/">
            <a onClick={() => setActiveMenu("")} href="#mobileHeader">
              <img
                src={Watashi}
                alt="watashi"
                className="h-10 w-10 rounded-full"
              />
            </a>
          </Link>
        </p>
        <div className="flex right-6 fixed items-center justify-center scale-125 gap-5">
          {menuOpen ? (
            <button onClick={() => setMenuOpen(false)}>
              <MenuOpenIcon />
            </button>
          ) : (
            <button onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </button>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="fixed z-[5000] w-full h-full bg-[#0a192f] top-0 grid justify-center items-center right-0 bottom-0">
          <div className="absolute z-50 text-[#64ffda] scale-150 top-7 right-7">
            {menuOpen ? (
              <button onClick={() => setMenuOpen(false)}>
                <MenuOpenIcon />
              </button>
            ) : (
              <button onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </button>
            )}
          </div>
          <ul className="flex flex-col gap-10">
            {ulElements.map((item, index) => (
              <a key={index} href={item.route}>
                <li
                  key={index}
                  className="text-[#64ffda]"
                  onClick={() => {
                    setActiveMenu(item.title);
                    setMenuOpen(false);
                  }}
                >
                  0{index + 1}.{" "}
                  <span
                    style={{ color: activeMenu === item.title && "#64ffda" }}
                    className="text-white"
                  >
                    {item.title}
                  </span>
                </li>
              </a>
            ))}
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1FVly6kaIn1ou2-TH3rca2ArGb1dw31Kz/view?usp=sharing"
            >
              <div className="text-center py-4 rounded-lg border-[#64ffda] border">
                Resume
              </div>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
