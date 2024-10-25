import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import axios from "axios";

const EmployeeReport = () => {
  const [department, setDepartment] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const departmentOptions = [
    "IT",
    "HR",
    "Marketing",
    "Finance",
    "Production",
    "Supply Chain",
    "Merchandising",
    "Maintenance",
    "Warehouse",
  ];

  // Fetch employees of the selected department
  const fetchDepartmentEmployees = async () => {
    if (!department) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8800/api/report/employee-report/${department}`
      );
      setEmployees(response.data);
    } catch (error) {
      setError("Error fetching employee data.");
      console.error(error);
    }
    setLoading(false);
  };

  // Generate PDF report for the department
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Department: ${department} Employee Report`, 10, 10);
    employees.forEach((emp, index) => {
      doc.text(
        `${index + 1}. ${emp.name} - ${emp.position}`,
        10,
        20 + index * 10
      );
    });
    doc.save(`${department}-employees-report.pdf`);
  };

  return (
    <div className="container">
      <h1>Jupiter Apparels HRMS - Departmental Employee Report</h1>
      <div>
        <label>Select Department:</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">-- Select Department --</option>
          {departmentOptions.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
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
              { label: "Name", key: "name" },
              { label: "Position", key: "position" },
              { label: "Email", key: "email" },
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
