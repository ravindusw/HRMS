import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Help from './pages/Help.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Notification from './pages/Notification.jsx'
import Profile from './pages/Profile.jsx'
import Report from './pages/Report.jsx'
import EIM from './pages/Employee_Information_Management.jsx'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
