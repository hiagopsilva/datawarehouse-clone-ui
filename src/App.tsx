import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import light from './styles/themes/light';

import GlobalStyles from './styles/global';
import Routes from './routes/index';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
};

export default App;
