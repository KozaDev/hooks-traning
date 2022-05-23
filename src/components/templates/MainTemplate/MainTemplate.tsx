import React from 'react';
import Navigation from '../../organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.style';

interface AuxProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: AuxProps) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
