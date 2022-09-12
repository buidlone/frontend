import styled, { css } from "styled-components";
import { ProjectHeadWrapper } from "../projectHeader/styled";

export const AssetsHeader = styled(ProjectHeadWrapper)`
  width: 100%;
  font-size: 31px;
  padding-top: 2.5rem;
  margin-bottom: 2rem;
`;

export const StateButton = styled.button`
  max-width: 9.125rem;
  width: 100%;
  height: 2rem;
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
  &:focus,
  &.selected {
    outline-style: none;
    box-shadow: none;
    background-color: #00c4ff;
    color: white;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 1.875rem 0 7rem 0;
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
  width: 100%;
`;
