import React, { useContext, useState, useEffect } from 'react';
import { Title } from '../styles/onBoarding1Styles';
import Med from '../assets/amitriptyline.png';
import Clock from '../assets/clock.png';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { RemindersContext } from '../Context/RemindersContext';
import Button2 from '../components/Button2';
import { useNavigate } from 'react-router-dom';


const Prescription = () => {
  const { reminders, toggleReminder } = useContext(RemindersContext);
  const [reminder1Checked, setReminder1Checked] = useState(reminders.Reminder1.Active);
  const [reminder2Checked, setReminder2Checked] = useState(reminders.Reminder2.Active);
  const navigate = useNavigate();

  // Synchronize local state with global state (RemindersContext)
  useEffect(() => {
    setReminder1Checked(reminders.Reminder1.Active);
    setReminder2Checked(reminders.Reminder2.Active);
  }, [reminders.Reminder1.Active, reminders.Reminder2.Active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleReminder('Reminder1', reminder1Checked);
    toggleReminder('Reminder2', reminder2Checked);

    
    navigate('/profile'); 
  };

  return (
    <>
      <Container>
        <Title>Prescription</Title>
      </Container>
      <img className="medpic" src={Med} alt="Medication" />
      <Container>
        <h2 className="amitriptyline-10mg">Amitriptyline 10mg</h2>
        <p className="tabs">Tablets</p>
      </Container>
      <p>Schedule</p>
      <div className="bubble">
        <p><img src={Clock} alt="Clock" /> | 08:00, 19:00</p>
      </div>

      <p>Doctor’s Notes</p>
      <div className="bubble">
        <p>Take 2 times every day from April 22 to April 28, 2024. Drink plenty of water and rest often.</p>
      </div>

      <h2>Reminders</h2>
      <Form onSubmit={handleSubmit}>
        <Container className="reminder-Container mt-4">
          <div className="reminder-toggle">
            <p>08:00</p>
            <Form.Check
              className="switch"
              type="switch"
              id="custom-switch-1"
              label={reminder1Checked ? "On" : "Off"}
              checked={reminder1Checked}
              onChange={(e) => setReminder1Checked(e.target.checked)}
            />
          </div>

          <div className="reminder-toggle">
            <p>19:00</p>
            <Form.Check
              className="switch"
              type="switch"
              id="custom-switch-2"
              label={reminder2Checked ? "On" : "Off"}
              checked={reminder2Checked}
              onChange={(e) => setReminder2Checked(e.target.checked)}
            />
          </div>

          <Button2 type="submit">Save</Button2>
        </Container>
      </Form>
    </>
  );
};

export default Prescription;
