import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/Jupiter_Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        { email, password }
      );
      const employee_id = response.data.employee_id;
      localStorage.setItem("employee_id", employee_id);
      navigate("/dashboard");
    } catch (err) {
      setErrorMessage(
        err.response && err.response.data ? err.response.data : "Login failed!"
      );
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="network-info">
          <img
            src={logo}
            alt="Jupiter Apparels Logo"
            className="animated-logo"
          />
          <h1>Jupiter Apparels</h1>
          <h3>Human Resource Management System</h3>
          <p>
            Join our growing network of 10 million+ members. We invite you to
            become part of our tribe.
          </p>
          <a href="/login" className="login-link">
            Already have an account? <strong>Sign in</strong>
          </a>
        </div>
      </div>

      <div className="right-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Aboard!</h2>
          <h1>Log in to your Account</h1>

          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              id="show-password"
            />
            <label htmlFor="show-password">Show Password</label>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
