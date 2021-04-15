import React from 'react';
import { Hamburguer } from './style';

interface Props {
  onClick: () => void;
}

const MobileButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Hamburguer onClick={onClick}>
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </Hamburguer>
  );
};

export default MobileButton;
