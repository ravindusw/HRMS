import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login.jsx";
import Help from "./pages/Help.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Notification from "./pages/Notification.jsx";
import Profile from "./pages/Profile.jsx";
import Report from "./pages/Report.jsx";
import EIM from "./pages/Employee_Information_Management.jsx";
import EditemployeeData from "./pages/EditemployeeData.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import LeaveApplication from "./pages/LeaveApplication.jsx";
import LeaveHistory from "./pages/LeaveHistoryAdmin.jsx";
import AddUser from "./pages/AddUser.jsx";
import HrView from "./pages/HrView.jsx";
import NotAuthorized from "./pages/NotAuthorized.jsx";
import HRMSNavBar from "./components/NavBar.jsx";
import EmployeeReport from "./components/EmployeeReport.jsx";

import LeaveBalanceReport from "./components/LeaveBalanceReport.jsx";
import LeaveReport from "./components/LeaveReport.jsx";
import CustomFieldReport from "./components/CustomFieldReport.jsx";

import LoginHelp from "./pages/LoginHelp.jsx";
import OrganizationInfoManagement from "./pages/OrganizationInfoManagement.jsx";
import LeaveRequests from "./pages/LeaveRequests.jsx";
import MyLeaves from "./pages/MyLeaves.jsx";

import Configurations from "./pages/Configurations.jsx";
import CustomAttribute from "./pages/CustomAttribute.jsx";

import NotFound from "./pages/NotFound.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HRMSNavBar />
      <Routes>
        
        <Route path="/" element={<Login />} />
        
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager", "Supervisor", "Employee"]}>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/help" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager", "Supervisor", "Employee"]}>
            <Help />
          </ProtectedRoute>
          } />
        
        <Route path="/notification" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager", "Supervisor", "Employee"]}>
            <Notification />
          </ProtectedRoute>
        } />
        
        <Route path="/profile" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager", "Supervisor", "Employee"]}>
            <Profile />
          </ProtectedRoute>
        } />
        
        <Route path="/report" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
            <Report />
          </ProtectedRoute>
        } />

        <Route path="/notAuthorized" element={<NotAuthorized />} />

        <Route path="/employee-report" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
            <EmployeeReport />
          </ProtectedRoute>  
        } />

        <Route path="/leavebalance-report" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
            <LeaveBalanceReport />
          </ProtectedRoute>
        } />
        
        <Route path="/leave-report" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
            <LeaveReport />
          </ProtectedRoute>
        } />
          
        <Route path="/custom-fields-report" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
            <CustomFieldReport />
          </ProtectedRoute>
        } />

        <Route path="/loginHelp" element={<LoginHelp />} />

        <Route
          path="/organization-information-management"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <OrganizationInfoManagement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customAttributes"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <CustomAttribute />
            </ProtectedRoute>
          }
        />

        <Route
          path="/configurations"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <Configurations />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Employee_Information_Management"
          element={
            <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
              <EIM />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Employee_Information_Management/HrView/:id_to_view"
          element={
            <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
              <HrView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Employee_Information_Management/EditemployeeData/:id_to_edit"
          element={
            <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
              <EditemployeeData />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Employee_Information_Management/AddEmployee"
          element={
            <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
              <AddEmployee />
            </ProtectedRoute>
          }
        />
        
        <Route path="/leaveapplication" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager", "Supervisor", "Employee"]}>
            <LeaveApplication />
          </ProtectedRoute>
        } />

        <Route path="/myleaves" element={
          <ProtectedRoute allowedRoles={["Admin", "HR Manager", "Supervisor", "Employee"]}>
            <MyLeaves />
          </ProtectedRoute>
        } />
        
        <Route path="/leaverequests" element={
          <ProtectedRoute allowedRoles={["Supervisor"]}>
            <LeaveRequests />
          </ProtectedRoute>
        } />

        <Route
          path="/leave-history-admin"
          element={
            <ProtectedRoute allowedRoles={["HR Manager","Admin"]}>
              <LeaveHistory />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/addUser"
          element={
            <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
              <AddUser />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/addEmployee"
          element={
            <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
              <AddEmployee />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
