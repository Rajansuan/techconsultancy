import React from "react";
import "./trustedByUs.css";
import Logo1 from "../assets/images/logo1.png";
import Logo2 from "../assets/images/logo2.png";
// import other logos as needed

const TrustedByUs = () => {
  return (
    <section className="trusted-by-us" id="trusted">
      <div className="trusted-content">
        <h2 className="trusted-heading">Trusted By</h2>
        <p className="software-business-text">Over 40K+ businesses growing with us</p>
        <div className="logo-container">
          <img src={Logo1} alt="Client Logo" className="logo" />
          <img src={Logo2} alt="Client Logo" className="logo" />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
};

export default TrustedByUs;