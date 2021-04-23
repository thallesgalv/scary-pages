import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const defaultTheme: DefaultTheme = theme;

  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Routes />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
