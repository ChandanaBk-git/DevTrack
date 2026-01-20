import { useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

export default function CreateBlog() {
  const { addBlog } = useBlogs();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const content = e.target.content.value.trim();

    if (!title || !content) return;

    const newBlog = {
      id: Date.now(),              // unique id
      title,
      content,
      author: "Chandana",          // current user (static for now)
      createdAt: Date.now(),       // ✅ fixes NaN days issue
      likes: 0
    };

    addBlog(newBlog);
    navigate("/profile");
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "20px"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Create New Blog</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Blog title"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px"
          }}
        />

        <textarea
          name="content"
          placeholder="Write your blog content here..."
          required
          rows="8"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px"
          }}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit">
            Publish
          </button>

          <button
            type="button"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
