import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const AboutButton = styled.button`
  border-color: transparent;
  background: none;
  white-space: wrap;
  padding: 10px 20px;
  font-size: 18px;
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  color: #c1c1c1;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:focus,
  &:hover,
  &.selected {
    color: #00c4ff;
    position: relative;
    //border-bottom: 0.2px solid #00c4ff;
  }
  &.selected::after {
    content: "";
    width: 75%;
    position: absolute;
    bottom: 0;
    left: 12%;
    color: #00c4ff;
    border-bottom: 1px solid #00c4ff;
  }

  @media screen and ${breakpoints.Device.mobile} {
    font-size: 16px;
  }
`;

export const ButtonsWrapper = styled.div`
  margin: 90px 0 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  padding-right: 2rem;
  @media screen and ${breakpoints.Device.mobile} {
    margin: 30px 0;
    gap: 1rem;
  }
`;

export const AboutSec = styled.section`
  display: flex;
  align-items: start;
  justify-content: center;
  padding-bottom: 100px;
  flex-wrap: wrap;
`;

