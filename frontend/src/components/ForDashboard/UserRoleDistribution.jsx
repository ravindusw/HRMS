import "./DashboardComponentStyles.css";
import adminIcon from "../../assets/admin-icon.png";
import hrmIcon from "../../assets/hr-manager.png";
import supervisorIcon from "../../assets/supervisor.png";
import employeeIcon from "../../assets/employee-icon.png"; 
import axiosInstance from "../../utils/AxiosInstance";
import { useState, useEffect } from "react";

export default function UserRoleDistribution() {
  const [userRoleDistribution, setUserRoleDistribution] = useState({"Admin": null, "HR Manager": null, "Supervisor": null, "Employee": null, "Developer": null});

  useEffect(() => {
    const fetchUserRoleDistribution = async () => {
      try {
        const response = await axiosInstance.get(`/dashboard/get-role-count`);
        // console.log("User role distribution:", response.data);
        
        response.data.forEach((role) => {
          // console.log(role.role_name, role.role_count);
          setUserRoleDistribution((prev) => {
            return {
              ...prev,
              [role.role_name]: role.role_count,
            };
          });
        });
      } catch (error) {
        console.error("Error fetching user role distribution:", error);
      }
    };

    fetchUserRoleDistribution();
  }, []);
  
  
  return (
    <div className="user-role-distribution">
      <h3>User Role Distribution</h3>
      <div className="role-item">
        <img src={adminIcon} alt="admin"/>
        <p>Admin Users: {userRoleDistribution.Admin}</p>
      </div>
      <div className="role-item">
        <img src={hrmIcon} alt="hr manager"/>
        <p>HR Managers: {userRoleDistribution["HR Manager"]}</p>
      </div>
      <div className="role-item">
        <img src={supervisorIcon} alt="supervisor"/>
        <p>Supervisors: {userRoleDistribution.Supervisor}</p>
      </div>
      <div className="role-item">
        <img src={employeeIcon} alt="employee"/>
        <p>Regular Employees: {userRoleDistribution.Employee}</p>
      </div>
    </div>
  );
}
