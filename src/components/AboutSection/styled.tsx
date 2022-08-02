import styled, { css } from 'styled-components';
import { BlockWrapper } from '../fundingBlock/styled';

export const AboutButton = styled.button`
  border-color: transparent;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 18px;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  color: #c1c1c1;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  
  &:focus {
    color: #ffffff;
    border-bottom: 0.2px solid #ffffff;
  }

  /* &:hover {
    color: #ffffff;
    border-bottom: 0.2px solid #ffffff;
  } */
`;

export const ButtonsWrapper = styled.div`
  margin: 90px 0 30px 0;
  //background-color: blue;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  padding-right: 2rem; ;
`;

export const AboutSec = styled.section`
  //background-color: pink;
  display: flex;
  align-items: start;
  justify-content: center;
  padding-bottom: 100px;
  flex-wrap: wrap;
`;

// export const AboutTable = styled(BlockWrapper)`
//   height: 386px;
//   width: 100%;
//   padding: 50px;
//   background: #1F233C 0% 0% no-repeat padding-box;
//   border: 1px solid #157FC1;
//   opacity: 0.85;

//   ${BlockWrapper};
// `;

// export const ProjectName = styled.p`
//   font-size: 30px;
//   color: rgba(255, 255, 255, 1);
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-weight: 300;
//   margin: 0;
//`;
