import { useParams, Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useState } from "react";
import "../styles/BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const { blogs } = useBlogs();
  const blog = blogs.find(b => b.id === Number(id));

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  if (!blog) return <p>Blog not found</p>;

  const addComment = () => {
    if (!text) return;
    setComments([...comments, text]);
    setText("");
  };

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>

      <p className="meta">
        By <Link to={`/author/${blog.author}`}>{blog.author}</Link>
      </p>

      <p className="content">{blog.content}</p>

      {/* COMMENTS */}
      <h3>Comments</h3>

      <div className="comment-box">
        <input
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addComment}>Post</button>
      </div>

      {comments.map((c, i) => (
        <p key={i} className="comment">💬 {c}</p>
      ))}
    </div>
  );
}
