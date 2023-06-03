import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const EditPortfolio = () => {
  const [heroData, setHeroData] = useState(null);
  const [aboutMeData, setAboutMeData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  const [showHeroData, setShowHeroData] = useState(false);

  const textareaRef = useRef(null);

  const { portfolio } = useSelector((state) => state.portfolioData);

  useEffect(() => {
    setHeroData(portfolio?.hero);
    setAboutMeData(portfolio?.aboutMe);
    setProjectsData(portfolio?.projects);
    setFooterData(portfolio?.footer);
  }, [portfolio]);

  const heroArray = [
    { title: "Salutations", key: "anyong" },
    { title: "Name", key: "name" },
    { title: "Tag", key: "tag" },
    { title: "Intro", key: "intro" },
    { title: "Currently Working At", key: "companyName" },
    { title: "Company's Website", key: "companyLink" },
  ];

  const handleHeroDataChange = (key, value) => {
    setHeroData({ ...heroData, [key]: value });
  };

  const MIN_TEXTAREA_HEIGHT = 0;
  useLayoutEffect(() => {
    if (heroData && textareaRef.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [heroData?.intro, heroData]);

  return (
    <div className="px-5 py-5">
      <p className="mb-10 underline underline-offset-[5px] text-4xl text-center">
        Edit The Portfolio
      </p>
      <div id="introSection">
        <div className="flex gap-10 items-center">
          <p className="text-3xl mb-3">#Intoduction Section</p>
          <button
            className="text-center text-[#64ffda] py-[7px] mb-[5px] px-3 rounded-md border-[#64ffda] border hover:bg-[#64ffda] hover:text-[#0a192f] hover:font-semibold hover:font-serif"
            onClick={() => setShowHeroData(!showHeroData)}
          >
            {!showHeroData ? "Show" : "Hide"}
          </button>
        </div>
        {showHeroData &&
          heroArray?.map((item, index) => (
            <div className="mb-7 flex flex-col" id={item?.key} key={index}>
              <label className="w-full text-xl" htmlFor={item?.title}>
                {`-> ${item?.title}`}:
              </label>
              {item?.title === "Intro" ? (
                <textarea
                  id={item?.title}
                  name={item?.key}
                  onChange={(e) =>
                    handleHeroDataChange(e.target.name, e.target.value)
                  }
                  ref={textareaRef}
                  value={heroData?.intro}
                  style={{ minHeight: MIN_TEXTAREA_HEIGHT }}
                  className="w-full resize-none ml-[32px] text-[#64ffda] bg-[#0a192f] underline outline-none "
                />
              ) : (
                <input
                  type="text"
                  className="w-full ml-[32px] text-[#64ffda] bg-[#0a192f] underline outline-none"
                  name={item?.key}
                  onChange={(e) =>
                    handleHeroDataChange(e.target.name, e.target.value)
                  }
                  value={
                    index === 0
                      ? heroData?.anyong
                      : index === 1
                      ? heroData?.name
                      : index === 2
                      ? heroData?.tag
                      : index === 4
                      ? heroData?.companyName
                      : heroData?.companyLink
                  }
                />
              )}
            </div>
          ))}
        {/* <div id="salutaionBox">
          <label htmlFor="salutation">Salutations</label>
          <input
            className="w-full outline-none"
            id="salutation"
            type="text"
            value={heroData?.anyong}
          />
        </div>
        <div id="nameBox">
          <label htmlFor="name">Name</label>
          <input
            className="w-full outline-none"
            id="name"
            type="text"
            value={heroData?.name}
          />
        </div>
        <div id="tagBox">
          <label htmlFor="tag">Tag</label>
          <input
            className="w-full outline-none"
            id="tag"
            type="text"
            value={heroData?.tag}
          />
        </div>
        <div id="introBox">
          <label htmlFor="intro">Intro</label>
          <input
            className="w-full outline-none"
            id="intro"
            type="text"
            value={heroData?.intro}
          />
        </div>
        <div id="companyBox">
          <label htmlFor="company">Currently working at</label>
          <input
            className="w-full outline-none"
            id="company"
            type="text"
            value={heroData?.company?.name}
          />
        </div>
        <div id="companyLinkBox">
          <label htmlFor="companyLink">Company's website</label>
          <input
            className="w-full outline-none"
            id="companyLink"
            type="text"
            value={heroData?.company?.link}
          />
        </div> */}
      </div>
      <div id="aboutMeSection"></div>
      <div id="projectsSection"></div>
      <div id="footerDetailsSection"></div>
    </div>
  );
};

export default EditPortfolio;
