import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";
import axios from "axios";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Header = ({ activeMenu, setActiveMenu }) => {
  const [userTheme, setUserTheme] = useState();
  const [userCount, serUserCount] = useState(0);

  const ulElements = [
    { title: "Home", route: "/" },
    { title: "Browse All Projects", route: "/all-projects" },
    { title: "Liked The Portfolio ?", route: "/extras" },
  ];

  useEffect(() => {
    const userCounter = async () => {
      const { data } = await axios.get(
        "https://portfolio-2cf75-default-rtdb.firebaseio.com/userCount.json"
      );

      if (sessionStorage.getItem("aadarsh-portfolio-counter") === null) {
        sessionStorage.setItem("aadarsh-portfolio-counter", true);
        const res = await axios.put(
          "https://portfolio-2cf75-default-rtdb.firebaseio.com/userCount.json",
          { counter: data.counter + 1 }
        );
        serUserCount(res.data.counter);
      } else {
        serUserCount(data.counter);
      }
    };
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
    userCounter();
    themeCheck();
  }, [userTheme, userCount]);

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

  const ordinalSuffix = (i) => {
    var j = i % 10,
      k = i % 100;
    if (j === 1 && k !== 11) {
      return i + "st";
    }
    if (j === 2 && k !== 12) {
      return i + "nd";
    }
    if (j === 3 && k !== 13) {
      return i + "rd";
    }
    return i + "th";
  };

  return (
    <div className="sm:flex text-xl border-b border-b-[#323232] dark:border-b-[#178582] sticky font-serif hidden w-[100vw] items-center justify-around bg-[#DDD0C8] dark:bg-[#0A1828] text-[#323232] dark:text-[#BFA181] py-5">
      <p className="text-2xl cursor-pointer">
        <Link onClick={() => setActiveMenu("")} to="/">
          <img src={Watashi} alt="watashi" className="h-10 w-10 rounded-full" />
        </Link>
      </p>
      <ul className="flex gap-7">
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
      <div className="flex justify-center gap-5 items-center">
        <div
          className="cursor-pointer"
          style={{ transform: "translateY(-1px)" }}
          onClick={themeSwitch}
        >
          {localStorage.theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
        <div
          data-tooltip-id="user-count"
          id="user-count"
          className="bg-[#DDD0C8] rounded-full px-2 pb-2 dark:bg-[#0A1828] text-[#323232] dark:text-[#BFA181] border-[#323232] dark:border-[#178582] cursor-pointer border"
        >
          {userCount}
          <Tooltip
            anchorId="user-count"
            content={`Your are the ${ordinalSuffix(
              userCount
            )} viewer of my portfolio. Thank you!!!`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
