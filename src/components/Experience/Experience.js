import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Experience = () => {
  const [experienceData, setExperienceData] = useState([])

  const { experience } = useSelector((state) => state?.portfolioData?.portfolio)

  useEffect(() => {
    setExperienceData(experience)
  }, [experience])

  return (
    <div
      id="experience"
      className="py-10 justify-center pt-[88px] flex flex-col items-center"
    >
      <div className="customContainer px-7 sm:px-20 lg:px-0">
        <div className="text-lg font-semibold sm:text-2xl">
          <h1 className="w-full">My Experiences At</h1>
        </div>
      </div>
    </div>
  )
}

export default Experience
