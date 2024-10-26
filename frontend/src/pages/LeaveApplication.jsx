import React, { useState , useEffect } from "react";
import "./LeaveApplication.css"; // Assume the styles are stored in this file
import axiosInstance from "../utils/AxiosInstance";

const LeaveApplication = () => {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");

  const [leaveTypes, setLeaveTypes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    // console.log({ leaveType, startDate, endDate, reason });

    const data = {
      leave_type_id: leaveType,
      start_date: startDate,
      end_date: endDate,
      reason: reason
    };

    const submitLeaveApplication = async () => {
      try {
        const response = await axiosInstance.post("/leave/apply-leave", data);
        // console.log("Leave application response:", response.data);
        alert("Leave application submitted successfully");
      } catch (error) {
        console.error("Error submitting leave application:", error);
        alert("Error submitting leave application");
      }
    };

    submitLeaveApplication();

    setLeaveType("");
    setStartDate("");
    setEndDate("");
    setReason("");


  };

  useEffect(() => {
    const fetchLeaveTypes = async () => {
      try {
        const response = await axiosInstance.get("/leave/get-leave-types");
        // console.log("Leave types:", response.data);
        setLeaveTypes(response.data);
      } catch (error) {
        console.error("Error fetching leave types:", error);
      }
    };

    fetchLeaveTypes();
  }, []);

  return (
    <div className="leave-application">
      
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
          {leaveTypes && leaveTypes.map((type) => (
            <option key={type.leave_type_id} value={type.leave_type_id}>
              {type.type}
            </option>
          ))}

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
          Submit
        </button>
      </form>


    </div>
  );
};

export default LeaveApplication;
