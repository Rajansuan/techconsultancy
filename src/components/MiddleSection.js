import React from "react";
import "./middleSection.css";
import HomeImage from "../assets/images/Home.png"; // Assuming you have this image

const MiddleSection = () => {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="middle-section" id="middle">
      <div className="text-content">
        <div className="text-items">
          <h2 className="mini-heading">GET THE MOST COMPREHENSIVE SOLUTIONS</h2>
          <div className="transform-text">
            <span>T</span>ransform <br></br>Your <span>Business</span>
          </div>
          <div className="solutions-text">WITH CUTTING-EDGE SOLUTIONS</div>
          <div className="building-text">
            Building Web and Mobile Apps with Advanced Tech and Generative AI.
          </div>
          <div className="btn-holder">
            <button className="book-service-btn" onClick={() => handleScroll("contact")}>Book a Service</button>
            {/* <button className="live-demo-btn">Get a live demo</button> */}
          </div>
          
        </div>
      </div>

      <div className="image-content">
        <img src={HomeImage} alt="Tech Solutions" className="main-image" />
      </div>

      

    </section>
  );
};

export default MiddleSection;
