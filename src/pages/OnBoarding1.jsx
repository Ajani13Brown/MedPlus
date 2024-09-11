import React from 'react';
import { Title } from '../styles/onBoarding1Styles';
import Arrow from '../assets/LeftArrow.png'
import X from '../assets/X Button.png'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';




const OnBoarding1 = () => {

    const navigate = useNavigate();

  return (
    <>
        

            
        
        <div className='navContainer mt-4'>
        <img className="img-button" src={Arrow} alt="Arrow Button" onClick={()=>{navigate("/")}}/>
        <img className="img-button"src={X} alt="Arrow Button" onClick={()=>{navigate("/")}}/>
        </div>
        <div className='Container' style={{padding: 20}}>
        <ProgressBar now={50} style={{widith:"75rem", height:10 }}/>;
        </div>


      <Container className="align-items-center">
      <Title>Who is the account for?</Title>
      <Form>
      <Form.Group className="mb-3" controlId="UserName">
        <div className="bubble mt-3">
      <Form.Check className="label"type="radio" label="A child" value="Child"/>
      <Form.Text className="text-muted">
      I am the legal guardian
        </Form.Text>
        </div>
        <div className="bubble mt-3">
      <Form.Check className="label"type="radio" label="Myself" value="myself" />
      <Form.Text className="text-muted">
      Keep track of my medications
        </Form.Text>
        </div>
        <div className="bubble mt-3">
      <Form.Check className="label" type="radio" label="Others" value="Others" />
      <Form.Text className="text-muted">
      Following others medication intake
        </Form.Text>
        </div>
        
      </Form.Group>

      <Button className="submit mt-5" variant="primary" type="submit" onClick={()=>{navigate("/onboarding2")}}>
        Submit
      </Button>
      </Form>
      </Container>

      

    </>
  );
};

export default OnBoarding1;
