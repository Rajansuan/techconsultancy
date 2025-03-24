import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCarousel.css";
import blog1img from "../assets/images/con1.jpg";
import blog2img from "../assets/images/con2.jpg";
import blog3img from "../assets/images/con3.jpg";
import blog4img from "../assets/images/con4.jpg";
import blog5img from "../assets/images/con5.jpg";

const blogs = [
  {
    id: 1,
    title: "Microservices Performance Optimization",
    author: "Alex Johnson",
    date: "May 15, 2023",
    readTime: "8 min read",
    summary: "Advanced techniques for scaling microservices architecture",
    image: blog1img
  },
  {
    id: 2,
    title: "AI in Modern Web Applications",
    author: "Sarah Chen",
    date: "June 2, 2023",
    readTime: "6 min read",
    summary: "Integrating machine learning models in frontend development",
    image: blog2img
  },
  {
    id: 3,
    title: "The Future of Cloud Computing",
    author: "Michael Rodriguez",
    date: "April 18, 2023",
    readTime: "10 min read",
    summary: "Emerging trends in cloud infrastructure and serverless architecture",
    image: blog3img
  },
  {
    id: 4,
    title: "UX Design Principles for 2023",
    author: "Emma Wilson",
    date: "March 5, 2023",
    readTime: "7 min read",
    summary: "Creating intuitive user experiences in complex applications",
    image: blog4img
  },
  {
    id: 5,
    title: "Blockchain for Enterprise Solutions",
    author: "David Kim",
    date: "February 20, 2023",
    readTime: "9 min read",
    summary: "Practical applications beyond cryptocurrency",
    image: blog5img
  }
  // Add more blogs as needed
];


const BlogCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (carouselRef.current && selectedIndex !== 0) {
      const selectedCard = carouselRef.current.children[selectedIndex];
      if (selectedCard) {
        selectedCard.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [selectedIndex]);

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <section className="blog-section" id="blogs">
      <div className="blog-header">
        <h2 className="blog-heading">Latest Insights</h2>
        <p className="blog-subtitle">Explore our collection of technical articles</p>
      </div>
      
      <div className="carousel-container">
        <button className="nav-button left" onClick={handlePrev}>
          ❮
        </button>

        <div className="carousel" ref={carouselRef}>
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`blog-card ${index === selectedIndex ? "active" : ""}`}
              onClick={() => handleCardClick(blog.id)}
            >
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-details">
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-summary">{blog.summary}</p>
                <div className="blog-author">
                  <div className="author-avatar"></div>
                  <span>{blog.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={handleNext}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default BlogCarousel;