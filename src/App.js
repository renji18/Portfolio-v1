import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
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
        <Route path="/" element={<Home menuOpen={menuOpen} />} />
        <Route path="/project-details/:ID" element={<ProjectDetails menuOpen={menuOpen} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer menuOpen={menuOpen} />
    </Router>
  );
}

export default App;
