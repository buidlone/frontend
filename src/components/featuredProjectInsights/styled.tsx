import styled, { css } from "styled-components";
import breakpoints from "../../../styles/constants";

export const NumbersInsights = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6%;
`;
export const NumbersSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;

  .names {
    color: rgba(240, 240, 240, 0.5);
    font-size: 14px;

    @media screen and ${breakpoints.Device.mobile} {
      font-size: 12px;
    }
  }
  .numbers {
    color: rgba(240, 240, 240, 1);
    font-size: 22px;
    @media screen and ${breakpoints.Device.mobile} {
      font-size: 14px;
    }
  }
`;

export const DescriptionSection = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 14px;
  text-align: left;

  &.newProject {
    font-size: 26px;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }

  @media screen and ${breakpoints.Device.mobile} {
    color: rgba(255, 255, 255, 1);
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 300;
  width: 30%;
  height: 40px;
  color: #00c4ff;
  font-size: 20px;

  cursor: pointer;
  background: #2e314d;
  border: 1px solid #00c4ff;
  border-radius: 12px;
  opacity: 1;
  margin-left: auto;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 1) !important;
    color: rgba(255, 255, 255, 1) !important;
  }

  @media screen and ${breakpoints.Device.mobile} {
    width: 120px;
    height: 35px;
    font-size: 16px;
  }
`;

export const ProjectInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2e314d;
  border-radius: 20px;
  height: 80%;
  width: 100%;
  padding: 1.4rem 1.5rem;
  justify-content: space-between;

  & > ${DescriptionSection}.newProject {
    margin: auto;
  }
`;

export const WhitepaperLink = styled.a`
  text-align: left;
  text-decoration: underline;

  cursor: pointer;

  color: rgba(255, 255, 255, 0.5);
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 14px;
`;

