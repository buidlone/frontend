import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const BlockWrapper = styled.div`
  background: #1f233c 0% 0% no-repeat padding-box;
  border-radius: 20px;
  height: 23.5rem;
  width: 48.8%;
  min-width: 37.563rem;
  padding: 30px;
  position: relative;
  @media screen and ${breakpoints.Device.mobile} {
    min-width: 100%;
    width: 100%;
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const FContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
  gap: 30%;
  padding-top: 22%;
  padding-bottom: 4%;

  @media screen and ${breakpoints.Device.mobile} {
    gap: 15%;
    padding-top: 0px;
    padding-bottom: 30px;
  }
`;

export const Title = styled.text`
  color: rgb(255 255 255 / 50%);
  font-size: 12px;
  font-family: "IBM Plex Sans", sans-serif;
`;

export const StyledA = styled.a`
  color: #00ffc4;
  font-family: "IBM Plex Sans", sans-serif !important;
  font-size: 11px;
  text-decoration: underline;
  text-align: center;

  @media screen and ${breakpoints.Device.mobile} {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const GreenButton = styled.button`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 200;
  width: 50%;
  height: 40px;
  color: white;
  text-align: center;
  font-size: 20px;
  transition: 9s ease-in;
  transform: translateX(0);
  cursor: pointer;
  background: transparent linear-gradient(167deg, #3aedc4 0%, #469898 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #00ffc4;
  border-radius: 12px;
  opacity: 1;
  margin-left: auto;

  &:hover {
    background: transparent linear-gradient(168deg, #3a8372 0%, #00ffc4 100%) 0%
      0% no-repeat padding-box;
  }

  @media screen and ${breakpoints.Device.mobile} {
    width: 100%;
    margin-top: 10px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and ${breakpoints.Device.mobile} {
    display: block;
  }
`;

