import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';
import Routes from './routes/index';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  // const toogleTheme = () => {
  //   setTheme(theme.title === 'light' ? dark : light);
  // };

  return (
    <ThemeProvider theme={theme}>
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
