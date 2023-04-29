import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import poster from "../assets/wallpaperflare.com_wallpaper.jpg";

const AddNewProject = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    githubLink: "",
    posterImage: "",
    imageUrls: [],
  });

  const passCode = process.env.REACT_APP_ADMIN_PASSWORD;

  const fillForm = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleClick = async () => {
    let {
      projectName,
      posterImage,
      projectDescription,
      githubLink,
      imageUrls,
    } = formData;

    if (
      !projectDescription ||
      !projectName ||
      !githubLink ||
      !imageUrls ||
      !posterImage
    )
      return alert("Please fill all the data");

    const editedPosterImage = formData.posterImage
      .split("/d/")[1]
      .split("/view")[0];

    let imageArray = imageUrls.split(",");
    let editedImageArray = [];

    imageArray.map((item) =>
      editedImageArray.push(item.split("/d/")[1].split("/view")[0])
    );

    const editedFormData = {
      projectName,
      projectDescription,
      githubLink,
      posterImage: editedPosterImage,
      imageUrls: editedImageArray,
    };

    const windowInput = window.prompt("Enter your password");

    if (windowInput !== passCode) return alert("Unauthorized To Add Projects");

    const res = await axios.post(
      "https://portfolio-2cf75-default-rtdb.firebaseio.com/singleProjectData.json",
      editedFormData
    );

    if (res.status === 200) {
      alert("Successfully added project");
      navigate("/all-projects");
    } else {
      alert("An error occurred, try again!!!");
    }
  };

  return (
    <div
      className="py-[45px]"
    >
      <div className="container lg:flex mx-auto">
        <div className="w-full hidden lg:block lg:w-1/2">
          <img src={poster} className="w-full h-full" alt="posterImage" />
        </div>
        <div className="w-full lg:w-1/2 text-center pt-14 px-16">
          <h2 className="mb-10 text-4xl font-bold">Add New Project</h2>
          <form className="text-lg flex flex-col gap-2">
            <input
              autoComplete="off"
              onChange={(e) => fillForm(e)}
              type="text"
              value={formData.projectName}
              className="outline-none bg-[#0a192f] placeholder:text-[#8892b0] border border-[#8892b0] rounded-md py-1 w-full px-2"
              name="projectName"
              placeholder="Input Project Name"
            />
            <textarea
              autoComplete="off"
              onChange={(e) => fillForm(e)}
              placeholder="Enter Project Description"
              name="projectDescription"
              value={formData.projectDescription}
                className="outline-none bg-[#0a192f] border border-[#8892b0] placeholder:text-[#8892b0] rounded-md resize-none py-1 w-full px-2"
              id="desc"
              cols="30"
              rows="10"
            />
            <input
              autoComplete="off"
              type="text"
              onChange={(e) => fillForm(e)}
                className="outline-none bg-[#0a192f] placeholder:text-[#8892b0] border border-[#8892b0] rounded-md py-1 w-full px-2"
              name="githubLink"
              placeholder="Github Link"
              value={formData.githubLink}
            />
            <input
              autoComplete="off"
              type="text"
              onChange={(e) => fillForm(e)}
              value={formData.posterImage}
              name="posterImage"
                className="outline-none bg-[#0a192f] placeholder:text-[#8892b0] border border-[#8892b0] rounded-md py-1 w-full px-2"
              placeholder="Poster Image"
            />
            <input
              autoComplete="off"
              type="text"
              onChange={(e) => fillForm(e)}
              value={formData.imageUrls}
              name="imageUrls"
                className="outline-none bg-[#0a192f] placeholder:text-[#8892b0] border border-[#8892b0] rounded-md py-1 w-full px-2"
              placeholder="Additional Image Urls (with comma)"
            />
          </form>
          <button
            onClick={handleClick}
            className="hover:font-mono font-semibold bg-[#64ffda] text-[#0a192f] text-lg my-5 px-6 py-3 rounded-3xl"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProject;
