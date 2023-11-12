import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const AboutMe = () => {
  const [aboutData, setAboutData] = useState(null)
  const [respect, setRespect] = useState(null)

  const { portfolio } = useSelector((state) => state?.portfolioData)

  useEffect(() => {
    setAboutData(portfolio?.aboutMe)
    setRespect(portfolio?.aboutMe?.respectLink)
  }, [portfolio])

  return (
    <div
      id="aboutMe"
      className="py-10 min-h-screen justify-center pt-[88px] flex flex-col items-center"
    >
      <div className="customContainer px-7 sm:px-20 lg:px-0">
        <div className="text-lg font-semibold sm:text-2xl">
          <h1 className="w-full">About Me</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="hidden lg:block">
            <img src={respect} alt="about me" />
          </div>
          <div className="flex lg:text-end text-[#b4bacc] pb-10 mt-10 lg:gap-10 flex-col gap-5">
            {aboutData?.boasting?.map((p, index) => (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: p }}
                className="leading-7"
              ></p>
            ))}
          </div>
        </div>
        <div className="flex lg:justify-end text-lg md:text-2xl flex-col sm:flex-row items-center gap-2">
          <p className="text-[#00ffc3]">Stack</p>
          <p className="hidden sm:block">|</p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {aboutData?.skills?.map((i, index) => (
              <i title={i?.split("-")[1]} key={index} className={i}></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
