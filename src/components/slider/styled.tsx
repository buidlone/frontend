import ReactSlider from "react-slider";
import styled, { css, keyframes } from "styled-components";

interface Props {
  index?: number;
  progress?: number;
  funds?: string;
  currency?: string;
  softCapPosition?: number;
  blue?: boolean;
}

export const StyledTrack = styled.div<Props>`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index ? "#2b3453" : props.blue ? "rgba(0, 196, 255, 1)" : "#29F7DF"};
  border-radius: 12px;
  position: relative;
`;

export const StyledThumb = styled.div<Props>`
  position: relative;
  bottom: -110%;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: #f1f9ff 0% 0% no-repeat padding-box;
  border-radius: 100%;
  box-shadow: 0px 3px 20px #000000de;

  border: ${(props) =>
    props.blue ? "1px solid rgba(0, 196, 255, 1)" : "1px solid #29f7df"};

  &:focus-visible,
  &:hover {
    outline: none;
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 0.45rem;
  position: relative;
`;
