import React, { useState } from "react";
import "./header.css";
import AnimatedCursor from "react-animated-cursor";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <AnimatedCursor
        innerSize={8} /* Size of the inner circle */
        outerSize={35} /* Size of the outer circle */
        color="35, 59, 151" /* RGB color of the cursor */
        outerAlpha={0.3} /* Transparency of the outer circle */
        innerScale={1.2} /* Scale effect when hovering */
        outerScale={1.5} /* Scale effect when hovering */
        clickables={[
          "a", // Links
          "button", // Buttons
          ".link", // Custom classes
        ]}
      />
      <div className="logo">Codato</div>

      <nav>
        <ul className="nav-links">
          <li onClick={() => handleScroll("middle")}>Home</li>
          <li onClick={() => handleScroll("about")}>About</li>
          <li onClick={() => handleScroll("services")}>Services</li>
          <li onClick={() => handleScroll("techstack")}>Technology</li>
        </ul>
      </nav>

          <button className="contact-button" onClick={() => handleScroll("contact")}>Contact Us</button>

      <div className="burger" onClick={toggleMenu}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>

      {/* Full screen menu overlay */}
      {menuOpen && (
        <div className="fullscreen-menu">
          <ul className="fullscreen-nav-links">
            <li>
              <a href="#middle" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#techstack" onClick={toggleMenu}>
                Technology
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
