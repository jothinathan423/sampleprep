import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FreelancerDashboard from './pages/FreelancerDashboard';
import BusinessDashboard from './pages/BusinessDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ApplyJob from './pages/ApplyJob';
import Payment from './components/Payment';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<FreelancerDashboard />} />
        <Route path="/business-dashboard" element={<BusinessDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
        <Route path="/payment/:amount" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={Register } /> */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
