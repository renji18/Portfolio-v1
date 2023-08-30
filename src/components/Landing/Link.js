import React from "react"
import { Link as ReactLink } from "react-router-dom"

const Link = ({ link, name }) => {
  return (
    <>
      <ReactLink
        target="_blank"
        to={link}
        className="text-[#00ffc3] hover:underline cursor-pointer"
      >
        {`\t${name}`}
      </ReactLink>
      <span className="text-[#b4bacc]">.</span>
    </>
  )
}

export default Link
