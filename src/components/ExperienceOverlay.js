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
        className="fixed top-0 right-0 left-0 bottom-0 z-40 bg-black/80"
        onClick={handleCloseOverlay}
      ></div>
      <div className="fixed flex flex-col lg:flex-row top-20 p-5 right-20 left-20 bottom-20 z-50 bg-black">
      </div>
    </>
  )
}

export default ExperienceOverlay
