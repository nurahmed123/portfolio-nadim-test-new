import React, { useState } from "react";
import BlogCard from "../component/Blog/Card";
import BlogApi from "../component/Blog/BlogApi";
import "../component/Blog/Blog.css";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(BlogApi.map(item => item.category || "achievement"))];

  // Filter blogs based on search and category
  const filteredBlogs = BlogApi.filter(blog => {
    const matchesSearch = blog.title_one.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || (blog.category || "achievement") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page" style={{ paddingTop: "120px" }}>
      <section className="Portfolio Blog" id="blog">
        <div className="container top">
          <div className="heading text-center">
            <h1>Awards & Achievements</h1>
            <h4>Celebrating milestones and recognitions in my journey</h4>
          </div>

          {/* Search and Filter Section */}
          <div className="blog-filters" style={{ marginBottom: "40px", textAlign: "center" }}>
            <div className="search-container" style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: "12px 20px",
                  borderRadius: "25px",
                  border: "2px solid #32cd32",
                  backgroundColor: "transparent",
                  color: "inherit",
                  fontSize: "16px",
                  width: "300px",
                  maxWidth: "100%"
                }}
              />
            </div>
            
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn_shadow ${selectedCategory === category ? 'active' : ''}`}
                  style={{
                    margin: "5px",
                    padding: "8px 16px",
                    backgroundColor: selectedCategory === category ? "#32cd32" : "transparent",
                    color: selectedCategory === category ? "#000" : "inherit"
                  }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="content grid">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((value, index) => (
                <BlogCard
                  key={index}
                  image={value.image}
                  ppimage={value.ppimage}
                  date={value.date}
                  title_one={value.title_one}
                  title_two={value.title_two}
                  title_three={value.title_three}
                  desc_one={value.desc_one}
                  desc_two={value.desc_two}
                  desc_three={value.desc_three}
                />
              ))
            ) : (
              <div className="no-results" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
                <h3>No achievements found</h3>
                <p>Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>

          {/* Blog Stats */}
          <div className="blog-stats" style={{ marginTop: "40px", textAlign: "center" }}>
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
              <div className="stat-item box_shadow" style={{ padding: "20px", borderRadius: "10px" }}>
                <h3 style={{ color: "#32cd32", fontSize: "2rem", margin: "0" }}>{BlogApi.length}</h3>
                <p>Total Achievements</p>
              </div>
              <div className="stat-item box_shadow" style={{ padding: "20px", borderRadius: "10px" }}>
                <h3 style={{ color: "#32cd32", fontSize: "2rem", margin: "0" }}>2024</h3>
                <p>Latest Achievement</p>
              </div>
              <div className="stat-item box_shadow" style={{ padding: "20px", borderRadius: "10px" }}>
                <h3 style={{ color: "#32cd32", fontSize: "2rem", margin: "0" }}>{categories.length - 1}</h3>
                <p>Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;