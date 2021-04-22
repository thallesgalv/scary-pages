import styled, { css } from 'styled-components';
import { Props } from '.';

export const StyledSection = styled.section<Props>`
  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.rem(theme.footerHeight)});
  margin: 0 auto;
  padding: 0 2rem;
  padding-top: ${({ theme }) => theme.rem(theme.menuHeight)};

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.rem(theme.menuHeight * 1.5)} 2rem;
  }

  ${({ grid }) =>
    grid &&
    css`
      @media (min-width: 1081px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(296px, 1fr));
      }
      @media (width: 1024px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(296px, 1fr));
      }
    `}

  ${({ center }) =>
    center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;
