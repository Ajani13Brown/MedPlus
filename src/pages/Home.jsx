import React from 'react';
import Button from '../components/button';
import logo from '../assets/logo.png';
import doctorImage from '../assets/doctor.png';
import {
  Container,
  LogoWrapper,
  Logo,
  ButtonGroup,
  ImageWrapper,
  Image,
} from '../styles/HomeStyles';
import { useNavigate } from 'react-router-dom';


const Home = () => {

const navigate = useNavigate()

  return (
    <Container>
      <LogoWrapper>
        <Logo src={logo} alt="med plus" />

      </LogoWrapper>
      <ImageWrapper>
        <Image src={doctorImage} alt="Doctor" />
      </ImageWrapper>
      <ButtonGroup>
          <Button onClick={()=>{navigate("/login")}} >Log In</Button>
          <Button onClick={()=>{navigate("/onboarding")}}>Register</Button>
        </ButtonGroup>
    </Container>
  );
};

export default Home;