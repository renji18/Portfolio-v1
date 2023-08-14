import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import MenuIcon from "@mui/icons-material/Menu"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
// import Watashi from "../assets/IMG-20230215-WA0007.jpg";

const MobileHeader = ({ activeMenu, setActiveMenu, menuOpen, setMenuOpen }) => {
  const [resumeLink, setResumeLink] = useState(null)
  const [profile, setProfile] = useState(null)

  const { portfolio } = useSelector((state) => state?.portfolioData)

  useEffect(() => {
    setResumeLink(portfolio?.footer?.right[3].link)
    setProfile(portfolio?.profilePic)
  }, [portfolio])

  // const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const navigate = useNavigate()
  const location = useLocation()
  const ulElements = [
    { title: "About", route: "#aboutMe" },
    { title: "Experience", route: "#experience" },
    { title: "Projects", route: "#projects" },
    { title: "Contact", route: "#contact" },
  ]

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollData((prevState) => {
  //       return {
  //         y: window.scrollY,
  //         lastY: prevState.y,
  //       };
  //     });
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (scrollData.y > 100 && scrollData.lastY < scrollData.y) {
  //     setMenuOpen(false);
  //     document.getElementById("mobileHeader").classList.add("hideNav");
  //   } else {
  //     document.getElementById("mobileHeader").classList.remove("hideNav");
  //   }
  // }, [scrollData, setMenuOpen]);

  return (
    <div
      id="mobileHeader"
      className="sticky transition-all top-0 bg-clip-padding bg-opacity-80 ease-in-out duration-300"
    >
      <div className="flex md:hidden w-[100vw] items-center justify-between px-6 py-5 blur-backdrop-filter">
        <ScrollLink smooth={true} duration={500} to="hero">
          <Link to="/">
            <p className="cursor-pointer">
              <img
                src={profile}
                alt="watashi"
                className="h-10 w-10 rounded-full"
              />
            </p>
          </Link>
        </ScrollLink>
        <div className="flex right-6 items-center justify-center scale-125 gap-5">
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
        <div className="fixed z-[5000000] w-full h-full bg-black top-0 grid justify-center items-center right-0 bottom-0">
          <div className="absolute z-50 text-[#00ffc3] scale-150 top-7 right-7">
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
          <ul className="flex z-[5000000] bg-black flex-col gap-10">
            {ulElements.map((item, index) => (
              <a key={index} href={item.route}>
                <li
                  key={index}
                  className="z-[5000000] text-white"
                  onClick={() => {
                    if (location.pathname !== "/") return navigate("/")
                    setActiveMenu(item.title)
                    setMenuOpen(false)
                  }}
                >
                  {/* 0{index + 1}.{" "} */}
                  <span
                    style={{ color: activeMenu === item.title && "white" }}
                    className="z-[5000000] ml-7 mr-2 text-[#00ffc3]"
                  >
                    {item.title}
                  </span>
                </li>
              </a>
            ))}
            <Link target="_blank" to={resumeLink}>
              <div className="text-center z-[5000000] py-4 rounded-lg border-[#00ffc3] text-white border">
                Resume
              </div>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileHeader
