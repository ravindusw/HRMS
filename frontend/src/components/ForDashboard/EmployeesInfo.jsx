import "./DashboardComponentStyles.css";
import axiosInstance from "../../utils/AxiosInstance";
import { useState, useEffect } from "react";

import employeesIcon from "../../assets/employees.png";
import absentIcon from "../../assets/absent.png";

export default function EmployeesInfo() {
  const [employeesCount, setEmployeesCount] = useState(null);
  const [absentEmployeesCount, setAbsentEmployeesCount] = useState(null);

  useEffect(() => {
    const fetchEmployeesCount = async () => {
      try {
        const response = await axiosInstance.get(`/dashboard/get_total_employee_count`);
        setEmployeesCount(response.data.total_count);
      } catch (error) {
        console.error("Error fetching employees count:", error);
      }
    };

    fetchEmployeesCount();

    const fetchAbsentEmployeesCount = async () => {
      try {
        const response = await axiosInstance.get(`/dashboard/get-absent-employee-count`);
        setAbsentEmployeesCount(response.data.absent_count);
      } catch (error) {
        console.error("Error fetching absent employees count:", error);
      }
    };

    fetchAbsentEmployeesCount();

  }, []);
  
  
  return (
    <div className="employees-info">
      <div className="employees-count">
        <img src={employeesIcon} alt="Employees" />
        <h3>Total Employees</h3>
        <p>{employeesCount ? employeesCount : 0}</p>
      </div>
      <div className="employees-on-leave">
        <img src={absentIcon} alt="Absent" />
        <h3>Employees on Leave</h3>
        <p>{absentEmployeesCount ? absentEmployeesCount : 0}</p>
      </div>
    </div>
  );
}
