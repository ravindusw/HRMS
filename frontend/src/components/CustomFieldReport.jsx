import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { CSVLink } from "react-csv";
import "./ComponentStyles.css";
import axiosInstance from "../utils/AxiosInstance";

const CustomFieldReport = () => {
  const [attribute, setAttribute] = useState("");
  const [attributeData, setAttributeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attributeOptions, setAttributeOptions] = useState([]);

  const fetchAttribute = async () => {
    try {
      const response = await axiosInstance.get("/auth/customAttributes");
      console.log(response.data);
      setAttributeOptions(response.data);
    } catch (error) {
      setError("Failed to fetch attribute");
    }
  };

  const fetchCustomFieldDetails = async () => {
    setLoading(true);
    setError(null);
    console.log(attribute);
    try {
      const response = await axiosInstance.get(
        `/report/custom-fields-report/${attribute}`
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

  // Generate PDF report for custom attributes with multi-page support
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    let yOffset = 20;

    doc.text("Custom Field Report for Last 3 Attributes", 10, 10);

    attributeData.forEach((emp, index) => {
      if (yOffset + 40 > pageHeight) {
        doc.addPage(); // Add a new page if the current page is full
        yOffset = 20; // Reset yOffset for the new page
      }

      doc.text(`${index + 1}.`, 10, yOffset);
      doc.text(`Employee ID: ${emp.employee_id}`, 10, yOffset + 10);
      doc.text(`First Name: ${emp.first_name}`, 10, yOffset + 20);
      doc.text(`Last Name: ${emp.last_name}`, 10, yOffset + 30);
      doc.text(`Attribute Value: ${emp.attribute_value}`, 10, yOffset + 40);

      yOffset += 50; // Increment yOffset for the next entry
    });

    doc.save("custom-field-report.pdf");
  };

  return (
    <div className="subrep-container">
      <h1>Jupiter Apparels HRMS - Custom Field Report</h1>
      <div>
        <label>Select Custom Field:</label>
        <select
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
        >
          <option value="">-- Select Attribute --</option>
          {attributeOptions.map((attribute_i) => (
            <option
              key={attribute_i.attribute_id}
              value={attribute_i.attribute_name}
            >
              {attribute_i.attribute_name}
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
