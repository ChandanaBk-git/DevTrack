import { useNavigate, Link } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset link sent to your email!");
    navigate("/login");
  };

  return (
    <div className="center">
      <h2>Forgot Password</h2>

      <form onSubmit={handleReset}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Reset Password</button>
      </form>

      <p>
        Back to <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
