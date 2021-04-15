import styled, { css } from 'styled-components';
import { Props } from '.';

export const StyledSection = styled.section<Props>`
  width: 100%;
  min-height: calc(
    100vh - ${({ theme }) => theme.rem(theme.menuHeight + theme.footerHeight)}
  );
  padding: 0 2rem;
  margin: 0 auto;

  ${({ grid }) =>
    grid &&
    css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    `}
`;
