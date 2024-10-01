import "./Help.css";

import React, { useState } from "react";
import "./Login.css";
import logo from "/Jupiter_Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logicd
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });
      navigate("/profile");
    } catch (err) {
      console.log("Error occured!:", err);
    }
  };

  return (
    <div className="login-container">
      {/* Left panel with invite message */}
      <div className="left-panel">
        <div className="network-info">
          {/* Logo with animation */}
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

      {/* Right panel with sign-up form */}
      <div className="right-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Aboard!</h2>
          <h1>log in to your Account</h1>
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
            placeholder="Create a password"
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

          <button
            type="submit"
            className="login-button"
            // onClick={() => Navigate("/userProfile")}
          >
            login
          </button>

          {/* <p className="terms-text">
            By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;