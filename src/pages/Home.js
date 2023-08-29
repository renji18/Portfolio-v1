import React from "react"
import Hero from "../components/Landing/Hero"
import AboutMe from "../components/AboutSection/AboutMe"
import Experience from "../components/Experience/Experience"
import AllProjects from "../components/Projects/AllProjects"
import Contact from "../components/Contact/Contact"
import Testimonials from "../components/Testimonials/Testimonials"

const Home = ({ menuOpen }) => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Experience />
      <AllProjects menuOpen={menuOpen} />
      <Contact />
      <Testimonials />
    </>
  )
}

export default Home
