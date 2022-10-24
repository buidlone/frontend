import styled, { css } from "styled-components";

interface Props {
  progress?: number;
  funds?: number;
  currency?: string;
}

export const FProgressWrapper = styled.div`
  margin: 18% 10% 1% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FProgress = styled.div<Props>`
  background-color: #00ffc4 !important;
  left: 0;
  position: relative;
  width: ${(props) => props.progress}% !important;
  transition: 0.3s;
  opacity: 1 !important;
`;

export const FundsIndicator = styled.div<Props>`
  height: 2.45rem;
  width: 0px;
  border-left: 2px solid #d1d1d1;
  position: absolute;
  left: 100%;

  z-index: 99999;
  &:after {
    content: "${(props) => props?.funds} ${(props) => props?.currency}";
    position: absolute;
    font-size: 0.625rem;
    font-family: "IBM Plex Sans", sans-serif;
    color: #00ffc4;
    bottom: -40%;
    left: -2.2rem;
    white-space: nowrap;
  }
`;

export const FundsBar = styled.div`
  width: 100%;
  height: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before,
  & > ${FProgress} {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 7px;
    width: 100%;
    background-color: #00c4ff8f;
    opacity: 0.5;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 7px;
  background: #00ffc4;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const VerticalLine = styled.div`
  height: 80px;
  width: 1px;
  background: transparent;
  border-left: 2px dashed rgb(255 255 255 / 50%);
  position: absolute;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  z-index: -1;
`;

export const RoadmapBubble = styled.div`
  max-width: 1.563rem;
  width: 100%;
  height: 1.563rem;
  border-radius: 50%;
  background: #f1f9ff;
  border: 1px solid #157fc1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  z-index: 2;
  position: relative;
  right: 0.01rem;
`;

export const TextAboveDashed = styled.text`
  position: relative;
  color: rgb(255 255 255 / 50%);
  font-size: 16px;
  top: -40px;
  width: 90px;
  left: -45px;
  position: absolute;
  text-align: center;
`;

export const TextWhite = styled.text`
  position: relative;
  color: #e5e3ff;
  font-size: 16px;
  width: 90px;
  left: -45px;
  top: -20px;
  position: absolute;
  text-align: center;
`;
