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
}

//Animations
const barGrow = keyframes`
  0%  {height:20px;}
  20%  {height:70.4px;}
  40%  {height:176px;}
  60%  {height:176px;}
  80%  {height:70.4px;}
  100% {height:20px;}
`;

export const ScrollableContainer = styled(ScrollContainer)`
  min-height: 295px;
  background: #1d2031 0% 0% no-repeat padding-box;
  box-shadow: inset 0px -20px 20px #1c192769;
  border-radius: 10px;
  opacity: 1;
  margin-top: 1rem;
  padding-left: 2.8rem;
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
  font-family: "IBM Plex Sans", sans-serif;
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
  cursor: pointer;
  position: relative;

  ${(props) => {
    if (props.completed) {
      return `
      
        // background-color: #00C4FF;
        // border: 1px solid #ffffff;

        background: #00C4FF;
        
      `;
    } else if (props.active) {
      return `
        // background-color: #2e436c;
        // border: 1px solid #00c4ff;
        
        background: #00C4FF 0% 0% no-repeat padding-box;
      `;
    } else {
      return `
        background-color: #2e436c;
      `;
    }
  }};

  &:before {
    content: "${(props) => props.stage}";
    position: absolute;
    bottom: calc(100% + 1rem);
    font-size: 0.875rem;
    font-family: "Barlow", sans-serif;
    font-weight: 300;
    color: #00c4ff;
    text-align: left;
    width: 3rem;
    pointer-events: none;
  }

  &:hover {
    & > ${Tooltip} {
      visibility: visible;
    }
  }
`;

export const Progress = styled.div<Props>`
  background-color: #00c4ff;
  width: ${(props) => props.progress}% !important;
  transition: 0.3s;
  opacity: 1 !important;
`;

export const ProgressBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 4rem 2.5rem auto 1rem;
  gap: 6.438rem;
  min-width: max-content;

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

export const DashedRound = styled.div`
  width: 17px;
  height: 17px;
  transform: matrix(-1, 0.07, -0.07, -1, 0, 0);
  border: 1px dashed #1f233c;
  opacity: 1;
  position: absolute;
  border-radius: 50%;
`;

export const LockBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  counter-reset: step;
  margin: 8rem 2.5rem auto 1rem;
  gap: 6.438rem;
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

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 11rem;
    margin: 2px;
    opacity: ${(props) => (props.unlocked ? 1 : 0.09)};
    transform: matrix(-1, 0, 0, -1, 0, 0);
    /* background: transparent
      linear-gradient(
        180deg,
        #00ffc4 0%,
        #00ffc4 10%,
        #00c4ff 86%,
        #00c4ff 100%
      )
      0% 0% no-repeat padding-box; */

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
  position: absolute;
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

  .topText {
    font-size: 9px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    color: #a5a5a5;
    opacity: 1;
    margin-bottom: 0.2rem;
  }

  .daysLeft {
    font-size: 21px;
    font-family: "Roboto", sans-serif;
    color: #00c4ff;
    opacity: 1;
  }
`;
