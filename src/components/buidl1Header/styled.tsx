import styled from "styled-components";
import breakpoints from "../../../styles/constants";

interface Props {
  statusColor?: any;
}

export const BackgroundBlur = styled.div`
  background-image: url("/header_blur.png");
  background-size: 103% 150%;
  background-repeat: no-repeat;

  @media screen and (${breakpoints.Device.mobile}) {
    background-size: 100% 100%;
    background-image: url("/background_mobile.png");
  }
`;

export const Divider = styled.div`
  height: 1px;
  border-bottom: 1px solid #00c4ff;
`;
export const HeaderSection = styled.div`
  width: 100%;
  padding-left: 0.2%;
  padding-bottom: 0.457rem;
  height: 26.188rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: default;
  position: relative;

  color: #f0f0f0;

  .lastLine {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    padding-top: 5.5%;

    @media screen and (${breakpoints.Device.mobile}) {
      display: none;
    }
  }

  @media screen and (${breakpoints.Device.mobile}) {
    padding: 120px 15px 30px;
    height: 95vh;
  }
`;
export const HeaderLabel = styled.div`
  padding-top: 5%;
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  font-size: 52px;
  margin-bottom: 0.8rem;
  margin-left: -2.6px;

  @media screen and (${breakpoints.Device.mobile}) {
    font-size: 52px;
  }
`;
export const HeaderInfo = styled.div`
  text-align: left;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  max-width: 744px;
  margin-bottom: 1.7rem;

  @media screen and (${breakpoints.Device.mobile}) {
    font-size: 14px;
  }
`;

export const HeaderInline = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.015rem;

  @media screen and (${breakpoints.Device.mobile}) {
    display: none;
  }
`;

export const DemoButton = styled.button`
  display: none;
  width: 260px;
  height: 115px;
  background-color: #00c4ff;
  border-radius: 5px;
  color: black;
  font-size: 20px;
  padding: 4px;
  border: none;
  font-weight: 100;
  font-family: "Space Grotesk";

  @media screen and (${breakpoints.Device.mobile}) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
  }
`;

export const PersonalInfo = styled.div`
  border: 1px solid;
  border-radius: 20px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  font-size: 1.188rem;
  padding: 0.3rem 1.3rem;

  &.investment {
    border-color: #3aedc4;
    color: #3aedc4;
  }

  &.reward {
    border-color: #00c4ff;
    color: #00c4ff;
  }

  &.impact {
    border-color: #ffc400;
    color: #ffc400;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 1rem;
  }

  @media screen and (${breakpoints.Device.mobile}) {
    margin-top: 20px;
  }
`;

export const RoundSection = styled.div`
  cursor: default;
  width: 100%;
  height: 4.5rem;
  background: transparent;
  color: black;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  @media screen and (${breakpoints.Device.mobile}) {
    display: none;
  }
`;

export const RoundSectionMobile = styled(RoundSection)`
  display: none;
  @media screen and (${breakpoints.Device.mobile}) {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: flex-end;
    margin-bottom: 0px;
  }
`;

export const Round = styled.div<Props>`
  margin-left: 2rem;
  font-size: 19px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
  color: #3aedc4;
  text-align: left;
  white-space: nowrap;
  position: relative;

  &:before {
    content: "";
    background: ${(props) => props.statusColor};
    box-shadow: 0px 0px 9px ${(props) => props.statusColor};
    opacity: 1;
    border-radius: 50%;
    right: calc(100% + 0.9rem);
    top: 21%;
    width: 0.85rem;
    height: 0.85rem;
    position: absolute;
  }
`;
