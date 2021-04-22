import styled from 'styled-components';

export const StyledModal = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 99;
  background-color: #000000e6;
  top: 0;
  display: grid;
  place-items: center;

  > button {
    position: absolute;
    top: 10%;
    right: 10%;
    z-index: 99;
    width: 3rem;
    height: 3rem;
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #392323;
    }

    > span {
      font-family: ${({ theme }) => theme.fontFamilyPrimary};
      font-size: ${({ theme }) => theme.font?.tm3?.size};
      color: ${({ theme }) => theme.color?.text};
    }
  }

  > div {
    width: 80%;
    height: 100vh;
  }
`;
