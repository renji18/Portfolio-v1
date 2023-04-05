import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import AddNewProject from './pages/AddNewProject'
import ProjectDetails from "./pages/ProjectDetails";

function App() {

  const [activeMenu, setActiveMenu] = useState("");

  return (
    <Router>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <MobileHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/project-details/:ID" element={<ProjectDetails />} />
        <Route path="/admin" element={<AddNewProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
