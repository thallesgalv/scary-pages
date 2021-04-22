import React from 'react';
import AnimationNotFound from '../../components/AnimationNotFound';
import Section from '../../components/Section';

const NotFound: React.FC = () => {
  return (
    <Section center>
      <AnimationNotFound message="Página não encontrada" />
    </Section>
  );
};

export default NotFound;
