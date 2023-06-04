import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const MainDetails = () => {
  const { portfolio } = useSelector((state) => state.portfolioData);

  // individual datas from portfolio
  const [heroData, setHeroData] = useState(null);
  const [aboutMeData, setAboutMeData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [footerData, setFooterData] = useState(null);

  // shower and hider states for each content
  const [showHeroData, setShowHeroData] = useState(false);
  const [showAboutMeData, setShowAboutMeData] = useState(false);

  // setting values on load
  useEffect(() => {
    setHeroData(portfolio?.hero);
    setProjectsData(portfolio?.projects);
    setFooterData(portfolio?.footer);
    if (portfolio?.aboutMe) {
      // style='color: #00ffc3'
      let manipulatedBoasting = [];
      portfolio?.aboutMe?.boasting?.map((b) => {
        let res1 = b.replace(/<span style='color: #00ffc3'>/g, "<");
        let res2 = res1.replace(/<\/span>/g, ">");
        manipulatedBoasting.push(res2);
        return manipulatedBoasting;
      });
      setAboutMeData({ ...portfolio?.aboutMe, boasting: manipulatedBoasting });
    }
  }, [portfolio]);

  // data change controller
  const handleDataChange = (content, key, value) => {
    // console.log(content, key, value);
    if (content === "hero") {
      setHeroData({ ...heroData, [key]: value });
    } else if (content === "boasting") {
      setAboutMeData({
        ...aboutMeData,
        boasting: aboutMeData?.boasting?.map((b, index) => {
          return index === key ? value : b;
        }),
      });
    }
  };

  const handleAddSkill = () => {
    let inputVal = document.getElementById("skillAddingInput").value;
    setAboutMeData({
      ...aboutMeData,
      skills: [...aboutMeData?.skills, inputVal],
    });
  };

  // CONTENT UTILITIES:
  // Hero content mapping helper
  const heroArray = [
    { title: "Salutations", key: "anyong" },
    { title: "Name", key: "name" },
    { title: "Tag", key: "tag" },
    { title: "Intro", key: "intro" },
    { title: "Currently Working At", key: "companyName" },
    { title: "Company's Website", key: "companyLink" },
  ];

  // hero textarea auto height controller
  const heroTextareaRef = useRef(null);
  const MIN_TEXTAREA_HEIGHT = 0;
  useLayoutEffect(() => {
    if (heroData && heroTextareaRef.current) {
      heroTextareaRef.current.style.height = "inherit";
      heroTextareaRef.current.style.height = `${Math.max(
        heroTextareaRef.current.scrollHeight,
        MIN_TEXTAREA_HEIGHT
      )}px`;
    }
  }, [heroData]);

  return (
    <>
      <div className="flex flex-col gap-10 py-5">
        <p className="underline text-[#d2dcf9] underline-offset-[5px] text-2xl md:text-4xl text-center">
          Edit The Portfolio
        </p>
        <div id="introSection">
          <p className="text-xl md:text-3xl text-[#d2dcf9] mb-3">
            #Intoduction Section
          </p>
          {heroArray?.map((item, index) => (
            <div className=" mb-7 flex flex-col" id={item?.key} key={index}>
              <label
                className="w-full text-lg md:text-xl"
                htmlFor={item?.title}
              >
                {`-> ${item?.title}`}:
              </label>
              {item?.title === "Intro" ? (
                <textarea
                  id={item?.title}
                  name={item?.key}
                  onChange={(e) =>
                    handleDataChange("hero", e.target.name, e.target.value)
                  }
                  ref={heroTextareaRef}
                  value={heroData?.intro}
                  style={{ minHeight: MIN_TEXTAREA_HEIGHT }}
                  className="w-full text-sm md:text-base resize-none pl-[32px] text-[#FB2576] bg-black underline outline-none"
                />
              ) : (
                <input
                  type="text"
                  className="w-full pl-[32px] text-[#FB2576] bg-black underline outline-none text-sm md:text-base"
                  name={item?.key}
                  onChange={(e) =>
                    handleDataChange("hero", e.target.name, e.target.value)
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
        </div>
        <div id="aboutMeSection">
          <p className="text-xl md:text-3xl text-[#d2dcf9] mb-3">
            #About Me Section
          </p>
          {
            <div className=" mb-7 flex flex-col">
              <label
                className="w-full text-lg md:text-xl"
                htmlFor="boasting"
              >{`-> Boast about yourself`}</label>
              <p className="mt-3 pl-[32px] text-sm md:text-base text-amber-400">{`Put words to be highlighted in < >`}</p>
              {aboutMeData?.boasting?.map((b, index) => {
                return (
                  <textarea
                    key={index}
                    value={b}
                    onChange={(e) =>
                      handleDataChange("boasting", index, e.target.value)
                    }
                    className="md:w-full w-max max-h-40 mt-5 pr-10 pl-[32px] text-[#FB2576] bg-black underline outline-none text-sm md:text-base"
                  />
                );
              })}
              <label
                className="w-full text-lg md:text-xl"
                htmlFor="skills"
              >{`-> My skills`}</label>
              <div className="flex mt-5 md:pl-[32px] text-lg md:text-2xl flex-col sm:flex-row items-center gap-2">
                <div className="flex text-[#FB2576] items-center gap-3">
                  {aboutMeData?.skills?.map((s) => (
                    <i className={s}></i>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row text-[#FB2576] items-center gap-5 my-5 px-[32px] text-sm md:text-base">
                <p title="">Add More ?</p>
                <input
                  placeholder="Go to devicon and paste the className"
                  id="skillAddingInput"
                  type="text"
                  className="w-1/2 py-1 px-1"
                />
                <button
                  onClick={handleAddSkill}
                  className="text-center text-[#FB2576] py-1 mb-[5px] px-3 rounded-md border-[#FB2576] border hover:bg-[#FB2576] hover:text-black hover:font-semibold hover:font-serif"
                >
                  Add
                </button>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default MainDetails;

// firebase(devicon-firebase-plain colored), python(devicon-pyton-plain), c++(devicon-cplusplus-plain colored)
