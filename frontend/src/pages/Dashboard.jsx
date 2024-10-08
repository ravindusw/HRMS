import "./Dashboard.css";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <h2>Good Morning Alan!</h2>

      <div className="info-summary">
        <h3>Personal Information Summary</h3>
        <p>
          <strong>Name:</strong> Alan Walker
        </p>
        <p>
          <strong>Job Title:</strong> Admin
        </p>
        <p>
          <strong>Department:</strong> IT
        </p>
        <p>
          <strong>Date of Birth:</strong> 05/05/1998
        </p>
        <p>
          <strong>Working Since:</strong> 12/05/2020
        </p>
        <button className="btn-update">View Details</button>
      </div>

      <div className="calendar">
        <Calendar />
        <h3>Upcoming Meetings</h3>
        <p>03/02/2024 - Meeting with Managers</p>
        <p>05/10/2024 - Meeting</p>
        <p>24/10/2024 - On Leave</p>
      </div>

      <div className="remaining-leaves">
        <h3>Remaining Leaves</h3>
        <div className="leave-types">
          <div className="leave-card">
            Annual <br />
            <span>20</span>
          </div>
          <div className="leave-card">
            Casual <br />
            <span>12</span>
          </div>
          <div className="leave-card">
            Maternity <br />
            <span>10</span>
          </div>
          <div className="leave-card">
            No-pay <br />
            <span>35</span>
          </div>
        </div>
        <button className="btn-apply">Apply For Leave</button>
      </div>

      <div className="employees-info">
        <div className="employees-count">
          <h3>Total Employees</h3>
          <p>450</p>
        </div>
        <div className="employees-on-leave">
          <h3>Employees on Leave</h3>
          <p>50</p>
        </div>
      </div>

      <div className="user-role-distribution">
        <h3>User Role Distribution</h3>
        <p>Admin Users: 01</p>
        <p>HR Managers: 05</p>
        <p>Supervisors: 25</p>
        <p>Regular Employees: 450</p>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <p>Register New HR Manager</p>
        <p>Register New Employee</p>
        <p>Approve/Reject Leave Requests</p>
        <p>Update Personal Information</p>
      </div>
    </div>
  );
}
