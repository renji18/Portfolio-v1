import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import AllProjects from "../components/AllProjects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const Home = ({ setActiveMenu, menuOpen }) => {
  return (
    <>
      <Hero setActiveMenu={setActiveMenu} menuOpen={menuOpen} />
      <AboutMe menuOpen={menuOpen} />
      {/* <Experience menuOpen={menuOpen} /> */}
      <AllProjects menuOpen={menuOpen} />
      <Contact />
    </>
  );
};

export default Home;
