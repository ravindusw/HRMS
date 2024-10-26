import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import axios from "axios";
import "./ReportSubpage.css";

const CustomFieldReport = () => {
  const [attributeData, setAttributeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCustomFieldDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8800/api/report/custom-fields-report`
      );
      setAttributeData(response.data);
    } catch (error) {
      setError("Failed to fetch custom attribute details");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Generate PDF report for custom attributes
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Custom Field Report for Last 3 Attributes", 10, 10);
    attributeData.forEach((emp, index) => {
      doc.text(
        `${index + 1}. ${emp.name} - ${emp.attribute1}, ${emp.attribute2}, ${
          emp.attribute3
        }`,
        10,
        20 + index * 10
      );
    });
    doc.save("custom-field-report.pdf");
  };

  return (
    <div className="subrep-container">
      <h1>Jupiter Apparels HRMS - Custom Field Report</h1>
      <div>
        <h2>Custom Field Report</h2>
        <button onClick={fetchCustomFieldDetails}>Fetch Custom Field</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {attributeData.length > 0 && (
        <>
          <h2>Custom Field Report </h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Attribute 1</th>
                <th>Attribute 2</th>
                <th>Attribute 3</th>
              </tr>
            </thead>
            <tbody>
              {attributeData.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.employee_id}</td>
                  <td>{emp.first_name}</td>
                  <td>{emp.attribute1_value}</td>
                  <td>{emp.attribute2_value}</td>
                  <td>{emp.attribute3_value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={generatePDF}>Download PDF</button>

          <CSVLink
            data={attributeData}
            headers={[
              { label: "ID", key: "employee_id" },
              { label: "Name", key: "first_name" },
              { label: "Attribute 1", key: "attribute1" },
              { label: "Attribute 2", key: "attribute2" },
              { label: "Attribute 3", key: "attribute3" },
            ]}
            filename="custom-field-report.csv"
          >
            Download CSV
          </CSVLink>
        </>
      )}
    </div>
  );
};

export default CustomFieldReport;
