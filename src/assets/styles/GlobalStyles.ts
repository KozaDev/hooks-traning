import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 15px;
  };
  
  ::-webkit-scrollbar-track {
    background-color: green;
  };

  ::-webkit-scrollbar-thumb {
    background-color: pink;
  };

  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
