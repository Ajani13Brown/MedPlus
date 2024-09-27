import React, { useState } from 'react';
import { ButtonGroup, Title } from '../styles/HomeStyles';
import QRScanner from "../assets/QRScanner.png";
import Container from 'react-bootstrap/Container';
import X from '../assets/X Button.png';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const QRScan = () => {
  const [scanning, setScanning] = useState(false);
  const navigate = useNavigate();

  const handleScanClick = () => {
    setScanning(true);
    // Stop scanning after a certain time and navigate to the loading page
    setTimeout(() => {
      setScanning(false);
      navigate('/loading'); // Navigate to the loading page
    }, 1000); // Duration should match your scanning animation
  };

  return (
    <>
      <Container fluid className="qrscan-container">
        <div className="qrnavContainer">
          <div className='nav mt-4'>
            <img className="img-button" src={X} alt="X Button" onClick={() => { navigate("/") }} />
          </div>
        </div>
        <Title>Scan QR Code</Title>
        <p className="qr-subtext mb-3">Place the QR Code you want within the frame</p>
        <div className="scannerBackground">
          <img className="scanner" src={QRScanner} alt="QR Scanner" />
          {scanning && <div className="scanner-overlay" />}
        </div>
        <div className="buttongroup mt-5">
          <Button onClick={handleScanClick}>Scan Code</Button>
          <Button className="switch">Upload Image</Button>
        </div>
      </Container>
    </>
  );
}

export default QRScan;
