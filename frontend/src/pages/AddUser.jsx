import React, { useState } from "react";
import "./addUser.css"; // Make sure the path is correct
import axios from "axios";

const AddUser = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the submission logic here, e.g., API call to add the user
    setErrorMessage("");
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/addUser",
        {
          employeeId,
          userName,
          password,
          email,
        }
      );
    } catch (err) {
      setErrorMessage(
        err.response && err.response.data
          ? err.response.data
          : "Failed to add user!"
      );
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
            id="employeeId"
            value={employeeId}
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

        <button type="submit" className="submit-button-unique">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
