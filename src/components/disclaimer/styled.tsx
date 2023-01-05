import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const DesktopDisclaimerContainer = styled.div`
  z-index: 11;
  position: relative;
  width: 100%;
  padding-top: 2.438rem;
`;

export const DisclaimerWrapper = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 2.75rem;
  background: #00c4ff 0% 0% no-repeat padding-box;
  border-radius: 22px;
  color: white;
  font-size: 16px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;
  padding: 0.688rem 1.3rem;
  gap: 1rem;

  z-index: 13;

  p {
    display: block;
    margin-top: auto !important;
    margin-bottom: auto;
  }

  a {
    text-decoration: underline;
  }

  @media screen and ${breakpoints.Device.mobile} {
    width: 90%;
    height: auto;

    margin: 0 auto;
    display: block;
    padding: 15px 20px;
  }
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
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

export const ExpandDisclaimerBtn = styled.button`
  background: #00c4ff url("/expand_btn.svg");
  //padding-right: 1.483rem;
  border-radius: 22px;
  width: 2.813rem;
  cursor: pointer;
  background-repeat: no-repeat;
  height: 2.75rem;
  background-position: center;
  background-position-x: 17px;
  background-size: auto;
  border: none;
  opacity: 1;
`;
