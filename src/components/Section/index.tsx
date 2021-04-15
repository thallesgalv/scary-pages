import React from 'react';
import { StyledSection } from './styles';

export interface Props {
  grid?: boolean;
}

const Section: React.FC<Props> = ({ children, grid }) => {
  return <StyledSection grid={grid}>{children}</StyledSection>;
};

export default Section;
