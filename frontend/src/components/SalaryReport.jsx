import React, { useState } from "react";
import axios from "axios";

const SalaryReport = () => {
  const [department, setDepartment] = useState("");
  const [month, setMonth] = useState("");
  const [salaries, setSalaries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const departmentOptions = [
    "IT",
    "HR",
    "Marketing",
    "Finance",
    "Production",
    "Supply Chain",
    "Merchandising",
    "Maintenance",
    "Warehouse",
  ];

  const monthOptions = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  // Fetch salary details for the selected month and department
  const fetchSalaryDetails = async () => {
    if (!department || !month) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:8800/api/report/SalaryReport/${department}/${month}`
      );
      setSalaries(response.data);
    } catch (error) {
      setError("Failed to fetch salary details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Jupiter Apparels HRMS- Salary Report</h1>
      <div>
        <label>Select Department:</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">-- Select Department --</option>
          {departmentOptions.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Month:</label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">-- Select Month --</option>
          {monthOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
      <button onClick={fetchSalaryDetails}>Fetch Salary Details</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {salaries.map((salary) => (
          <div key={salary.id}>
            <p>
              {salary.name}: {salary.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryReport;
