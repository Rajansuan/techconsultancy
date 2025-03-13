import React, { useState, useRef, useEffect } from "react";
import "./BlogCarousel.css";
import blog1img from "../assets/images/con1.jpg";
import blog2img from "../assets/images/con2.jpg";
import blog3img from "../assets/images/con3.jpg";
import blog4img from "../assets/images/con4.jpg";
import blog5img from "../assets/images/con5.jpg";

const blogs = [
  {
    id: 1,
    title: "Optimizing System Performance in Microservices",
    author: "Deepanshu",
    summary: "Key metrics and tools for better microservices performance",
    image: `${blog1img}`,
  },
  {
    id: 2,
    title: "AI Trends: The Future of Artificial Intelligence",
    author: "Jane Smith",
    summary: "Explore cutting-edge AI developments and trends.",
    image: `${blog2img}`,
  },
  {
    id: 3,
    title: "Generative AI and Chatbots: Transforming Digital Communication",
    author: "David Brown",
    summary: "How AI-powered chatbots are revolutionizing industries.",
    image: `${blog3img}`,
  },
  {
    id: 4,
    title: "UI/UX & Modern Web Development Trends",
    author: "Emma Wilson",
    summary: "Enhancing user experiences with the latest web innovations.",
    image: `${blog4img}`,
  },
  {
    id: 5,
    title: "Mastering Prompt Engineering in AI",
    author: "Michael Johnson",
    summary: "The art of crafting effective AI prompts.",
    image: `${blog5img}`,
  },
];

const BlogCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const carouselRef = useRef(null);

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

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="blog-section" id="blogs">
      <h2 className="blog-heading">Latest Blogs</h2>
      <hr className="hr-line" />
      <p className="services-description">Check out our latest blog updates!</p>
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
              <div className="popup-text">
                {selectedIndex === 0 && (
                  <>
                    <h4>Optimizing System Performance in Microservices</h4>
                    <p>
                      Microservices architecture has revolutionized software
                      development, offering scalability, resilience, and
                      flexibility. However, managing system performance in
                      microservices is a complex task that requires continuous
                      monitoring and optimization.
                    </p>
                    <h4>
                      Why Measuring and Optimizing System Performance Matters
                    </h4>
                    <ul>
                      <li>
                        <strong>Ensures Scalability:</strong> Regular monitoring
                        helps prevent performance bottlenecks as the system
                        scales.
                      </li>
                      <li>
                        <strong>Improves User Experience:</strong> Slow response
                        times and downtime lead to user frustration and loss of
                        customers.
                      </li>
                      <li>
                        <strong>Identifies and Fixes Bottlenecks:</strong>{" "}
                        Issues like high CPU usage and slow API responses can be
                        resolved before impacting production.
                      </li>
                      <li>
                        <strong>Optimizes Infrastructure Costs:</strong> Helps
                        balance resource usage efficiently to reduce costs.
                      </li>
                      <li>
                        <strong>Enhances Reliability and Stability:</strong>{" "}
                        Prevents unexpected failures, ensuring system
                        resilience.
                      </li>
                    </ul>
                    {/* Key Performance Metrics, Tools, and Conclusion */}
                  </>
                )}

                {selectedIndex === 1 && (
                  <>
                    <h4>AI Trends: The Future of Artificial Intelligence</h4>
                    <p>
                      AI is advancing rapidly, shaping industries and
                      transforming business operations. From automation to deep
                      learning, AI’s impact is undeniable.
                    </p>
                    <h4>Key Trends in AI for 2025</h4>
                    <ul>
                      <li>
                        <strong>AI in Healthcare:</strong> Revolutionizing
                        diagnostics and personalized treatments.
                      </li>
                      <li>
                        <strong>Ethical AI:</strong> Addressing bias, privacy,
                        and accountability.
                      </li>
                      <li>
                        <strong>AI-Powered Automation:</strong> Enhancing
                        efficiency across industries.
                      </li>
                      <li>
                        <strong>Explainable AI (XAI):</strong> Improving AI
                        transparency and trust.
                      </li>
                    </ul>
                    <h4>Challenges and Future Outlook</h4>
                    <p>
                      AI’s potential is immense, but challenges like ethical
                      considerations, data privacy, and regulatory concerns need
                      attention. The future of AI relies on responsible
                      development and continued innovation.
                    </p>
                  </>
                )}

                {selectedIndex === 2 && (
                  <>
                    <h4>
                      Generative AI & Chatbots: Revolutionizing Communication
                    </h4>
                    <p>
                      Generative AI is changing how businesses interact with
                      users. From chatbots to content creation, AI models are
                      enhancing engagement and automating tasks.
                    </p>
                    <h4>How Generative AI Works</h4>
                    <p>
                      Generative AI leverages deep learning to generate
                      human-like text, images, and even music. Models like GPT-4
                      and DALL·E 3 create content by analyzing vast datasets.
                    </p>
                    <h4>Applications of AI-Powered Chatbots</h4>
                    <ul>
                      <li>
                        <strong>Customer Support:</strong> 24/7 AI-driven
                        assistance.
                      </li>
                      <li>
                        <strong>Marketing & Sales:</strong> Personalized
                        recommendations and lead generation.
                      </li>
                      <li>
                        <strong>Healthcare:</strong> AI-powered medical
                        consultations.
                      </li>
                      <li>
                        <strong>E-Commerce:</strong> Shopping assistants and
                        order tracking.
                      </li>
                    </ul>
                    <h4>Challenges in Generative AI</h4>
                    <p>
                      Despite its benefits, generative AI faces hurdles like
                      bias, misinformation, and ethical concerns. Ensuring
                      responsible use is crucial for its long-term success.
                    </p>
                  </>
                )}

                {selectedIndex === 3 && (
                  <>
                    <h4>UI/UX & Web Development: The Future of Design</h4>
                    <p>
                      User experience is at the core of web development. A
                      well-crafted UI/UX design ensures accessibility,
                      engagement, and usability.
                    </p>
                    <h4>Emerging UI/UX Trends</h4>
                    <ul>
                      <li>
                        <strong>Dark Mode & Accessibility:</strong> Enhancing
                        visual comfort and usability.
                      </li>
                      <li>
                        <strong>Neumorphism vs. Glassmorphism:</strong> Modern
                        design aesthetics gaining traction.
                      </li>
                      <li>
                        <strong>Micro-Interactions:</strong> Adding subtle
                        animations for better user engagement.
                      </li>
                      <li>
                        <strong>AI-Assisted Design:</strong> Automating UI
                        personalization.
                      </li>
                    </ul>
                    <h4>Web Development Best Practices</h4>
                    <ul>
                      <li>Mobile-first design and responsive layouts.</li>
                      <li>Performance optimization for faster load times.</li>
                      <li>Security enhancements to prevent vulnerabilities.</li>
                      <li>
                        Integration of AI-driven chatbots for interactivity.
                      </li>
                    </ul>
                    <h4>Conclusion</h4>
                    <p>
                      The future of UI/UX and web development lies in creating
                      immersive, accessible, and interactive experiences.
                      Keeping up with modern trends ensures a seamless user
                      journey.
                    </p>
                  </>
                )}

                {selectedIndex === 4 && (
                  <>
                    <h4>Mastering Prompt Engineering in AI</h4>
                    <p>
                      Prompt engineering is a crucial skill in AI interactions.
                      The way prompts are structured can significantly impact an
                      AI’s response quality.
                    </p>
                    <h4>Why Prompt Engineering Matters</h4>
                    <ul>
                      <li>
                        <strong>Optimized AI Responses:</strong> Well-crafted
                        prompts improve accuracy and relevance.
                      </li>
                      <li>
                        <strong>Better AI Training:</strong> Helps AI models
                        learn effectively.
                      </li>
                      <li>
                        <strong>Use-Case Customization:</strong> Tailoring AI
                        outputs for different industries.
                      </li>
                      <li>
                        <strong>Reducing Bias & Errors:</strong> Structuring
                        queries to avoid misleading results.
                      </li>
                    </ul>
                    <h4>Best Practices in Prompt Engineering</h4>
                    <ul>
                      <li>Use clear, specific instructions.</li>
                      <li>Break down complex queries into smaller steps.</li>
                      <li>Test and refine prompts for better results.</li>
                      <li>
                        Leverage AI’s context awareness for improved accuracy.
                      </li>
                    </ul>
                    <h4>Conclusion</h4>
                    <p>
                      Mastering prompt engineering allows users to unlock AI’s
                      full potential. By crafting precise queries, developers
                      and businesses can enhance AI-driven workflows.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogCarousel;
