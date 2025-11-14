
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // optional if you have global CSS

// ✅ Create root and render App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);