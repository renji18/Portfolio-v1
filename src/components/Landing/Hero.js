import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Link from "./Link"
import NoLink from "./NoLink"

const Hero = () => {
  const [heroData, setHeroData] = useState(null)
  const [hi, setHi] = useState(null)
  const { portfolio } = useSelector((state) => state?.portfolioData)

  useEffect(() => {
    setHeroData(portfolio?.hero)
    setHi(portfolio?.hero?.hiLink)
  }, [portfolio])

  return (
    <div
      id="hero"
      className="h-[100vh] mt-[-65px] md:mt-[-40px] justify-center items-center sm:justify-evenly w-full flex-col sm:flex-row flex"
    >
      <div className="flex customContainer px-7 sm:px-20 lg:px-0  flex-col gap-8">
        <p className="text-lg">{heroData?.anyong}</p>
        <div className="font-semibold lg:text-6xl md:text-5xl text-3xl sm:text-4xl">
          <p className="text-white">{heroData?.name}</p>
          <p className="mt-5 text-[#b4bacc]">{heroData?.tag}.</p>
        </div>
        <div className="md:flex md:items-center">
          <div className="text-[#b4bacc] justify-center md:w-1/2 leading-7 lg:leading-9">
            <span>{heroData?.intro}</span>
            <span
              dangerouslySetInnerHTML={{
                __html: heroData?.working
                  ? heroData?.workingTag
                  : heroData?.notWorkingTag,
              }}
            ></span>
            {heroData?.working ? (
              heroData?.companyLink !== "" ? (
                <Link
                  name={heroData?.companyName}
                  link={heroData?.companyLink}
                />
              ) : (
                <NoLink
                  name={heroData?.companyName}
                  link={heroData?.companyLink}
                />
              )
            ) : (
              <Link name={heroData?.collegeName} link={heroData?.collegeLink} />
            )}
          </div>
          <div className="md:w-1/2 hidden md:flex justify-center">
            <img src={hi} className="w-[228px] h-[228px]" alt="hi" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
