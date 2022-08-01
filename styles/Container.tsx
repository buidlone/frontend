import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3rem; // 50px

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
