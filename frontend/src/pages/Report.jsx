import "./Report.css";
/*.............................................*/
import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import image from "../assets/image.png";

const Report = () => {
  const [reportType, setReportType] = useState("");
  const [customField1, setCustomField1] = useState("");
  const [customField2, setCustomField2] = useState("");

  const [generatedReports, setGeneratedReports] = useState([]);

  const handleReportChange = (e) => {
    setReportType(e.target.value);
  };

  const generateReport = () => {
    const newReport = {
      type: reportType,
      customField1,
      customField2,
      date: new Date().toLocaleDateString(),
    };
    setGeneratedReports([...generatedReports, newReport]);
  };

  const generatePDF = (report) => {
    const doc = new jsPDF();
    doc.text(`Report Type: ${report.type}`, 10, 10);
    doc.text(`Custom Field 1: ${report.customField1}`, 10, 20);
    doc.text(`Custom Field 2: ${report.customField2}`, 10, 30);
    doc.text(`Generated on: ${report.date}`, 10, 40);
    doc.save("report.pdf");
  };

  return (
    <div
      className="report-container"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="left-image"
        style={{
          width: "100%",

          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src={image} alt="Jupiter Apparels" />
      </div>

      <div
        className="form-box"
        style={{
          width: "80%",
          height: "80%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>Jupiter Apparels HRMS - Reporting Module</h1>
        <h2>Generate Report</h2>
        <form>
          <div>
            <label>Select Report Type:</label>
            <select value={reportType} onChange={handleReportChange}>
              <option value="">-- Select Report --</option>
              <option value="Employee by Department">
                Employee by Department
              </option>
              <option value="Total Leaves by Department">
                Total Leaves in Given Period by Department
              </option>
              <option value="Employee Grouped by Job Title/Department/Pay Grade">
                Employee Reports Grouped by Job Title, Department, Pay Grade
              </option>
              <option value="Custom Fields Report">
                Reports Based on Custom Fields
              </option>
            </select>
          </div>

          {reportType === "Custom Fields Report" && (
            <>
              <div>
                <label>Custom Field 1:</label>
                <input
                  type="text"
                  value={customField1}
                  onChange={(e) => setCustomField1(e.target.value)}
                />
              </div>
              <div>
                <label>Custom Field 2:</label>
                <input
                  type="text"
                  value={customField2}
                  onChange={(e) => setCustomField2(e.target.value)}
                />
              </div>
            </>
          )}

          <button type="button" onClick={generateReport}>
            Generate Report
          </button>
        </form>

        <h2>Generated Reports</h2>
        {generatedReports.length === 0 && <p>No reports generated yet.</p>}
        <ul>
          {generatedReports.map((report, index) => (
            <li key={index}>
              <p>
                <strong>Report Type:</strong> {report.type}
              </p>
              {report.customField1 && (
                <p>
                  <strong>Custom Field 1:</strong> {report.customField1}
                </p>
              )}
              {report.customField2 && (
                <p>
                  <strong>Custom Field 2:</strong> {report.customField2}
                </p>
              )}
              <p>
                <strong>Date:</strong> {report.date}
              </p>
              <button onClick={() => generatePDF(report)}>Download PDF</button>
            </li>
          ))}
        </ul>

        {generatedReports.length > 0 && (
          <CSVLink
            className="csv-button"
            data={generatedReports}
            headers={[
              "Report Type",
              "Custom Field 1",
              "Custom Field 2",
              "Date",
            ]}
            filename="reports.csv"
          >
            Download CSV
          </CSVLink>
        )}
      </div>
    </div>
  );
};

export default Report;
