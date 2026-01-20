import { createContext, useContext, useEffect, useState } from "react";
import { dummyBlogs } from "../data/dummyBlogs";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs"));

    // ✅ LOAD DUMMY BLOGS IF EMPTY
    if (!storedBlogs || storedBlogs.length === 0) {
      setBlogs(dummyBlogs);
      localStorage.setItem("blogs", JSON.stringify(dummyBlogs));
    } else {
      setBlogs(storedBlogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog) => {
    setBlogs((prev) => [blog, ...prev]);
  };

  const deleteBlog = (id) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  const updateBlog = (updatedBlog) => {
    setBlogs((prev) =>
      prev.map((b) => (b.id === updatedBlog.id ? updatedBlog : b))
    );
  };

  return (
    <BlogContext.Provider
      value={{ blogs, addBlog, deleteBlog, updateBlog }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogs() {
  return useContext(BlogContext);
}
