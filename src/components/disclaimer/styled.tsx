import styled, { css, keyframes } from "styled-components";
import breakpoints from "../../../styles/constants";

interface Props {
  expanded?: boolean;
}

const fadeIn = keyframes` 
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const openSlowly = keyframes` 
  0% { width: 2.813rem; }
  100% { width: 100%; }
`;

export const DesktopDisclaimerContainer = styled.div`
  z-index: 11;
  position: relative;
  width: 100%;
  padding-top: 2.438rem;
`;

export const DisclaimerWrapper = styled.div<Props>`
  display: none;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0%;
  width: 0%;
  height: 2.75rem;
  color: white;
  font-size: 16px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  padding: 0.688rem 2.3rem 0.688rem 1.3rem;
  z-index: 13;
  transition: all 1s ease-in-out;

  p {
    display: block;
    margin-top: auto !important;
    margin-bottom: auto;
  }
  a {
    text-decoration: underline;
  }
  animation: ${(props) =>
    props?.expanded
      ? css`
          ${fadeIn} 1s ease-in-out;
        `
      : ""};

  ${(props) =>
    props.expanded &&
    `
    width: 100%;
    display: flex;
    opacity: 1;
  
  `}

  @media screen and ${breakpoints.Device.mobile} {
    width: 100%;
    height: auto;
    position: relative;
    background: #00c4ff 0% 0% no-repeat padding-box;
    border-radius: 22px;
    margin: 0 auto;
    display: block;
    padding: 15px 20px;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding-top: 0.2rem;

  @media screen and ${breakpoints.Device.mobile} {
    height: 20px;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 5px;
    justify-content: space-evenly;
  }
`;

export const MiddleItems = styled.div`
  justify-content: space-between;
  align-items: center;

  gap: 1.495rem;
  display: flex;
  margin: 0 auto;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    gap: 0;
  } ;
`;

export const DisclaimerBtn = styled.button`
  background: url("/close_btn.svg");
  width: 16px;
  cursor: pointer;
  background-repeat: no-repeat;
  height: 16px;
  background-size: 100%;
  border: none;
  opacity: 1;
`;

export const ExpandDisclaimer = styled.div<Props>`
  display: flex;
  position: relative;
  background: #00c4ff;
  border-radius: 22px;
  width: 2.813rem;
  cursor: pointer;
  background-repeat: no-repeat;
  height: 100%;
  min-height: 2.75rem;
  background-position: center;
  background-position-x: 17px;
  background-size: auto;
  border: none;
  opacity: 1;
  transition: width 0.8s ease-in-out;

  animation: ${(props) =>
    props?.expanded
      ? css`
          ${openSlowly} 1s ease-in-out;
        `
      : ""};

  ${(props) =>
    props.expanded &&
    `
   width: 100%;
     
  `}
`;

export const BtnImage = styled.button<Props>`
  display: inline-block;
  position: absolute;
  right: 0;
  background: url("/expand_btn.svg");
  border-radius: 22px;
  width: 2.813rem;
  z-index: 100;
  cursor: pointer;
  background-repeat: no-repeat;
  height: 2.75rem;
  background-position: center;
  border: none;
  transition: background-image 0.8s;

  ${(props) =>
    props.expanded &&
    `
    right: 0;
    background: url("/close_btn.svg");
    width: 2.813rem;
    cursor: pointer;
    background-repeat: no-repeat;
    height: 2.75rem;
    background-position: center;
  `}
`;
