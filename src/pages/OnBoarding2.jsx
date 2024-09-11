import React from 'react';
import { Title } from '../styles/onBoarding1Styles';
import Arrow from '../assets/LeftArrow.png'
import X from '../assets/X Button.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


const OnBoarding2 = () => {

    const navigate = useNavigate()

  return (
    <>
    
    <div className='navContainer mt-4'>
        <img className="img-button" src={Arrow} alt="Arrow Button" onClick={()=>{navigate("/onboarding")}}/>
        <img className="img-button"src={X} alt="X Button" onClick={()=>{navigate("/")}}/>
        </div>
        <div className='Container' style={{padding: 20}}>
        <ProgressBar now={100} style={{widith:"75rem", height:10 }}/>;
        </div>


      <Container className="align-items-center">
      <Title>Let’s get to know each other</Title>
      <Form>
          <div className="bubble mt-3">
            <Form.Group className="mb-3" controlId="Username">
              <Form.Label>Your Name</Form.Label>
              <Form.Control className="label" type="text" placeholder="Connor Gallagher" />
            </Form.Group>
          </div>

          <div className="bubble mt-3">
            <Form.Group className="mb-3" controlId="D.O.B">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control className="label" type="date" />
            </Form.Group>
          </div>

          <div className="bubble mt-3">
            <Form.Group>
            <Form.Select label="Gender"aria-label="Default select example">
            <option value="" disabled selected> Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </Form.Select>
            </Form.Group>
          </div>

          <Button className="submit mt-5" variant="primary" type="submit" onClick={()=>{navigate("/qr-code")}}>
            Submit
          </Button>
        </Form>
      </Container>
    </>

  )
}

export default OnBoarding2
