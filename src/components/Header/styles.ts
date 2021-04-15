import styled, { css } from 'styled-components';
import { Props } from '.';

export const Container = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  background-color: ${({ theme }) => theme.color?.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  svg {
    height: ${({ theme }) => theme.rem(theme.menuHeight - 20)};
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Nav = styled.nav<Props>`
  height: ${({ theme }) => theme.rem(theme.menuHeight)};
  display: grid;
  place-items: center;

  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    > li {
      position: relative;
      > a {
        color: ${({ theme }) => theme.color?.text};
        font-size: ${({ theme }) => theme.font?.tm2?.size};
        line-height: ${({ theme }) => theme.font?.tm2?.line};
        height: ${({ theme }) => theme.rem(theme.menuHeight)};
        display: grid;
        place-items: center;
        padding: 1rem;
      }

      > a.active {
        &::after {
          content: '';
          height: ${({ theme }) => theme.rem(3)};
          width: 80%;
          background-color: ${({ theme }) => theme.color?.text};
          border-radius: ${({ theme }) => theme.rem(theme.radius)};
          position: absolute;
          bottom: 1rem;
        }
      }
    }
  }

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: none;
    `}

  ${({ isClicked }) =>
    isClicked &&
    css`
      display: flex;

      > ul {
        flex-direction: column;
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(50%,-50%)
        z-index: 1;
        background-color: ${({ theme }) => theme.color?.secondary};
      }
    `}
`;
