import styled, { css } from 'styled-components';
import { Props } from '.';

export const StyledButton = styled.button<Props>`
  background-color: ${({ theme }) => theme.color?.text};
  color: ${({ theme }) => theme.color?.primary};
  font-family: ${({ theme }) => theme.fontFamilyPrimary};
  font-size: ${({ theme }) => theme.font?.tm1x5?.size};
  line-height: ${({ theme }) => theme.font?.tm1x5?.line};
  min-width: ${({ theme }) => theme.rem(175)};
  padding: 1rem;
  outline: none;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  transition: all 0.5s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.color?.text};
    border: 1px solid ${({ theme }) => theme.color?.text};
    background-color: transparent;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      animation: btneffect 0.6s forwards;
      background-color: ${({ theme }) => theme.color?.tertiary};
      position: absolute;
      top: 0;
      left: 0;

      z-index: -1;

      @keyframes btneffect {
        from {
          opacity: 0;
          transform: translateX(-200%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.color?.text};
      border: 1px solid ${({ theme }) => theme.color?.text};

      &:hover {
        color: ${({ theme }) => theme.color?.primary};
        &::after {
          background-color: ${({ theme }) => theme.color?.text};
        }
      }
    `}

  ${({ margin }) =>
    margin &&
    css`
      margin: 2rem;
    `}
`;
