import "./EmployeesInfo.css";

export default function EmployeesInfo() {
  return (
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
  );
}
