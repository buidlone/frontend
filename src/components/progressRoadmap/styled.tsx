import ScrollContainer from "react-indiana-drag-scroll";
import styled, { css, keyframes } from "styled-components";
import { Tooltip } from "../milestonesTooltip/styled";

//Passed props
interface Props {
  progress?: number;
  completed?: boolean;
  active?: boolean;
  stage?: string;
  unlocked?: boolean;
  ref?: any;
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
  min-height: 295px;
  background: #1d2031 0% 0% no-repeat padding-box;
  box-shadow: inset 0px -20px 20px #1c192769;
  border-radius: 10px;
  opacity: 1;
  margin-top: 1rem;
  padding-left: 3.5rem;
  padding-right: 1rem;
`;

export const ProgressRoadmapWrapper = styled.div`
  min-width: 30%;
  min-height: 370px;
  margin: 32px;
  margin-top: 0px;
  flex: 1;
  position: relative;
`;

export const Title = styled.text`
  color: rgb(255 255 255 / 50%);
  font-size: 12px;
  font-family: 'IBM Plex Sans', sans-serif;
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
    } else if (props.active) {
      return `
        background-color: #00C4FF;
      `;
    } else {
      return `
        //background-color: #2e436c;
        background-color: #00C4FF;
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
    //bottom: calc(100% + 1rem);
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
  &:before,
  & > ${Progress} {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 5px;
    width: 100%;
    background-color: #00c4ff;
    opacity: 0.16;
  }
`;

export const ProgressBar = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 4rem 2.5rem auto 1rem;
  //gap: 6.438rem;
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
  background-color: #00ffc4;
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
    opacity: ${(props) => (props.unlocked ? 1 : 0.09)};
    transform: matrix(-1, 0, 0, -1, 0, 0);
    pointer-events: none;

    background: transparent
      linear-gradient(
        180deg,
        #00ffc4 0%,
        #00ffc4 10%,
        #2e436c 86%,
        #2e436c 100%
      )
      0% 0% no-repeat padding-box;

    border-radius: 14px;
    animation: ${(props) =>
      props.active
        ? css`
            ${barGrow} 4s infinite linear
          `
        : ""};
  }
`;

export const Funds = styled.div`
  width: 3rem;
  top: calc(100% + 3px);
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #00fbc7;
  text-align: center;
  position: absolute;
  white-space: nowrap;

  &:before {
    content: "";
    background: #ff8900;
    box-shadow: 0px 0px 5px #ffba00a8;
    opacity: 1;
    border-radius: 50%;
    right: calc(100% + 5px);
    top: 40%;
    width: 7px;
    height: 7px;
    position: absolute;
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
