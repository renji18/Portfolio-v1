import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Experience = () => {
  const [experienceData, setExperienceData] = useState([])

  const { experience } = useSelector((state) => state?.portfolioData?.portfolio)

  const [showOverlayData, setShowOverlayData] = useState(false)
  const [overlayData, setOverlayData] = useState(null)

  useEffect(() => {
    setExperienceData(experience)
  }, [experience])

  const handleOpenOverlay = (data) => {
    setOverlayData(data)
    setShowOverlayData(true)
  }

  const handleCloseOverlay = () => {
    setShowOverlayData(false)
    setOverlayData(null)
  }

  return (
    <div
      id="experience"
      className="py-10 justify-center pt-[88px] flex flex-col items-center"
    >
      <div className="customContainer px-7 sm:px-20 lg:px-0">
        <div className="text-lg font-semibold sm:text-2xl">
          <h1 className="w-full">My Experiences At</h1>
        </div>
        <div className="mt-10 grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-10 lg:gap-20 justify-center items-center">
          {experienceData?.map((data) => (
            <div className="flex flex-col p-10 sm:p-5 items-center gap-5 rounded justify-center h-full">
              <img
                src={data?.companyImage}
                onClick={() => handleOpenOverlay(data)}
                className="rounded-[5px] max-w-[200px] drop-shadow-[5px_5px_5px_#00ffc3] mix-blend-hard-light transition-all ease-in-out delay-75 h-full hover:translate-x-[5px] hover:translate-y-[5px] hover:drop-shadow-[0px_0px_5px_#00ffc3] hover:cursor-pointer"
                alt="worked at"
              />
              <p>{data?.workedTill}</p>
            </div>
          ))}
        </div>
        {/* <div>
          {showOverlayData && (
            <ExperienceOverlay
              handleCloseOverlay={handleCloseOverlay}
              data={overlayData}
            />
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Experience
