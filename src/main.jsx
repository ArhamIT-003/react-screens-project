import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider"; // Adjust the import path as necessary
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider> {/* Wrap the App component with AuthProvider */}
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
