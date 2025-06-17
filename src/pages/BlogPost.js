import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogApi from "../component/Blog/BlogApi";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BlogApi.find(item => item.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-post-page" style={{ paddingTop: "120px", textAlign: "center" }}>
        <div className="container">
          <h1>Post Not Found</h1>
          <button className="btn_shadow" onClick={() => navigate("/blog")}>
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page" style={{ paddingTop: "120px" }}>
      <div className="container">
        <article className="blog-post">
          <header className="post-header" style={{ textAlign: "center", marginBottom: "40px" }}>
            <button 
              className="btn_shadow" 
              onClick={() => navigate("/blog")}
              style={{ marginBottom: "20px" }}
            >
              ← Back to Achievements
            </button>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{post.title_one}</h1>
            <p style={{ color: "#32cd32", fontSize: "1.1rem" }}>{post.date}</p>
          </header>

          <div className="post-image" style={{ textAlign: "center", marginBottom: "40px" }}>
            <img 
              src={post.ppimage || post.image} 
              alt={post.title_one}
              style={{ 
                maxWidth: "100%", 
                height: "auto", 
                borderRadius: "10px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
            />
          </div>

          <div className="post-content" style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
            {post.desc_one && (
              <div className="content-section" style={{ marginBottom: "30px" }}>
                <p style={{ fontSize: "1.1rem" }}>{post.desc_one}</p>
              </div>
            )}

            {post.title_two && (
              <div className="content-section" style={{ marginBottom: "30px" }}>
                <h2 style={{ color: "#32cd32", marginBottom: "15px" }}>{post.title_two}</h2>
                {post.desc_two && <p style={{ fontSize: "1.1rem" }}>{post.desc_two}</p>}
              </div>
            )}

            {post.title_three && (
              <div className="content-section" style={{ marginBottom: "30px" }}>
                <h2 style={{ color: "#32cd32", marginBottom: "15px" }}>{post.title_three}</h2>
                {post.desc_three && <p style={{ fontSize: "1.1rem" }}>{post.desc_three}</p>}
              </div>
            )}

            {/* Achievement Details */}
            <div className="achievement-details box_shadow" style={{ padding: "30px", borderRadius: "10px", marginTop: "40px" }}>
              <h3 style={{ color: "#32cd32", marginBottom: "20px" }}>Achievement Details</h3>
              <div className="details-grid" style={{ display: "grid", gap: "15px" }}>
                <div className="detail-item">
                  <strong>Date:</strong> {post.date}
                </div>
                <div className="detail-item">
                  <strong>Category:</strong> {post.category || "Achievement"}
                </div>
                <div className="detail-item">
                  <strong>Title:</strong> {post.title_one}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="post-navigation" style={{ textAlign: "center", marginTop: "60px" }}>
            <button 
              className="btn_shadow" 
              onClick={() => navigate("/blog")}
              style={{ marginRight: "20px" }}
            >
              View All Achievements
            </button>
            <button 
              className="btn_shadow" 
              onClick={() => navigate("/contact")}
            >
              Get In Touch
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;