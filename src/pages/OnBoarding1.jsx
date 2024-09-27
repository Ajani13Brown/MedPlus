import React, { useState } from 'react';
import { Title } from '../styles/onBoarding1Styles';
import Arrow from '../assets/LeftArrow.png';
import X from '../assets/X Button.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const OnBoarding1 = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/onboarding2', { state: { userType } });
    };

    return (
        <>
            <div className='navContainer mt-4'>
                <img className="img-button" src={Arrow} alt="Arrow Button" onClick={() => { navigate("/") }} />
                <img className="img-button" src={X} alt="X Button" onClick={() => { navigate("/") }} />
            </div>
            <div className='Container'>
                <div className='ProgressContainer'>
                    <ProgressBar now={50} />
                </div>
            </div>


            
    
 

            <Container className="align-items-center">
                <Title>Who is the account for?</Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="UserName">
                        <div className="bubble mt-3">
                            <Form.Check className="label" name = "role" type="radio" label="A child" value="Child" onChange={(e) => setUserType(e.target.value)} />
                            <Form.Text className="text-muted">I am the legal guardian</Form.Text>
                        </div>
                        <div className="bubble mt-3">
                            <Form.Check className="label" name = "role" type="radio" label="Myself" value="myself" onChange={(e) => setUserType(e.target.value)} />
                            <Form.Text className="text-muted">Keep track of my medications</Form.Text>
                        </div>
                        <div className="bubble mt-3">
                            <Form.Check className="label" name = "role" type="radio" label="Others" value="Others" onChange={(e) => setUserType(e.target.value)} />
                            <Form.Text className="text-muted">Following others medication intake</Form.Text>
                        </div>
                    </Form.Group>

                    <Button className="submit mt-5" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default OnBoarding1;
