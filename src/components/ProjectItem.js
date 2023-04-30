import React from "react";

const ProjectItem = ({ posterImage }) => {
  return (
    <div className="rounded-[15px] mx-4 sm:mx-0 p-5 cursor-pointer">
      <img
        className={`w-full h-full object-cover rounded-[15px]`}
        src={`https://drive.google.com/uc?export=view&id=${posterImage}`}
        alt="poster"
      />
    </div>
  );
};

export default ProjectItem;
