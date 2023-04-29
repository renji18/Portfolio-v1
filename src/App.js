import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import AddNewProject from "./pages/AddNewProject";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  const [activeMenu, setActiveMenu] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <MobileHeader
        setMenuOpen={setMenuOpen}
        activeMenu={activeMenu}
        menuOpen={menuOpen}
        setActiveMenu={setActiveMenu}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details/:ID" element={<ProjectDetails />} />
        <Route path="/admin" element={<AddNewProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
