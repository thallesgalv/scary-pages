import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.color?.secondary};
  height: ${({ theme }) => theme.rem(theme.footerHeight)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
