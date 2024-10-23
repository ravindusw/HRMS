// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext.jsx"; // Import the useAuth hook

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { auth } = useAuth(); // Get the auth state from the AuthContext

//   if (!auth.token || !allowedRoles.includes(auth.role)) {
//     return <Navigate to="/notAuthorized" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = Cookies.get("authToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);

    if (!allowedRoles.includes(decodedToken.role)) {
      return <Navigate to="/notAuthorized" replace />;
    }

    return children;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
