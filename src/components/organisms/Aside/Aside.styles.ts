import styled from 'styled-components';

export const StyledAside = styled.aside`
  position: fixed;
  top: ${({ theme }) => theme.sizes.desktop.header};
  left: 0;
  width: ${({ theme }) => theme.sizes.desktop.aside};
  height: calc(100vh - ${({ theme }) => theme.sizes.desktop.header});
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }

  &:hover::-webkit-scrollbar {
    width: 12px;
  }

  @media (max-width: 922px);
`;
