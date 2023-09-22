import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from "@mui/icons-material/Description"
import { Link, useLocation } from "react-router-dom"
import SingleItem from "./SingleItem"

const Footer = ({ menuOpen }) => {

  const location = useLocation()

  console.log(location?.pathname);

  const [footerData, setFooterData] = useState(null)

  const { portfolio } = useSelector((state) => state?.portfolioData)

  useEffect(() => {
    setFooterData(portfolio?.footer)
  }, [portfolio])

  const rightPart = [
    <GitHubIcon />,
    <TwitterIcon />,
    <InstagramIcon />,
    <LinkedInIcon />,
    <DescriptionIcon />,
  ]

  return (
    <>
      {!menuOpen && (
        <>
          {location?.pathname === '/' ?
            <div className="text-sm hidden md:fixed md:left-0 md:bottom-0 text-center py-3 md:flex px-3 sm:px-5 lg:px-10">
              <div className="translate-x-[14px] pb-20">
                {footerData?.map((r, index) => (
                  <SingleItem
                    link={r?.link}
                    title={r?.title}
                    key={index}
                    itemNumber={index}
                    icon={rightPart[index]}
                  />
                ))}
              </div>
              <div className="w-1 bg-[#00ffc3]"></div>
            </div>
            :
            <div className="text-sm hidden md:block text-center py-5 px-5 sm:px-5 lg:px-10">
              {footerData?.map((r, index) => (
                <Link key={index} target="_black" to={r.link}>
                  <div className="flex cursor-pointer items-center gap-2 space-y-4">
                    {rightPart[index]}
                    <p
                      className="text-[#b4bacc]"
                      style={{ transform: "translateY(-6px)" }}
                    >
                      {r.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          }

          <div className="text-sm md:hidden text-center py-5 px-5 sm:px-5 lg:px-10">
            {footerData?.map((r, index) => (
              <Link key={index} target="_black" to={r.link}>
                <div className="flex cursor-pointer items-center gap-2 space-y-4">
                  {rightPart[index]}
                  <p
                    className="text-[#b4bacc]"
                    style={{ transform: "translateY(-6px)" }}
                  >
                    {r.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Footer
