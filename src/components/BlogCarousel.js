import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
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
    date: "March 17, 2025",
    readTime: "8 min read",
    summary: "Advanced techniques for scaling microservices architecture to handle millions of requests with minimal latency.",
    image: blog1img,
    category: "APIs",
    color: "#A45CFF",
    icon: "⚙️"
  },
  {
    id: 2,
    title: "AI in Modern Web Applications",
    author: "Sarah Chen",
    date: "Jan 28, 2025",
    readTime: "6 min read",
    summary: "How to integrate machine learning models directly into frontend development workflows.",
    image: blog2img,
    category: "AI",
    color: "#A45CFF",
    icon: "🧠"
  },
  {
    id: 3,
    title: "The Future of Cloud Computing",
    author: "Michael Rodriguez",
    date: "Fev 07, 2025",
    readTime: "10 min read",
    summary: "Exploring serverless architecture and edge computing in modern cloud infrastructure.",
    image: blog3img,
    category: "Cloud",
    color: "#A45CFF",
    icon: "☁️"
  },
  {
    id: 4,
    title: "UX Design Principles for 2023",
    author: "Emma Wilson",
    date: "Oct 20, 2024",
    readTime: "7 min read",
    summary: "Creating intuitive user experiences in complex applications with cognitive load reduction.",
    image: blog4img,
    category: "Design",
    color: "#A45CFF",
    icon: "🎨"
  },
  {
    id: 5,
    title: "Blockchain for Enterprise Solutions",
    author: "David Kim",
    date: "May 20, 2024",
    readTime: "9 min read",
    summary: "Practical applications of blockchain technology beyond cryptocurrency in enterprise systems.",
    image: blog5img,
    category: "DLTs",
    color: "#A45CFF",
    icon: "⛓️"
  }
];

const BlogCarousel = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  // Card animations
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      rotate: -2
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const handleCardClick = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <motion.section 
      className="blog-section" 
      id="blogs"
      ref={sectionRef}
      style={{
        y,
        opacity,
        scale
      }}
    >
      <div className="magic-wand"></div>
      <div className="floating-orb"></div>
      
      <div className="blog-header">
        <motion.h2 
          className="blog-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="heading-gradient">Latest Insights</span>
        </motion.h2>
        <motion.p 
          className="blog-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Scroll to explore our collection of technical articles
        </motion.p>
      </div>
      
      <div className="cards-container" ref={containerRef}>
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="blog-card"
            onClick={() => handleCardClick(blog.id)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: `0 25px 50px -12px ${blog.color}40`
            }}
            style={{ 
              borderLeft: `5px solid ${blog.color}`,
              backgroundColor: `${blog.color}15`
            }}
          >
            <div className="card-decoration" style={{ backgroundColor: blog.color }}></div>
            <div className="card-icon">{blog.icon}</div>
            
            <div className="image-container">
              <motion.img 
                src={blog.image} 
                alt={blog.title} 
                className="blog-image"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </div>
            
            <div className="blog-details">
              <div className="category-badge" style={{ color: "white" }}>
                {blog.category}
              </div>
              
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              
              <motion.h3 
                className="blog-title"
                whileHover={{ color: blog.color }}
              >
                {blog.title}
              </motion.h3>
              
              <p className="blog-summary">{blog.summary}</p>
              
              <div className="blog-author">
                <div 
                  className="author-avatar" 
                  style={{ backgroundColor: blog.color }}
                >
                  {blog.author.charAt(0)}
                </div>
                <span>{blog.author}</span>
              </div>
            </div>
            
            <div className="read-more" style={{ color: "#260B3C" }}>
              Read Article →
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Scroll
      </motion.div>
    </motion.section>
  );
};

export default BlogCarousel;