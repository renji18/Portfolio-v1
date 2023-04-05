import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const ulElements = [
    { title: "Home", route: "/" },
    { title: "Browse All Projects", route: "/all-projects" },
    { title: "Liked The Portfolio ?", route: "#" },
  ];

  return (
    <div className="sm:flex z-[5000] text-xl sticky top-0 font-serif hidden w-[100vw] items-center justify-evenly  bg-[#17252A] text-[#DEF2F1] py-5">
      <p className="text-2xl cursor-pointer">
        <Link onClick={() => setActiveMenu('')}  to="/">Aadarsh's Portfolio</Link>
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
    </div>
  );
};

export default Header;
