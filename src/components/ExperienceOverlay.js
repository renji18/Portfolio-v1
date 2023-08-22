import React, { useEffect } from "react"

const ExperienceOverlay = ({ data, handleCloseOverlay }) => {
  // , desc[], location, position, companyImage, workPlace, startedFrom, workedTill

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => (document.body.style.overflow = "scroll")
  })

  return (
    <>
      <div
        className="fixed top-0 right-0 left-0 bottom-0 z-40 bg-black/60"
        onClick={handleCloseOverlay}
      ></div>
      <div className="fixed top-20 right-20 left-20 bottom-20 z-50 bg-white">
        <div
          className="absolute top-[-15px] text-3xl italic right-[-15px] bg-black rounded-full px-2 cursor-pointer"
          onClick={handleCloseOverlay}
        >
          X
        </div>
      </div>
    </>
  )
}

export default ExperienceOverlay
