import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      {/* CSS injected once */}
      <style>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-card {
          animation: fadeSlide 0.6s ease-out;
        }

        .btn {
          transition: all 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
        }

        .btn:active {
          transform: scale(0.98);
        }

        input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
        }
      `}</style>

      <div style={pageStyle}>
        <form onSubmit={handleLogin} style={cardStyle} className="login-card">
          <h2 style={titleStyle}>Welcome Back</h2>
          <p style={subtitleStyle}>Login to continue</p>

          <input
            type="email"
            placeholder="Email"
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            required
            style={inputStyle}
          />

          <button type="submit" className="btn" style={buttonStyle}>
            Login
          </button>

          <div style={linksStyle}>
            <Link to="/register" style={linkStyle}>Register</Link>
            <span>|</span>
            <Link to="/forgot" style={linkStyle}>Forgot Password?</Link>
          </div>
        </form>
      </div>
    </>
  );
}

/* Styles */
const pageStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #2563eb, #1e40af)"
};

const cardStyle = {
  background: "#ffffff",
  padding: "35px",
  width: "320px",
  borderRadius: "10px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  textAlign: "center"
};

const titleStyle = {
  marginBottom: "5px",
  color: "#111827"
};

const subtitleStyle = {
  marginBottom: "20px",
  fontSize: "14px",
  color: "#6b7280"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  fontSize: "14px"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#2563eb",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "15px",
  fontWeight: "bold"
};

const linksStyle = {
  marginTop: "15px",
  fontSize: "13px",
  display: "flex",
  justifyContent: "center",
  gap: "8px"
};

const linkStyle = {
  color: "#2563eb",
  textDecoration: "none"
};
