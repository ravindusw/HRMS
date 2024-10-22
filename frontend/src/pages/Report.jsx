import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import axios from "axios";
import "./Report.css";

const Report = () => {
  const [reportType, setReportType] = useState("");
  const [customField1, setCustomField1] = useState("");
  const [customField2, setCustomField2] = useState("");
  const [generatedReports, setGeneratedReports] = useState([]);
  // const [department, setDepartment] = useState("");
  // const [jobTitle, setJobTitle] = useState("");

  const handleReportChange = (e) => {
    setReportType(e.target.value);
    // Clear fields when report type changes
    setCustomField1("");
    setCustomField2("");
    setDepartment("");
    setJobTitle("");
  };

  const generateReport = async () => {
    let newReport = {};

    try {
      switch (reportType) {
        case "Employee Report":
          const employees = await axios.get(
            `"http://localhost:8800/api/report/employees-report`
          );
          newReport = {
            type: reportType,
            department,
            data: employees.data,
          };
          break;

        case "Leave Report":
          const leaves = await axios.get(
            `"http://localhost:8800/api/report/leave report`
          );
          newReport = { type: reportType, department, data: leaves.data };
          break;

        case "Salary report":
          const Salary = await axios.get(
            `"http://localhost:8800/api/report/salary-report`
          );
          newReport = {
            type: reportType,
            jobTitle,
            department,
            data: Salary.data,
          };
          break;

        case "Custom Fields Report":
          const customFields = await axios.get(
            `"http://localhost:8800/api/report/custom-fields-report`
          );
          newReport = {
            type: reportType,
            customField1,
            customField2,
            data: customFields.data,
          };
          break;

        default:
          console.log("No report selected");
          return;
      }

      newReport.date = new Date().toLocaleDateString();
      setGeneratedReports([...generatedReports, newReport]);
    } catch (error) {
      console.error("Error generating report:", error);
    }
  };

  const generatePDF = (report) => {
    const doc = new jsPDF();
    doc.text(`Report Type: ${report.type}`, 10, 10);
    // if (report.department) doc.text(`Department: ${report.department}`, 10, 20);
    // if (report.jobTitle) doc.text(`Job Title: ${report.jobTitle}`, 10, 30);
    doc.text(`Generated on: ${report.date}`, 10, 40);
    doc.save("report.pdf");
  };

  return (
    <div className="container">
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

        {reportType === "Employee Report" && (
          <div>
            <label>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        )}

        {reportType === "Leaves Report" && (
          <div>
            <label>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        )}

        {reportType === "Salary Report" && (
          <>
            <div>
              <label>Job Title:</label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Department:</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
          </>
        )}

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
            {report.department && (
              <p>
                <strong>Department:</strong> {report.department}
              </p>
            )}
            {report.jobTitle && (
              <p>
                <strong>Job Title:</strong> {report.jobTitle}
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
          headers={["Report Type", "Custom Field 1", "Custom Field 2", "Date"]}
          filename="reports.csv"
        >
          Download CSV
        </CSVLink>
      )}
    </div>
  );
};

export default Report;
