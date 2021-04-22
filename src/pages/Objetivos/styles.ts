import styled from 'styled-components';

export const Content = styled.div`
  padding: 4rem 0;

  p,
  a,
  li {
    font-size: ${({ theme }) => theme.font?.tm1x5?.size};
    line-height: ${({ theme }) => theme.font?.tm1x5?.line};
  }

  p + p,
  li {
    margin-top: 1.5rem;
  }

  li {
    list-style: unset;
    max-width: 85%;

    @media (max-width: 767px) {
      max-width: unset;
    }
  }

  ul {
    padding-left: 2rem;
  }

  a {
    color: #e89e64;
    display: inline-block;
  }

  li > ul > li {
    list-style: circle;
  }

  h2,
  h3 {
    font-size: ${({ theme }) => theme.font?.tm3?.size};
    line-height: ${({ theme }) => theme.font?.tm3?.line};
    font-weight: bold;
    margin: 2rem 0;
  }
  h3 {
    font-size: ${({ theme }) => theme.font?.tm2?.size};
    line-height: ${({ theme }) => theme.font?.tm2?.line};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 1fr 300px;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  width: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const FlexItem = styled.div`
  &:last-child {
    min-width: 300px;
  }
`;

export const GridMockups = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(180px, 500px));
  justify-content: start;
  grid-template-columns: repeat(auto-fit, minmax(180px, 500px));

  @media (max-width: 768px) {
    justify-content: center;
  }

  img {
    max-width: 500px;
    width: 100%;
  }
`;
