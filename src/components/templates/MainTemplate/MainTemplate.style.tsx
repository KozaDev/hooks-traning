import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  padding-left: ${({ theme }) => theme.navWidth.desktop};
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
