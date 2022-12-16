import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const MobileFooterWrapper = styled.div`
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
  height: 40px;
  padding: 8px;
  background: #00c4ff;
  color: black;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  bottom: 0;
  display: none;
  z-index: 20;
  position: sticky;

  @media screen and (${breakpoints.Device.mobile}) {
    display: block;
  }
`;
