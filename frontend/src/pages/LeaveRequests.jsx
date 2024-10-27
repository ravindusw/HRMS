// LeaveRequests.jsx
import React, { useState, useEffect } from "react";
import './LeaveRequests.css';
import axiosInstance from "../utils/AxiosInstance";

const LeaveRequests = () => {
  // Sample data for leave requests
  // const [requests, setRequests] = useState([
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     leaveType: 'Sick Leave',
  //     startDate: '2023-10-10',
  //     endDate: '2023-10-12',
  //     status: 'Pending',
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Smith',
  //     leaveType: 'Annual Leave',
  //     startDate: '2023-10-15',
  //     endDate: '2023-10-20',
  //     status: 'Pending',
  //   },
  // ]);

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axiosInstance.get("/leave/pendingLeaveREQUEST");
        setRequests(response.data);
      } catch (err) {
        setError("Failed to fetch leave requests");
        setRequests([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveRequests();
  }, []);
  const handleApproval = (id, decision) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: decision } : request
    ));
  };

  return (
    <div className="leave-requests-container">
      <h2 className="title">Leave Requests</h2>
      <table className="requests-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className={`status-${request.status.toLowerCase()}`}>
              <td>{request.first_name}</td>
              <td>{request.type}</td>
              <td>{request.start_date}</td>
              <td>{request.end_date}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'Pending' && (
                  <>
                    <button
                      className="approve-btn"
                      onClick={() => handleApproval(request.id, 'Approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleApproval(request.id, 'Rejected')}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequests;
