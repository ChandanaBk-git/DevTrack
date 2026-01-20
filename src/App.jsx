import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import Layout from "./components/Layout";
import BlogDetails from "./pages/BlogDetails";
import AuthorProfile from "./pages/AuthorProfile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        <Route path="/create" element={<Layout><CreateBlog /></Layout>} />
        <Route path="/edit/:id" element={<Layout><EditBlog /></Layout>} />
        <Route
  path="/blog/:id"
  element={<Layout><BlogDetails /></Layout>}
/>

<Route
  path="/author/:name"
  element={<Layout><AuthorProfile /></Layout>}
/>
      </Routes>
    </BrowserRouter>
  );
}
