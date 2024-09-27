import React, { useContext } from 'react';
import ProfilePic from '../assets/ProfilePic.png';
import { Title } from '../styles/onBoarding1Styles';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Upcoming from '../assets/UpcomingMed.png';
import Upcoming2 from '../assets/UpcomingMed2.png';
import { RemindersContext } from '../Context/RemindersContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { reminders } = useContext(RemindersContext);
  const navigate = useNavigate()
  return (
    <>
      <div className="profile-container">
        <div className="profile-details">
          <h2 className="connor-g">Connor G</h2>
          <p className="age">age-82</p>
        </div>
        <img className="Profile-pic" src={ProfilePic} alt="Profile Picture" />
      </div>
      <div className="upcoming-container">
        <h2 className="upcoming-title">Upcoming</h2>
        <Button className="add-med-button" variant="dark" onClick={() => { navigate("/qr-code") }}>+ Add Medication</Button>
      </div>

      {/* Conditionally render the notification card if Reminder is active */}
      {reminders.Reminder1.Active && ( /*checks if both values are true */
        <div className="notification-container">
          <Card className="med-notification" style={{ width: '70%', height: '45%' }}>
            <Card.Img variant="top" src={Upcoming2} />
          </Card>
        </div>
      )}
      {reminders.Reminder2.Active && (
        <div className="notification-container">
          <Card className="med-notification" style={{ width: '70%', height: '45%' }}>
            <Card.Img variant="top" src={Upcoming} />
          </Card>
        </div>
      )}
    </>
  );
};

export default Profile;
