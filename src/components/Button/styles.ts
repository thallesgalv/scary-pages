import styled, { css } from 'styled-components';
import { Props } from '.';

export const StyledButton = styled.button<Props>`
  background-color: ${({ theme }) => theme.color?.text};
  color: ${({ theme }) => theme.color?.primary};
  font-family: ${({ theme }) => theme.fontFamilyPrimary};
  font-size: 2vw;
  line-height: ${({ theme }) => theme.font?.tm2?.line};
  min-width: ${({ theme }) => theme.rem(175)};
  padding: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.rem(theme.radius)};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.color?.text};
      border: 1px solid ${({ theme }) => theme.color?.text};
    `}
`;
