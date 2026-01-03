import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">METHUN SM</h2>

      <div className="links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
