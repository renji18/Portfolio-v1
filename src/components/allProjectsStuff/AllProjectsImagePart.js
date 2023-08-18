import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ProjectItem from "../ProjectItem"

const AllProjectsImagePart = ({ item, menuOpen }) => {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const [isHidden, setIsHidden] = useState("")

  useEffect(() => {
    setIsHidden(menuOpen.menuOpen ? "-z-50" : "")
  }, [menuOpen])

  return (
    <div
      key={item?.name}
      className={`shadow-[#00ffc3]  cursor-pointer relative md:w-3/5 rounded-[15px] shadow ${isHidden}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        navigate(`/project-details/${item?.name}`, {
          state: {
            name: item?.name,
            posterImage: item?.poster,
            imageUrls: item?.images,
            desc: item?.desc,
            link: item?.github,
          },
        })
      }}
    >
      <ProjectItem name={item?.name} posterImage={item?.poster} />
      {hovered && (
        <div className="absolute bg-clip-padding blur-backdrop-filter bg-opacity-60 text-4xl italic font-extrabold text-black bg-transparent h-full w-full top-0 rounded-[15px] flex justify-center items-center ">
          <p className="text-[#00ffc3]">View More</p>
        </div>
      )}
    </div>
  )
}

export default AllProjectsImagePart
