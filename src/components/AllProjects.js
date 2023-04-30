import React, { useEffect, useState } from "react";
import axios from "axios";
import AllProjectsImagePart from "./allProjectsStuff/AllProjectsImagePart";
import AllProjectsNamePart from "./allProjectsStuff/AllProjectsNamePart";
import AllProjectsNamePartV2 from "./allProjectsStuff/AllProjectsNamePartV2";
import AllProjectsNamePartV3 from "./allProjectsStuff/AllProjectsNamePartV3";
import loader from "../assets/loader.svg";

const AllProjects = () => {
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
    <div id="projects" className="py-20 px-5 h-full font-semibold">
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
      <div className="flex flex-col py-10 items-center justify-evenly">
        <div className="customContainer px-7 sm:px-20 lg:px-0">
          <div className="flex gap-2 text-lg font-semibold sm:text-2xl">
            <span className="text-[#64ffda]">03.</span>
            <h1 className="mb-10 w-full">Stuff That I've Created</h1>
          </div>
          {projectData.map((item, index) => (
            <div className="my-[100px] flex flex-col md:flex-row">
              {index % 2 === 0 ? (
                <>
                  <AllProjectsImagePart item={item} />
                  <AllProjectsNamePart item={item} />
                </>
              ) : (
                <>
                  <AllProjectsNamePartV2 item={item} />
                  <AllProjectsImagePart item={item} />
                  <AllProjectsNamePartV3 item={item} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
