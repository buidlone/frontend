import styled from "styled-components";
import {
  ProgressRoadmapWrapper,
  ScrollableContainer,
} from "../../../components/progressRoadmap/styled";

import { DemoGreenButton } from "../demoCalculator/styled";

export const DemoRefundButton = styled(DemoGreenButton)`
  margin-top: 1.879rem;
  width: 18.563rem;
  height: 2.5rem !important;
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
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
