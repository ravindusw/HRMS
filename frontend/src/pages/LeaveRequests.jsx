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
  
  const fetchLeaveRequests = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axiosInstance.get("/leave/pendingLeaveREQUEST");
      console.log("Response data:", response.data);
      setRequests(response.data);
    } catch (err) {
      console.error("Error fetching leave requests:", err); 
      setError("Failed to fetch leave requests");
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const handleApproval = async (leaveRecordId, status) => {
    if (status == "Approved") {
      const response = await axiosInstance.put(`/leave/approveLeaveREQUEST/${leaveRecordId}`);
      console.log(response.data);
      fetchLeaveRequests();
    }
    if (status == "Rejected") {
      const response = await axiosInstance.put(`/leave/rejectLeaveREQUEST/${leaveRecordId}`);
      console.log(response.data);
      fetchLeaveRequests();
    }
  };



  return (
    <div className="leave-requests-container">
      <h2 className="title">Leave Requests</h2>
      {loading && <p>Loading leave requests...</p>}
      {error && <p className="error-message">{error}</p>}
      <table className="requests-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request,index) => (
            <tr key={index} className={`status-${request.status}`}>
              <td>{request.first_name}</td>
              <td>{request.type}</td>
              <td>{new Date(request.start_date).toLocaleDateString()}</td>
              <td>{new Date(request.end_date).toLocaleDateString()}</td>
              <td>
                {request && (
                  <>
                    <button
                      className="approve-btn"
                      onClick={() => handleApproval(request.leave_record_id, 'Approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="reject-btn"
                      onClick={() => handleApproval(request.leave_record_id, 'Rejected')}
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
