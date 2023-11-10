import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useFirebase } from "../firebase"

const Admin = () => {
  const firebase = useFirebase()
  const navigate = useNavigate()
  const [pageControllerDetails, setPageControllerDetails] = useState([])
  const { portfolio } = useSelector((state) => state.portfolioData)

  useEffect(() => {
    setPageControllerDetails(portfolio?.admin)
  }, [portfolio])

  // IMAGE UPLOADING PROTOTYPE
  // const [profileImg, setProfileImg] = useState(null);
  // const handleSaveUserImage = (file) => {
  //   setProfileImg(file);
  // };
  // const handleSave = () => {
  //   firebase.handleSaveUserImage(profileImg);
  // };
  // <input
  //       type="file"
  //       onChange={(e) => handleSaveUserImage(e.target.files[0])}
  //     />
  //     <button onClick={handleSave}>upload</button>

  const handleEditorNavigate = (path) => {
    navigate(`/admin/${path}`, { state: path })
  }

  return (
    <div className="lg:flex py-[38px] justify-evenly items-center">
      <div className="lg:flex hidden my-10 justify-center">
        <img
          className="w-full max-w-[575px] max-h-[325px]"
          src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
          alt="gif"
        ></img>
      </div>
      <div className="flex px-10 items-center flex-col gap-5">
        {pageControllerDetails?.map((p, index) => (
          <div
            key={index}
            onClick={() => handleEditorNavigate(p?.path)}
            className="border-[#00ffc3] border cursor-pointer rounded-2xl w-[300px] md:w-[500px] flex flex-col lg:flex-row justify-center items-center p-5"
          >
            <img className="w-[180px] h-[180px]" src={p?.link} alt="link"></img>
            <div className="lg:pl-5">
              <p className="text-center mt-5 text-xl">{p?.title}</p>
              <p className="text-center text-[#b4bacc] mt-3">{p?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin
