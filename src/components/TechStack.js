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
import figma from "../assets/images/figma.png";
import openai from "../assets/images/openai.png";
import azure from "../assets/images/azure.png";
import aws from "../assets/images/aws.png";
import docker from "../assets/images/docker.png";
import mongo from "../assets/images/mongo.png";
import oracle from "../assets/images/oracle.png";
import go from "../assets/images/go.png";
import github from "../assets/images/github.png";
import flutter from "../assets/images/flutter.png";
import gcp from "../assets/images/gcp.png";
import html from "../assets/images/html.png";

const TechStack = () => {
  return (
    <section id="techstack">
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
            <img src={figma} width="35px" height="35px" alt="Figma" />
          </div>
          <div className="icon-container">
            <img src={openai} width="35px" height="35px" alt="OpenAI" />
          </div>
          <div className="icon-container">
            <img src={azure} width="35px" height="35px" alt="Azure" />
          </div>
          <div className="icon-container">
            <img src={aws} width="35px" height="35px" alt="AWS" />
          </div>
          <div className="icon-container">
            <img src={docker} width="35px" height="35px" alt="Docker" />
          </div>
          <div className="icon-container">
            <img src={mongo} width="35px" height="35px" alt="MongoDB" />
          </div>
          <div className="icon-container">
            <img src={oracle} width="35px" height="35px" alt="Oracle" />
          </div>
          <div className="icon-container">
            <img src={go} width="35px" height="35px" alt="Go" />
          </div>
          <div className="icon-container">
            <img
              src={github}
              width="35px"
              height="35px"
              alt="GitHub"
            />
          </div>
          <div className="icon-container">
            <img src={flutter} width="35px" height="35px" alt="Flutter" />
          </div>
          <div className="icon-container">
            <img src={gcp} width="35px" height="35px" alt="GCP" />
          </div>
          <div className="icon-container">
            <img
              src={html}
              width="35px"
              height="35px"
              alt="HTML"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechStack;
