import React from 'react';
import './services.css';

const services = [
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions and strategies.",
    icon: "💡"
  },
  {
    title: "Cloud Solutions",
    description: "Optimize your infrastructure with secure and scalable cloud services.",
    icon: "☁️"
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics.",
    icon: "📊"
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions.",
    icon: "🔒"
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage AI to automate and enhance your business processes.",
    icon: "🤖"
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to drive business growth.",
    icon: "💼"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            We offer expertly designed solutions that align with your business goals.
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
