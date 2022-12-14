import styled, { css } from "styled-components";
import breakpoints from "../../../styles/constants";

interface Props {
  progress?: number;
  funds?: string;
  currency?: string;
  softCapPosition?: number;
}

export const FProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FundsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  font-size: 14px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 300;
  padding-top: 1.3%;

  .required {
    color: #f0f0f0;
  }

  .total {
    color: #3aedc4;
  }

  @media screen and ${breakpoints.Device.mobile} {
    font-size: 12px;
  }
`;

export const FProgress = styled.div<Props>`
  background-color: #00ffc4 !important;
  left: 0;
  position: relative;
  width: ${(props) => props.progress}% !important;
  transition: 0.3s;
  opacity: 1 !important;
`;

export const FundsBar = styled.div`
  width: 100%;
  height: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before,
  & > ${FProgress} {
    content: "";
    border-radius: 12px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 100%;
    background-color: #1f233c;
  }
`;

export const SoftCapIndicator = styled.div<Props>`
  height: 1.7rem;
  width: 0px;
  border-left: 2px dashed rgb(255 255 255 / 50%);
  position: absolute;
  bottom: 15%;
  left: calc(${(props) => props?.softCapPosition}%);
  z-index: 99999;

  &:before {
    content: "Soft cap";
    position: absolute;
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: rgba(240, 240, 240, 0.5);
    right: 0.5rem;
    bottom: 60%;
    white-space: nowrap;
    @media screen and ${breakpoints.Device.mobile} {
      font-size: 12px;
    }
  }
`;

export const HardCapIndicator = styled.div`
  height: 1.7rem;
  width: 0px;
  border-left: 2px dashed rgb(255 255 255 / 50%);
  position: absolute;
  bottom: 15%;
  left: 100%;
  z-index: 99999;

  &:before {
    content: "Hard cap";
    position: absolute;
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: rgba(240, 240, 240, 0.5);
    right: 0.5rem;
    bottom: 60%;
    white-space: nowrap;
    @media screen and ${breakpoints.Device.mobile} {
      font-size: 12px;
    }
  }
`;

