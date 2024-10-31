import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Webdesign from "./pages/Webdesign";

function App() {
  return (
    <Router>
      <Routes>
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
        <Route path="/webdesign" element={<Webdesign />} />
      </Routes>
    </Router>
  );
}

export default App;
