import React from 'react';
import { StyledButton } from './styles';

export interface Props {
  secondary?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, secondary, onClick }) => {
  return (
    <>
      <StyledButton secondary={secondary} onClick={onClick}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
