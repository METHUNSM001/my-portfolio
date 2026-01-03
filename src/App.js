import React from "react";
import "./App.css";

/* Components */
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificate";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* Background Wave Effect */}
      <div className="wave-bg"></div>

      {/* Main App Content */}
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </>
  );
}

export default App;
