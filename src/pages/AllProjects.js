import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "../components/ProjectItem";
import loader from "../assets/loader.svg";

const AllProjects = ({ menuOpen }) => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProjects = async () => {
      const { data } = await axios.get(
        "https://portfolio-2cf75-default-rtdb.firebaseio.com/singleProjectData.json"
      );
      setProjectData(Object.entries(data));
    };
    fetchAllProjects();
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div
    style={{ filter: menuOpen && "blur(1px)" }} className="py-20 px-5 h-full bg-[#0a192f] text-[#BFA181]  font-semibold">
      <div
        className={`fixed inset-0 scale-150 z-10 h-screen bg-[#0a192f] flex items-center ${
          loading ? "" : "hidden"
        } justify-center flex-col`}
      >
        <img
          src={loader}
          alt="loader"
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center lg:px-20 lg:gap-x-16 lg:gap-y-20 gap-y-10 flex-wrap justify-evenly">
        {projectData.map((item) => (
          <div
            key={item[0]}
            className="shadow-[#2B7A78] rounded-[15px] shadow-2xl"
          >
            <ProjectItem
              _route={item[0]}
              name={item[1].projectName}
              posterImage={item[1].posterImage}
              imageUrls={item[1].imageUrls}
              desc={item[1].projectDescription}
              link={item[1].githubLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
