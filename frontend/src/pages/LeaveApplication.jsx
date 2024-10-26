import React, { useState } from "react";
import "./LeaveApplication.css"; // Assume the styles are stored in this file
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const LeaveApplication = () => {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const { id } = useAuth();
  console.log(id);  
  
  const Leaveapp= async()=>{
    axios.post("http://localhost:8800/api/leave/applyleave",{
      employee_id:id,
      leave_type:leaveType,
      start_date:startDate,
      end_date:endDate,
      reason:reason
    }).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    });

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic
    Leaveapp();
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
          <option value="Annual">Annual Leave</option>
          <option value="Casual">Cassual Leave</option>
          <option value="Maternity">Maternity Leave</option>
          <option value="No-pay">No-pay Leave</option>
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
