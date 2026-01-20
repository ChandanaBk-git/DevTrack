import { useParams, Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

export default function AuthorProfile() {
  const { name } = useParams();
  const { blogs } = useBlogs();

  const authorBlogs = blogs.filter(b => b.author === name);

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <h2>👤 {name}</h2>
      <p>{authorBlogs.length} posts</p>

      {authorBlogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h4>{blog.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
