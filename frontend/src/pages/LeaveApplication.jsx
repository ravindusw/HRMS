import React, { useState } from "react";
import "./LeaveApplication.css"; // Assume the styles are stored in this file

const LeaveApplication = () => {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ leaveType, startDate, endDate, reason });
  };

  return (
    <div className="leave-management">
      <header className="header">
        <h1>Leave Management | Leave Application</h1>
        <div className="buttons">
          <button className="profile-btn">Profile</button>
          <button className="my-leaves-btn">My Leaves</button>
        </div>
      </header>
      <form className="leave-form" onSubmit={handleSubmit}>
        <h2>Request for leave</h2>
        <label>Type</label>
        <select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        >
          <option value="">Select leave type</option>
          <option value="sick">Annual Leave</option>
          <option value="casual">Cassual Leave</option>
          <option value="annual">Maternity Leave</option>
          <option value="annual">No-pay Leave</option>
        </select>

        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label>Reason</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter your reason"
        ></textarea>

        <button type="submit" className="submit-btn">
          Done
        </button>
      </form>
    </div>
  );
};

export default LeaveApplication;
