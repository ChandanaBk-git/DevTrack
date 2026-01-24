import { useParams } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

export default function BlogDetails() {
  const { id } = useParams();
  const { blogs } = useBlogs();

  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{blog.title}</h1>
      <p><b>{blog.author}</b> • {blog.subject}</p>
      <p>{blog.content}</p>
    </div>
  );
}
