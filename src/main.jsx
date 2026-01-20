import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BlogProvider } from "./context/BlogContext";
import { ProfileProvider } from "./context/ProfileContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProfileProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </ProfileProvider>
  </React.StrictMode>
);
