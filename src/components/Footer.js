import React from 'react';
import './footer.css';
import AnimatedCursor from "react-animated-cursor";

const Footer = () => {
  return (
    <footer className="footer">
        <AnimatedCursor
        innerSize={8} /* Size of the inner circle */
        outerSize={35} /* Size of the outer circle */
        color="255, 255, 255" /* RGB color of the cursor */
        outerAlpha={0.3} /* Transparency of the outer circle */
        innerScale={1.5} /* Scale effect when hovering */
        outerScale={2.5} /* Scale effect when hovering */
        clickables={[
          "a", // Links
          "button", // Buttons
          ".link", // Custom classes
        ]}
      />
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2 className="footer-logo-text">Tech Firm</h2>
          <p className="footer-description">
            Our expert financial consultants provide solutions to help you achieve financial wealth.
            Trust us to guide you toward a brighter financial future.
          </p>
        </div>

        {/* Our Services Section */}
        <div className="footer-services">
          <h3 className="footer-section-title">Our Services</h3>
          <ul>
            <li>Insurance Planning</li>
            <li>Estate Planning</li>
            <li>Tax Optimization</li>
            <li>Debt Management</li>
          </ul>
        </div>

        {/* Explore More Section */}
        <div className="footer-explore">
          <h3 className="footer-section-title">Explore More</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="footer-contact">
          <h3 className="footer-section-title">Contact Details</h3>
          <ul>
            <li>Email: contact@gmail.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Tech Lane, Silicon Valley, CA</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="footer-legal">
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Tech Firm. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
