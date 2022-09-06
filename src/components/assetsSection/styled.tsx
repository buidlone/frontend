import styled, { css } from "styled-components";
import { ProjectHeadWrapper } from "../projectHeader/styled";

export const AssetsHeader = styled(ProjectHeadWrapper)`
  width: 100%;
  font-size: 31px;
  padding-top: 2.5rem;
`;

export const StateButton = styled.button`
  width: 146px;
  height: 32px;
  border-radius: 16px;
  background: #2e314d;
  color: #ffffff;
  border: none;
  text-align: center;
  font-size: 17px;
  cursor: pointer;
  transition: 250ms ease-in;
  transform: translateX(0);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  z-index: 4;

  &:hover,
  &:focus {
    background-color: #00c4ff;
    color: white;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 30px 0 30px 0;
  width: 100%;
  display: flex;
  align-items: start;
  gap: 1rem;
  padding-right: 2rem;
`;

export const AboutSec = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  padding-bottom: 100px;
  flex-wrap: wrap;
`;
