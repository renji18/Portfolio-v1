import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectItem from "../ProjectItem";

const AllProjectsImagePart = ({ item, menuOpen }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      key={item[0]}
      className={`shadow-[#00ffc3] cursor-pointer relative md:w-3/5 rounded-[15px] shadow z-[${
        menuOpen.menuOpen ? -1 : 0
      }]`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        navigate(`/project-details/${item[0]}`, {
          state: {
            name: item[1].projectName,
            posterImage: item[1].posterImage,
            imageUrls: item[1].imageUrls,
            desc: item[1].projectDescription,
            link: item[1].githubLink,
          },
        });
      }}
    >
      <ProjectItem
        name={item[1].projectName}
        posterImage={item[1].posterImage}
      />
      {hovered && (
        <div className="absolute bg-clip-padding blur-backdrop-filter bg-opacity-60 font-semibold  text-black bg-[#FB2576] h-full w-full top-0 rounded-[15px] flex justify-center items-center ">
          <p>Select to view more about the project</p>
        </div>
      )}
    </div>
  );
};

export default AllProjectsImagePart;
