import React from "react"
import { Link } from "react-router-dom"
import GitHubIcon from "@mui/icons-material/GitHub"

const AllProjectsNamePartV3 = ({ item }) => {
  return (
    <div className="flex md:hidden md:flex-col gap-10 justify-center items-center md:w-2/5 mt-5 md:mt-0">
      <p className="sm:text-xl italic">{item?.name}</p>
      <Link
        target="_blank"
        to={item?.github}
        className="cursor-pointer text-[#00ffc3]  sm:text-xl text-sm ml-2"
      >
        <button className="border text-base border-[#00ffc3] py-2 px-3 rounded-md hover:bg-[#00ffc3] hover:text-black hover:font-semibold hover:font-serif flex justify-center items-center gap-2">
          <GitHubIcon /> Github
        </button>
      </Link>
    </div>
  )
}

export default AllProjectsNamePartV3
