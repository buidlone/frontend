import styled from "styled-components";
import breakpoints from "../../../styles/constants";

export const FooterSectionWrapper = styled.div`
  width: 100%;
  height: 33.75rem;
  background: #132744;
  padding-bottom: 6rem;
  display: flex;
  padding-left: 6rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;

  & > * {
    flex-shrink: 1;
  }

  @media screen and (max-width: 1190px) {
    padding-left: 0;
  }

  @media screen and (${breakpoints.Device.mobile}) {
    padding: 0px 20px;
  }
`;

export const FooterHeader = styled.p`
  font-family: "Roboto" sans-serif;
  font-size: 40px;
  color: #ffffff;
  opacity: 1;
  position: relative;
  margin: 1rem auto;

  &:before {
    content: "";
    background: #ffeb00 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #ffed89;
    opacity: 1;
    right: calc(100% + 1.3rem);
    top: calc(100% - 1.7rem);
    border-radius: 50%;
    width: 11px;
    height: 11px;
    position: absolute;
    @media screen and (${breakpoints.Device.mobile}) {
      right: calc(100% + 0.8rem);
      top: calc(100% - 1.3rem);
    }
  }

  @media screen and (${breakpoints.Device.mobile}) {
    font-size: 28px;
  }
`;

export const MainText = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif "Arial";
  display: inline-block;
  max-width: 41.188rem;
  line-height: 25px;
  white-space: normal;
  color: #ffffff;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: space-evenly;
  gap: 1rem;
  padding-left: 4rem;

  & > a {
    height: 1.5rem;
    width: 1.5rem;
  }
  & > a:first-child {
    margin-right: 0.5rem;
  }

  @media screen and (${breakpoints.Device.mobile}) {
    padding-left: 0px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  gap: 1.2rem;
`;

export const CommunityText = styled.p`
  font-size: 20px;
  transition: 1s;
  color: white;
`;

export const InputLine1 = styled.div`
  background-color: #c6e5fe;
  width: 28.063rem;
  height: 2.188rem;
`;

export const InputLine2 = styled.div`
  background-color: #c6e5fe;
  width: 9.188rem;
  height: 2.188rem;
  margin-right: 13rem;
`;

export const ContactsLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 2rem;
  width: 100%;

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    ${InputLine2} {
      margin-right: 0rem;
    }

    & > ${LogoWrapper} {
      order: 2;
      padding-right: 0;
    }
  }
`;
