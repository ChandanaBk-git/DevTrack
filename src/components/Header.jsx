import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header style={{ padding: "15px", background: "#111", color: "white" }}>
      <span style={{ marginRight: "20px", cursor: "pointer" }} onClick={() => navigate("/dashboard")}>Dashboard</span>
      <span style={{ cursor: "pointer" }} onClick={() => navigate("/profile")}>Profile</span>
    </header>
  );
}
