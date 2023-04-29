import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ name, posterImage, _route, imageUrls, desc, link }) => {
  const navigate = useNavigate({});

  return (
    <div
      onClick={() => {
        navigate(`/project-details/${_route}`, {
          state: { name, posterImage, imageUrls, desc, link },
        });
      }}
      className="rounded-[15px] mx-4 sm:mx-0 p-5  cursor-pointer"
    >
      <img
        className={`w-full h-[200px] object-cover rounded-[15px]`}
        src={`https://drive.google.com/uc?export=view&id=${posterImage}`}
        alt="poster"
      />
      <p className="font-semibold text-center text-xl mt-4 leading-[26px] truncate">
        {name}
      </p>
    </div>
  );
};

export default ProjectItem;
