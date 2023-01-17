import ScrollContainer from "react-indiana-drag-scroll";
import styled, { css, keyframes } from "styled-components";
import { Tooltip } from "../milestonesTooltip/styled";
import breakpoints from "../../../styles/constants";

//Passed props
interface Props {
  progress?: number;
  completed?: boolean;
  active?: boolean;
  stage?: string;
  unlocked?: boolean;
  ref?: any;
  activeFunds?: boolean;
  milestone?: string;
  suspended?: boolean;
}

//Animations
const barGrow = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const rotateCircle = keyframes`
  0% {
    trasform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const ScrollableContainer = styled(ScrollContainer)`
  cursor: grab;
  position: relative;
  padding-right: 18rem !important;
  padding-left: 2.8rem !important;
  width: 100%;
`;
export const ScrollableContainerWrapper = styled.div`
  min-height: 295px;
  background: #1d2031 0% 0% no-repeat padding-box;
  box-shadow: inset 0px -20px 20px #1c192769;
  border-radius: 10px;
  opacity: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ProgressRoadmapWrapper = styled.div`
  min-width: 30%;
  min-height: 370px;
  margin: 32px;
  margin-top: 0px;
  flex: 1;
  position: relative;

  @media screen and ${breakpoints.Device.mobile} {
    margin: 15px;
  }
`;

export const Title = styled.text`
  color: rgb(255 255 255 / 50%);
  font-size: 12px;
  font-family: "IBM Plex Sans", sans-serif;
`;
export const Progress = styled.div<Props>`
  background-color: #00c4ff;
  width: ${(props) => (props.progress ? props.progress : 0)}% !important;
  transition: 0.3s;
  opacity: 1 !important;
`;

export const ProgressStep = styled.div<Props>`
  min-width: 1.563rem;
  height: 1.563rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex-wrap: wrap;
  position: relative;
  cursor: default;
  border: 1px solid rgba(0, 196, 255, 0.5);

  ${(props) => {
    if (props.completed) {
      return `
        background: #00C4FF;
        
      `;
    } else if (props.active || props.suspended) {
      return `
        background-color: #00C4FF;
      `;
    } else {
      return `
      background: #0E7298 0% 0% no-repeat padding-box;
      `;
    }
  }};

  &:before {
    ${(props) => {
      if (props.completed || props.active) {
        return `
       content: ''
        
      `;
      } else {
        return `
        content: "${props.stage}"
      `;
      }
    }};

    position: absolute;
    font-size: 0.75rem;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    color: #1d2031;
    text-align: center;
    width: 3.5rem;
    pointer-events: none;
    white-space: nowrap;
  }

  &:hover {
    opacity: 1;
    background-color: rgba(0, 196, 255, 0.16);

    & > ${Tooltip} {
      visibility: visible;
    }
  }
`;

export const MilestoneProgressWrapper = styled.div<Props>`
  display: flex;
  position: relative;
  align-items: center;
`;

export const MProgressBar = styled.div<Props>`
  width: 7rem;
  height: 5px;
  position: relative;
  background: rgba(0, 196, 255, 0.16);
  &:before,
  & > ${Progress} {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 5px;
    width: 100%;
  }
`;

export const ProgressBar = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 4rem 2.5rem auto 1rem;
  min-width: max-content;
`;

export const CheckMark = styled.div`
  height: 8px;
  width: 11px;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  position: absolute;
  margin-top: 6px;
  margin-left: 10px;
  transform: translate(-50%, -60%) rotate(-45deg);
  transform-origin: center center;

  &.lastMilestone {
    height: 27.25px;
    width: 38.74px;
    border-left: 6px solid #00c4ff;
    border-bottom: 6px solid #00c4ff;
    position: absolute;
    margin-top: 20px;
    margin-left: 40px;
    transform: translate(-50%, -60%) rotate(-45deg);
    transform-origin: center center;
  }
`;

export const DashedCircle = styled.div`
  width: 17px;
  height: 17px;
  transform: matrix(-1, 0.07, -0.07, -1, 0, 0);
  border: 1px dashed #1f233c;
  opacity: 1;
  position: absolute;
  border-radius: 50%;
  animation: ${rotateCircle} 3s linear infinite;
`;

export const LockBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  counter-reset: step;
  margin: 7rem 2.5rem auto 1rem;
  gap: 7rem;
`;

export const Lock = styled.div<Props>`
  min-width: 1.563rem;
  height: 1.563rem;
  background-color: ${(props) =>
    props.unlocked ? "#00ffc4" : props.suspended ? "#FFB100" : "#2B877A"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  cursor: default;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10rem;
    margin: 2px;
    opacity: ${(props) => (props.active || props.suspended ? 1 : 0.09)};
    transform: matrix(-1, 0, 0, -1, 0, 0);
    pointer-events: none;

    background: ${(props) =>
      props.suspended
        ? "transparent linear-gradient(180deg, #FFB100 0%, #FFB100 10%, #2E436C 86%, #2E436C 100%) 0% 0% no-repeat padding-box"
        : "transparent linear-gradient(180deg, #00FFC4 0%, #00FFC4 10%, #2E436C 86%, #2E436C 100%) 0% 0% no-repeat padding-box"};

    border-radius: 14px;
    animation: ${(props) =>
      props.active
        ? css`
            ${barGrow} 4s infinite linear
          `
        : ""};
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PBWrapper = styled.div`
  width: 5.526rem;
  height: 5.526rem;
  position: absolute;
  top: 100%;
  margin-left: 7.5rem;

  &:before {
    content: "Project complete";
    position: absolute;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 400;
    font-family: "IBM Plex Sans", sans-serif;
    color: #a5a5a5;
    top: 105%;
    left: 0;
  }

  .lastMilestoneProgress {
    color: #00c4ff;
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 20px;
  }
`;

export const PBContainer = styled.div``;

