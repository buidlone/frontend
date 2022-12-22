import ScrollContainer from "react-indiana-drag-scroll";
import styled, { css, keyframes } from "styled-components";
import { RoadmapBubble } from "../fundingRoadmap/styled";

interface Props {
  stage?: string;
  current?: boolean;
  date?: string;
  progress?: number;
  scale?: number;
  completed?: boolean;
  ref?: any;
}

const pulse = keyframes`
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

export const TimelineScroll = styled(ScrollContainer)`
  padding-top: 2.3%;
  cursor: grab;
  position: relative;
  width: 100%;

  &::-webkit-scrollbar {
    height: 0.625rem;
  }

  &::-webkit-scrollbar-track {
    background: #1d1e2e 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
  }

  &::-webkit-scrollbar-thumb {
    background: #2e436c 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 4px;
    opacity: 1;
    width: 12.688rem;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const TProgress = styled.div<Props>`
  background-color: #009dff !important;
  left: 0;
  position: relative;
  max-width: 100%;
  width: ${(props) => (props.progress ? props.progress : 0)}% !important;
  transition: 0.3s;
  opacity: 1 !important;

  &:after {
    content: "${(props) => props.date}";
    position: absolute;
    font-size: 0.625rem;
    font-family: "Barlow", sans-serif;
    color: #e2e2e2;
    top: 300%;
    white-space: nowrap;
  }
`;

export const TimelineBar = styled.div<Props>`
  width: 100%;
  min-width: max-content;

  margin: 12.2rem 0rem 0rem 0rem;
  position: relative;
  display: inline-flex;
  gap: ${(props) => (props.scale === 3 ? "5.5%" : " 3px")};

  justify-content: space-between;

  &:before,
  & > ${TProgress} {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 4.5px;
    width: 100%;
    background-color: #00c4ff8f;
    opacity: 0.5;
  }
`;

export const TimelineStep = styled.div<Props>`
  ${(props) => {
    if (props.scale === 2) {
      return `
       min-width: 4.625rem; 
       
      `;
    } else if (props.scale === 3) {
      return `
     
      min-width: 80%;
      
    
      `;
    } else {
      return `
      min-width: 1.438rem;
      `;
    }
  }};

  display: flex;
  justify-content: space-evenly;
  position: relative;
  flex: 1;

  &:before {
    ${(props) => {
      if (props.scale === 1) {
        return `
        content: "${props.stage
          ?.charAt(0)
          .toUpperCase()
          .concat(props.stage?.slice(-2))}";
`;
      } else {
        return `
        content: "";
      `;
      }
    }};

    position: absolute;
    bottom: calc(100% + 6.4rem);
    font-size: 0.688rem;
    font-family: "Barlow", sans-serif;
    color: #e3e3e3;
    text-align: left;
    max-width: 3rem;
    white-space: nowrap;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 168px;
    bottom: calc(100% + 0.2rem);
    transform: matrix(-1, 0, 0, -1, 0, 0);
    opacity: 0.45;

    ${(props) => {
      if (props.current) {
        return `
        background: transparent linear-gradient(180deg, #00C4FF 0%, #00C4FF00 100%) 0% 0% no-repeat padding-box;
        `;
      } else if (props.completed) {
        return `
        background: transparent linear-gradient(180deg, #00C4FF 0%, #00C4FF8F 44%, #00C4FF00 100%) 0% 0% no-repeat padding-box;
opacity: 1;
`;
      } else {
        return `
        background: transparent linear-gradient(180deg, #00C4FF 0%, #00C4FF00 100%) 0% 0% no-repeat padding-box;
opacity: 0.3;
      `;
      }
    }};

    animation: ${(props) =>
      props.current
        ? css`
            ${pulse} 3s infinite linear
          `
        : ""};
  }
`;

export const DateStep = styled.div<Props>`
  ${(props) => {
    if (props.scale === 2) {
      return `
      min-width: 4.625rem;  
      `;
    } else if (props.scale === 3) {
      return `
     
      min-width: 80%;
      
     

      `;
    } else {
      return `
    
      min-width: 1.438rem;
      `;
    }
  }};

  height: 0px;
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1;

  &:after {
    ${(props) => {
      if (props.scale === 1) {
        return `
        content: "${props.date}";
`;
      } else if (props.scale === 2) {
        return `
        content: "${props.date}";
`;
      } else {
        return `
        content: "${props.date}";
      `;
      }
    }};

    position: absolute;
    font-size: 10px;
    font-family: "Barlow", sans-serif;
    color: ${(props) => (props.scale === 3 ? "#F0F0F0" : "#e2e2e2")};
    white-space: nowrap;
  }
`;

export const DateBar = styled.div<Props>`
  width: 100%;
  margin: 0.644rem 0rem 1.7rem 0rem;
  display: inline-flex;
  justify-content: space-between;
  position: relative;
  gap: ${(props) => (props.scale === 3 ? "5.5%" : " 3px")};

  justify-content: space-between;

  &:before {
    background: none;
    position: absolute;
    width: 100%;
    left: 18%;
  }
`;

export const VerticalLine = styled.div<Props>`
  height: 105px;
  background: transparent;
  border-left: 2px dashed rgb(255 255 255 / 70%);
  position: absolute;
  display: flex;
  justify-content: center;
  top: calc(100% - 6rem);
  left: 7%;
  opacity: 1;

  &:after {
    content: "${(props) => props.date}";
    position: absolute;
    font-size: 0.625rem;
    font-family: "Barlow", sans-serif;
    color: #e2e2e2;
    top: 6.75rem;
    right: calc(100% - 1.2rem);
    white-space: nowrap;
  }
`;

export const Bubble = styled(RoadmapBubble)<Props>`
  position: absolute;
  top: calc(100% - 0.7rem);
  left: 86.5%;
  z-index: 1;

  &:after {
    content: "${(props) => props.date}";
    position: absolute;
    font-size: 0.625rem;
    font-family: "Barlow", sans-serif;
    color: #e2e2e2;
    top: 120%;
    white-space: nowrap;
    opacity: 1;
  }
`;
