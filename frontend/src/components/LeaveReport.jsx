import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import "./ComponentStyles.css";
import axiosInstance from "../utils/AxiosInstance";

const LeaveReport = () => {
  const [department, setDepartment] = useState("");
  const [leaves, setLeaves] = useState([]);
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

  // Fetch leave details for the selected department
  const fetchLeaveDetails = async () => {
    if (!department) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/report/leave-report/${department}`
      );
      setLeaves(response.data);
    } catch (error) {
      setError("Failed to fetch leave details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    let yOffset = 20;

    doc.text(`Department: ${department} Leave Report`, 10, 10);

    leaves.forEach((leave, index) => {
      if (yOffset + 40 > pageHeight) {
        doc.addPage(); // Add a new page if the current page is full
        yOffset = 20; // Reset yOffset for the new page
      }

      doc.text(`${index + 1}.`, 10, yOffset);
      doc.text(`Name: ${leave.employee_name}`, 10, yOffset + 10);
      doc.text(`Employee Position: ${leave.job_title}`, 10, yOffset + 20);
      doc.text(`Leave Start: ${leave.leave_start_date}`, 10, yOffset + 30);
      doc.text(`Leave Type: ${leave.leave_type}`, 10, yOffset + 40);
      doc.text(`Leave Status: ${leave.leave_status}`, 10, yOffset + 50);

      yOffset += 60; // Increment yOffset for the next entry
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
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>
      <center>
        <button onClick={fetchLeaveDetails}>Fetch Leave Details</button>
      </center>

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
