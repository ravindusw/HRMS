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
  // console.log("Role:", role);

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
        <InfoSummary profileData={profileData}/>
        <RemainingLeaves role={role}/>
        <CalendarSection profile={profileData}/>
        {role == "HR Manager" || role == "Admin" ? <EmployeesInfo /> : null}
        {role == "HR Manager" || role == "Admin" ? <UserRoleDistribution /> : null}
        {role == "HR Manager" || role == "Admin" ? <QuickActions /> : null}
      </div>
    </div>
  );
}

// import React from "react";
// import { Row, Col, Card, ProgressBar, ListGroup } from "react-bootstrap";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// const data = [
//   { name: "IT", value: 30 },
//   { name: "HR", value: 25 },
//   { name: "Sales", value: 20 },
//   { name: "Finance", value: 15 },
//   { name: "Admin", value: 10 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28FD0"];

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <Row>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Employee Overview</Card.Title>
//               <Card.Text>Total Employees: 100</Card.Text>
//               <Card.Text>New Hires: 10</Card.Text>
//               <ProgressBar now={60} label="Active Leaves: 15" />
//             </Card.Body>
//           </Card>

//           <Card>
//             <Card.Body>
//               <Card.Title>Leave Balance Summary</Card.Title>
//               <ListGroup>
//                 <ListGroup.Item>Annual Leave: 20 Days Remaining</ListGroup.Item>
//                 <ListGroup.Item>Sick Leave: 5 Days Remaining</ListGroup.Item>
//               </ListGroup>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={8}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Department Statistics</Card.Title>
//               <PieChart width={400} height={400}>
//                 <Pie
//                   data={data}
//                   cx={200}
//                   cy={200}
//                   innerRadius={60}
//                   outerRadius={120}
//                   fill="#8884d8"
//                   paddingAngle={5}
//                   dataKey="value"
//                 >
//                   {data.map((entry, index) => (
//                     <Cell
//                       key={`cell-${index}`}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </Card.Body>
//           </Card>

//           <Card>
//             <Card.Body>
//               <Card.Title>Recent Activity Feed</Card.Title>
//               <ListGroup>
//                 <ListGroup.Item>
//                   Jane Smith submitted a leave request
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   John Doe was added to Sales Department
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   New hire: Emily Parker (Software Engineer)
//                 </ListGroup.Item>
//               </ListGroup>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default Dashboard;
