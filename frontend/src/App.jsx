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

import Login from "./pages/Login.jsx";
import Help from "./pages/Help.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Notification from "./pages/Notification.jsx";
import Profile from "./pages/Profile.jsx";
import Report from "./pages/Report.jsx";
import EIM from "./pages/Employee_Information_Management.jsx";
import EditemployeeData from "./pages/EditemployeeData.jsx";
import AddEmployee from "./pages/AddEmployee.jsx";
import LeaveApplication from './pages/LeaveApplication.jsx';
import LeaveHistory from './pages/LeaveHistoryAdmin.jsx'

import HrView from "./pages/HrView.jsx";
import "./App.css";

function Layout() {
  const location = useLocation();
  const [employee_id, setEmployee_id] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the employee_id from localStorage
    localStorage.removeItem("employee_id");
    setEmployee_id(null);
    // redirect the user to the login page
    navigate("/");
  };

  useEffect(() => {
    const storedEmployee_id = localStorage.getItem("employee_id");
    setEmployee_id(storedEmployee_id);
  }, []);

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
              {/* Ensure the link includes the employee_id */}
              <Nav.Link as={Link} to={`/profile/${employee_id}`}>
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/report">
                Reports
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
    <>
      <BrowserRouter>
        <Layout /> {/* Layout will conditionally render the Navbar */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile/:employeeId" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/Employee_Information_Management" element={<EIM />} />
          <Route path="/Employee_Information_Management/HrView/:id_to_view" element={<HrView />} />
          <Route path="/Employee_Information_Management/EditemployeeData/:id_to_edit" element={<EditemployeeData />} />
          <Route path="/Employee_Information_Management/AddEmployee" element={<AddEmployee />} />
          <Route path="/leaveapplication" element={<LeaveApplication />} />
          <Route path="/leave-history-admin" element = {<LeaveHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
