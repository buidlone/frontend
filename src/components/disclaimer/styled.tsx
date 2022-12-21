import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const DisclaimerWrapper = styled.div`
  width: 100%;
  height: auto;

  background-color: #ffb100;
  box-shadow: 0px 0px 3px #ffb100;
  padding: 10px 10px;
  color: white;
  border-radius: 6px;
  z-index: 200;
  max-width: 1050px;
  justify-content: center;
  align-items: center;

  position: relative;
  display: flex;
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  gap: 20px;

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
    margin-top: 0px;
    display: block;
    padding: 15px 20px;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  @media screen and ${breakpoints.Device.mobile} {
    height: 20px;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 5px;
    justify-content: space-evenly;
  }
`;

