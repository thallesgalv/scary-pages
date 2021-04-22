import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color?.text};
  border-radius: ${({ theme }) => theme.rem(theme.radius)};
  box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
  display: grid;
  grid-template-columns: 174px 1fr;
  justify-content: center;
  place-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.color?.primary};
  margin-bottom: 2rem;
  position: relative;
  padding: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  svg {
    width: 174px;
    height: unset;

    @media (max-width: 767px) {
      width: 140px;
    }
  }

  span {
    position: absolute;
    top: ${({ theme }) => theme.rem(10)};
    right: ${({ theme }) => theme.rem(10)};
    font-size: ${({ theme }) => theme.font?.tm3?.size};
    line-height: ${({ theme }) => theme.font?.tm3?.line};
  }
`;

export const Content = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.font?.tm5?.size};
    line-height: ${({ theme }) => theme.font?.tm5?.line};

    @media (max-width: 767px) {
      font-size: ${({ theme }) => theme.font?.tm4?.size};
      line-height: ${({ theme }) => theme.font?.tm4?.line};
      text-align: center;
    }
  }

  p {
    font-size: ${({ theme }) => theme.font?.tm2?.size};
    line-height: ${({ theme }) => theme.font?.tm2?.line};

    @media (max-width: 767px) {
      font-size: ${({ theme }) => theme.font?.tm1?.size};
      line-height: ${({ theme }) => theme.font?.tm1?.line};
    }

    em {
      font-weight: 300;
    }
  }
`;
