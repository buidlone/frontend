import styled, { css } from "styled-components";
import { BlockWrapper } from "../fundingBlock/styled";
import breakpoints from "../../../styles/constants";
import Image from "next/image";

interface Props {
  statusColor?: any;
}

export const FeaturedProjectsBlockWrapper = styled(BlockWrapper)`
  height: 29.125rem;
  width: 35%;
  padding: 1.1rem;
  background: rgba(34, 34, 53, 1) 0% 0% no-repeat padding-box;
  opacity: 0.85;
  margin-bottom: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and ${breakpoints.Device.mobile} {
    min-width: 200px;
    width: 100%;
    padding: 0rem;
    gap: 0rem;
    height: 360px;
    margin-bottom: 50px;
  }
`;
export const StateBubble = styled.div<Props>`
  background: ${(props) => props.statusColor};
  box-shadow: 0px 0px 9px ${(props) => props.statusColor};
  opacity: 1;
  border-radius: 50%;
  width: 0.938rem;
  height: 0.938rem;
`;

export const FeaturedProjectLogo = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  background-color: #13131d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 196, 255, 0.85);
  font-size: 26px;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 500;

  @media screen and ${breakpoints.Device.mobile} {
    height: 37px;
    width: 37px;
    padding: 9px;
  }
`;

export const FeaturedProjectLogoInner = styled(Image)`
  height: 32px;
  width: 32px;
`;

export const FeaturedProjectHeader = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  gap: 1.375rem;

  & > ${StateBubble} {
    margin-left: auto;
    margin-top: 1%;
    margin-right: 1%;
    align-self: flex-start;
  }

  @media screen and ${breakpoints.Device.mobile} {
    padding: 1.1rem;
  }
`;

export const FeaturedProjectName = styled.div`
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
  font-family: "space Grotesk", sans-serif;
  font-weight: 400;

  @media screen and ${breakpoints.Device.mobile} {
    font-size: 18px;
  }
`;

