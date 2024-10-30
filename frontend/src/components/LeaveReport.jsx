import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import './ComponentStyles.css'
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
    doc.text(`Department: ${department} Leave Report`, 10, 10);
    leaves.forEach((leave, index) => {
      doc.text(`${index + 1}.`, 10, 20 + index * 70);
      doc.text(`Name: ${leave.employee_name}`, 10, 30 + index * 70);
      doc.text(`Employee Position: ${leave.job_title}`, 10, 40 + index * 70);
      doc.text(`Leave Start: ${leave.leave_start_date}`, 10, 50 + index * 70);
      doc.text(`Leave Type: ${leave.leave_type}`, 10, 60 + index * 70);
      doc.text(`Leave Status: ${leave.leave_status}`, 10, 70 + index * 70);
      if (index > 0 && index % 3 === 0) {
        doc.addPage();
      }
      // doc.text("\n", 10, 30 + index * 10);
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
      <center><button onClick={fetchLeaveDetails}>Fetch Leave Details</button></center>

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
