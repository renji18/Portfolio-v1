import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Header = ({ activeMenu, setActiveMenu }) => {
  const [userTheme, setUserTheme] = useState();

  const ulElements = [
    { title: "Home", route: "/" },
    { title: "Browse All Projects", route: "/all-projects" },
    { title: "Liked The Portfolio ?", route: "/extras" },
  ];

  useEffect(() => {
    const themeCheck = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setUserTheme("dark");
      } else {
        setUserTheme("light");
        document.documentElement.classList.remove("dark");
      }
    };
    themeCheck();
  }, [userTheme]);

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setUserTheme("light");
      return;
    }
    document.documentElement.classList.add("dark");
    setUserTheme("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <div className="sm:flex text-xl border-b border-b-[#323232] dark:border-b-[#178582] sticky font-serif hidden w-[100vw] items-center justify-around bg-[#DDD0C8] dark:bg-[#0A1828] text-[#323232] dark:text-[#BFA181] py-5">
      <p className="text-2xl cursor-pointer">
        <Link onClick={() => setActiveMenu("")} to="/">
          <img src={Watashi} alt="watashi" className="h-10 w-10 rounded-full" />
        </Link>
      </p>
      <ul className="flex gap-7">
        <div className="cursor-pointer" style={{transform: 'translateY(-1px)'}} onClick={themeSwitch}>
          {localStorage.theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
        {ulElements &&
          ulElements.map((item) => (
            <li
              key={item.route}
              onClick={() => {
                setActiveMenu(item.title);
              }}
              className="cursor-pointer relative"
            >
              <Link to={item.route}>{item.title}</Link>
              <div
                className={`${
                  activeMenu ? "text-center mt-[-6px] mb-[-22px]" : ""
                }`}
              >
                {activeMenu === item.title ? <KeyboardArrowUpIcon /> : null}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Header;
