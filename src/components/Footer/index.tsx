import React from 'react';
import { StyledFooter } from './styles';
import { ReactComponent as Galv } from '../../assets/tgViceBlue.svg';

const Footer: React.FC = () => {
  return (
    <>
      <StyledFooter>
        <small>Feito por: </small>
        <Galv />
      </StyledFooter>
    </>
  );
};

export default Footer;
