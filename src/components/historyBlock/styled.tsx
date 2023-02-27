import styled, { css } from "styled-components";
import { BlockWrapper } from "../fundingBlock/styled";

export const HistoryTable = styled(BlockWrapper)`
  height: 386px;
  width: 100%;
  padding: 20px;
  background: #1f233c 0% 0% no-repeat padding-box;
  border-radius: 20px;
  border: 1px solid #157fc1;
  opacity: 0.85;
  overflow: auto;

  ${BlockWrapper};
`;

export const HistoryFlex = styled.div`
  display: flex;
  flex: 2 1 auto;
  justify-content: space-between;
`;
