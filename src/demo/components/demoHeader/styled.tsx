import styled from "styled-components";
import { BackgroundBlur } from "../../../components/buidl1Header/styled";
import { RoundButton } from "../demoMessagesModal/styled";

interface Props {
  active?: boolean;
}
export const DemoBackgroundBlur = styled(BackgroundBlur)`
  height: 22.063rem;
`;

export const DemoHeaderSection = styled.div`
  width: 100%;
  height: 23.188rem;
  display: flex;
  flex-direction: column;
  padding: 2.813rem 0;
  gap: 2.856rem;
`;

export const DemoPersonalInfo = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  padding: 0 1.563rem 0 1.375rem;
  height: 2.449rem;
  width: fit-content;
  border: 1px solid #7e7e83;
  text-align: left;
  font-family: "Space Grotesk" sans-serif;
  font-size: 16px;
  color: rgba(228, 228, 228, 0.51);

  &.balance {
    border: 1px solid #00ffc4;
    padding-left: 0.851rem;
  }

  &.investment {
    border-color: ${(props) => (props.active ? "#3AEDC4" : "#7e7e83")};
  }

  &.reward {
    border-color: ${(props) => (props.active ? "#00C4FF" : "#7e7e83")};
  }

  &.power {
    border-color: ${(props) => (props.active ? "#FFB100" : "#7e7e83")};
  }

  @media screen and (max-width: 1025px) {
    height: 2.6rem;
  }
`;

export const DemoPersonalValue = styled.p<Props>`
  margin-left: 2.5rem;
  padding: 0;
  text-align: left;
  font-family: "Space Grotesk", sans-serif;
  font-size: 19px;
  font-weight: 400;

  @media screen and (max-width: 1025px) {
    margin-left: 1rem;
    white-space: nowrap;
    font-size: 16px;
  }

  &.balance {
    color: #3aedc4;
  }

  &.investment {
    color: ${(props) =>
      props.active ? "rgba(58, 237, 196, 1)" : " rgba(58, 237, 196, 0.35)"};
  }

  &.reward {
    color: ${(props) =>
      props.active ? "rgba(0, 196, 255, 1)" : " rgba(0, 196, 255, 0.54)"};
    font-size: 16px;
  }

  &.power {
    color: ${(props) =>
      props.active ? "rgba(255, 196, 0, 1)" : " rgba(255, 196, 0, 0.51)"};
    font-size: 16px;
  }
  &.bigger {
    font-size: 19px;
  }
`;

export const DemoHeaderText = styled.div`
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 23px;
  font-weight: 300;
  color: #ffbc0d;
`;

export const DemoButton = styled.a`
  display: none;
  width: 260px;
  height: 115px;
  background-color: #00c4ff;
  border-radius: 5px;
  color: black;
  font-size: 20px;
  padding: 4px;
  text-align: center;
  border: none;
  font-weight: 100;
  font-family: "Space Grotesk";
`;

export const ExitLink = styled.a`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 300;
  color: #ffbc0d;
  font-size: 16px;
  cursor: pointer;
`;

export const BottomInline = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 1.1rem;

  & > ${RoundButton} {
    margin: 0 auto;
    margin-right: 0;
    border-radius: 20px;
  }
`;

export const Wallet = styled.span`
  color: #7e7e83;
  padding-right: 0.69rem;
`;
