import Image from "next/image";
import styled from "styled-components";
import { FeaturesSec } from "../../../components/featuredProjectsSection/styled";



export const EnvironmentDisclaimerContainer = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  border: 1px solid #ffbc0d;
  padding: 0.3rem 0.357rem;
`;

export const TestDisclaimer = styled.div`
  color: #ffbc0d;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #ffbc0d;
  opacity: 1;
`;

export const TaskSelectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 25.4rem;
  gap: 0.633rem;
`;

export const ResetButton = styled.button`
  border: 1px solid #ffc400;
  background: transparent;
  height: 100%;
  width: 10.409rem;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #ffc400;
  opacity: 1;
  gap: 1.248rem;
  cursor: pointer;
`;

export const SwitchTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  height: 1.438rem;
  width: 1.438rem;
  border-radius: 50%;
  background: rgba(255, 188, 13, 1);

  &.disabled {
    opacity: 0.4;
  }
`;

export const Arrow = styled.span`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;

  &.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  &.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
`;

export const DemoFeaturesSec = styled(FeaturesSec)`
  margin-top: 30px;
  &.last {
    margin-bottom: 10rem;
  }
`;
