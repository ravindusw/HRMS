import React, { useState, useEffect } from "react";
import "./LeaveApplication.css";
import axiosInstance from "../utils/AxiosInstance";
import { useNavigate } from "react-router-dom";

const LeaveApplication = () => {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState(0);
   

  const navigate = useNavigate(); // Initialize navigate
  
  const calculateDays = (start, end) => {
    const startDay = new Date(start);
    const endDay = new Date(end);
    return Math.ceil((endDay - startDay + 1) / (1000 * 60 * 60 * 24)); // Adding 1 to include the start day
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(calculateDays(startDate, endDate));
    
    try {
      if (!leaveType) {
        alert("Please select a leave type");
        return;
      }
      if (!startDate) {
        alert("Please select a start date");
        return;
      }
      if (!endDate) {
        alert("Please select an end date");
        return;
      }
      if (!reason) {
        alert("Please enter a reason");
        return;
      }
      if (calculateDays(startDate, endDate) < 0) {
        alert("End date should be greater than start date");
        return;
      }
      if (calculateDays(startDate, endDate) > leaveBalance) {
        alert("You don't have enough leave balance");
        return;
      } 
      if (startDate < new Date().toISOString().split("T")[0]) {
        alert("Start date should be greater than or equal to today");
        return;
      }

      const data = {
        leave_type_id: leaveType,
        start_date: startDate,
        end_date: endDate,
        reason: reason,
      };

      console.log(leaveBalance);

      await axiosInstance.post("/leave/apply-leave", data);
        alert("Leave application submitted successfully");
  
        // Reset form fields
        setLeaveType("");
        setStartDate("");
        setEndDate("");
        setReason("");
    } catch (error) {
      console.error("Error applying for leave:", error);
      alert("Error applying for leave. Please try again later.");
    }   
  };

    
  useEffect(() => {
    const fetchLeaveTypes = async () => {
      try {
        const response = await axiosInstance.get("/leave/get-leave-types");
        setLeaveTypes(response.data);
      } catch (error) {
        console.error("Error fetching leave types:", error);
      }
    };

    fetchLeaveTypes();
  }, []);

  useEffect(() => {
    const fetchLeaveBalance = async () => {
      try {
        const response = await axiosInstance.post("/leave/leaveBalance",{leave_type_id: leaveType});
        console.log(response.data);
        setLeaveBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching leave balance:", error);
      }
    };
    fetchLeaveBalance();
  },[leaveType]);

 

  return (
    <div className="leave-application">
      <header className="header">
        <h1>Leave Management | Leave Application</h1>
        <div className="buttons">
          <button className="profile-btn" onClick={() => navigate("/profile")}>
            Profile
          </button>
          <button className="my-leaves-btn" onClick={() => navigate("/myleaves")}>My Leaves</button>
        </div>
      </header>

      

      <form className="leave-form" onSubmit={handleSubmit}>
        <h2>Request for leave</h2>

        <label>Type</label>
        <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
          <option value="">Select leave type</option>
          {leaveTypes &&
            leaveTypes.map((type) => (
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
