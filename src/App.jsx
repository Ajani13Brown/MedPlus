// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OnBoarding1 from './pages/OnBoarding1';
import OnBoarding2 from './pages/OnBoarding2';
import Profile from './pages/Profile';
import Medinfo from './pages/Medinfo';
import QRScan from './pages/QRScan';
import './App.css';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Prescription from './pages/Prescription';
import { RemindersProvider } from './Context/RemindersContext'; // Updated import

function App() {
  return (
    <RemindersProvider> {/* Wrap with RemindersProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<OnBoarding1 />} />
          <Route path="/onboarding2" element={<OnBoarding2 />} />
          <Route path="/qr-code" element={<QRScan />} />
          <Route path="/medinfo" element={<Medinfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rx" element={<Prescription />} />
        </Routes>
      </Router>
    </RemindersProvider>
  );
}

export default App;
