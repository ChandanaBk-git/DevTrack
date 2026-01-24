import { useParams, Link } from "react-router-dom";
import { authors } from "../data/authors";
import { useBlogs } from "../context/BlogContext";

export default function AuthorProfile() {
  const { name } = useParams();
  const { blogs } = useBlogs();

  const author = authors[name];
  const authorBlogs = blogs.filter(b => b.author === name);

  return (
    <div style={{ padding: "20px" }}>
      <img src={author.avatar} width="100" />
      <h2>{author.name}</h2>
      <p>{author.role}</p>

      <h3>Posts</h3>
      {authorBlogs.map(blog => (
        <Link key={blog.id} to={`/blog/${blog.id}`}>
          <p>{blog.title}</p>
        </Link>
      ))}
    </div>
  );
}
