import React from 'react';
import styled from 'styled-components';

const StyledButton2 = styled.button`
  background-color: #fff;
  color: #2979ff;
  border: 2px solid #2979ff;
  padding: 10px 20px;
  margin: 10px 0;
  width: 100%;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #2979ff;
    color: #fff;
  }
`;

const Button2 = ({ children, onClick }) => {
  return <StyledButton2 onClick={onClick}>{children}</StyledButton2>;
};

export default Button2;
