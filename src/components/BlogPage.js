import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./blogPage.css";
import blog1img from "../assets/images/con1.jpg";
import blog2img from "../assets/images/con2.jpg";
// Import all blog images...

const blogs = [
  {
    id: 1,
    title: "Microservices Performance Optimization",
    author: "Alex Johnson",
    date: "May 15, 2023",
    readTime: "8 min read",
    summary: "Advanced techniques for scaling microservices architecture",
    image: blog1img,
    content: `
      <h2>Optimizing Microservices Performance</h2>
      <p>In today's distributed systems landscape, microservices architecture has become the standard for building scalable applications. However, with this distributed nature comes complexity in monitoring and optimization.</p>
      
      <h3>Key Performance Indicators</h3>
      <ul>
        <li><strong>Latency Distribution:</strong> Focus on P99 and P95 percentiles</li>
        <li><strong>Error Budgets:</strong> Implementing SLOs for reliability</li>
        <li><strong>Resource Efficiency:</strong> CPU, memory, and network utilization</li>
      </ul>
      
      <h3>Optimization Strategies</h3>
      <p>Effective microservices optimization requires a multi-layered approach:</p>
      <ol>
        <li>Implement distributed tracing with OpenTelemetry</li>
        <li>Adopt service mesh for intelligent routing</li>
        <li>Optimize database access patterns</li>
        <li>Implement progressive rollouts with feature flags</li>
      </ol>
    `
  },
  // Add other blogs with similar detailed content
];

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Article Not Found</h2>
        <p>The requested blog post doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <article className="blog-article">
        <header className="article-header">
          <div className="author-info">
            <div className="author-avatar"></div>
            <div>
              <span className="author-name">{blog.author}</span>
              <span className="article-meta">{blog.date} · {blog.readTime}</span>
            </div>
          </div>
          <h1 className="article-title">{blog.title}</h1>
          <p className="article-excerpt">{blog.summary}</p>
        </header>
        
        <div className="article-content">
          <img src={blog.image} alt={blog.title} className="featured-image" />
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </article>
      
      <div className="article-footer">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Articles
        </button>
      </div>
    </div>
  );
};

export default BlogPage;