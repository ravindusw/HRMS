import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Help from './pages/Help.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Notification from './pages/Notification.jsx'
import Profile from './pages/Profile.jsx'
import Report from './pages/Report.jsx'
import EIM from './pages/Employee_Information_Management.jsx'
import EditemployeeData from './pages/EditemployeeData.jsx'
import AddEmployee from './pages/AddEmployee.jsx'


import HrView from './pages/HrView.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/EIm" element={<EIM />} />
          <Route path="/Employee_Information_Management/HrView/:id_to_view" element={<HrView />} />
          <Route path="/Employee_Information_Management/EditemployeeData" element={<EditemployeeData />} />
          <Route path="/Employee_Information_Management/AddEmployee" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
