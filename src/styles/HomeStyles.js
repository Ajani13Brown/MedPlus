import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;

  @media (min-width: 768px) {
    flex-direction: row; /* Flex layout for larger screens */
    justify-content: space-around;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  position: absolute; /* Positioning it absolutely within the ImageWrapper */
  top: 3%; /* Adjust as needed to control up and down */
  z-index: 2; /* For that nice overflow */

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  width: 200px; /* Control the size of the logo if you need it, AJ */
  height: 135px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 250px; /* Adjust size for desktop, but you already know this */
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #003366;

  @media (min-width: 768px) {
    font-size: 36px; /* Desktop title size, since you'll probably have to mess with this a bit */
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #555;

  @media (min-width: 768px) {
    font-size: 18px; /* Desktop size i think*/
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  position: absolute; /* Positioning ButtonGroup absolutely */
  bottom: 20px; /* Adjust as needed */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Center horizontally */

  @media (min-width: 768px) {
    max-width: 200px; /* Desktop size here as well */
    position: static; /* Reset positioning for larger screens */
  }

  @media (max-width: 425px) {
    /* Position ButtonGroup on top of Image on small screens */
    bottom: 10px; /* Adjust as needed */
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 40px;
  position: relative; /* Relative positioning to allow the logo placement */

  @media (min-width: 768px) {
    margin-top: 0;
    order: -1; /* Reorder image on larger screens? not sure how necessary this will be */
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;
