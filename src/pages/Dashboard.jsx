import { useState } from "react";
import { useBlogs } from "../context/BlogContext";
import { Link } from "react-router-dom";
import { authors } from "../data/authors";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const { blogs, updateBlog } = useBlogs();
  const [search, setSearch] = useState("");

  // 🔍 SEARCH FILTER
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.content.toLowerCase().includes(search.toLowerCase())
  );

  // 🕒 TIME FORMAT
  const formatTime = (time) => {
    const diff = Math.floor((Date.now() - time) / 86400000);
    if (diff === 0) return "Today";
    if (diff === 1) return "Yesterday";
    return `${diff} days ago`;
  };

  // ❤️ LIKE HANDLER
  const handleLike = (blog) => {
    updateBlog({ ...blog, likes: blog.likes + 1 });
  };

  return (
    <div className="dashboard">
      <h2 style={{ marginBottom: "15px" }}>Dashboard</h2>

      {/* 🔍 Search */}
      <input
        className="search-input"
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* BLOG FEED */}
      {filteredBlogs.length === 0 && (
        <p>No blogs found</p>
      )}

      {filteredBlogs.map((blog) => (
        <div className="post-card" key={blog.id}>
          {/* TITLE */}
          <Link
            to={`/blog/${blog.id}`}
            style={{ textDecoration: "none" }}
          >
            <h3 className="post-title">{blog.title}</h3>
          </Link>

          {/* AUTHOR META */}
          <div className="post-meta">
            <img
              src={authors[blog.author]?.avatar}
              alt={blog.author}
              className="avatar"
            />
            <div>
              <strong>{blog.author}</strong>
              <span className="time">
                • {formatTime(blog.createdAt)}
              </span>
            </div>
          </div>

          {/* CONTENT PREVIEW */}
          <p className="post-content">
            {blog.content.length > 150
              ? blog.content.slice(0, 150) + "..."
              : blog.content}
          </p>

          {/* LIKE */}
          <button
            className="like-btn"
            onClick={() => handleLike(blog)}
          >
            ❤️ {blog.likes}
          </button>
        </div>
      ))}
    </div>
  );
}
