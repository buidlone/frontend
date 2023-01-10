import styled, { css } from "styled-components";
import breakpoints from "../../../styles/constants";

export const SwitchNetworkDisclaimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 51.25rem;
  margin: 0 auto;
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
`;

export const SwitchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.813rem;
  height: 1.875rem;
  background: transparent;
  color: white;
  border: 1px solid white;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 250ms ease-in;
  transform: translateX(0);
  font-family: "Space Grotesk", sans-serif;
  box-shadow: 0px 0px 2px #ffffff;
  border: 1px solid #ffffff;
  border-radius: 22px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    background: rgba(244, 244, 244, 0.37) 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 2px #ffffff;
    border: none;
    border-radius: 22px;
  }
`;
