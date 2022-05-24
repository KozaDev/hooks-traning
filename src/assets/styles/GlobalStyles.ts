import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

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
  
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 50px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkGrey};
    }
  }

  ::-webkit-scrollbar-track {
    margin: 8px 0;
  }
`;
