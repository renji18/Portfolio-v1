import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import SingleStep from "./SingleStep"

const Experience = () => {
  const [experienceData, setExperienceData] = useState([])

  const { experience } = useSelector((state) => state?.portfolioData?.portfolio)

  useEffect(() => {
    setExperienceData(experience)
  }, [experience])

  return (
    <div
      id="experience"
      className="py-10 min-h-screen justify-center pt-[88px] flex flex-col items-center"
    >
      <div className="customContainer px-7 sm:px-20 lg:px-0">
        <div className="text-lg font-semibold sm:text-2xl">
          <h1 className="w-full">My Experiences At</h1>
        </div>
        <div className="mt-10 ml-5">
          {experienceData?.map((e, key) => (
            <SingleStep
              key={key}
              totalItems={experienceData?.length}
              itemNumber={key}
              data={e}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
