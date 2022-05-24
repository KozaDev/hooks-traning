import React from 'react';
import { StyledApp } from './App.styles';
import { GlobalStyle } from '../../../assets/styles/GlobalStyles';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <MainTemplate>
          <header>
            <h1>My template</h1>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </header>
        </MainTemplate>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
