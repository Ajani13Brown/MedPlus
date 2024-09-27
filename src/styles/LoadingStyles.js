import styled from 'styled-components';

export const Logo = styled.img`
  width: 50vw; /* Larger responsive width for smaller screens */
  height: auto; /* Maintain aspect ratio */
  max-width: 300px; /* Limit max size for larger screens */
  max-height: 30vh; /* Limit height to 30% of viewport height */
  margin-bottom: 40px; /* Increased space between logo and spinner */

  @media (min-width: 768px) {
    width: 250px; /* Adjust size for larger tablets */
    max-height: none; /* Remove height limit for larger screens */
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    width: 15vw; /* Larger responsive size for smaller screens */
    height: 15vw; /* Maintain aspect ratio */
    max-width: 80px; /* Limit max size for larger screens */
    max-height: 15vh; /* Limit height to 15% of viewport height */
  }

  @media (min-width: 768px) {
    .spinner {
      width: 80px; /* Fixed size for larger screens */
      height: 80px;
    }
  }
`;
