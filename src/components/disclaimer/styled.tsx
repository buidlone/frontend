import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const DisclaimerWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffb100;
  box-shadow: 0px 0px 3px #ffb100;
  padding: 12px 20px;
  color: white;
  border-radius: 6px;
  z-index: 200;
  max-width: 1050px;
  justify-content: center;

  position: relative;
  display: flex;
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  gap: 20px;

  p {
    margin-top: 1px;
  }

  a {
    text-decoration: underline;
  }

  @media screen and ${breakpoints.Device.mobile} {
    width: 90%;
    height: auto;
    margin-top: 0px;
    display: block;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 15px;
  @media screen and ${breakpoints.Device.mobile} {
    height: 20px;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 5px;
    justify-content: space-evenly;
  }
`;

