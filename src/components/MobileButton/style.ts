import styled from 'styled-components';

export const Hamburguer = styled.button`
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    li:nth-child(2) {
      width: 50%;
    }
    li:nth-child(3) {
      width: 25%;
    }
  }

  > ul {
    width: 2rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: ${({ theme }) => theme.rem(theme.menuHeight / 3.5)};
    position: relative;

    > li {
      width: 100%;
      height: ${({ theme }) => theme.rem(3)};
      background-color: ${({ theme }) => theme.color?.text};
      border-radius: ${({ theme }) => theme.rem(theme.radius)};
      transition: all 0.2s ease-in-out;
      margin-left: auto;
    }
  }
`;
