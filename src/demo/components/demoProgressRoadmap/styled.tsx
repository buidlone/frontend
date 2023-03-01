import styled from "styled-components";
import {
  ProgressRoadmapWrapper,
  ScrollableContainer,
} from "../../../components/progressRoadmap/styled";

import { DemoGreenButton } from "../demoCalculator/styled";

export const DemoRefundButton = styled(DemoGreenButton)`
  margin-top: 1.856rem !important;
  margin-bottom: 0rem;
`;
export const DemoProgressRoadmapWrapper = styled(ProgressRoadmapWrapper)`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding-top: 0px;
`;

export const DemoScrollableContainer = styled(ScrollableContainer)`
  padding-right: 2.8rem !important;

  @media screen and (max-width: 991px) {
    padding-left: 10rem !important;
    padding-right: 10rem !important;
  } ;
`;
