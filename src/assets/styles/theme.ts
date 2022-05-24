import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      white: string;
      lightGrey: string;
      grey: string;
      darkGrey: string;
      black: string;
      success: string;
      error: string;
      warning: string;
      darkPurple: string;
      lightPurple: string;
    };
    fontSize: {
      xl: string;
      l: string;
      m: string;
      s: string;
    };
    navWidth: {
      desktop: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    lightGrey: '#F7F8FA',
    grey: '#C0C7D6',
    darkGrey: '#737C8E',
    black: '#111111',
    success: '#8FCB81',
    error: '#CB8581',
    warning: '#E1D888',
    darkPurple: '#C0C7D6',
    lightPurple: '#ECEFF7'
  },
  fontSize: {
    xl: '24px',
    l: '17px',
    m: '12px',
    s: '11px'
  },
  navWidth: {
    desktop: '300px'
  }
};
