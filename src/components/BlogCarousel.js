import React, { useState, useRef, useEffect } from "react";
import "./BlogCarousel.css";

const blogs = [
  {
    id: 1,
    title: "AI in Modern Technology",
    summary: "Discover how AI is transforming various industries.",
    content:
      "Artificial Intelligence (AI) is reshaping industries by enhancing efficiency, reducing costs, and unlocking new possibilities. From healthcare to finance, AI-driven solutions are making a significant impact.",
    image: "https://picsum.photos/300/400?random=1",
  },
  {
    id: 2,
    title: "The Future of Web Development",
    summary: "Explore the latest trends in web development.",
    content:
      "Web development is evolving with new frameworks, technologies, and design trends. Learn how businesses can stay ahead with modern tools like React, Next.js, and serverless architectures.",
    image: "https://picsum.photos/300/400?random=2",
  },
  {
    id: 3,
    title: "Cybersecurity in 2025",
    summary: "Why cybersecurity is more important than ever.",
    content:
      "With growing cyber threats, businesses must implement advanced security measures. Encryption, AI-powered threat detection, and zero-trust security models are becoming the new standard.",
    image: "https://picsum.photos/300/400?random=3",
  },
  {
    id: 4,
    title: "Cloud Computing Trends",
    summary: "How cloud computing is changing businesses.",
    content:
      "Cloud computing is enabling businesses to scale efficiently. Learn about hybrid cloud models, serverless computing, and the benefits of multi-cloud strategies.",
    image: "https://picsum.photos/300/400?random=4",
  },
  {
    id: 5,
    title: "Blockchain Beyond Cryptocurrency",
    summary: "How blockchain is revolutionizing industries.",
    content:
      "Blockchain is not just about cryptocurrencies. It's being used in supply chain management, healthcare, and secure transactions to bring transparency and efficiency.",
    image: "https://picsum.photos/300/400?random=5",
  },
  {
    id: 6,
    title: "The Rise of Remote Work",
    summary: "Why remote work is here to stay.",
    content:
      "The pandemic accelerated the shift to remote work. Learn about the best remote work tools, productivity hacks, and how companies are adapting to this new normal.",
    image: "https://picsum.photos/300/400?random=6",
  },
];

const BlogCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const selectedCard = carouselRef.current.children[selectedIndex];
      if (selectedCard) {
        selectedCard.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
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

  return (
    <section className="blog-section">
      <h2 className="blog-heading">Latest Blog Posts</h2>
      <div className="carousel-container">
        <button className="nav-button left" onClick={handlePrev}>
          ❮
        </button>

        <div className="carousel" ref={carouselRef}>
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`blog-card ${index === selectedIndex ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
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

      {/* Selected Blog Content */}
      <div className="selected-blog-content">
        <h3>{blogs[selectedIndex].title}</h3>
        <p>{blogs[selectedIndex].content}</p>
      </div>
    </section>
  );
};

export default BlogCarousel;
