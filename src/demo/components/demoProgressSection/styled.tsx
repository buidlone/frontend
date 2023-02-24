import styled from "styled-components";
import { DetailsCard } from "../../../components/progressInfoBlock/styled";
import { ProgressRoadmapWrapper } from "../../../components/progressRoadmap/styled";
import {
  ProgressBlockWrapper,
  ProgressContentWrapper,
} from "../../../components/progressSection/styled";

export const DemoProgressBlockWrapper = styled(ProgressBlockWrapper)`
  height: 29.563rem;
  width: 100%;
  padding: 30px;
`;

export const DemoDetailsCard = styled(DetailsCard)`
  height: 369px;
  min-width: 527px;
  margin-right: 0;
  margin-left: 30px;
  margin-top: 65px;

`;

export const DemoProgressContentWrapper = styled(ProgressContentWrapper)`
  width: 100%;
  height: 100%;

  margin: 0;
`;
