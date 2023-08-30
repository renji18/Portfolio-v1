import React from "react"
import { Link } from "react-router-dom"

const SingleItem = ({ icon, link, title, itemNumber }) => {
  return (
    <Link target="_black" to={link}>
      <div className="flex flex-col items-center">
        <div
          title={title}
          className={`cursor-pointer flex flex-col items-center ${
            (itemNumber - 1) % 2 === 0 ? "translate-x-5" : "-translate-x-5"
          }`}
        >
          <p
            className={`${
              (itemNumber - 1) % 2 === 0
                ? "translate-x-[18px] lg:translate-x-5 lg:translate-y-2 translate-y-[10px]"
                : "-translate-x-4 lg:translate-y-2 translate-y-3"
            }  lg:scale-125`}
          >
            {icon}
          </p>
          <div
            className={`w-1 bg-[#00ffc3] h-10 ${
              (itemNumber - 1) % 2 === 0
                ? "rotate-45 -translate-x-1"
                : "-rotate-45 translate-x-[6px]"
            }`}
          ></div>
        </div>
      </div>
    </Link>
  )
}

export default SingleItem
