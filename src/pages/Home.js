import React from "react"
import Hero from "../components/Hero"
import AboutMe from "../components/AboutMe"
import AllProjects from "../components/AllProjects"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Testimonials from "../components/Testimonials"

const Home = ({ menuOpen }) => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Experience />
      <AllProjects menuOpen={menuOpen} />
      <Contact />
      {/* <Testimonials /> */}
    </>
  )
}

export default Home
