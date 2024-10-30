import "./DashboardComponentStyles.css";
import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="quick-actions">
      <h3>Quick Actions</h3>
      <p><Link to="/addUser" style={{ all: "unset" }}>Register New User</Link></p>
      <p><Link to="/addEmployee" style={{ all: "unset" }}>Register New Employee</Link></p>
      <p><Link to="/employee_information_management" style={{ all: "unset" }}>Update Employee Information</Link></p>
      {/* <p><Link to="/addUser" style={{all: "unset"}}>Update Employee Information</Link></p> */}
    </div>
  );
}
