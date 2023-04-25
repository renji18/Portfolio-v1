import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Watashi from "../assets/IMG-20230215-WA0007.jpg";
import axios from "axios";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Header = ({ activeMenu, setActiveMenu }) => {
  const [userCount, serUserCount] = useState(0);
  const navigate = useNavigate();

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
    userCounter();
  }, [userCount]);

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
    <div className="sm:flex text-xl border-b border-b-[#64ffda] sticky font-serif hidden w-[100vw] items-center justify-around bg-[#0a192f] text-[#BFA181] py-5">
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
                navigate(item.route);
              }}
              className="cursor-pointer relative"
              style={{ color: activeMenu === item.title && "#64ffda" }}
            >
              <span>{item.title}</span>
            </li>
          ))}
      </ul>
      <div className="flex justify-center gap-5 items-center">
        <div
          data-tooltip-id="user-count"
          id="user-count"
          className="rounded-full px-2 pb-2 bg-[#0a192f] text-[#BFA181] border-[#64ffda] cursor-pointer border"
        >
          {userCount}
          <Tooltip
            anchorId="user-count"
            content={`Your are the ${ordinalSuffix(
              userCount
            )} viewer. Thank you!!!`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
