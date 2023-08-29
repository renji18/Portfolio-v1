import React, { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Loader from "../components/utils/Loader"

const ProjectDetails = ({ menuOpen }) => {
  const { state } = useLocation()
  const { name, posterImage, imageUrls, desc, link } = state

  const [load, setLoad] = useState(true)

  useState(() => {
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }, [])

  return (
    <>
      {load && <Loader />}
      <div className={`p-5 `}>
        <div className="flex flex-col items-center md:flex-row">
          <img
            className={`md:w-1/2 h-full md:h-1/2 object-cover rounded-[15px]`}
            src={posterImage}
            alt="poster"
          />
          <div className="text-center mt-10 md:mt-0 md:w-1/2 text-xl">
            <p className="text-4xl mb-10 md:mb-5 underline underline-offset-[6px]">
              {name}
            </p>
            <p className="md:mb-5 md:pl-2 mb-7 leading-[40px] whitespace-break-spaces text-[#b4bacc]">
              {desc}
            </p>
            <Link
              target="_blank"
              to={link}
              className="cursor-pointer text-[#00ffc3]  md:text-xl text-sm ml-2"
            >
              <button className="border border-[#00ffc3] py-2 px-3 rounded-md hover:bg-[#00ffc3] hover:text-black hover:font-semibold hover:font-serif">
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-[#00ffc3] text-center text-xl">
          <p className="mb-5 mt-5">Gallery</p>
          {!menuOpen && (
            <div className="md:scale-75">
              <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                transitionTime={2}
                autoPlay={true}
              >
                {imageUrls.map((url) => (
                  <img
                    key={url}
                    className={`w-full h-full object-cover rounded-[15px]`}
                    src={url}
                    alt="poster"
                  />
                ))}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectDetails
