// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Login from "./pages/Login.jsx";
// import Help from "./pages/Help.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Notification from "./pages/Notification.jsx";
// import Profile from "./pages/Profile.jsx";
// import Report from "./pages/Report.jsx";
// import EIM from "./pages/Employee_Information_Management.jsx";
// import EditemployeeData from "./pages/EditemployeeData.jsx";
// import AddEmployee from "./pages/AddEmployee.jsx";
// import LeaveApplication from "./pages/LeaveApplication.jsx";
// import LeaveHistory from "./pages/LeaveHistoryAdmin.jsx";
// import AddUser from "./pages/AddUser.jsx";
// import HrView from "./pages/HrView.jsx";
// import NotAuthorized from "./pages/NotAuthorized.jsx";
// import HRMSNavBar from "./components/NavBar.jsx";

// import "./App.css";

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <HRMSNavBar />
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/help" element={<Help />} />
//           <Route path="/notification" element={<Notification />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/report" element={<Report />} />
//           <Route path="/Employee_Information_Management" element={<EIM />} />
//           <Route path="/notAuthorized" element={<NotAuthorized />} />
//           <Route
//             path="/Employee_Information_Management/HrView/:id_to_view"
//             element={
//               <ProtectedRoute allowedRoles={["HR Manager"]}>
//                 <HrView />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/Employee_Information_Management/EditemployeeData/:id_to_edit"
//             element={
//               <ProtectedRoute allowedRoles={["admin", "HR Manager"]}>
//                 <EditemployeeData />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/Employee_Information_Management/AddEmployee"
//             element={
//               <ProtectedRoute allowedRoles={["admin", "HR Manager"]}>
//                 <AddEmployee />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/leaveapplication" element={<LeaveApplication />} />
//           <Route
//             path="/leave-history-admin"
//             element={
//               <ProtectedRoute allowedRoles={["HR Manager"]}>
//                 <LeaveHistory />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/addUser"
//             element={
//               <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
//                 <AddUser />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/addEmployee"
//             element={
//               <ProtectedRoute allowedRoles={["Admin", "HR Manager"]}>
//                 <AddEmployee />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;
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

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <HRMSNavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<Help />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report" element={<Report />} />
        <Route path="/Employee_Information_Management" element={<EIM />} />
        <Route path="/notAuthorized" element={<NotAuthorized />} />
        <Route
          path="/Employee_Information_Management/HrView/:id_to_view"
          element={
            <ProtectedRoute allowedRoles={["HR Manager"]}>
              <HrView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Employee_Information_Management/EditemployeeData/:id_to_edit"
          element={
            <ProtectedRoute allowedRoles={["admin", "HR Manager"]}>
              <EditemployeeData />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Employee_Information_Management/AddEmployee"
          element={
            <ProtectedRoute allowedRoles={["admin", "HR Manager"]}>
              <AddEmployee />
            </ProtectedRoute>
          }
        />
        <Route path="/leaveapplication" element={<LeaveApplication />} />
        <Route
          path="/leave-history-admin"
          element={
            <ProtectedRoute allowedRoles={["HR Manager"]}>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
