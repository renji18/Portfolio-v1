import React from "react"

const NoLink = ({ link, name }) => {
  return (
    <>
      <span to={link} className="text-[#00ffc3] hover:underline cursor-pointer">
        {`\t${name}`}
      </span>
      <span className="text-[#b4bacc]">.</span>
    </>
  )
}

export default NoLink
