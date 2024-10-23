import "./UserRoleDistribution.css";
import adminIcon from "../../assets/admin-icon.png";
import hrmIcon from "../../assets/hr-manager.png";
import supervisorIcon from "../../assets/supervisor.png";
import employeeIcon from "../../assets/employee-icon.png"; 

export default function UserRoleDistribution() {
  return (
    <div className="user-role-distribution">
      <h3>User Role Distribution</h3>
      <div className="role-item">
        <img src={adminIcon} alt="admin"/>
        <p>Admin Users: 01</p>
      </div>
      <div className="role-item">
        <img src={hrmIcon} alt="hr manager"/>
        <p>HR Managers: 05</p>
      </div>
      <div className="role-item">
        <img src={supervisorIcon} alt="supervisor"/>
        <p>Supervisors: 25</p>
      </div>
      <div className="role-item">
        <img src={employeeIcon} alt="employee"/>
        <p>Regular Employees: 450</p>
      </div>
    </div>
  );
}
