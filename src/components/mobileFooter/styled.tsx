import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const MobileFooterWrapper = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px;
  background: #00c4ff;
  color: black;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  display: none;

  @media screen and ${breakpoints.Device.mobile} {
    display: block;
  }
`;

