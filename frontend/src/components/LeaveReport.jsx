import React, { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";

const LeaveReport = () => {
  const [department, setDepartment] = useState("");
  const [leaves, setLeaves] = useState([]);
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

  // Fetch leave details for the selected department
  const fetchLeaveDetails = async () => {
    if (!department) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8800/api/report/leave-report/${department}`
      );
      setLeaves(response.data);
    } catch (error) {
      setError("Failed to fetch leave details");
    } finally {
      setLoading(false);
    }
  };
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Department: ${department} Leave Report`, 10, 10);
    employees.forEach((leave, index) => {
      doc.text(
        `${index + 1}. ${leave.employee_name} - ${leave.job_title}`,
        10,
        20 + index * 10
      );
    });
    doc.save(`${department}-leave-report.pdf`);
  };

  return (
    <div className="subrep-container">
      <h1>Jupiter Apparels HRMS - Departmental Leave Report</h1>
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
      </div>
      <button onClick={fetchLeaveDetails}>Fetch Leave Details</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {leaves.length > 0 && (
          <>
            <h2>Leave Details for {department} Department</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Leave start date</th>
                  <th>Requested Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leaves.map((leave, index) => (
                  <tr key={index}>
                    <td>{leave.employee_name}</td>
                    <td>{leave.job_title}</td>
                    <td>{leave.leave_start_date}</td>
                    <td>{leave.leave_type}</td>
                    <td>{leave.leave_status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={generatePDF}>Download PDF</button>

            <CSVLink
              data={leaves}
              headers={[
                { label: "Name", key: "employee_name" },
                { label: "Position", key: "job_title" },
                { label: "Leave start date", key: "leave_start_date" },
                { label: "Requested Type", key: "leave_type" },
                { label: "Status", key: "leave_status" },
              ]}
              filename={`${department}-employees-report.csv`}
            >
              Download CSV
            </CSVLink>
          </>
        )}
      </div>
    </div>
  );
};

export default LeaveReport;
