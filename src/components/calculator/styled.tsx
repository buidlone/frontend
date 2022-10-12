import Select from "react-select";
import styled, { css, keyframes } from "styled-components";
import { BlockWrapper, GreenButton } from "../fundingBlock/styled";
import "react-circular-progressbar/dist/styles.css";
import { InlineWrapper } from "../timelineBlock/styled";

export const CalculatorBlock = styled(BlockWrapper)`
  width: 72%;
  min-width: 39.063rem;
  min-width: 17.688rem;
  max-width: 60.063rem;
  height: 23.938rem;
  background: #1f233c;
  border-radius: 12px;
  padding: 0;
  @media screen and (max-width: 1394px) {
    width: 100%;
  }
`;
export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //gap: 1rem;
  width: 100%;
  height: 100%;
  position: relative;

  .ctext {
    font-size: 16px;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
  }

  .blueText {
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
  justify-content: flex-start;
  gap: 2.156rem;
  padding: 1.25rem 1.875rem;

`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  gap: 1.219rem;

  &::before {
    content: "$";
    position: absolute;
    top: 63%;
    left: 3%;
    z-index: 1;
    color: #00ffc4;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    font-size: 15px;
  }

`;

export const InputField = styled.input`
  width: 50%;
  height: 2.5rem;
  background: #1d2031;
  box-shadow: inset 0px 0px 5px #141620;
  border-radius: 8px;
  opacity: 1;
  padding-left: 5%;
  border: none;
  position: relative;
  outline: none;

  &,
  &::placeholder {
    text-align: left;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #00ffc4;
    opacity: 1;
  }

  @media screen and (max-width: 800px) {
    padding-left: 6.3%;
  }
`;

export const VotingWrapper = styled.div`
  width: 33%;

  font-size: 30px;
  font-weight: 500;
  font-family: "Space Grotesk", sans-serif;

  ${InlineWrapper} {
    margin-bottom: 2rem;
  }

  .votingPercentage {
    color: #ffb100;
    text-shadow: 0px 0px 6px #ffb1008c;
    opacity: 1;
  }

  .votingNumbers {
    color: #1eb5ff;
    text-shadow: 0px 0px 6px #1eb5ff8c;
    opacity: 1;
  }

  .smallBlue {
    font-size: 11px;
    margin-top: -9px;
  }
`;

export const PBContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 13px;
  box-shadow: inset 0px 0px 20px #404a8c;
  opacity: 1;
  position: relative;
  display: flex;
  padding: 2rem 1.5rem;
`;

export const PBWrapper = styled.div`
  width: 11.548rem;
  height: 13.433rem;
`;

export const IButton = styled(GreenButton)`
  width: 100%;
  margin-top: 1rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  background: transparent linear-gradient(167deg, #00ffeb 0%, #469898 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #00ffc4;
  border-radius: 12px;
  opacity: 1;
`;

export const VotingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 3%;
`;

export const VotingItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;

  .text {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }

  .tokens {
    font-size: 14px;
    color: #1eb5ff;
  }

  .tickets {
    font-size: 16px;
    color: #ffb100;
  }
`;