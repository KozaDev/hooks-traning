import styled from 'styled-components';

export const Wrapper = styled.main`
  position: absolute;
  top: ${({ theme }) => theme.sizes.desktop.header};
  left: ${({ theme }) => theme.sizes.desktop.aside};
  width: calc(100% - ${({ theme }) => theme.sizes.desktop.aside});
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: 922px) {
    top: ${({ theme }) => theme.sizes.mobile.header};
    left: 0;
    width: 100%;
  }
`;
