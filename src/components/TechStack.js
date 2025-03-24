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
  const leftIcons = [
    react, python, javascript, typescript, angular, swift, 
    mysql, android, generativeai, postgre, java, illustrator
  ];
  
  const rightIcons = [
    figma, openai, azure, aws, docker, mongo, 
    oracle, go, github, flutter, gcp, html
  ];

  return (
    <section id="techstack" className="tech-stack-section">
      <h1 className="stylish-heading">
        Find the <span className="highlighted">Best</span> Technology for
        <br />
        Your Product
      </h1>

      <div className="tech-stack-container">
        {/* Left to Right Scroll */}
        <div className="tech-stack-line left-to-right">
          {leftIcons.map((icon, index) => (
            <div className="icon-container" key={`left-${index}`}>
              <img src={icon} width="35" height="35" alt="Tech icon" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Right to Left Scroll */}
        <div className="tech-stack-line right-to-left">
          {rightIcons.map((icon, index) => (
            <div className="icon-container" key={`right-${index}`}>
              <img src={icon} width="35" height="35" alt="Tech icon" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;