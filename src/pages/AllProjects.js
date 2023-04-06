import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "../components/ProjectItem";

const AllProjects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchAllProjects = async () => {
      const { data } = await axios.get(
        "https://portfolio-2cf75-default-rtdb.firebaseio.com/singleProjectData.json"
      );
      setProjectData(Object.entries(data));
    };
    fetchAllProjects();
  }, []);

  return (
    <div className="py-20 h-full bg-[#DEF2F1] text-[#17252A] font-semibold">
      <div className="flex flex-col sm:flex-row items-center gap-x-40 gap-y-20 flex-wrap justify-evenly">
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
