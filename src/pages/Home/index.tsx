import React from 'react';
import lottie from 'lottie-web';
import Button from '../../components/Button';
import Section from '../../components/Section';
import Shape from '../../components/Shape';
import {
  FlexBox,
  Headline,
  SubTitle,
  WrapperHeadline,
  Container,
  Column,
} from './styles';
import Fantasma from '../../assets/lottie_ah.json';
import Ghost from '../../assets/lottie_Ghost.json';
import Gostosuras from '../../assets/lottie_Gostosuras.json';
import Travessuras from '../../assets/lottie_Travessuras.json';
import Modal from '../../components/Modal';

const Home: React.FC = () => {
  const container = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Ghost,
      });
      lottie.setSpeed(0.2);
    }
  }, [container]);

  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Section grid>
        <Column>
          <WrapperHeadline>
            <Headline>Scary Page!!!</Headline>
            <Headline>Boooooooo!</Headline>
          </WrapperHeadline>
          <SubTitle>
            Essa é uma página assustadora.
            <br /> Tenha muuuito medo dela! 👻
          </SubTitle>
          <FlexBox>
            <Button secondary onClick={() => setModal(true)}>
              Gostosuras 🍭
            </Button>
            <Button onClick={() => setModal(true)}>Travessuras 🎃</Button>
          </FlexBox>
        </Column>
        <Column>
          <Shape />
          <Container ref={container} />
        </Column>
      </Section>

      {modal && <Modal />}
    </>
  );
};

export default Home;
