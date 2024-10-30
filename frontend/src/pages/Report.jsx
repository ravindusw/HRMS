import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Report.css";
import workerImage from "../assets/report_background.png";
import axiosInstance from "../utils/AxiosInstance";

const Report = () => {
  const [reportType, setReportType] = useState("");
  const navigate = useNavigate();

  const fetchReportData = async (reportType) => {
    try {
      const response = await axiosInstance.get(`/reports?type=${reportType}`);
      const data = await response.json();
      console.log(data); // Handle the fetched data as needed
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  const handleReportChange = (e) => {
    const selectedReport = e.target.value;
    setReportType(selectedReport);

    // Fetch report data from backend
    fetchReportData(selectedReport);

    // Navigate based on selected report type
    if (selectedReport === "Employee Report") {
      navigate("/employee-report");
    } else if (selectedReport === "Leave Report") {
      navigate("/leave-report");
    } else if (selectedReport === "Leave Balance Report") {
      navigate("/leavebalance-report");
    } else if (selectedReport === "Custom Fields Report") {
      navigate("/custom-fields-report");
    }
  };

  return (
    <div className="report-page">
      <div className="report-container">
        <div className="reportcontainer-2">
          <img src={workerImage} alt="Worker image" />
        </div>

        <div className="reportcontainer-1">
          <h1>Jupiter Apparels Reporting Module</h1>
          <h2> Generate Report </h2>
          <form>
            <div>
              <label>Select Report Type:</label>
              <select value={reportType} onChange={handleReportChange}>
                <option value="" disabled>
                  -- Select Report --
                </option>
                <option value="Employee Report">Employee Report</option>
                <option value="Leave Report">Leave Report</option>
                <option value="Leave Balance Report">
                  Leave Balance Report
                </option>
                <option value="Custom Fields Report">
                  Reports Based on Custom Fields
                </option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;
