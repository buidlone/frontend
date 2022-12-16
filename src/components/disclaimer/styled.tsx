import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const DisclaimerWrapper = styled.div`
  width: 870px;
  height: 50px;
  background-color: #ffb100;
  box-shadow: 0px 0px 3px #ffb100;
  padding: 12px 20px;
  color: white;
  border-radius: 6px;
  z-index: 200;
  position: relative;
  display: block;
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  @media screen and (${breakpoints.Device.mobile}) {
    width: 90%;
    height: auto;
    margin-top: 0px;
  }
`;
