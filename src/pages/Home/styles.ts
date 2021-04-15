import styled from 'styled-components/macro';

export const WrapperHeadline = styled.div`
  padding: 5rem 0;
  padding-bottom: 2.5rem;
`;

export const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilySecondary};
  font-size: 7vw;
  line-height: ${({ theme }) => theme.font?.tm9?.line};
  color: ${({ theme }) => theme.color?.title};
`;

export const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilyPrimary};
  font-size: 2vw;
  line-height: ${({ theme }) => theme.font?.tm4?.line};
  color: ${({ theme }) => theme.color?.title};
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem 0;

  > button + button {
    margin-left: 2rem;
  }
`;

export const Column = styled.div`
  width: 100%;
  position: relative;

  &:nth-child(2) {
    @media (max-width: 767px) {
      background-color: red;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
`;
