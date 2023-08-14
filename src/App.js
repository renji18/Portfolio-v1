import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import ProjectDetails from "./pages/ProjectDetails";
import Loader from "./components/Loader";
import Editor from "./components/editPortfolio/Editor";

function App() {
  const [activeMenu, setActiveMenu] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);


  const { siteLoader } = useSelector((state) => state.loader);

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
        <Route
          path="/"
          element={siteLoader ? <Loader /> : <Home menuOpen={menuOpen} />}
        />
        <Route
          path="/project-details/:ID"
          element={<ProjectDetails menuOpen={menuOpen} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:editor" element={<Editor />} />
      </Routes>
      <Footer menuOpen={menuOpen} />
    </Router>
  );
}

export default App;
