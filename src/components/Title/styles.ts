import styled from 'styled-components';

export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilySecondary};
  color: ${({ theme }) => theme.color?.title};
  font-size: ${({ theme }) => theme.font?.tm9?.size};
  line-height: ${({ theme }) => theme.font?.tm9?.line};
  display: flex;
  justify-content: center;
  align-items: center;
`;
