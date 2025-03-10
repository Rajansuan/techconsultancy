import React from "react";
import "./services.css";
import { FaCloud, FaLock, FaChartLine, FaBrain, FaBusinessTime, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Digital Transformation",
    description: "Empower your business with cutting-edge digital strategies.",
    icon: <FaTools />,
  },
  {
    title: "Cloud Solutions",
    description: "Optimize your infrastructure with secure and scalable cloud services.",
    icon: <FaCloud />,
  },
  {
    title: "Data Analytics",
    description: "Turn data into insights with powerful analytics and AI-driven solutions.",
    icon: <FaChartLine />,
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with state-of-the-art security solutions.",
    icon: <FaLock />,
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage AI to automate and enhance your business processes.",
    icon: <FaBrain />,
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to drive business growth.",
    icon: <FaBusinessTime />,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Expertise</h2>
          <p className="services-description">
            We craft tailored technology solutions that drive success and innovation.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
