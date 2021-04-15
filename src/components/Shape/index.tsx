import React from 'react';
import { ReactComponent as ShapeSVG } from '../../assets/formas.svg';
import { WrapperShape } from './styles';

const Shape: React.FC = () => {
  return (
    <>
      <WrapperShape>
        <ShapeSVG />
      </WrapperShape>
    </>
  );
};

export default Shape;
