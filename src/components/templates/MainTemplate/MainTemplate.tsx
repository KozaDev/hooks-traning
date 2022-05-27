import React from 'react';
import Aside from '../../organisms/Aside/Aside';
import Header from '../../organisms/Header/Header';
import { Wrapper } from './MainTemplate.style';

interface AuxProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: AuxProps) => {
  return (
    <>
      <Header />
      <Aside />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default MainTemplate;
