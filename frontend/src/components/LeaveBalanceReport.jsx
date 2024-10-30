import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import "./ComponentStyles.css";
import axiosInstance from "../utils/AxiosInstance";

const LeaveBalanceReport = () => {
  const [department, setDepartment] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveBalances, setLeaveBalances] = useState([]);
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

  const leaveTypeOptions = ["Annual", "Casual", "Maternity", "No-pay"];

  // Fetch leave balance details for the selected leave type and department
  const fetchLeaveBalanceDetails = async () => {
    if (!department || !leaveType) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/report/leavebalance-report/${department}/${leaveType}`
      );
      setLeaveBalances(response.data);
    } catch (error) {
      setError("Failed to fetch leave balance details");
      console.error(error);
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

    doc.text(
      `Department: ${department} Leave Balance Report for Leave Type: ${leaveType}`,
      10,
      10
    );

    leaveBalances.forEach((emp, index) => {
      if (yOffset + 40 > pageHeight) {
        doc.addPage(); // Add a new page if the current page is full
        yOffset = 20; // Reset yOffset for the new page
      }

      doc.text(`${index + 1}.`, 10, yOffset);
      doc.text(`Name: ${emp.name}`, 10, yOffset + 10);
      doc.text(`Employee ID: ${emp.employee_id}`, 10, yOffset + 20);
      doc.text(`Leave Balance: ${emp.leaveBalance} days`, 10, yOffset + 30);

      yOffset += 40; // Increment yOffset for the next entry
    });

    doc.save(`${department}-leave-balance-report-${leaveType}.pdf`);
  };

  return (
    <div className="subrep-container">
      <h1>Jupiter Apparels HRMS - Leave Balance Report</h1>
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
      <div>
        <label>Select Leave Type:</label>
        <select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        >
          <option value="">-- Select Leave Type --</option>
          {leaveTypeOptions.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button onClick={fetchLeaveBalanceDetails}>Fetch Leave Balances</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {leaveBalances.length > 0 && (
        <>
          <h2>
            Leave Balances in {department} Department for Leave Type:{" "}
            {leaveType}
          </h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First_Name</th>
                <th>Leave Balance</th>
              </tr>
            </thead>
            <tbody>
              {leaveBalances.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.employee_id}</td>
                  <td>{emp.name} </td>
                  <td>{emp.leaveBalance} days</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={generatePDF}>Download PDF</button>

          <CSVLink
            data={leaveBalances}
            headers={[
              { label: "Name", key: "name" },
              { label: "Leave Balance", key: "leaveBalance" },
            ]}
            filename={`${department}-leave-balance-report-${leaveType}.csv`}
          >
            Download CSV
          </CSVLink>
        </>
      )}
    </div>
  );
};

export default LeaveBalanceReport;
