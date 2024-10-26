import React, { useState } from "react";
import "./LeaveHistoryAdmin.css";
import axios from "axios";

const LeaveHistory = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [leaveData, setLeaveData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  const fetchLeaveData = async (id) => {
    axios.get(`http://localhost:8800/api/employee/getLeaveInfo/${employeeId}`).then((response) => {
      setLeaveData(response.data);
      console.log(response.data);
    }).catch((error) => {
      setError("Failed to fetch leave data");
    });
    // try {
    //   setLoading(true);
    //   setError("");

    //   // Simulate an API call
    //   setTimeout(() => {
    //     setLeaveData(mockLeaveData); // Replace this with actual API call     
    //     setLoading(false);
    //   }, 1000);
    // } catch (err) {
    //   setLoading(false);
    //   setError("Failed to fetch leave data");
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId) {
      fetchLeaveData(employeeId);
    }
  };

  return (
    <div className="leave-application">
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
              <th>Date</th>
              <th>Leave Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((leave, index) => (
              <tr key={index}>
                <td>{leave.start_date}</td>
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
