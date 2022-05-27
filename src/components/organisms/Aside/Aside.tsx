import React from 'react';
import { StyledAside } from './Aside.styles';
import Navigation from '../../molecules/Navigation/Navigation';

const Aside: React.FC = () => {
  return (
    <>
      <StyledAside>
        <Navigation />
      </StyledAside>
    </>
  );
};

export default Aside;
