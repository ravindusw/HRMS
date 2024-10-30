import { Link } from "react-router-dom";
import "./DashboardComponentStyles.css";

export default function InfoSummary({profileData}) {

  return (
    <div className="info-summary">
      <h3>Personal Information Summary</h3>
      <p>
        <strong>Name:</strong> {profileData?.first_name} {profileData?.last_name}
      </p>
      <p>
        <strong>Job Title:</strong> {profileData?.job_title}
      </p>
      <p>
        <strong>Department:</strong> {profileData?.department}
      </p>
      <p>
        <strong>Date of Birth:</strong> {profileData?.date_of_birth}
      </p>
      {/* <p>
        <strong>Working Since:</strong> 12/05/2020
      </p> */}
      <button className="btn-update"><Link to="/profile" style={{ all: 'unset' }}>View Details</Link></button>
    </div>
  );
}
