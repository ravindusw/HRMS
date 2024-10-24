import React, { useState } from "react";
import "./addUser.css"; // Ensure path is correct
import axiosInstance from "../utils/AxiosInstance";

const AddUser = () => {
  const [employee_Id, setEmployeeId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Employee");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = axiosInstance.post("/auth/addUser", {
        employee_Id,
        userName,
        password,
        email,
        role,
      });

      setSuccessMessage(response.data);
      setEmployeeId("");
      setUserName("");
      setPassword("");
      setEmail("");
      setRole("Admin");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      setErrorMessage(
        err.response && err.response.data
          ? err.response.data
          : "Failed to add user!"
      );

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <div className="add-user-wrapper">
      <h1 className="add-user-title">Add User</h1>
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
            onChange={(e) => setRole(e.target.value)}
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
