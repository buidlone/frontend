import Select from "react-select";
import styled, { css, keyframes } from "styled-components";
import { BlockWrapper, GreenButton } from "../fundingBlock/styled";
import "react-circular-progressbar/dist/styles.css";
import { InlineWrapper } from "../timelineBlock/styled";

interface Props {
  currency?: string;
  row?: boolean;
  disabled?: boolean;
}

export const CalculatorBlock = styled(BlockWrapper)`
  width: 100%;

  max-width: 60.063rem;
  height: 23.938rem;

  padding: 0;
  @media screen and (max-width: 1394px) {
    width: 100%;
  }
`;
export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  gap: 1.219rem;
  margin-bottom: 0.5rem;
`;
export const CurrencyIndicator = styled.span`
  position: absolute;
  color: #00ffc4;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  font-size: 15px;
  border-left: 1.5px solid #00ffc4;
  padding-left: 1%;
  padding-right: 4%;
  right: 2%;
  bottom: 26%;
`;

export const InputFieldWrapper = styled.div`
  width: fit-content;
  min-width: 50%;
  height: 2.5rem;
  position: relative;
  flex-grow: 1;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  background: #1d2031;
  box-shadow: inset 0px 0px 5px #141620;
  border-radius: 8px;
  opacity: 1;
  padding-left: 3%;
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
    padding-right: 26%;
  }

  @media screen and (max-width: 800px) {
    padding-left: 6.3%;
  }
`;

export const VotingWrapper = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 2%;
  font-size: 25px;
  font-weight: 500;
  font-family: "Space Grotesk", sans-serif;

  ${InlineWrapper} {
    margin-bottom: 2rem;
  }

  .votingPercentage {
    color: #ffb100;
    text-shadow: 0px 0px 6px #ffb1008c;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sign {
      font-size: 15px;
      margin-right: 2%;
      font-weight: bold;
    }
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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 90%;
  background: #2e314d 0% 0% no-repeat padding-box;
  border-radius: 20px;
  opacity: 1;
  position: relative;
  display: flex;
  padding: 1.419rem 1.5rem 1.875rem 1.5rem;
`;

export const PBWrapper = styled.div`
  width: 11.182rem;
  height: 11.182rem;
  margin-bottom: 0.669rem;
`;

export const IButton = styled(GreenButton)<Props>`
  width: 100%;
  max-width: 15.375rem;
  min-height: 2.5rem;
  margin-top: 1rem;
  background: transparent linear-gradient(168deg, #3aedc4 0%, #469898 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #00ffc4;
  border-radius: 12px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  transition: none;
`;

export const VotingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3%;
`;

export const VotingItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;

  .text {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 200;
  }

  .tokens {
    font-size: 14px;
    color: #1eb5ff;
  }

  .tickets {
    font-size: 14px;
    color: #ffb100;
  }
`;

export const Positioning = styled.div<Props>`
  width: 100%;
  justify-content: space-between;
  display: flex;
  //flex-direction: ${(props) => (props?.row ? "row" : "column")};
`;
