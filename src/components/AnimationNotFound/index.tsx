import React from 'react';
import lottie from 'lottie-web';
import { Container, Message } from './styles';
import Missing from '../../assets/lottie_404.json';

interface Props {
  message?: string;
}

const AnimationNotFound: React.FC<Props> = ({ message }) => {
  const containerLottie = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerLottie.current) {
      lottie.loadAnimation({
        container: containerLottie.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Missing,
      });
    }
    lottie.setSpeed(1.3);
  }, []);

  return (
    <>
      <Container>
        <div ref={containerLottie} />
      </Container>
      <Message>{message}</Message>
    </>
  );
};

export default AnimationNotFound;
