import React from "react";
import "./techStack.css";
import react from "../assets/images/react.png";
import python from "../assets/images/python.png";
import javascript from "../assets/images/javascript.png";
import typescript from "../assets/images/typescript.png";
import angular from "../assets/images/angular.png";
import swift from "../assets/images/swift.png";
import mysql from "../assets/images/mysql.png";
import android from "../assets/images/android.png";
import generativeai from "../assets/images/generativeai.png";
import postgre from "../assets/images/postgre.png";
import java from "../assets/images/java.png";
import illustrator from "../assets/images/illustrator.png";

const TechStack = () => {
  return (
    <>
      <h1 className="stylish-heading">
        Find the <span className="highlighted">Best</span> Technology for
        <br />
        Your Product
      </h1>

      <section className="tech-stack-section">
        {/* Left to Right Scroll */}
        <div className="tech-stack-line left-to-right">
          <div className="icon-container">
            <img src={react} width="35px" height="35px" alt="React" />
          </div>
          <div className="icon-container">
            <img src={python} width="35px" height="35px" alt="Python" />
          </div>
          <div className="icon-container">
            <img src={javascript} width="35px" height="35px" alt="JavaScript" />
          </div>
          <div className="icon-container">
            <img src={typescript} width="35px" height="35px" alt="TypeScript" />
          </div>
          <div className="icon-container">
            <img src={angular} width="35px" height="35px" alt="Angular" />
          </div>
          <div className="icon-container">
            <img src={swift} width="35px" height="35px" alt="Swift" />
          </div>
          <div className="icon-container">
            <img src={mysql} width="35px" height="35px" alt="MySQL" />
          </div>
          <div className="icon-container">
            <img src={android} width="35px" height="35px" alt="Android" />
          </div>
          <div className="icon-container">
            <img
              src={generativeai}
              width="35px"
              height="35px"
              alt="Generative AI"
            />
          </div>
          <div className="icon-container">
            <img src={postgre} width="35px" height="35px" alt="PostgreSQL" />
          </div>
          <div className="icon-container">
            <img src={java} width="35px" height="35px" alt="Java" />
          </div>
          <div className="icon-container">
            <img
              src={illustrator}
              width="35px"
              height="35px"
              alt="Illustrator"
            />
          </div>
        </div>

        {/* Right to Left Scroll */}
        <div className="tech-stack-line right-to-left">
          <div className="icon-container">
            <img src={react} width="35px" height="35px" alt="React" />
          </div>
          <div className="icon-container">
            <img src={python} width="35px" height="35px" alt="Python" />
          </div>
          <div className="icon-container">
            <img src={javascript} width="35px" height="35px" alt="JavaScript" />
          </div>
          <div className="icon-container">
            <img src={typescript} width="35px" height="35px" alt="TypeScript" />
          </div>
          <div className="icon-container">
            <img src={angular} width="35px" height="35px" alt="Angular" />
          </div>
          <div className="icon-container">
            <img src={swift} width="35px" height="35px" alt="Swift" />
          </div>
          <div className="icon-container">
            <img src={mysql} width="35px" height="35px" alt="MySQL" />
          </div>
          <div className="icon-container">
            <img src={android} width="35px" height="35px" alt="Android" />
          </div>
          <div className="icon-container">
            <img
              src={generativeai}
              width="35px"
              height="35px"
              alt="Generative AI"
            />
          </div>
          <div className="icon-container">
            <img src={postgre} width="35px" height="35px" alt="PostgreSQL" />
          </div>
          <div className="icon-container">
            <img src={java} width="35px" height="35px" alt="Java" />
          </div>
          <div className="icon-container">
            <img
              src={illustrator}
              width="35px"
              height="35px"
              alt="Illustrator"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
