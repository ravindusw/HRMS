import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx"; // Import the useAuth hook

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { auth } = useAuth(); // Get the auth state from the AuthContext

  if (!auth.token || !allowedRoles.includes(auth.role)) {
    return <Navigate to="/notAuthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
