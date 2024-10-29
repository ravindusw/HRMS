import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import "./ReportSubpage.css";
import axiosInstance from "../utils/AxiosInstance";

const CustomFieldReport = () => {
  const [attribute, setAttribute] = useState("");
  const [attributeData, setAttributeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attributeOptions, setAttributeOptions] = useState([]);

  const fetchAttribute = async () => {
    try {
      const response = await axiosInstance.get("/getCustomAttributes");
      setAttributeOptions(response.data);
    } catch (error) {
      setError("Failed to fetch attribute");
    }
  };

  const fetchCustomFieldDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/report/custom-fields-report/${attribute_name}`
      );
      setAttributeData(response.data);
    } catch (error) {
      setError("Failed to fetch custom attribute details");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttribute();
  }, []);

  // Generate PDF report for custom attributes
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Custom Field Report for Last 3 Attributes", 10, 10);
    attributeData.forEach((emp, index) => {
      doc.text(`${index + 1}.`, 10, 20 + index * 60);
      doc.text(`ID: ${em.employee_id}`, 10, 30 + index * 60);
      doc.text(`First_Name: ${emp.first_name}`, 10, 40 + index * 60);
      doc.text(`Last_Name: ${emp.last_name}`, 10, 50 + index * 60);
      doc.text(`Attribute_Value: ${emp.attribute_value}`, 10, 60 + index * 60);

      if (index > 0 && index % 3 === 0) {
        doc.addPage();
      }
    });
    doc.save("custom-field-report.pdf");
  };

  return (
    <div className="subrep-container">
      <h1>Jupiter Apparels HRMS - Custom Field Report</h1>
      <div>
        <label>Select Custom Field:</label>
        <select>
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
          <option value="">-- Select Attribute --</option>
          {attributeOptions.map((attribute) => (
            <option key={attribute.id} value={attribute.id}>
              {attribute.name}
            </option>
          ))}
        </select>

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
                <th>Employee_ID</th>
                <th>First_Name</th>
                <th>Last_Name</th>
                <th>Attribute_Value</th>
              </tr>
            </thead>
            <tbody>
              {attributeData.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.employee_id}</td>
                  <td>{emp.first_name}</td>
                  <td>{emp.last_name}</td>
                  <td>{emp.attribute_value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={generatePDF}>Download PDF</button>

          <CSVLink
            data={attributeData}
            headers={[
              { label: "Employee_ID", key: "employee_id" },
              { label: "First_Name", key: "first_name" },
              { label: "Last_Name", key: "last_name" },
              { label: "Attribute_Value", key: "attribute_value" },
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
