import React, { useState } from "react"
import poster from "../assets/wallpaperflare.com_wallpaper.jpg"
import { useFirebase } from "../firebase"

const Contact = () => {
  const firebase = useFirebase()

  const [thoughts, setThoughts] = useState({
    name: "",
    email: "",
    text: "",
  })

  const settingThoughts = (e) => {
    setThoughts({ ...thoughts, [e.target.name]: e.target.value })
  }

  const handleButtonClick = async () => {
    const { name, email, text } = thoughts

    if (!name || !email || !text) return alert("Please fill all the details.")

    firebase.handleContact({ name, email, thoughts: text })

    setThoughts({
      name: "",
      email: "",
      text: "",
    })

    alert("Thanks for sharing your thoughts")
  }

  return (
    <div
      id="contact"
      className="pb-10 pt-[88px] px-10 sm:px-20 gap-10 flex lg:text-2xl text-xl leading-[40px] flex-col items-center"
    >
      <h1 className="text-3xl underline-offset-4 underline">
        Share your thoughts
      </h1>
      <div className="pb-10">
        <div className="container lg:flex justify-center items-center mx-auto">
          <div className="w-full hidden lg:block lg:w-1/2">
            <img src={poster} className="w-full h-[500px]" alt="posterImage" />
          </div>
          <div className="w-full lg:w-1/2 text-center lg:pt-9 lg:px-16">
            <form className="text-lg flex flex-col gap-5">
              <input
                autoComplete="off"
                type="text"
                value={thoughts.name}
                onChange={(e) => settingThoughts(e)}
                className="outline-none bg-black placeholder:text-[#8892b0] border border-[#8892b0] rounded-md py-1 w-full px-2"
                name="name"
                placeholder="Your Name:"
              />
              <textarea
                autoComplete="off"
                placeholder="Whatever You Wanna Say"
                name="text"
                value={thoughts.text}
                onChange={(e) => settingThoughts(e)}
                className="outline-none bg-black border border-[#8892b0] placeholder:text-[#8892b0] rounded-md resize-none py-1 w-full px-2"
                id="desc"
                cols="30"
                rows="10"
              />
              <input
                autoComplete="off"
                type="text"
                value={thoughts.email}
                onChange={(e) => settingThoughts(e)}
                className="outline-none bg-black placeholder:text-[#8892b0] border border-[#8892b0] rounded-md py-1 w-full px-2"
                name="email"
                placeholder="Email"
              />
            </form>
            <button
              onClick={handleButtonClick}
              className=" hover:font-mono font-semibold bg-[#00ffc3] text-black text-lg my-5 px-6 py-3 rounded-3xl"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
