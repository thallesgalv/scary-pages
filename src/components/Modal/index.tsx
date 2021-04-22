import React from 'react';
import lottie from 'lottie-web';
import { StyledModal } from './styles';
import Gostosuras from '../../assets/lottie_Gostosuras.json';
import Travessuras from '../../assets/lottie_Travessuras.json';

interface Props {
  tricks: boolean;
  setModal: (arg: boolean | ((otherarg: boolean) => boolean)) => void;
}

const Modal: React.FC<Props> = ({ tricks, setModal }) => {
  const containerLottie = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerLottie.current) {
      lottie.loadAnimation({
        container: containerLottie.current,
        renderer: 'svg',
        autoplay: true,
        loop: !tricks,
        animationData: tricks ? Travessuras : Gostosuras,
      });
    }
    lottie.setSpeed(1.5);
  }, [containerLottie, tricks]);

  function handleClick() {
    setModal(false);
    lottie.play('');
    lottie.setSpeed(0.3);
  }

  return (
    <StyledModal>
      <button type="button" onClick={handleClick}>
        <span>X</span>
      </button>
      <div ref={containerLottie} />
    </StyledModal>
  );
};

export default Modal;
