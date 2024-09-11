import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OnBoarding1 from './pages/OnBoarding1';
import OnBoarding2 from './pages/OnBoarding2';
import Profile from './pages/Profile';
import Medinfo from './pages/Medinfo';
import QRScan from './pages/QRScan';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<OnBoarding1 />} />
        <Route path="/onboarding2" element={<OnBoarding2 />} />
        <Route path="/qr-code" element={< QRScan/>} />
        <Route path="/medinfo" element={< Medinfo/>} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* Add more routes here for Log In and Register pages */}
      </Routes>
    </Router>
  );
}

export default App;
