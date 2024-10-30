import "./Dashboard.css";

import InfoSummary from "../components/ForDashboard/InfoSummary";
import CalendarSection from "../components/ForDashboard/CalendarSection";
import RemainingLeaves from "../components/ForDashboard/RemainingLeaves";
import EmployeesInfo from "../components/ForDashboard/EmployeesInfo";
import UserRoleDistribution from "../components/ForDashboard/UserRoleDistribution";
import QuickActions from "../components/ForDashboard/QuickActions";

import { useState, useEffect } from "react";
import axiosInstance from "../utils/AxiosInstance";
import Cookies from "js-cookie";

export default function Dashboard() {
  const role = Cookies.get("role");

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axiosInstance.get(`/profile`);
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);


  return (
    <div className="dashboard-container">
      <div className="dashboard-hero">
        <h2>
          Good {new Date().getHours() < 12 ? "Morning" : "Evening"} {profileData?.first_name},
        </h2>
        <h1>Welcome to Jupiter HRMS &#128075;</h1>
      </div>

      <div className="dashboard-grid">
        <InfoSummary profileData={profileData} />
        <RemainingLeaves role={role} />
        <CalendarSection profile={profileData} />
        {role == "HR Manager" || role == "Admin" ? <EmployeesInfo /> : null}
        {role == "HR Manager" || role == "Admin" ? <UserRoleDistribution /> : null}
        {role == "HR Manager" || role == "Admin" ? <QuickActions /> : null}
      </div>
    </div>
  );
}

