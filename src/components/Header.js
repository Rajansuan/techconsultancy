import React, { useState } from "react";
import "./header.css";
import AnimatedCursor from "react-animated-cursor";
import imgLogo from "../assets/images/codato-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on navigation
    }
  };

  return (
    <div className="header">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="35, 59, 151"
        outerAlpha={0.3}
        innerScale={1.2}
        outerScale={1.5}
        clickables={["a", "button", ".link"]}
      />

      {/* Logo Section */}
      <div className="logo">
        <img src={imgLogo} alt="Logo" className="logo-image" />
        <span className="logo-text">Codato</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav">
        <ul className="nav-links">
          <li onClick={() => handleScroll("middle")}>Home</li>
          <li onClick={() => handleScroll("about")}>About</li>
          <li onClick={() => handleScroll("services")}>Services</li>
          <li onClick={() => handleScroll("techstack")}>Technology</li>
          <li onClick={() => handleScroll("blogs")}>Blogs</li>
        </ul>
      </nav>

      {/* Contact Button */}
      <button className="contact-button" onClick={() => handleScroll("contact")}>
        Contact Us
      </button>

      {/* Burger Menu */}
      <div className="burger" onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      {/* Full screen menu overlay */}
      <div className={`fullscreen-menu ${menuOpen ? "active" : ""}`}>
        <ul className="fullscreen-nav-links">
          <li><a href="#middle" onClick={() => handleScroll("middle")}>Home</a></li>
          <li><a href="#about" onClick={() => handleScroll("about")}>About</a></li>
          <li><a href="#services" onClick={() => handleScroll("services")}>Services</a></li>
          <li><a href="#techstack" onClick={() => handleScroll("techstack")}>Technology</a></li>
          <li><a href="#blogs" onClick={() => handleScroll("blogs")}>Blogs</a></li>
          <li><a href="#contact" onClick={() => handleScroll("contact")}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
