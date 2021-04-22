import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import MobileButton from '../MobileButton';

export interface Props {
  isMobile?: boolean;
  isClicked?: boolean;
}

const Header: React.FC = () => {
  const [mobile, setMobile] = React.useState(
    window.matchMedia('(max-width: 768px)').matches,
  );
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    function changeMatch() {
      const verify: boolean = window.matchMedia('(max-width: 768px)').matches;

      if (verify) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    changeMatch();
    window.addEventListener('resize', changeMatch);

    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [mobile]);

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <Nav isMobile={mobile} isClicked={clicked}>
        <ul>
          <li>
            <Link to="/" onClick={() => setClicked(false)}>
              Home
            </Link>
          </li>
          <li>
            <NavLink to="/equipe" onClick={() => setClicked(false)}>
              Equipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/objetivos" onClick={() => setClicked(false)}>
              Objetivos
            </NavLink>
          </li>
        </ul>
      </Nav>
      {mobile ? <MobileButton onClick={() => setClicked(!clicked)} /> : null}
    </Container>
  );
};

export default Header;
