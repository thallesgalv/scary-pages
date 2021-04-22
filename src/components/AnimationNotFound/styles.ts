import styled from 'styled-components';

export const Container = styled.div`
  svg {
    height: 500px !important;
  }
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.font?.tm1x5?.size};
  line-height: ${({ theme }) => theme.font?.tm1x5?.line};
  color: #ff79c6;
  &::before {
    content: '😩 ';
  }
`;
