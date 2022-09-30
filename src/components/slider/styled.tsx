import ReactSlider from "react-slider";
import styled, { css, keyframes } from "styled-components";

interface Props {
  index?: number;
  progress?: number;
  funds?: string;
}

export const StyledTrack = styled.div<Props>`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index ? "#2b3453" : "#29F7DF")};
  border-radius: 12px;
  &.blue {
    background: ${(props) => (props.index ? "#2b3453" : "#1EB5FF")};
  }
  position: relative;

`;

export const SoftCapIndicator = styled.div<Props>`
  height: 1.7rem;
  width: 0px;
  border-left: 2px dashed rgb(255 255 255 / 50%);
  position: absolute;
  bottom: 15%;
  left: 80%;
  z-index: 99999;

  &:after {
    content: "${(props) => props?.funds} ETH";
    position: absolute;
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: #ffffff;
    bottom: 100%;
    left: -37px;
    white-space: nowrap;
  }

  &:before {
    content: "Soft Cap";
    position: absolute;
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: rgba(255, 255, 255, 0.42);
    left: -25px;
    bottom: 160%;
    white-space: nowrap;
  }
`;

export const HardCapIndicator = styled.div<Props>`
  height: 1.728rem;
  width: 0px;
  border-left: 2px dashed rgb(255 255 255 / 50%);
  position: absolute;
  bottom: 15%;
  right: 1.1%;
  z-index: 99999;
  &:after {
    content: "${(props) => props?.funds} ETH";
    position: absolute;
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: #ffffff;
    bottom: 100%;
    left: -37px;
    white-space: nowrap;
  }

  &:before {
    content: "Hard Cap";
    position: absolute;
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: rgba(255, 255, 255, 0.42);
    left: -25px;
    bottom: 160%;
    white-space: nowrap;
  }
`;

export const STooltip = styled.span`
  visibility: visible;
  display: inline-block;
  max-width: 4rem;
  white-space: nowrap;
  pointer-events: none;
  background: #1eb5ff;
  box-shadow: 1px 1px 2px #00000066;
  opacity: 1;
  color: #ffffff;
  font-size: 14px;
  font-family: "Space Grotesk", sans-serif;
  min-width: 3.25rem;
  height: 1.25rem;
  position: absolute;
  padding: 2px;
  border-radius: 3px;
  bottom: 180%;
  right: -125%;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -4px;
    border-width: 4px;
    border-style: solid;
    border-color: #1eb5ff transparent transparent transparent;
  }

  &.timeline {
    right: -155%;
  }
`;

export const StyledThumb = styled.div`
  position: relative;
  top: -60%;
  width: 1.063rem;
  height: 1.063rem;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #29f7df;
  border-radius: 100%;

  &:focus-visible,
  &:hover {
    outline: none;

    & > ${STooltip} {
      visibility: visible;
    }
  }

  &.blue {
    border: 1px solid #1eb5ff;
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 0.5rem;
  position: relative;
`;
