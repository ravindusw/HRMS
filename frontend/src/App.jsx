import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AuthProvider, useAuth } from "./context/AuthContext";
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

import "./App.css";

function Layout() {
  const location = useLocation();
  const [employee_id, setEmployee_id] = useState(null);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      {/* Conditionally render the Navbar based on the current path */}
      {location.pathname !== "/" && (
        <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/dashboard">
              Jupiter
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/dashboard">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={`/profile`}>
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/report">
                Reports
              </Nav.Link>
              <Nav.Link as={Link} to="/addUser">
                add_User
              </Nav.Link>

              <Nav.Link as={Link} to="/addEmployee">
                addEmployee
              </Nav.Link>
              <Nav.Link as={Link} to="/help">
                help
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout /> {/* Layout will conditionally render the Navbar */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/Employee_Information_Management" element={<EIM />} />
          <Route
            path="/Employee_Information_Management/HrView/:id_to_view"
            element={
              <ProtectedRoute allowedRoles={["hr_manager"]}>
                <HrView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Employee_Information_Management/EditemployeeData/:id_to_edit"
            element={
              <ProtectedRoute allowedRoles={["admin", "hr_manager"]}>
                <EditemployeeData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Employee_Information_Management/AddEmployee"
            element={
              <ProtectedRoute allowedRoles={["admin", "hr_manager"]}>
                <AddEmployee />
              </ProtectedRoute>
            }
          />
          <Route path="/leaveapplication" element={<LeaveApplication />} />
          <Route
            path="/leave-history-admin"
            element={
              <ProtectedRoute allowedRoles={["hr_manager"]}>
                <LeaveHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addUser"
            element={
              <ProtectedRoute allowedRoles={["admin", "hr_manager"]}>
                <AddUser />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
