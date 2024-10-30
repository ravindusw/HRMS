import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import axios from "axios";
import './ComponentStyles.css'
import axiosInstance from "../utils/AxiosInstance";

const EmployeeReport = () => {
  const [department, setDepartment] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [departmentOptions, setDepartmentOptions] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await axiosInstance.get("/auth/Hr/departments");
      setDepartmentOptions(response.data);
    } catch (error) {
      setError("Failed to fetch departments");
    }
  };

  // Fetch employees of the selected department
  const fetchDepartmentEmployees = async () => {
    if (!department) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/report/employee-report/${department}`
      );
      setEmployees(response.data);
    } catch (error) {
      setError("Error fetching employee data.");
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  // Generate PDF report for the department
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Department: ${department} Employee Report`, 10, 10);
    employees.forEach((emp, index) => {
      const yOffset = 20 + index * 90; // Increased vertical spacing
      // doc.text(`${index + 1}.`, 10, yOffset);
      doc.text(`${index + 1}.`, 10, yOffset);
      doc.text(`Employee ID: ${emp.employee_id}`, 10, yOffset + 10);
      doc.text(`First Name: ${emp.first_name}`, 10, yOffset + 20);
      doc.text(`Last Name: ${emp.last_name}`, 10, yOffset + 30);
      doc.text(`Date of Birth: ${emp.date_of_birth}`, 10, yOffset + 40);
      doc.text(`Address: ${emp.address}`, 10, yOffset + 50);
      doc.text(`Position: ${emp.job_title}`, 10, yOffset + 60);
      doc.text(`Email: ${emp.email}`, 10, yOffset + 70);
      doc.text(`Pay Grade: ${emp.pay_grade}`, 10, yOffset + 80);
    });
    doc.save(`${department}-employees-report.pdf`);
  };

  return (
    <div className="subrep-container">
      <h1>Jupiter Apparels HRMS - Departmental Employee Report</h1>
      <div>
        <label>Select Department:</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">-- Select Department --</option>
          {departmentOptions.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
        <button onClick={fetchDepartmentEmployees}>Fetch Employees</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {employees.length > 0 && (
        <>
          <h2>Employees in {department} Department</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First_Name</th>
                <th>Last_Name</th>
                <th>Date_of_Birth</th>
                <th>Address</th>
                <th>Position</th>
                <th>Email</th>
                <th>Pay_Grade</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.employee_id}</td>
                  <td>{emp.first_name}</td>
                  <td>{emp.last_name}</td>
                  <td>{emp.date_of_birth}</td>
                  <td>{emp.address}</td>
                  <td>{emp.job_title}</td>
                  <td>{emp.email}</td>
                  <td>{emp.pay_grade}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={generatePDF}>Download PDF</button>

          <CSVLink
            data={employees}
            headers={[
              { label: "ID", key: "employee_id" },
              { label: "First_Name", key: "first_name" },
              { label: "Last_Name", key: "last_name" },
              { label: "Date_of_Birth", key: "date_of_birth" },
              { label: "Address", key: "address" },
              { label: "Position", key: "job_title" },
              { label: "Email", key: "email" },
              { label: "Pay_Grade", key: "pay_grade" },
            ]}
            filename={`${department}-employees-report.csv`}
          >
            Download CSV
          </CSVLink>
        </>
      )}
    </div>
  );
};

export default EmployeeReport;
