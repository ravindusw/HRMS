import React, { useState } from "react";
import "./addUser.css"; // Ensure path is correct
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";

const AddUser = () => {
  const [employee_Id, setEmployeeId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Employee");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const { auth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage(""); // Reset messages on submit

    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/addUser",
        {
          employee_Id,
          userName,
          password,
          email,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      setSuccessMessage(response.data);
      setEmployeeId("");
      setUserName("");
      setPassword("");
      setEmail("");
      setRole("Admin");

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      setErrorMessage(
        err.response && err.response.data
          ? err.response.data
          : "Failed to add user!"
      );

      // Clear the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <div className="add-user-wrapper">
      <form onSubmit={handleSubmit} className="add-user-form-unique">
        <div className="form-group-unique">
          <label htmlFor="employeeId" className="label-unique">
            Employee ID
          </label>
          <input
            type="text"
            id="employee_Id"
            value={employee_Id}
            onChange={(e) => setEmployeeId(e.target.value)}
            className="input-unique"
            required
          />
        </div>

        <div className="form-group-unique">
          <label htmlFor="userName" className="label-unique">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input-unique"
            required
          />
        </div>

        <div className="form-group-unique">
          <label htmlFor="password" className="label-unique">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-unique"
            required
          />
        </div>

        <div className="form-group-unique">
          <label htmlFor="email" className="label-unique">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-unique"
            required
          />
        </div>

        <div className="form-group-unique">
          <label htmlFor="role" className="label-unique">
            Role
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)} // Update the role state on change
            className="input-unique"
          >
            <option value="Admin">Admin</option>
            <option value="HR Manager">HR Manager</option>
            <option value="Employee">Employee</option>
            <option value="supervisor">Supervisor</option>
          </select>
        </div>

        <button
          type="submit"
          className={`submit-button-unique ${
            errorMessage
              ? "submit-button-error"
              : successMessage
              ? "submit-button-success"
              : ""
          }`}
        >
          {errorMessage
            ? errorMessage
            : successMessage
            ? successMessage
            : "Add User"}{" "}
        </button>
      </form>
    </div>
  );
};

export default AddUser;
