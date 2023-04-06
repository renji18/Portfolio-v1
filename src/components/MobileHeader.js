import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const MobileHeader = ({ activeMenu, setActiveMenu }) => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const ulElements = [
    { title: "Home", route: "/" },
    { title: "Browse All Projects", route: "/all-projects" },
    { title: "Liked The Portfolio ?", route: "/extras" },
  ];

  return (
    <div>
      <div className="flex z-[5000] sticky top-0 font-serif sm:hidden w-[100vw] items-center justify-around bg-[#17252A] text-[#DEF2F1] py-5">
        <p className="text-2xl cursor-pointer">
          <Link to="/">Aadarsh's Portfolio</Link>
        </p>
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
      {menuOpen ? (
        <div className="bg-[#17252A] font-serif text-[#DEF2F1] transition-all h-[100%]">
          <ul className=" flex flex-col py-2 px-5">
            {ulElements.map((item) => (
              <li
                key={item.route}
                onClick={() => {
                  setActiveMenu(item.title);
                  setMenuOpen(false);
                  navigate(item.route);
                }}
                className="cursor-pointer py-2 border-t border-[#2B7A78]"
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
