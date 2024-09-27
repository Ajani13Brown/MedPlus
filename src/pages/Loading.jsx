import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import logo2 from '../assets/logo2.png';
import { Logo, SpinnerWrapper } from '../styles/LoadingStyles';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFade(true); // Trigger fade-out transition
    }, 2000); // 2 seconds delay

    // Navigate to the prescription page after the fade effect completes
    const navigateTimeout = setTimeout(() => {
      navigate('/rx'); // Navigate to the prescription page
    }, 2500); // 2.5 seconds total delay to match the fade effect

    // Clear timeouts when the component unmounts
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(navigateTimeout);
    };
  }, [navigate]);

  return (
    <div 
      style={{ 
        backgroundColor: '#7BA7FC', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
      className={`fade-transition ${fade ? 'fade-out' : ''}`}
    >
      <div className="background-overlay" />
      <Logo src={logo2} alt="med plus" />
      <SpinnerWrapper>
        <Spinner className="spinner" animation="border" variant="light" />
      </SpinnerWrapper>
    </div>
  );
}

export default Loading;
