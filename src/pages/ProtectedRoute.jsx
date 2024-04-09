import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider"; // Ensure this path is correct

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get user authentication status
  const location = useLocation();

  if (!user) {
    // Console logging for debugging
    console.log("Redirecting unauthenticated user from:", location.pathname);

    // Redirect them to the login page, but save the current location they were trying to go to
    // This will redirect immediately, without requiring user interaction
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If the user is authenticated, render the children components passed to ProtectedRoute
  return children;
};

export default ProtectedRoute;
