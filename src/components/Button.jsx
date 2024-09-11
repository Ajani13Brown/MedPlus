import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #2979ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #1c54b2;
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;