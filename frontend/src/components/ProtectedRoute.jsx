import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = Cookies.get("role");

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  try {
    console.log(role);

    if (!allowedRoles.includes(role)) {
      return <Navigate to="/notAuthorized" replace />;
    }

    return children;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
