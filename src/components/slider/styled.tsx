import ReactSlider from "react-slider";
import styled, { css, keyframes } from "styled-components";

interface Props {
  index?: number;
  progress?: number;
  funds?: string;
  currency?: string;
  softCapPosition?: number;
}

export const StyledTrack = styled.div<Props>`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index ? "#2b3453" : "#29F7DF")};
  border-radius: 12px;
  position: relative;
`;

// export const STooltip = styled.span`
//   visibility: visible;
//   display: inline-block;
//   max-width: 4rem;
//   white-space: nowrap;
//   pointer-events: none;
//   background: #1eb5ff;
//   box-shadow: 1px 1px 2px #00000066;
//   opacity: 1;
//   color: #ffffff;
//   font-size: 14px;
//   font-family: "Space Grotesk", sans-serif;
//   min-width: 3.25rem;
//   height: 1.25rem;
//   position: absolute;
//   padding: 2px;
//   border-radius: 3px;
//   bottom: 180%;
//   right: -125%;

//   &:after {
//     content: "";
//     position: absolute;
//     top: 100%;
//     left: 50%;
//     margin-left: -4px;
//     border-width: 4px;
//     border-style: solid;
//     border-color: #1eb5ff transparent transparent transparent;
//   }

//   &.timeline {
//     right: -140%;
//   }
// `;

export const StyledThumb = styled.div`
  position: relative;
  bottom: -100%;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: #f1f9ff 0% 0% no-repeat padding-box;
  border-radius: 100%;
  border: 1px solid #29f7df;
  box-shadow: 0px 3px 20px #000000de;
  border: 1px solid #29f7df;

  &:focus-visible,
  &:hover {
    outline: none;
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 0.5rem;
  position: relative;
`;
