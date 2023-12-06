import React from "react"
import { Link } from "react-router-dom"

const SingleStep = ({ data, totalItems, itemNumber }) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center">
        <div className="h-6 w-5 rounded-full bg-[#00ffc3]" />
        <div className="h-full w-1 bg-[#00ffc3]" />
      </div>
      <div
        className={`${
          itemNumber === totalItems - 1 ? "" : "pb-10"
        } space-y-3 -mt-1`}
      >
        <div
          className={`flex ${
            data?.workPlace === "Maharaja Sayajirao University"
              ? "flex-col"
              : "flex-row"
          }  md:flex-row gap-1 md:gap-3 text-sm lg:text-lg`}
        >
          <p className="text-white">{data?.position}</p>
          <Link className="hover:underline" to={data?.link} target="_blank">
            @{data?.workPlace}
          </Link>
        </div>
        <div className="flex gap-1 text-sm lg:text-base">
          <p className="text-[#b4bacc]">{data?.startedFrom}</p>
          <p>-</p>
          <p className="text-white">{data?.workedTill}</p>
        </div>
        <p className="text-[#b4bacc] text-sm">{data?.location}</p>
      </div>
    </div>
  )
}

export default SingleStep
