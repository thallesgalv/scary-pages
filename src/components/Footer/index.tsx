import React from 'react';
import { StyledFooter } from './styles';

const Footer: React.FC = ({ children }) => {
  return (
    <>
      <StyledFooter>{children}</StyledFooter>
    </>
  );
};

export default Footer;
