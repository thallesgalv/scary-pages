import React from 'react';
import { StyledButton } from './styles';

export interface Props {
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  margin?: boolean;
}

const Button: React.FC<Props> = ({ children, secondary, onClick, margin }) => {
  return (
    <StyledButton secondary={secondary} onClick={onClick} margin={margin}>
      {children}
    </StyledButton>
  );
};

export default Button;
