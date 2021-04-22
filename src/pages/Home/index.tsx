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
import Ghost from '../../assets/lottie_Ghost.json';
import Modal from '../../components/Modal';

const Home: React.FC = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const [modal, setModal] = React.useState(false);
  const [tricks, setTricks] = React.useState(true);

  React.useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: Ghost,
      });
    }
    lottie.setSpeed(0.3);
  }, []);

  function handleModal() {
    setModal(!modal);
    lottie.pause('');
  }

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
            <Button
              secondary
              onClick={() => {
                setTricks(false);
                handleModal();
              }}
            >
              Gostosuras 🍭
            </Button>
            <Button
              onClick={() => {
                setTricks(true);
                handleModal();
              }}
            >
              Travessuras 🎃
            </Button>
          </FlexBox>
        </Column>
        <Column>
          <Shape />
          <Container ref={container} />
        </Column>
      </Section>

      {modal && <Modal tricks={tricks} setModal={setModal} />}
    </>
  );
};

export default Home;
