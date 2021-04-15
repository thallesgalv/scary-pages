import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Boogaloo&family=Nunito:wght@300;400&display=swap');

  /*CSS Reset*/
  * {
    box-sizing: border-box;
  }

  body, p, span, a, h1, h2, ul, img  {
    margin: 0;
    padding: 0;
    display: block;
    font-weight: normal;
    font-size: 100%;

    a {
      text-decoration: none;
    }

    img {
      max-width: 100%;
    }

    li {
      list-style: none;
    }
  }

  body {
    background-color: ${({ theme }) => theme.color?.background};
    color: ${({ theme }) => theme.color?.text};
    font-family: ${({ theme }) => theme.fontFamilyPrimary};
    font-size: ${({ theme }) => theme.font?.tm1?.size};
    line-height: ${({ theme }) => theme.font?.tm1?.line};    
  }
`;
