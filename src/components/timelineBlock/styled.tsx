import styled, { css } from "styled-components";
import { BlockWrapper } from "../fundingBlock/styled";
import breakpoints from "../../../styles/constants";

export const TopWrapper = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 3px 0 5px;

  .buttons {
    gap: 1rem;
    margin-right: 5px;
  }
`;

export const SizeBubble = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3px;
  background: #00c4ff 0% 0% no-repeat padding-box;
`;

export const XButton = styled.button`
  background: #2e436c;
  width: 25.97px;
  height: 25.57px;
  border: none;
  border-radius: 50%;
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  opacity: 1;
  text-align: center;
  font-size: 14px;
  cursor: pointer;

  &:focus,
  &:hover,
  &.selected {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    background: #00c4ff;
  }

  &.disabled {
    &:focus,
    &:hover {
      cursor: auto;
      outline-style: none;
      box-shadow: none;
      border-color: transparent;
      background: #2e436c;
    }
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  gap: 8rem;
  position: absolute;
  bottom: 7%;

  .centerItems {
    align-items: end;
  }

  @media screen and ${breakpoints.Device.mobile} {
    max-width: 450px !important;
    width: 90%;
    gap: 15px;
    justify-content: space-between;
  }
`;

export const BottomPartWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Barlow", sans-serif;
  color: #dbdbdb;
  font-size: 12px;

  .dateNum {
    color: #00ffc4;
  }

  .dateWords {
    color: #00c4ff;
  }
  .period {
    color: #c7c7c7;
  }
  @media screen and ${breakpoints.Device.mobile} {
    width: 200px;
  }
`;

export const InlineWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  opacity: 1;
  font-family: "Barlow", sans-serif;
  color: #dbdbdb;
  font-size: 12px;
  gap: 0.5rem;
`;

export const InfoIcon = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #2e436c 0% 0% no-repeat padding-box;
  border: 1px solid #f7f7f7;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7px 1px 0 0;

  &::after {
    content: "i";
    text-align: left;
    font-family: "Space Grotesk", sans-serif;
    font-size: 10px;
    font-weight: 700;
    color: #d9d9d9;
    opacity: 1;
  }
`;

