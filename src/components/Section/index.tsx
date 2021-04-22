import React from 'react';
import { StyledSection } from './styles';

export interface Props {
  grid?: boolean;
  center?: boolean;
}

const Section: React.FC<Props> = ({ children, grid, center }) => {
  return (
    <StyledSection grid={grid} center={center}>
      {children}
    </StyledSection>
  );
};

export default Section;
