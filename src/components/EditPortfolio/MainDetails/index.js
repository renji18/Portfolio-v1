import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import AboutMe from "./components/AboutMe"

// hero section, about me section, experience section

const MainDetails = () => {
  const [portfolioData, setPortfolioData] = useState({})
  const [activeTab, setActiveTab] = useState("hero")

  const { portfolio } = useSelector((state) => state?.portfolioData)

  // experience, hero, aboutMe

  useEffect(() => {
    setPortfolioData({
      hero: portfolio?.hero,
      aboutMe: portfolio?.aboutMe,
      experience: portfolio?.experience,
    })
  }, [portfolio])

  return (
    <div>
      <div className="mt-10 flex mb-5">
        {Object?.keys(portfolioData)?.map((item) => (
          <div key={item} className="flex-1 text-center">
            <span
              onClick={() => setActiveTab(item)}
              className={`${
                item === activeTab && "underline underline-offset-2"
              } cursor-pointer text-center`}
            >
              {item === "experience"
                ? "Experience Section"
                : item === "hero"
                ? "Hero Section"
                : "About Me Section"}
            </span>
          </div>
        ))}
      </div>
      <div className="py-10 min-h-screen flex flex-col items-center">
        {activeTab === "experience" ? (
          <Experience data={portfolioData?.experience} />
        ) : activeTab === "hero" ? (
          <Hero data={portfolioData?.hero} />
        ) : (
          <AboutMe data={portfolioData?.aboutMe} />
        )}
      </div>
    </div>
  )
}

export default MainDetails
