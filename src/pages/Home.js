import React from "react"
import Hero from "../components/Landing/Hero"
import AboutMe from "../components/AboutSection/AboutMe"
import Experience from "../components/Experience/Experience"
import AllProjects from "../components/Projects/AllProjects"
import Contact from "../components/Contact/Contact"
import Testimonials from "../components/Testimonials/Testimonials"
import { Link } from "react-router-dom"

const Home = ({ menuOpen }) => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Experience />
      <AllProjects menuOpen={menuOpen} />
      <Contact />
      <Testimonials />
      <p className="mb-20 text-center text-white">
        UI and Layouting by
        <Link target="_blank" className="text-[#00ffc3] hover:underline" to={"https://drive.google.com/file/d/1_fjveT3YknriO9CGlSo0QlET_bxz5lcV/view"}>@mittalSuthar</Link>
      </p>
    </>
  )
}

export default Home
