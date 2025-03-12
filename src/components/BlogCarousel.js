import React, { useState, useRef, useEffect } from "react";
import "./BlogCarousel.css";

const blogs = [
  {
    id: 1,
    title: "Revolutionizing AI in 2025",
    author: "John Doe",
    summary: "AI is shaping the future of business and innovation.",
    content:
      "Artificial Intelligence is evolving rapidly, influencing multiple industries from finance to healthcare. AI-driven automation and decision-making are now integral to business growth.",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    title: "Modern Web Development Trends",
    author: "Jane Smith",
    summary: "Learn about the latest tools and frameworks.",
    content:
      "Web development is undergoing massive transformations with the introduction of Next.js, serverless functions, and AI-powered coding assistants.",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    title: "Cybersecurity & Digital Safety",
    author: "David Brown",
    summary: "Stay ahead of cyber threats in the digital age.",
    content:
      "Cybersecurity remains a top priority as digital threats grow. Businesses must adopt encryption, multi-factor authentication, and AI-driven security measures.",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    title: "The Rise of Cloud Computing",
    author: "Emma Wilson",
    summary: "Explore the benefits of cloud technology.",
    content:
      "Cloud computing is revolutionizing businesses with its scalability and cost efficiency. Hybrid cloud models are gaining momentum.",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const BlogCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
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

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="blog-section">
      <h2 className="blog-heading">Latest Blogs</h2>
      <div className="carousel-container">
        <button className="nav-button left" onClick={handlePrev}>
          ❮
        </button>

        <div className="carousel" ref={carouselRef}>
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`blog-card ${index === selectedIndex ? "active" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-details">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-summary">{blog.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button right" onClick={handleNext}>
          ❯
        </button>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              ✖
            </button>
            <img
              src={blogs[selectedIndex].image}
              alt={blogs[selectedIndex].title}
              className="popup-image"
            />
            <div className="popup-details">
              <h3>{blogs[selectedIndex].title}</h3>
              <p className="popup-author">By {blogs[selectedIndex].author}</p>
              <p>{blogs[selectedIndex].content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogCarousel;
