import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Help from './pages/Help.jsx'
import Dashboard from './pages/Dashboard.jsx'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
