import styled, { keyframes } from "styled-components";

const fadeIn = keyframes` 
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const TaskSelectorWrapper = styled.div`
  background: #ffbc0d;
  border-radius: 17px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  position: relative;
  z-index: 2;
`;

export const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 2;
  gap: 0.51rem;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
`;

export const StepBubble = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
`;
export const TaskName = styled.p`
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0px;
  color: #15151f;
  opacity: 1;
  z-index: 2;
  white-space: nowrap;
`;

export const TaskDescriptionContainer = styled.div`
  z-index: 1;
  display: block;
  height: 11rem;
  width: 100%;
  position: absolute;
  background: #ffbc0d;
  padding-top: 2rem;
  padding-bottom: 1.3rem;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  top: 60%;
  right: 0%;

  &::after {
    content: "";
    border-top: 1px solid #707070;
    width: 100%;
    position: absolute;
    top: 11%;
  }
`;

export const Description = styled.div`
  width: 100;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  font-weight: 400;
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  animation: ${fadeIn} 1s ease-in-out;

  color: #15151f;
  .bold {
    font-weight: bold;
  }

  & > p {
    padding: 0;
    margin: 0;
  }
`;
