import styled from "styled-components";
import { DetailsCard } from "../../../components/progressInfoBlock/styled";
import { ScrollableContainerWrapper } from "../../../components/progressRoadmap/styled";
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


