import React, { useState, useEffect } from "react";
import "./MyLeaves.css";
import axiosInstance from "../utils/AxiosInstance";

const MyLeaves = () => {
  const [leaveHistory, setLeaveHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaveHistory = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axiosInstance.get("/leave/get-leave-history");
        setLeaveHistory(response.data);
      } catch (err) {
        setError("Failed to fetch leave history");
        setLeaveHistory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveHistory();
  }, []);

  return (
    <div className="my-leaves">
      <h2>Leave History</h2>
      {loading && <p>Loading leave history...</p>}
      {error && <p className="error-message">{error}</p>}

      {leaveHistory.length > 0 ? (
        <table className="leave-history-table">
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveHistory.map((leave, index) => (
              <tr key={index}>
                <td>{leave.type}</td>
                <td>{new Date(leave.start_date).toLocaleDateString()}</td>
                <td>{new Date(leave.end_date).toLocaleDateString()}</td>
                <td className={`leave-status ${leave.status.toLowerCase()}`}>
                  {leave.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No leave history available.</p>
      )}
    </div>
  );
};

export default MyLeaves;
