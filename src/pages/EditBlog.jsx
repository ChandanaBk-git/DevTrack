import { useBlogs } from "../context/BlogContext";
import { useParams, useNavigate } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
  const { blogs, updateBlog } = useBlogs();
  const navigate = useNavigate();

  const blog = blogs.find(b => b.id === Number(id));

  const submit = (e) => {
    e.preventDefault();
    updateBlog({ ...blog, title: e.target.title.value, content: e.target.content.value });
    navigate("/profile");
  };

  return (
    <form onSubmit={submit}>
      <input name="title" defaultValue={blog.title} />
      <textarea name="content" defaultValue={blog.content} />
      <button>Update</button>
    </form>
  );
}
