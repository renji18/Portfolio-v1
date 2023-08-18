import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Experience = () => {
  const [experienceData, setExperienceData] = useState([])

  const { experience } = useSelector((state) => state?.portfolioData?.portfolio)

  useEffect(() => {
    setExperienceData(experience)
  }, [experience])

  return (
    <div>
      <div>yo</div>
    </div>
  )
}

export default Experience
