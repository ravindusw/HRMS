import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/AxiosInstance";
import "./AddEmployee.css";

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    NIC: "",
    First_Name: "",
    Last_Name: "",
    Email: "",
    DOB: "",
    Gender: "",
    Address: "",
    Marital_Status: "",
    Department: "",
    Supervisor_ID: "",
    Job_Title: "",
    Pay_Grade: "",
    Employment_Type: "",
    Work_Schedule: "",
    Hired_Date: "",
    Termination_Date: "",
    Contact_Number: "",
    Emergency_Contact_Name: "",
    Emergency_Contact_Number: "",
    Emergency_Contact_Relationship: "",
    Dependant_Name: "",
    Dependant_Relationship: "",
    Dependant_DOB: "",
    Dependant_Gender: "",
    Dependent_Contact_Number: "",
  });

  const [supervisors, setSupervisors] = useState([]);
  const [message, setMessage] = useState("Submit");
  const [buttonColor, setButtonColor] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/auth/getSupervisors")
      .then((response) => {
        setSupervisors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching supervisors:", error);
      });
  }, []);

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/auth/addEmployee",
        employeeData
      );
      console.log("Employee added successfully:", response.data);
      setMessage(response.data.message);
      setButtonColor("green");
    } catch (error) {
      console.error("There was an error adding the employee!", error);
      setMessage("Failed to add Employee");
      setButtonColor("red");
    } finally {
      setTimeout(() => {
        setMessage("Submit");
        setButtonColor("");
      }, 2000);
    }
  };

  return (
    <div className="addEmployee-container">
      {" "}
      <form className="employee-form" onSubmit={handleSubmit}>
        <h2 className="employee-form-title">Add New Employee</h2>

        <div className="form-group">
          <label className="form-label">NIC:</label>
          <input
            className="form-input"
            type="text"
            name="NIC"
            value={employeeData.NIC}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">First Name:</label>
          <input
            className="form-input"
            type="text"
            name="First_Name"
            value={employeeData.First_Name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Last Name:</label>
          <input
            className="form-input"
            type="text"
            name="Last_Name"
            value={employeeData.Last_Name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            name="Email"
            value={employeeData.Email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Date of Birth:</label>
          <input
            className="form-input"
            type="date"
            name="DOB"
            value={employeeData.DOB}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Gender:</label>
          <select
            className="form-input"
            name="Gender"
            value={employeeData.Gender}
            onChange={handleChange}
          >
            <option value="" hidden disabled></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Address:</label>
          <input
            className="form-input"
            type="text"
            name="Address"
            value={employeeData.Address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Marital Status:</label>
          <select
            className="form-input"
            name="Marital_Status"
            value={employeeData.Marital_Status}
            onChange={handleChange}
          >
            <option value="" disabled hidden></option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Department:</label>
          <select
            className="form-input"
            name="Department"
            value={employeeData.Department}
            onChange={handleChange}
          >
            <option value="" disabled hidden></option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Production">Production</option>
            <option value="Supply Chain">Supply Chain</option>
            <option value="Merchandising">Merchandising</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Warehouse">Warehouse</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Supervisor ID:</label>
          <select
            className="form-input"
            name="Supervisor_ID"
            value={employeeData.Supervisor_ID}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Supervisor
            </option>
            {supervisors.map((supervisor) => (
              <option key={supervisor.id} value={supervisor.id}>
                {supervisor.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Job Title:</label>
          <select
            className="form-input"
            name="Job_Title"
            value={employeeData.Job_Title}
            onChange={handleChange}
          >
            <option value="" disable hidden></option>
            <option value="Accountant">Accountant</option>
            <option value="CEO">CEO</option>
            <option value="Fashion Designer">Fashion Designer</option>
            <option value="HR Manager">HR Manager</option>
            <option value="IT Manager">IT Manager</option>
            <option value="Marketing Manager">Marketing Manager</option>
            <option value="Packaging Assistant">Packaging Assistant</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Quality Control Inspector">
              Quality Control Inspector
            </option>
            <option value="Retail Assistant">Retail Assistant</option>
            <option value="Sales Manager">Sales Manager</option>
            <option value="Sewing Machine Operator">
              Sewing Machine Operator
            </option>
            <option value="Supply Chain Manager">Supply Chain Manager</option>
            <option value="Warehouse Worker">Warehouse Worker</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Pay Grade:</label>
          <select
            className="form-input"
            name="Pay_Grade"
            value={employeeData.Pay_Grade}
            onChange={handleChange}
          >
            <option value="Level-1" disable hidden></option>
            <option value="Level-1">Level-1</option>
            <option value="Level-2">Level-2</option>
            <option value="Level-3">Level-3</option>
            <option value="Level-4">Level-4</option>
            <option value="Level-5">Level-5</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Employment Type:</label>
          <select
            className="form-input"
            name="Employment_Type"
            value={employeeData.Employment_Type}
            onChange={handleChange}
          >
            <option value="" hidden disable></option>
            <option value="Intern">Intern</option>
            <option value="Contract">Contract</option>
            <option value="Permanent">Permanent</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Work Schedule:</label>
          <select
            className="form-input"
            name="Work_Schedule"
            value={employeeData.Work_Schedule}
            onChange={handleChange}
          >
            <option value="" disabled hidden></option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Hired Date:</label>
          <input
            className="form-input"
            type="date"
            name="Hired_Date"
            value={employeeData.Hired_Date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Termination Date:</label>
          <input
            className="form-input"
            type="date"
            name="Termination_Date"
            value={employeeData.Termination_Date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Contact Number:</label>
          <input
            className="form-input"
            type="text"
            name="Contact_Number"
            value={employeeData.Contact_Number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Emergency Contact Name:</label>
          <input
            className="form-input"
            type="text"
            name="Emergency_Contact_Name"
            value={employeeData.Emergency_Contact_Name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Emergency Contact Number:</label>
          <input
            className="form-input"
            type="text"
            name="Emergency_Contact_Number"
            value={employeeData.Emergency_Contact_Number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Emergency Contact Relationship:</label>
          <input
            className="form-input"
            type="text"
            name="Emergency_Contact_Relationship"
            value={employeeData.Emergency_Contact_Relationship}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Dependant Name:</label>
          <input
            className="form-input"
            type="text"
            name="Dependant_Name"
            value={employeeData.Dependant_Name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Dependant Relationship:</label>
          <input
            className="form-input"
            type="text"
            name="Dependant_Relationship"
            value={employeeData.Dependant_Relationship}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Dependant DOB:</label>
          <input
            className="form-input"
            type="date"
            name="Dependant_DOB"
            value={employeeData.Dependant_DOB}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Dependant Gender:</label>
          <select
            className="form-input"
            name="Dependant_Gender"
            value={employeeData.Dependant_Gender}
            onChange={handleChange}
          >
            <option value="" disabled hidden></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Dependant Contact Number:</label>
          <input
            className="form-input"
            type="text"
            name="Dependent_Contact_Number"
            value={employeeData.Dependent_Contact_Number}
            onChange={handleChange}
          />
        </div>

        <button className={`submit-btn ${buttonColor}`} type="submit">
          {message}
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
