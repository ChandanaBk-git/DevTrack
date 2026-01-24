import { useState } from "react";
import { Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { authors } from "../data/authors";
import "../styles/Dashboard.css";

const subjects = ["All", "Frontend", "Backend", "Fullstack"];

export default function Dashboard() {
  const { blogs } = useBlogs();
  const [activeSubject, setActiveSubject] = useState("All");

  const filteredBlogs =
    activeSubject === "All"
      ? blogs
      : blogs.filter(b => b.subject === activeSubject);

  return (
    <div className="dashboard">

      {/* MEMBERS */}
      <div className="members">
        {Object.values(authors).map(user => (
          <Link
            to={`/author/${user.name}`}
            key={user.name}
            className="member-card"
          >
            <img src={user.avatar} />
            <h4>{user.name}</h4>
            <span>{user.role}</span>
          </Link>
        ))}
      </div>

      {/* SUBJECT FILTER */}
      <div className="subjects">
        {subjects.map(sub => (
          <button
            key={sub}
            className={activeSubject === sub ? "active" : ""}
            onClick={() => setActiveSubject(sub)}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* BLOG POSTS */}
      <div className="posts">
        {filteredBlogs.map(blog => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className={`post-card ${blog.subject.toLowerCase()}`}
          >
            <h3>{blog.title}</h3>
            <p className="meta">
              {blog.author} • {blog.subject}
            </p>
            <p>{blog.content.slice(0, 100)}...</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
