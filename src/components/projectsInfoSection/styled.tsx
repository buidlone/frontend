import styled, { css } from "styled-components";
import breakpoints from "../../../styles/constants";

export const InfoSec = styled.section`
  display: flex;
  align-items: start;
  padding-top: 5rem;
  justify-content: flex-start;
  padding-bottom: 8rem;
  flex-wrap: wrap;

  flex-direction: column;
  width: 100%;
  gap: 0.65rem;

  @media screen and ${breakpoints.Device.mobile} {
    padding-top: 9rem;
  }

  .hideOnMobile {
    @media screen and ${breakpoints.Device.mobile} {
      display: none;
    }
  }

  .hideOnDesktop {
    display: none;
    @media screen and ${breakpoints.Device.mobile} {
      display: flex;
    }
  }
`;

export const TopText = styled.div`
  width: 50%;
  font-size: 61px;
  color: rgba(255, 255, 255, 1);
  opacity: 0.85;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;

  @media screen and ${breakpoints.Device.mobile} {
    font-size: 32px;
    width: 100%;
    padding: 0px 20px;
  }
`;

export const BottomText = styled.div`
  margin-top: 1.3rem;
  margin-left: 1.4rem;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: rgba(0, 196, 255, 0.85);
  text-align: left;
  white-space: nowrap;
  position: relative;
  text-decoration: none;

  &:before {
    content: "";
    background: #ffc400 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #ffed89;
    opacity: 1;
    border-radius: 50%;
    right: calc(100% + 0.4rem);
    top: 21%;
    width: 0.85rem;
    height: 0.85rem;
    position: absolute;
  }

  @media screen and ${breakpoints.Device.mobile} {
    font-size: 14px;
    white-space: pre-wrap;
    margin-left: 2.5rem;
    opacity: 0.8;
  }
`;

export const Line = styled.div`
  width: 57%;
  height: 1px;
  border-bottom: 1px solid #00c4ff;

  @media screen and ${breakpoints.Device.mobile} {
    display: none;
  }
`;
