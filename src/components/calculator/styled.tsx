import Select from "react-select";
import styled, { css, keyframes } from "styled-components";
import { BlockWrapper, GreenButton } from "../fundingBlock/styled";
import "react-circular-progressbar/dist/styles.css";
import { InlineWrapper } from "../timelineBlock/styled";

export const CalculatorBlock = styled(BlockWrapper)`
  width: 71%;
  min-width: 17.688rem;
  max-width: 916px;
  height: 28.375rem;
  background: #1f233c;
  border-radius: 12px;
  padding: 1.3rem 1rem 1.8rem 1.9rem;
  @media screen and (max-width: 1394px) {
    width: 100%;
  }
`;
export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2.5rem;
  width: 100%;
  height: 100%;
  position: relative;

  .ctext {
    font-size: 16px;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }

  .text {
    font-size: 16px;
    font-weight: 500;
    font-family: "IBM Plex Sans", sans-serif;
    color: #1eb5ff;
  }
`;

export const CalculationWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 0.688rem;

  ${InlineWrapper} {
    margin-bottom: 2rem;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const SelectField = styled(Select)`
  max-width: 6.25rem;
  width: 100%;
  height: 2.5rem;
  position: absolute;
  right: 15%;
  bottom: 0%;
  font-family: "Space Grotesk", sans-serif;

  .react-select__control {
    background: #2b3453;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    border-color: #2b3453;
    opacity: 1;
    width: 100%;
    height: 100%;

    &:hover {
      border-color: #2b3453;
    }

    &:focus {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }

  .react-select__indicator-separator {
    background-color: #2b3453;
  }

  .react-select__indicator {
    padding-left: 0;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
  }
  .react-select__menu {
    background: #2b3453;
    //box-shadow: 0px 3px 6px #000000a3;
    border-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-top: 1px;
    z-index: 10;
    //border-color: #1a1d38;
    max-height: 7.625rem;
    padding: 0 0.3rem;
  }
  .react-select__menu-list {
    border-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow-y: scroll;
    max-height: 7.625rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    padding-top: 0%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    //border-top: 1px solid rgba(255, 255, 255, 1);

    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  .react-select__option {
    color: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    background-color: #2b3453;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    //height: "100%";

    &:hover,
    &:active {
      background-color: #2b3453;
      color: rgba(255, 255, 255, 1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    }
  }
  .react-select__single-value {
    color: rgba(255, 255, 255, 1);
    font-size: 18px;
    background-color: #2b3453;
  }
  .react-select__value-container {
    padding-right: 0;
  }
`;
export const InputField = styled.input`
  width: 65%;
  height: 2.5rem;
  background: #1d2031;
  box-shadow: inset 0px 0px 5px #141620;
  border-radius: 8px;
  opacity: 1;
  padding-left: 1rem;
  border: none;

  outline: none;
  position: relative;
  &,
  &::placeholder {
    text-align: left;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
    opacity: 1;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 30%;
  width: 100%;
  gap: 2.5rem;
`;
export const VotingWrapper = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.688rem;
  padding-bottom: 1.1rem;
`;

export const PBContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  box-shadow: inset 1px 1px 6px #00000082;
  border: 1px solid #1eb5ff;
  border-radius: 13px;
  opacity: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
`;

export const PBWrapper = styled.div`
  width: 10rem;
  height: 10rem;
`;

export const IButton = styled(GreenButton)`
  width: 100%;
  margin-top: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
`;
