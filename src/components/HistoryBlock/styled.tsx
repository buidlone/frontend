import styled, { css } from 'styled-components';
import { BlockWrapper } from '../fundingBlock/styled';

export const HistoryTable = styled(BlockWrapper)`
  height: 386px;
  width: 100%;
  padding: 50px;
  background: #1F233C 0% 0% no-repeat padding-box;
  border: 1px solid #157FC1;
  opacity: 0.85;

  ${BlockWrapper};
`;