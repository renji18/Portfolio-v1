import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import AllProjects from "../components/AllProjects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      {/* <Experience /> */}
      <AllProjects />
      <Contact />
    </>
  );
};

export default Home;
