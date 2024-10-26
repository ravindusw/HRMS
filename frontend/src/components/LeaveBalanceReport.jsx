import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import axios from "axios";
import "./ReportSubpage.css";

const LeaveBalanceReport = () => {
  const [department, setDepartment] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [leaveBalances, setLeaveBalances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Options for department and leave type selection
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

  const leaveTypeOptions = ["Annual", "Casual", "Maternity", "No-pay"];

  // Fetch leave balance details for the selected leave type and department
  const fetchLeaveBalanceDetails = async () => {
    if (!department || !leaveType) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8800/api/report/leavebalance-report/${department}/${leaveType}`
      );
      setLeaveBalances(response.data);
    } catch (error) {
      setError("Failed to fetch leave balance details");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Generate PDF report for the leave balances
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(
      `Department: ${department} Leave Balance Report for Leave Type: ${leaveType}`,
      10,
      10
    );
    leaveBalances.forEach((emp, index) => {
      doc.text(
        `${index + 1}. ${emp.name}-${emp.employee_id} - ${emp.leaveBalance} days`,
        10,
        20 + index * 10
      );
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
            <option key={dept} value={dept}>
              {dept}
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
