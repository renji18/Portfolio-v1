import React from "react"
import LOADER from '../../assets/loader.svg'


const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 h-screen bg-black flex items-center justify-center flex-col">
      <img
        src={LOADER}
        alt="loader"
        className="w-[100px] h-[100px] object-contain"
      />
    </div>
  )
}

export default Loader
