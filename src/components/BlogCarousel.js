import React, { useState, useRef, useEffect } from "react";
import "./BlogCarousel.css";
import blog1img from "../assets/images/72.jpg";

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
    title: "Modern Web Development Trends",
    author: "Jane Smith",
    summary: "Learn about the latest tools and frameworks.",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    title: "Cybersecurity & Digital Safety",
    author: "David Brown",
    summary: "Stay ahead of cyber threats in the digital age.",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    title: "The Rise of Cloud Computing",
    author: "Emma Wilson",
    summary: "Explore the benefits of cloud technology.",
    image: "https://picsum.photos/600/400?random=4",
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

                    <h4>Key Performance Metrics in Microservices</h4>
                    <ul>
                      <li>
                        <strong>CPU Usage:</strong> Monitored using{" "}
                        <code>top</code> and <code>ps aux</code>. Flamegraphs
                        help visualize CPU-intensive operations.
                      </li>
                      <li>
                        <strong>Memory Usage:</strong> Measured with{" "}
                        <code>free -m</code> and <code>vmstat</code>. Grafana
                        and Prometheus provide real-time insights.
                      </li>
                      <li>
                        <strong>Throughput:</strong> Load testing tools like
                        Apache JMeter and Gatling help measure requests per
                        second.
                      </li>
                      <li>
                        <strong>Latency:</strong> Distributed tracing with
                        Jaeger and log monitoring with Grafana + Loki identify
                        delays.
                      </li>
                      <li>
                        <strong>Error Rates:</strong> Monitored using the ELK
                        Stack (Elasticsearch, Logstash, Kibana) and Prometheus
                        Alertmanager.
                      </li>
                    </ul>

                    <h4>
                      Tools for Measuring and Visualizing System Performance
                    </h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Metric</th>
                          <th>Measurement Tools</th>
                          <th>Visualization Tools</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CPU Usage</td>
                          <td>top, ps aux, Flamegraphs</td>
                          <td>Grafana, Flamegraph Viewer</td>
                        </tr>
                        <tr>
                          <td>Memory Usage</td>
                          <td>free -m, vmstat</td>
                          <td>Prometheus, Grafana</td>
                        </tr>
                        <tr>
                          <td>Throughput</td>
                          <td>JMeter, Gatling</td>
                          <td>Grafana, Kibana</td>
                        </tr>
                        <tr>
                          <td>Latency</td>
                          <td>Jaeger, Grafana + Loki</td>
                          <td>Jaeger UI, Grafana</td>
                        </tr>
                        <tr>
                          <td>Error Rates</td>
                          <td>ELK Stack, Prometheus</td>
                          <td>Kibana, Grafana</td>
                        </tr>
                      </tbody>
                    </table>

                    <h4>Conclusion</h4>
                    <p>
                      Monitoring system performance in microservices is crucial
                      for scalability, reliability, and efficiency. By tracking
                      key metrics and using the right tools, organizations can
                      proactively optimize system health and prevent failures.
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
