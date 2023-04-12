import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MobileHeader = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();
  const [userTheme, setUserTheme] = useState();

  const [menuOpen, setMenuOpen] = useState(false);

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
    <div>
      <div className="flex border-b border-b-[#323232] dark:border-b-[#178582] sticky font-serif sm:hidden w-[100vw] items-center justify-between px-6 bg-[#DDD0C8] dark:bg-[#0A1828] text-[#323232] dark:text-[#BFA181] py-5">
        <p className="text-2xl cursor-pointer">
          <Link onClick={() => setActiveMenu("")} to="/">
            <img
              src={Watashi}
              alt="watashi"
              className="h-10 w-10 rounded-full"
            />
          </Link>
        </p>
        <div className="flex items-center justify-center scale-125 gap-5">
          <div style={{ transform: "translateY(1px)" }} onClick={themeSwitch}>
            {localStorage.theme === "dark" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </div>
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
      {menuOpen ? (
        <div className="font-serif border-b border-b-[#323232] dark:border-b-[#178582] bg-[#DDD0C8] dark:bg-[#0A1828] text-[#323232] dark:text-[#BFA181] transition-all h-[100%]">
          <ul className=" flex flex-col py-2 px-5">
            {ulElements.map((item) => (
              <li
                key={item.route}
                onClick={() => {
                  setActiveMenu(item.title);
                  setMenuOpen(false);
                  navigate(item.route);
                }}
                className="cursor-pointer py-2 border-t border-[#323232] dark:border-[#178582]"
              >
                {activeMenu === item.title ? <KeyboardArrowRightIcon /> : null}
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileHeader;
