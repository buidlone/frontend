import styled from "styled-components";
import {
  CalculatorBlock,
  InputField,
  SelectWrapper,
} from "../../../components/calculator/styled";
import { GreenButton } from "../../../components/fundingBlock/styled";

export const DemoCalculatorBlock = styled(CalculatorBlock)`
  height: 20rem;
`;

export const DemoGreenButton = styled(GreenButton)`
  margin: auto;
  background: transparent linear-gradient(168deg, #3aedc4 0%, #469898 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #3aedc4;
  width: 15.375rem;
  transition: none;

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
  width: 83%;
  position: relative;
`;

export const InputFieldWrapper = styled.div`
  width: 14.938rem;
  height: 2.5rem;
  position: relative;
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
  right: 0%;
  bottom: 25%;
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
  position: absolute;
  margin: 0;
  padding: 0;
  font-family: "Space Grotesk", sans-serif;
  font-weight: lighter;
  font-size: 10px;
  color: rgba(228, 228, 228, 0.51);
  bottom: -23%;
  left: 0;
`;
