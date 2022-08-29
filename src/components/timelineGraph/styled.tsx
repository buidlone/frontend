import styled, { css } from 'styled-components';
import { RoadmapBubble } from '../fundingRoadmap/styled';


interface Props {
  stage?: string;
  current?: boolean;
  date?: string;
  progress?: number;
}

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TProgress = styled.div<Props>`

  background-color: #00ffc4 !important;
  left: 0;
  position: relative;
  max-width: 99.5%;
  width: ${(props) => props.progress}% !important;
  transition: 0.3s;
  opacity: 1 !important;

  &:after {
    content: '${(props) => props.date}';
    position: absolute;
    font-size: 0.625rem;
    font-family: 'Barlow', sans-serif;
    color: #e2e2e2;
    top: 300%;
    white-space: nowrap;
  }
`;

export const TimelineBar = styled.div`
  width: 100%;
  margin: 13.2rem 0rem 0rem 0rem;
  position: relative;
  display: flex;
  justify-content: space-between;
 
  &:before,
  & > ${TProgress} {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 4.5px;
    width: 99.5%;
    background-color: #00c4ff8f;
    opacity: 0.5;
    margin-left: 0.09rem;
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
    content: '${(props) => props.date}';
    position: absolute;
    font-size: 0.625rem;
    font-family: 'Barlow', sans-serif;
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
    content: '${(props) => props.date}';
    position: absolute;
    font-size: 0.625rem;
    font-family: 'Barlow', sans-serif;
    color: #e2e2e2;
    top: 120%;
    white-space: nowrap;
    opacity: 1;
  }
`;

export const TimelineStep = styled.div<Props>`
  width: 100%;
  height: 0px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  position: relative;

  &:before {
    content: '${(props) => props.stage}';
    position: absolute;
    bottom: calc(100% + 6.4rem);
    font-size: 0.688rem;
    font-family: 'Barlow', sans-serif;
    color: #e3e3e3;
    text-align: left;
    max-width: 3rem;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 96%;
    height: 175px;
    bottom: calc(100% + 0.2rem);
    transform: matrix(-1, 0, 0, -1, 0, 0);
    opacity: 0.45;

    ${(props) => {
      if (props.current) {
        return `
      background: transparent linear-gradient(180deg, #00FFC4 0%, #00FFC400 100%) 0% 0% no-repeat padding-box;
      `;
      } else {
        return `
      background: transparent linear-gradient(180deg, #00C4FF 0%, #00C4FF8F 44%, #00C4FF00 100%) 0% 0% no-repeat padding-box;
      `;
      }
    }};
  }
`;
export const DateStep = styled.div<Props>`
  width: 100%;
  height: 0px;
  position: relative;

  &:after {
    content: '${(props) => props.date}';
    position: absolute;
    font-size: 0.625rem;
    font-family: 'Barlow', sans-serif;
    color: #e2e2e2;
    left: 140%;
    white-space: nowrap;
  }
`;

export const DateBar = styled.div`
  width: 85%;
  margin: 0.644rem 0rem 1.7rem 0rem;
  position: relative;
  display: flex;
  justify-content: space-between;

  &:before {
    background: none;
    position: absolute;
    width: 100%;
    left: 18%;
  }
`;
