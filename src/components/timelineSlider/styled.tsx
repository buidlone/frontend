import ReactSlider from "react-slider";
import styled, { css, keyframes } from "styled-components";
import { StyledSlider } from "../slider/styled";

interface Props {
  index?: number;
  progress?: number;
  softCapPosition?: number;
}

export const SoftCapIndicator = styled.div<Props>`
  height: 1.728rem;
  width: 0px;
  border-left: 2px dashed rgb(255 255 255 / 42%);
  position: absolute;
  bottom: 15%;
  left: calc(${(props) => props?.softCapPosition}%);

  &:before {
    content: "Soft Cap";
    position: absolute;
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: rgba(255, 255, 255, 0.42);
    right: 0;
    bottom: 120%;
    white-space: nowrap;
  }
`;

export const HardCapIndicator = styled.div<Props>`
  height: 1.728rem;
  width: 0px;
  border-left: 2px dashed rgb(255 255 255 / 42%);
  position: absolute;
  bottom: 15%;
  left: 99.4%;

  &:before {
    content: "Hard Cap";
    position: absolute;
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: rgba(255, 255, 255, 0.42);
    right: 0;
    bottom: 160%;
    bottom: 120%;
    white-space: nowrap;
  }
`;

export const StyledTimelineSlider = styled(StyledSlider)`
  .example-mark {
    bottom: -100%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #2b3453;

    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;

    position: relative;

    &:before {
      content: "Current state";
      position: absolute;
      font-size: 14px;
      font-family: "IBM Plex Sans", sans-serif;
      color: rgba(0, 196, 255, 0.75);
      left: 50%;
      bottom: -130%;
      white-space: nowrap;
    }

    &:after {
      content: "";
      height: 0.808rem;
      width: 0px;
      border-left: 2px dashed rgba(0, 196, 255, 0.73);
      position: absolute;
      top: 100%;
      left: 50%;
    }
  }
`;
