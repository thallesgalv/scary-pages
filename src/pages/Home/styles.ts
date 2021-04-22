import styled from 'styled-components/macro';

export const WrapperHeadline = styled.div`
  padding: min(5rem, 10vw) 0;
  padding-bottom: min(2.5rem, 5vw);
`;

export const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilySecondary};
  font-size: max(7vw, ${({ theme }) => theme.font?.tm6?.size});
  line-height: ${({ theme }) => theme.font?.tm6?.line};
  color: ${({ theme }) => theme.color?.title};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilyPrimary};
  font-size: max(2vw, ${({ theme }) => theme.font?.tm2?.size});
  line-height: ${({ theme }) => theme.font?.tm4?.line};
  color: ${({ theme }) => theme.color?.title};

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: min(5rem, 10vw) 0;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  > button + button {
    margin-left: 1.5rem;

    @media (max-width: 767px) {
      margin-left: unset;
      margin-top: 1.5rem;
    }
  }
`;

export const Column = styled.div`
  width: 100%;
  position: relative;

  &:first-child {
    display: grid;
    place-content: center;
  }

  &:nth-child(2) {
    @media (max-width: 1081px) {
      order: -1;
    }
    @media (width: 1024px) {
      order: unset;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 20%;

  @media (max-width: 768px) {
    right: 0;
    left: 0;
    margin: auto;
  }
`;
