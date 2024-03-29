import styled from "styled-components";
import { position } from ".";

interface Props {
  show?: number;
  posRef?: any;
  delay?: number;
  placement: string;
  nowrap?: boolean;
  fundsObject?: any;
}

export const StyledTooltip = styled.span<Props>`
  position: fixed;
  top: ${(props) => props.posRef.current.y}px;
  left: ${(props) => props.posRef.current.x}px;

  z-index: 9999;
  display: inline-block;

  pointer-events: none;

  opacity: ${(props) => props.show};

  background-color: #2e436c;
  box-shadow: 0px 0px 10px #00000029;
  text-align: left;
  border-radius: 13px;
  padding: 13px 13px;

  font-size: 16px;
  color: #00c4ff;
  font-family: "Barlow", sans-serif;

  font-weight: 300;

  transition-property: transform, opacity !important;
  transition-duration: 0.06s !important;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1) !important;
  transition-delay: ${(props) => (props.show ? props.delay : 0.02)}s !important;
  transform-origin: ${(props) => position(props.placement).negate()};
  transform: scale(${(props) => (props.show ? 1 : 0.7)});

  ${(props) => {
    if (props.nowrap) {
      return `
      white-space: nowrap;
       
      `;
    } else if (props.fundsObject) {
      return `
      display: flex;
      max-width: 500px;
      white-space: wrap;
      `;
    } else {
      return `
      max-width: 310px;
      white-space: wrap;
      `;
    }
  }};

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #2e436c transparent transparent transparent;
  }
`;
