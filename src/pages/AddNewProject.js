import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import poster from "../assets/wallpaperflare.com_wallpaper.jpg";

const AddNewProject = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState(false);

  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    githubLink: "",
    posterImage: "",
    imageUrls: [],
  });

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
    <div>
      {login ? (
        <div>
          <div>
            Login Page Left
          </div>
        </div>
      ) : (
        <div className="bg-[#DEF2F1] py-[45px] font-serif">
          <div className="container lg:flex mx-auto">
            <div className="w-full hidden lg:block lg:w-1/2">
              <img src={poster} className="w-full h-full" alt="posterImage" />
            </div>
            <div className="w-full lg:w-1/2 text-center pt-14 px-16 text-[#17252A]">
              <h2 className="mb-10 text-4xl font-bold">Add New Project</h2>
              <form className="text-lg text-[#17252A] placeholder:text-[#2B7A78] flex flex-col gap-1">
                <input
                  autoComplete="off"
                  onChange={(e) => fillForm(e)}
                  type="text"
                  value={formData.projectName}
                  className="outline-[#2B7A78] rounded-md py-1 w-full px-2"
                  name="projectName"
                  placeholder="Input Project Name"
                />
                <textarea
                  autoComplete="off"
                  onChange={(e) => fillForm(e)}
                  placeholder="Enter Project Description"
                  name="projectDescription"
                  value={formData.projectDescription}
                  className="outline-[#2B7A78] rounded-md resize-none py-1 w-full px-2"
                  id="desc"
                  cols="30"
                  rows="10"
                />
                <input
                  autoComplete="off"
                  type="text"
                  onChange={(e) => fillForm(e)}
                  className="outline-[#2B7A78] rounded-md py-1 w-full px-2"
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
                  className="outline-[#2B7A78] rounded-md py-1 w-full px-2"
                  placeholder="Poster Image"
                />
                <input
                  autoComplete="off"
                  type="text"
                  onChange={(e) => fillForm(e)}
                  value={formData.imageUrls}
                  name="imageUrls"
                  className="outline-[#2B7A78] rounded-md py-1 w-full px-2"
                  placeholder="Additional Image Urls (with comma)"
                />
              </form>
              <button
                onClick={handleClick}
                className="bg-[#2B7A78] text-[#FEFFFF] text-lg my-5 px-6 py-3 rounded-3xl"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewProject;
