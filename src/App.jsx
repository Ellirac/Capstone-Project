import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Resorts from './pages/Resorts';
import ResortDetail from './pages/ResortDetail';
import VirtualTour from './pages/VirtualTour';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './App.css';

export default function App() {
  return (
    <div className="site-root">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/resort/:resortId" element={<ResortDetail />} />
          <Route path="/resort/:resortId/virtual-tour" element={<VirtualTour />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
