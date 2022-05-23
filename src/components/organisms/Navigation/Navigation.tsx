import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  width: ${({ theme }) => theme.navWidth.desktop};
  background-color: red;
  scrollbar-width: 2px;
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
        </ul>
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
