import React, { useState } from 'react';
import { GlobalStyle } from '../../../assets/styles/GlobalStyles';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { darkMode, ligthMode } from '../../../assets/styles/colors';
import { sizes } from '../../../assets/styles/sizes';

const App: React.FC = () => {
  const [theme, setTheme] = useState({ colors: ligthMode, sizes });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime,
          minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem
          inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore
          nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut
          magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam
          impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit,
          dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil
          aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam
          aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla
          voluptas facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas
          facilis ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis
          ratione. Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione.
          Debitis alias praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias
          praesentium delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium
          delectus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus
          similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima autem inventore nisi aut magnam impedit, dolores nihil aliquam aperiam nulla voluptas facilis ratione. Debitis alias praesentium delectus similique.
        </div>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default App;
