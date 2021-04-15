import React from 'react';
import { Heading } from './styles';

const Title: React.FC = ({ children }) => {
  return (
    <>
      <Heading>{children}</Heading>
    </>
  );
};

export default Title;
