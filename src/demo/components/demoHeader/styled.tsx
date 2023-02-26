import styled from "styled-components";
import { BackgroundBlur } from "../../../components/buidl1Header/styled";

export const DemoBackgroundBlur = styled(BackgroundBlur)`
  height: 22.063rem;
`;

export const DemoHeaderSection = styled.div`
  width: 100%;
  height: 23.188rem;
  display: flex;
  flex-direction: column;
  padding: 2.813rem 0;
  gap: 2.8rem;
`;

export const DemoPersonalInfo = styled.div`
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
  }
`;

export const DemoPersonalValue = styled.p`
  margin-left: 2.5rem;
  padding: 0;

  text-align: left;
  font-family: "Space Grotesk", sans-serif;
  font-size: 19px;
  font-weight: 400;

  &.balance {
    color: #3aedc4;
  }

  &.investment {
    color: rgba(58, 237, 196, 0.35);
  }

  &.reward {
    color: rgba(0, 196, 255, 0.54);
    font-size: 16px;
  }

  &.power {
    color: rgba(255, 196, 0, 0.51);
    font-size: 16px;
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
