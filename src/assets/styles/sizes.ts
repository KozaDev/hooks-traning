export interface Isizes {
  breakpoints: {
    mobile: string;
  };
  desktop: {
    aside: string;
    header: string;
    footer: string;
  };
  mobile: {
    aside: string;
    header: string;
    footer: string;
  };
  font: {
    xl: string;
    l: string;
    m: string;
    s: string;
  };
}

export const sizes: Isizes = {
  breakpoints: {
    mobile: '922px'
  },
  desktop: {
    aside: '300px',
    header: '50px',
    footer: '200px'
  },
  mobile: {
    aside: '200px',
    header: '100px',
    footer: '200px'
  },
  font: {
    xl: '24px',
    l: '17px',
    m: '12px',
    s: '11px'
  }
};
