import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: ${({ theme }) => theme.sizes.desktop.header};
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;
