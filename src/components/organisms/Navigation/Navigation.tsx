import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 2px solid ${({ theme }) => theme.colors.darkGrey};
  width: ${({ theme }) => theme.navWidth.desktop};

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }

  &:hover::-webkit-scrollbar {
    width: 12px;
  }
`;

const Navigation: React.FunctionComponent = () => {
  return (
    <StyledNavigation>
      <nav>
        <ul>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
          <li>asda</li>
        </ul>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
