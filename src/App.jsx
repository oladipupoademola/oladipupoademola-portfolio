import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Webdesign from "./pages/Webdesign";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Skills />
              <Projects />
            </>
          }
        />

        {/* Dedicated routes for navigation */}
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/webdesign" element={<Webdesign />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
