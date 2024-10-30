import React from "react";
import { useNavigate } from "react-router-dom";

const NotAuthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "50%",
        margin: "50px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "48px", marginBottom: "10px" }}>
        403 - Not Authorized
      </h1>
      <p style={{ color: "#555", fontSize: "18px", marginBottom: "20px" }}>
        You do not have permission to view this page.
      </p>
      <button
        onClick={handleGoBack}
        style={{
          padding: "10px 30px",
          fontSize: "16px",
          backgroundColor: "#0288ff", // Green button
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#034b80")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0288ff")}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default NotAuthorized;
