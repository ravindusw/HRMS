import React, { useState } from "react";
// import { jsPDF } from "jspdf";
// import { CSVLink } from "react-csv";
// import axios from "axios";
import "./Report.css";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(src/assets/report.jpg)`, // Example for images in the public folder
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const [reportType, setReportType] = useState("");
  //const [generatedReports, setGeneratedReports] = useState([]);
  const navigate = useNavigate();

  const handleReportChange = (e) => {
    const selectedReport = e.target.value;
    setReportType(selectedReport);

    // Navigate based on selected report type
    if (selectedReport === "Employee Report") {
      navigate("/employee-report");
    } else if (selectedReport === "Leave Report") {
      navigate("/leave-report");
    } else if (selectedReport === "Salary Report") {
      navigate("/salary-report");
    } else if (selectedReport === "Custom Fields Report") {
      navigate("/custom-fields-report");
    }
  };

  return (
    //<div style={backgroundImageStyle}>
    <div className="reportcontainer" style={backgroundImageStyle}>
      <h1>Jupiter Apparels HRMS - Reporting Module</h1>
      <h2>Generate Report</h2>
      <form>
        <div>
          <label>Select Report Type:</label>
          <select value={reportType} onChange={handleReportChange}>
            <option value="">-- Select Report --</option>
            <option value="Employee Report">Employee Report</option>
            <option value="Leave Report">Leave Report</option>
            <option value="Salary Report">Salary Report</option>
            <option value="Custom Fields Report">
              Reports Based on Custom Fields
            </option>
          </select>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default Report;
