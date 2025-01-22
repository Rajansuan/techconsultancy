import React, { useState } from "react";
import "./header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="logo">Tech Firm</div>

            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </nav>

            <button className="contact-button">Contact Us</button>

            <div className="burger" onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>

            {/* Full screen menu overlay */}
            {menuOpen && (
                <div className="fullscreen-menu">
                    <ul className="fullscreen-nav-links">
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                        <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
                        <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
