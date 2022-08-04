import styled, { css } from 'styled-components';
import { BlockWrapper } from '../fundingBlock/styled';

export const DetailsTable = styled(BlockWrapper)`
  height: 386px;
  width: 100%;
  //padding: 50px;
  background: #1f233c 0% 0% no-repeat padding-box;
  border: 1px solid #157fc1;
  opacity: 0.85;
  display: flex;
  justify-content: space-between;
  align-items: start;

  ${BlockWrapper};

  .bigger {
    font-size: 21px;
  }

  .medium {
    font-size: 19px;
  }

  .smaller {
    font-size: 18px;
  }

  .blue {
    color: #00c4ff;
    opacity: 1;
  }
`;

export const FlexItem = styled.div`
  width: 40%;
  //background-color: green;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const FlexItem1 = styled.div`
  flex: 50%;
  //background-color: blue;
`;
export const FlexItem2 = styled.div`
  flex: 50%;
`;

export const Property = styled.p`
  color: white;
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  text-align: left;
  opacity: 0.5;
`;

export const Data = styled.p`
  color: white;
  font-family: 'Barlow', sans-serif;
  font-size: 20px;
  text-align: right;
  opacity: 0.5;
`;
