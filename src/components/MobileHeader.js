import React from "react";
import { useNavigate, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";

const MobileHeader = ({ activeMenu, setActiveMenu, menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();

  const ulElements = [
    { title: "Home", route: "/" },
    { title: "Browse All Projects", route: "/all-projects" },
    { title: "Liked The Portfolio ?", route: "/extras" },
  ];

  return (
    <div>
      <div
        style={{ filter: menuOpen && "blur(1px)" }}
        className="flex border-b border-b-[#64ffda] sticky font-serif sm:hidden w-[100vw] items-center justify-between px-6 bg-[#0a192f] text-[#BFA181] py-5"
      >
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
        <div className="fixed text-white z-[5000] w-[80%] bg-[#0a192f] top-0 grid justify-center items-center right-0 bottom-0">
          <div className="absolute text-[#64ffda] scale-150 top-7 right-7">
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
              <li
                key={item.route}
                className="text-[#64ffda]"
                onClick={() => {
                  setActiveMenu(item.title);
                  setMenuOpen(false);
                  navigate(item.route);
                }}
              >
                0{index + 1}. <span className="text-white">{item.title}</span>
              </li>
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
