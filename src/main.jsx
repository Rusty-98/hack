import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './components/Register.jsx'
import Chat from './components/Chat.jsx'
import Home from './components/Home.jsx'
import AttendancePage from './components/AttendancePage.jsx'
import Videos from './components/Videos.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import StudentAttendancePage from './components/StudentAttendancePage.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'

const tokken = localStorage.getItem("auth");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* <Header /> */}
      <Navbar /> 
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vid" element={<Videos />} />
        <Route path="/project" element={<Projects />} />        
        <Route path="/team" element={<Team />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/studatten" element={<StudentAttendancePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={ tokken? <Chat /> : <Login />} />
      </Routes>
      {/* <Contact /> */}
    </Router>
  </React.StrictMode>,
)
