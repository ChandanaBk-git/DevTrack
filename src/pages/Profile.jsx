import { useBlogs } from "../context/BlogContext";
import { useProfile } from "../context/ProfileContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { blogs, deleteBlog } = useBlogs();
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      
      {/* PROFILE HEADER */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginBottom: "30px"
        }}
      >
        <div>
          <img
            src={profile.avatar || "https://via.placeholder.com/120"}
            alt="avatar"
            width="120"
            height="120"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <input type="file" onChange={handleImageUpload} />
        </div>

        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Your Name"
            value={profile.name}
            onChange={(e) =>
              setProfile({ ...profile, name: e.target.value })
            }
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <textarea
            placeholder="Your Bio"
            value={profile.bio}
            onChange={(e) =>
              setProfile({ ...profile, bio: e.target.value })
            }
            rows="3"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <button onClick={() => navigate("/create")}>
        ✍️ Create Blog
      </button>

      {/* USER POSTS */}
      <h3 style={{ marginTop: "30px" }}>My Posts</h3>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            background: "#fff",
            padding: "15px",
            marginTop: "15px",
            borderRadius: "8px"
          }}
        >
          <h4>{blog.title}</h4>
          <p>{blog.content.slice(0, 120)}...</p>

          <button onClick={() => navigate(`/edit/${blog.id}`)}>Edit</button>
          <button onClick={() => deleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
