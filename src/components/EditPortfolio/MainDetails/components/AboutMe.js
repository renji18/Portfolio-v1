import React, { useEffect, useState } from "react"
import { useFirebase } from "../../../../firebase"
import { useDispatch } from "react-redux"
import { toggleMainLoader } from "../../../../redux/actions"
import { useNavigate } from "react-router-dom"

const AboutMe = ({ data }) => {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [aboutData, setAboutData] = useState(data)

  console.log(data, "dat")

  useEffect(() => {
    setAboutData(data)
  }, [data])

  const handleChange = (key, value) => {
    // setAboutData((prev) => ({ ...prev, [key]: value }))
  }

  const handleUpdate = () => {
    // dispatch(toggleMainLoader(true))
    // firebase.handleSaveUserData("hero", aboutData)
    // navigate("/")
  }

  return (
    <div className="customContainer px-7 sm:px-20 lg:px-0">
      <button className="bg-rose-500" onClick={() => setAboutData(data)}>
        Reset
      </button>
      <div>
        {aboutData?.boasting?.map((item) => (
          <textarea value={item} rows={5} className="w-full" />
        ))}
        <div className=" flex flex-col gap-3">
          {aboutData?.skills?.map((i, index) => (
            <div className="flex gap-5">
              <i key={index} className={`${i} text-2xl`}></i>
              <input type="text" value={i} className="flex-1" />
            </div>
          ))}
        </div>
      </div>
      <button className="bg-rose-500" onClick={handleUpdate}>
        Update
      </button>
    </div>
  )
}

export default AboutMe
