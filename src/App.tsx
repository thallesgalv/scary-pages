import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const defaultTheme: DefaultTheme = theme;

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Routes />
        <Footer>Feito por Galv</Footer>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
