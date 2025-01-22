import React from "react";
import "./trustedByUs.css"; // Assuming you'll have a separate CSS file for this section
import Logo1 from "../assets/images/logo1.png"; // Replace with actual logo paths
import Logo2 from "../assets/images/logo2.png";
import Logo3 from "../assets/images/logo3.png";
import Logo4 from "../assets/images/logo4.png";
import Logo5 from "../assets/images/logo5.png";
const TrustedByUs = () => {
  return (
    <section className="trusted-by-us">
      <h2 className="trusted-heading">Trusted by</h2>
      <p className="software-business-text">Over 40K+ software business growing with us</p>
      <div className="logo-container">
        <img src={Logo1} alt="Logo1" className="logo" />
        <img src={Logo2} alt="Logo2" className="logo" />
        <img src={Logo3} alt="Logo3" className="logo" />
        <img src={Logo4} alt="Logo4" className="logo" />
        <img src={Logo5} alt="Logo5" className="logo" />
      </div>
    </section>
  );
};

export default TrustedByUs;
