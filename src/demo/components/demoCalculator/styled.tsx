import styled from "styled-components";
import {
  CalculationWrapper,
  CalculatorBlock,
  CurrencyIndicator,
  InputField,
  SelectWrapper,
} from "../../../components/calculator/styled";
import { GreenButton } from "../../../components/fundingBlock/styled";

export const DemoCalculationWrapper = styled(CalculationWrapper)`
  padding: 1.875rem 1.875rem 0 1.875rem;
  gap: 0rem;
`;

export const DemoCalculatorBlock = styled(CalculatorBlock)`
  height: 20rem;
  flex-shrink: 1;
  padding-bottom: 0.6rem;
`;

export const DemoGreenButton = styled(GreenButton)`
  margin: auto;
  margin-top: 3.079rem;
  width: 14.938rem;
  height: 2.5rem !important;
  transition: none;
  background: rgba(25, 230, 183, 1);
  box-shadow: 0px 0px 15px rgba(0, 255, 196, 1);
  border-radius: 20px;
  color: rgba(31, 35, 60, 1);
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;

  &.disabled {
    opacity: 0.4;
    box-shadow: none;
    transform: none;
    &:hover {
      background: transparent linear-gradient(168deg, #3aedc4 0%, #469898 100%)
        0% 0% no-repeat padding-box;
    }
  }
`;

export const MaxButton = styled.button`
  width: 6.313rem;
  height: 2.5rem;
  background: #2e314d;
  border-radius: 8px;
  font-family: "Space Grotesk", sans-serif;
  font-size: 20px;
  font-weight: lighter;
  border: none;
  color: #3aedc4;
  opacity: 1;
  right: 24%;
  bottom: 0;
  cursor: pointer;
`;
export const DemoSelectWrapper = styled(SelectWrapper)`
  padding-top: 1.961rem;
  width: 83%;
  position: relative;
  padding-bottom: 2.523rem;
  margin-bottom: 0;
`;

export const InputFieldWrapper = styled.div`
  width: 14.938rem;
  height: 2.5rem;
  position: relative;
`;

export const Currency = styled(CurrencyIndicator)`
  padding-left: 3%;
  right: 2%;
`;

export const DemoInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: relative;
`;
export const DemoInputField = styled(InputField)`
  width: 100%;
  height: 100%;
`;

export const DemoBalance = styled.p`
  //position: absolute;
  margin: 0;
  padding: 0.7rem 0 0 0;

  font-family: "Space Grotesk", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 255, 196, 1);
  // bottom: -23%;
  //left: 3.2%;
  //bottom: 80%;
`;
