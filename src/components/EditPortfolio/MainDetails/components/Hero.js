import React, { useEffect, useState } from "react"
import { useFirebase } from "../../../../firebase"
import { useDispatch } from "react-redux"
import { toggleMainLoader } from "../../../../redux/actions"
import { useNavigate } from "react-router-dom"

const Hero = ({ data }) => {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [heroData, setHeroData] = useState(data)

  useEffect(() => {
    setHeroData(data)
  }, [data])

  const handleChange = (key, value) => {
    setHeroData((prev) => ({ ...prev, [key]: value }))
  }

  const handleUpdate = () => {
    // dispatch(toggleMainLoader(true))
    // firebase.handleSaveUserData("hero", heroData)
    // navigate("/")
  }

  return (
    <div className="customContainer px-7 sm:px-20 lg:px-0">
      <button className="bg-rose-500" onClick={() => setHeroData(data)}>
        Reset
      </button>
      <div>
        <input
          className="w-full"
          type="text"
          value={heroData ? heroData?.anyong : ""}
          onChange={(e) => handleChange("anyong", e.target.value)}
        />
        <p>{heroData?.name}</p>
        <input
          className="w-full"
          type="text"
          value={heroData ? heroData?.tag : ""}
          onChange={(e) => handleChange("tag", e.target.value)}
        />
        <hr />
        <textarea
          className="w-full"
          type="text"
          value={heroData ? heroData?.intro : ""}
          onChange={(e) => handleChange("intro", e.target.value)}
        />
        <div className="flex justify-center gap-20">
          <button
            onClick={() => handleChange("working", true)}
            className={`${heroData?.working && "bg-rose-500"}`}
          >
            Working
          </button>
          <button
            onClick={() => handleChange("working", false)}
            className={`${!heroData?.working && "bg-rose-500"}`}
          >
            Not Working
          </button>
        </div>
        {heroData?.working ? (
          <div>
            <textarea
              className="w-full"
              type="text"
              value={heroData ? heroData?.workingTag : ""}
              onChange={(e) => handleChange("workingTag", e.target.value)}
            />
            <input
              className="w-full"
              type="text"
              value={heroData ? heroData?.companyName : ""}
              onChange={(e) => handleChange("companyName", e.target.value)}
            />
          </div>
        ) : (
          <div>
            <textarea
              className="w-full"
              type="text"
              value={heroData ? heroData?.notWorkingTag : ""}
              onChange={(e) => handleChange("notWorkingTag", e.target.value)}
            />
            <p>{heroData ? heroData?.collegeName : ""}</p>
          </div>
        )}
      </div>
      <button className="bg-rose-500" onClick={handleUpdate}>
        Update
      </button>
    </div>
  )
}

export default Hero
