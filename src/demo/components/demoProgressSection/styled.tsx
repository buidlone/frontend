import styled from "styled-components";
import {
  DetailsCard,
  OrangeButton,
} from "../../../components/progressInfoBlock/styled";
import {
  ProgressBlockWrapper,
  ProgressContentWrapper,
} from "../../../components/progressSection/styled";

export const DemoProgressBlockWrapper = styled(ProgressBlockWrapper)`
  min-height: 29.563rem;
  width: 100%;
  padding: 1.875rem;
  display: flex;
`;

export const DemoDetailsCard = styled(DetailsCard)`
  height: 23.063rem;
  min-width: 32.938rem;
  margin: 1.8rem 0 0 0;
`;

export const DemoProgressContentWrapper = styled(ProgressContentWrapper)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  gap: 1.875rem;
`;

export const StopButton = styled(OrangeButton)`
  background: rgba(255, 188, 13, 1);
  border-radius: 17px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
`;
