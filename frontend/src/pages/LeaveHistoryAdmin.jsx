import React, { useState } from "react";
import "./LeaveHistoryAdmin.css";
import axiosInstance from "../utils/AxiosInstance";

const LeaveHistory = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [leaveData, setLeaveData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sample mock data
  const mockLeaveData = [
    { date: "2024-10-01", type: "Sick Leave", status: "Approved" },
    { date: "2024-09-15", type: "Casual Leave", status: "Approved" },
    { date: "2024-08-20", type: "Annual Leave", status: "Rejected" },
  ];

  const fetchLeaveData = async (id) => {
    try {
      setLoading(true);
      setError("");

      // Simulate an API call
      const response = await axiosInstance.get(`/leave/getLeaveInfo/${id}`);
      console.log(response.data);
      setLeaveData(response.data);

      setLoading(false);
      
    } catch (err) {
      setLoading(false);
      setLeaveData([]);
      setError("Failed to fetch leave data");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId) {
      fetchLeaveData(employeeId);
    }
  };

  return (
    <div className="leave-history">
      <h2>Employee Leave History</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />
        <button type="submit">Get Leave History</button>
      </form>

      {loading && <p>Loading leave data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {leaveData.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Leave Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave, index) => (
              <tr key={index}>
                <td>{new Date(leave.start_date).toLocaleDateString()}</td>
                <td>{new Date(leave.end_date).toLocaleDateString()}</td>
                <td>{leave.type}</td>
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaveHistory;
